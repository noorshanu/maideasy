import { google } from "googleapis";
import type { BookingData } from "./booking/types";
import { formatDailyHours } from "./booking/types";

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !privateKey || !sheetId) {
    throw new Error(
      "Missing Google Sheets env vars: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID"
    );
  }

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return { auth, sheetId };
}

export async function appendBookingToSheet(booking: BookingData, bookingId: string) {
  const { auth, sheetId } = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const range = process.env.GOOGLE_SHEET_RANGE || "Bookings!A:Z";

  const row = [
    new Date().toISOString(),
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

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}
