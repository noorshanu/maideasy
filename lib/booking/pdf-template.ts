import { readFile } from "fs/promises";
import path from "path";
import type { BookingData } from "./types";
import { formatDailyHours } from "./types";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  if (!value || value.trim() === "" || value === "-") return "";
  return `
    <div class="row">
      <div class="label">${escapeHtml(label)}</div>
      <div class="value">${escapeHtml(value)}</div>
    </div>
  `;
}

function section(title: string, rowsHtml: string) {
  if (!rowsHtml.trim()) return "";
  return `
    <section class="card">
      <div class="card-header">${escapeHtml(title)}</div>
      <div class="card-body">${rowsHtml}</div>
    </section>
  `;
}

export async function buildBookingHtml(booking: BookingData, bookingId: string) {
  const logoPath = path.join(process.cwd(), "public", "logo.png");
  const logoBuffer = await readFile(logoPath);
  const logoDataUri = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  const generatedAt = new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const serviceRows = [
    row("Service", booking.serviceTitle),
    row("Description", booking.serviceDescription),
    row("No. of Helpers", String(booking.helperCount)),
    row("Duration Type", booking.durationType),
    row("Daily Hours", formatDailyHours(booking.dailyHours)),
    row("Working Days", booking.workingDays.join(", ")),
    row("Flexible with Days", booking.flexibleDays ? "Yes" : "No"),
    row("Time Slot", `${booking.startTime} - ${booking.endTime}`),
    row("Monthly Basis", booking.monthlyBasis),
  ].join("");

  const customerRows = [
    row("Full Name", booking.fullName),
    row("Mobile", booking.mobile),
    row("Email", booking.email || "Not provided"),
    row("Address", booking.address),
    row("Pincode", booking.pincode || "Not provided"),
  ].join("");

  const homeRows = [
    row("Type of Home", booking.homeType || "Not specified"),
    row("Family Members", booking.members || "Not specified"),
    row("Kids at Home", booking.hasKids || "Not specified"),
    row("Pets at Home", booking.hasPets || "Not specified"),
    row("Additional Notes", booking.notes || "None"),
  ].join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>MaidEazy Booking ${escapeHtml(bookingId)}</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Lora:wght@500;600;700&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'DM Sans', Arial, sans-serif;
      color: #2f2f2f;
      background: #FCF9F9;
      padding: 0;
    }
    .page {
      width: 794px;
      min-height: 1123px;
      margin: 0 auto;
      background: #FCF9F9;
    }
    .header {
      background: linear-gradient(135deg, #4A2B4D 0%, #5A355D 100%);
      color: white;
      padding: 28px 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .brand img {
      width: 64px;
      height: 64px;
      object-fit: contain;
      background: white;
      border-radius: 50%;
      padding: 6px;
    }
    .brand h1 {
      font-family: 'Lora', Georgia, serif;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }
    .brand p {
      font-size: 12px;
      color: #F4E8E8;
    }
    .badge {
      background: white;
      color: #4A2B4D;
      border-radius: 12px;
      padding: 14px 18px;
      min-width: 180px;
      border: 1px solid #E2CACA;
    }
    .badge .id-label {
      font-size: 10px;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 4px;
    }
    .badge .id-value {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .badge .date {
      font-size: 10px;
      color: #B87B7C;
    }
    .content {
      padding: 28px 36px 36px;
    }
    .intro h2 {
      font-family: 'Lora', Georgia, serif;
      font-size: 24px;
      color: #4A2B4D;
      margin-bottom: 8px;
    }
    .intro p {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .card {
      background: white;
      border: 1px solid #ece7e7;
      border-radius: 14px;
      overflow: hidden;
      margin-bottom: 18px;
      box-shadow: 0 4px 18px rgba(74, 43, 77, 0.05);
    }
    .card-header {
      background: #F4E8E8;
      color: #4A2B4D;
      font-weight: 700;
      font-size: 13px;
      padding: 12px 18px;
      border-bottom: 1px solid #ece7e7;
    }
    .card-body {
      padding: 8px 0;
    }
    .row {
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 12px;
      padding: 10px 18px;
      border-bottom: 1px solid #f3f3f3;
    }
    .row:last-child { border-bottom: none; }
    .label {
      font-size: 11px;
      font-weight: 700;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .value {
      font-size: 13px;
      color: #2f2f2f;
      line-height: 1.5;
      word-break: break-word;
    }
    .trust-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      background: #F4E8E8;
      border: 1px solid #E2CACA;
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 18px;
    }
    .trust-item {
      font-size: 10px;
      font-weight: 700;
      color: #4A2B4D;
      text-align: center;
      line-height: 1.4;
    }
    .trust-item span {
      display: block;
      color: #B87B7C;
      font-size: 14px;
      margin-bottom: 4px;
    }
    .next-box {
      background: #F0FDF4;
      border: 1px solid #DCFCE7;
      border-radius: 12px;
      padding: 16px 18px;
      margin-bottom: 24px;
    }
    .next-box h3 {
      color: #166534;
      font-size: 13px;
      margin-bottom: 6px;
    }
    .next-box p {
      font-size: 12px;
      color: #374151;
      line-height: 1.5;
    }
    .footer {
      border-top: 1px solid #ece7e7;
      padding-top: 14px;
      text-align: center;
      font-size: 10px;
      color: #888;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="header">
      <div class="brand">
        <img src="${logoDataUri}" alt="MaidEazy Logo" />
        <div>
          <h1>MAIDEAZY</h1>
          <p>Bringing Trust Home</p>
        </div>
      </div>
      <div class="badge">
        <div class="id-label">Booking ID</div>
        <div class="id-value">${escapeHtml(bookingId)}</div>
        <div class="date">${escapeHtml(generatedAt)}</div>
      </div>
    </div>

    <div class="content">
      <div class="intro">
        <h2>Booking Confirmation</h2>
        <p>Thank you for choosing MaidEazy. Your request has been received and our team will contact you shortly to match the right helper for your home.</p>
      </div>

      ${section("Service Details", serviceRows)}
      ${section("Customer Details", customerRows)}
      ${section("Home Details", homeRows)}

      <div class="trust-strip">
        <div class="trust-item"><span>•</span>Verified Helpers</div>
        <div class="trust-item"><span>•</span>Replacement Guarantee</div>
        <div class="trust-item"><span>•</span>24/7 Support</div>
        <div class="trust-item"><span>•</span>Safe & Hassle-Free</div>
      </div>

      <div class="next-box">
        <h3>What happens next?</h3>
        <p>Our team will review your request and call you within 24 hours to confirm helper availability and finalize your booking.</p>
      </div>

      <div class="footer">
        MaidEazy | +91 9061 222 123 | hello@maideazy.in | Kochi, Kerala, India<br />
        © ${new Date().getFullYear()} MaidEazy. All Rights Reserved.
      </div>
    </div>
  </div>
</body>
</html>`;
}
