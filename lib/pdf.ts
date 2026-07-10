import puppeteer from "puppeteer";
import type { BookingData } from "./booking/types";
import { buildBookingHtml } from "./booking/pdf-template";

export async function generateBookingPdf(
  booking: BookingData,
  bookingId: string
): Promise<Buffer> {
  const html = await buildBookingHtml(booking, bookingId);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    return Buffer.from(pdf);
  } finally {
    await browser.close();
  }
}
