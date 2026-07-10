"use client";

import { FiCheck, FiArrowRight, FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { useBooking } from "@/lib/booking/context";
import { formatDailyHours } from "@/lib/booking/types";

export default function ChooseDuration() {
  const { booking, updateBooking, setCurrentStep } = useBooking();

  const toggleDay = (day: string) => {
    const days = booking.workingDays.includes(day)
      ? booking.workingDays.filter((d) => d !== day)
      : [...booking.workingDays, day];
    updateBooking({ workingDays: days });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 flex items-center gap-3">
        <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">
          Part Time Booking Details
        </h2>
        <div className="bg-accent text-primary text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
          <span className="w-3 h-3 rounded-full border border-primary flex items-center justify-center">
            <span className="w-1 h-1 bg-primary rounded-full"></span>
          </span>
          Part Time Selected
        </div>
      </div>
      <p className="text-gray-500 text-sm mb-8">
        Let us know more about your requirements so we can match the best helper for you.
      </p>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 rounded-full bg-[#B87B7C] text-white flex items-center justify-center text-xs font-bold shrink-0">
            1
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Daily Working Hours</h3>
            <p className="text-gray-500 text-xs">Select the number of hours you need help each day.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pl-9">
          {[4, 5, 6].map((h) => (
            <button
              type="button"
              key={h}
              onClick={() => updateBooking({ dailyHours: h })}
              className={`relative rounded-lg border p-3 text-center cursor-pointer transition-all ${
                booking.dailyHours === h
                  ? "border-primary bg-white shadow-sm"
                  : "border-gray-200 bg-white hover:border-primary/30"
              }`}
            >
              {booking.dailyHours === h && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white">
                  <FiCheck className="text-[10px]" />
                </div>
              )}
              <p className="font-bold text-gray-900 text-sm">{h} Hours / Day</p>
              {h === 4 && <p className="text-[#D48B8B] text-[10px] mt-0.5">Recommended</p>}
            </button>
          ))}
          <button
            type="button"
            onClick={() => updateBooking({ dailyHours: "custom" })}
            className={`rounded-lg border p-3 text-center cursor-pointer transition-all ${
              booking.dailyHours === "custom"
                ? "border-primary bg-white shadow-sm"
                : "border-gray-200 bg-white hover:border-primary/30"
            }`}
          >
            <p className="font-bold text-gray-900 text-sm">Custom Hours</p>
            <p className="text-gray-500 text-[10px] mt-0.5">Choose your own</p>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 rounded-full bg-[#B87B7C] text-white flex items-center justify-center text-xs font-bold shrink-0">
            2
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Preferred Working Days</h3>
            <p className="text-gray-500 text-xs">Select the days you need help.</p>
          </div>
        </div>

        <div className="pl-9">
          <div className="flex flex-wrap gap-2 mb-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => {
              const isSelected = booking.workingDays.includes(day);
              return (
                <button
                  type="button"
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 cursor-pointer transition-all ${
                    isSelected
                      ? "border-primary bg-white"
                      : "border-gray-200 bg-white hover:border-primary/30"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      isSelected ? "bg-primary text-white" : "border border-gray-300"
                    }`}
                  >
                    {isSelected && <FiCheck className="text-[10px]" />}
                  </div>
                  <span
                    className={`text-sm ${
                      isSelected ? "font-bold text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {day}
                  </span>
                </button>
              );
            })}
          </div>

          <label className="flex items-start gap-2 cursor-pointer group">
            <div className="mt-0.5 relative flex items-center justify-center w-4 h-4 border border-gray-300 rounded bg-white group-hover:border-primary transition-colors">
              <input
                type="checkbox"
                checked={booking.flexibleDays}
                onChange={(e) => updateBooking({ flexibleDays: e.target.checked })}
                className="opacity-0 absolute inset-0 cursor-pointer"
              />
              {booking.flexibleDays && <FiCheck className="text-primary text-xs" />}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Flexible with days</p>
              <p className="text-xs text-gray-500">
                I&apos;m okay if the helper needs to change days occasionally
              </p>
            </div>
          </label>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 rounded-full bg-[#B87B7C] text-white flex items-center justify-center text-xs font-bold shrink-0">
            3
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Preferred Time Slot</h3>
            <p className="text-gray-500 text-xs">Select the time range you need help.</p>
          </div>
        </div>

        <div className="pl-9 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Start Time</label>
            <div className="relative">
              <select
                value={booking.startTime}
                onChange={(e) => updateBooking({ startTime: e.target.value })}
                className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pl-9"
              >
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
              </select>
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                <FiClock className="text-sm" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">End Time</label>
            <div className="relative">
              <select
                value={booking.endTime}
                onChange={(e) => updateBooking({ endTime: e.target.value })}
                className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pl-9"
              >
                <option>01:00 PM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
              </select>
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                <FiClock className="text-sm" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Total Duration</label>
            <div className="bg-accent rounded-lg px-3 py-2.5 text-sm font-bold text-primary text-center">
              {formatDailyHours(booking.dailyHours).replace(" / Day", "")}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 rounded-full bg-[#B87B7C] text-white flex items-center justify-center text-xs font-bold shrink-0">
            4
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Monthly Basis</h3>
            <p className="text-gray-500 text-xs">How many days in a month do you need this help?</p>
          </div>
        </div>

        <div className="pl-9">
          <div className="relative max-w-sm">
            <select
              value={booking.monthlyBasis}
              onChange={(e) => updateBooking({ monthlyBasis: e.target.value })}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pl-9"
            >
              <option>26 Days / Month (6 days a week)</option>
              <option>22 Days / Month (5 days a week)</option>
              <option>30 Days / Month (7 days a week)</option>
            </select>
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
              <FiCalendar className="text-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-gray-100 pt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className="bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-gray-50 transition-colors"
        >
          <FiArrowLeft className="text-lg" /> BACK
        </button>
        <button
          type="button"
          onClick={() => setCurrentStep(3)}
          className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-primary-light transition-colors"
        >
          CONTINUE <FiArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
}
