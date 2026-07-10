import { NextResponse } from "next/server";
import type { BookingData } from "@/lib/booking/types";
import { validateBookingDetails } from "@/lib/booking/validation";
import { appendBookingToSheet } from "@/lib/google-sheets";
import { generateBookingPdf } from "@/lib/pdf";
import { sendBookingPdfToWhatsApp } from "@/lib/whatsapp";

function validateBooking(body: Partial<BookingData>) {
  if (!body.serviceTitle?.trim()) {
    return "Service selection is required";
  }

  const { valid, message } = validateBookingDetails({
    fullName: body.fullName,
    mobile: body.mobile,
    address: body.address,
    email: body.email,
  });

  if (!valid) {
    return message || "Invalid booking details";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const booking = (await request.json()) as BookingData;
    const validationError = validateBooking(booking);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const bookingId = `ME-${Date.now().toString(36).toUpperCase()}`;

    // 1) Save to Google Sheets
    let sheetSaved = false;
    let sheetError: string | null = null;
    try {
      await appendBookingToSheet(booking, bookingId);
      sheetSaved = true;
    } catch (err) {
      sheetError = err instanceof Error ? err.message : "Google Sheets failed";
      console.error("[booking] sheets error:", sheetError);
    }

    // 2) Generate PDF
    const pdfBuffer = await generateBookingPdf(booking, bookingId);

    // 3) Send PDF on WhatsApp
    let whatsappSent = false;
    let whatsappError: string | null = null;
    try {
      await sendBookingPdfToWhatsApp(
        booking.mobile,
        pdfBuffer,
        bookingId,
        booking.fullName
      );
      whatsappSent = true;
    } catch (err) {
      whatsappError =
        err instanceof Error ? err.message : "WhatsApp send failed";
      console.error("[booking] whatsapp error:", whatsappError);
    }

    // If both integrations failed, still return PDF so UI can download
    if (!sheetSaved && !whatsappSent) {
      return NextResponse.json(
        {
          error: "Booking saved locally only. Integrations failed.",
          bookingId,
          sheetError,
          whatsappError,
          pdfBase64: pdfBuffer.toString("base64"),
        },
        { status: 207 }
      );
    }

    return NextResponse.json({
      success: true,
      bookingId,
      sheetSaved,
      whatsappSent,
      sheetError,
      whatsappError,
      pdfBase64: pdfBuffer.toString("base64"),
    });
  } catch (err) {
    console.error("[booking] unexpected error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unexpected error" },
      { status: 500 }
    );
  }
}
