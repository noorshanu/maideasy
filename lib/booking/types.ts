export type BookingData = {
  // Step 1
  serviceId: string;
  serviceTitle: string;
  serviceDescription: string;
  helperCount: number;

  // Step 2
  durationType: "Part Time" | "Full Time";
  dailyHours: number | "custom";
  workingDays: string[];
  flexibleDays: boolean;
  startTime: string;
  endTime: string;
  monthlyBasis: string;

  // Step 3
  fullName: string;
  mobile: string;
  email: string;
  address: string;
  pincode: string;
  homeType: string;
  members: string;
  hasKids: string;
  hasPets: string;
  notes: string;
};

export const initialBookingData: BookingData = {
  serviceId: "housekeeping",
  serviceTitle: "Housekeeping",
  serviceDescription: "Cleaning, sweeping, mopping, dusting & more",
  helperCount: 1,
  durationType: "Part Time",
  dailyHours: 4,
  workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  flexibleDays: false,
  startTime: "09:00 AM",
  endTime: "01:00 PM",
  monthlyBasis: "26 Days / Month (6 days a week)",
  fullName: "",
  mobile: "",
  email: "",
  address: "",
  pincode: "",
  homeType: "",
  members: "",
  hasKids: "",
  hasPets: "",
  notes: "",
};

export function formatDailyHours(hours: number | "custom") {
  return hours === "custom" ? "Custom Hours" : `${hours} Hours / Day`;
}
