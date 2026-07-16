import type { BookingData } from "./booking/types";
import { formatDailyHours } from "./booking/types";

export async function appendBookingToSheet(booking: BookingData, bookingId: string) {
  const webhookUrl = process.env.NEXT_PUBLIC_GSHEET_WEBHOOK;
  
  if (!webhookUrl) {
    throw new Error("NEXT_PUBLIC_GSHEET_WEBHOOK is not defined in .env");
  }

  // Re-create the full 21-column row format
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  
  const rowArray = [
    timestamp,
    bookingId,
    booking.fullName,
    booking.mobile,
    booking.email,
    booking.address,
    booking.pincode,
    booking.serviceTitle,
    booking.helperCount,
    booking.durationType,
    formatDailyHours(booking.dailyHours),
    booking.workingDays.join(", "),
    booking.flexibleDays ? "Yes" : "No",
    booking.startTime,
    booking.endTime,
    booking.monthlyBasis,
    booking.homeType,
    booking.members,
    booking.hasKids,
    booking.hasPets,
    booking.notes,
  ];

  const payload = {
    ...booking,
    formType: "booking",
    bookingId: bookingId,
    rowArray: rowArray, // Send the pre-formatted array so the webhook can just drop it in
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook responded with status: ${response.status}`);
  }
}
