"use client";

import {
  FiCheckCircle,
  FiRefreshCw,
  FiHeadphones,
  FiShield,
  FiPhoneCall,
  FiClock,
  FiUser,
} from "react-icons/fi";
import { FaBroom } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { useBooking } from "@/lib/booking/context";
import { formatDailyHours } from "@/lib/booking/types";

export default function BookingSummary() {
  const { booking, currentStep, setCurrentStep } = useBooking();

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-serif text-xl font-bold text-primary mb-1">Booking Summary</h3>
          {currentStep > 1 && (
            <p className="text-gray-500 text-sm">
              Complete the details to see your matched helpers and pricing.
            </p>
          )}
        </div>
        {currentStep > 1 && (
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className="text-primary text-sm font-bold hover:underline"
          >
            Edit
          </button>
        )}
      </div>

      {currentStep === 1 ? (
        <div className="flex justify-center mb-8 relative py-4">
          <div className="relative w-24 h-28 bg-white border-2 border-[#D48B8B] rounded-lg shadow-sm flex flex-col items-center pt-6">
            <div className="absolute -top-3 w-12 h-6 bg-white border-2 border-[#D48B8B] rounded-md z-10 flex items-center justify-center">
              <div className="w-4 h-1.5 bg-[#D48B8B] rounded-full"></div>
            </div>
            <div className="w-full px-3 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-[#D48B8B] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#D48B8B] rounded-full"></div>
                </div>
                <div className="h-1 bg-gray-200 rounded-full w-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-[#D48B8B] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#D48B8B] rounded-full"></div>
                </div>
                <div className="h-1 bg-gray-200 rounded-full w-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-[#D48B8B]"></div>
                <div className="h-1 bg-gray-200 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6 mb-8">
          <div className="flex items-start justify-between border-b border-gray-100 pb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
                <FaBroom className="text-lg" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Service</p>
                <h4 className="font-bold text-gray-900 text-sm mt-0.5">{booking.serviceTitle}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{booking.serviceDescription}</p>
                <p className="text-xs text-gray-500 mt-0.5">{booking.helperCount} helper(s)</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="text-primary text-xs font-bold hover:underline"
            >
              Edit
            </button>
          </div>

          <div className="flex items-start justify-between border-b border-gray-100 pb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-[#D48B8B] shrink-0">
                <LuSun className="text-lg" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Duration Type</p>
                <h4 className="font-bold text-gray-900 text-sm mt-0.5">{booking.durationType}</h4>
                {currentStep > 2 && (
                  <p className="text-xs text-gray-500 mt-0.5">
                    {formatDailyHours(booking.dailyHours)}
                  </p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="text-primary text-xs font-bold hover:underline"
            >
              Edit
            </button>
          </div>

          {currentStep > 2 && (
            <>
              <div className="flex items-start justify-between border-b border-gray-100 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
                    <FiClock className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Daily Details</p>
                    <h4 className="text-xs text-gray-500 mt-0.5">
                      {formatDailyHours(booking.dailyHours)}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {booking.startTime} - {booking.endTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {booking.workingDays.join(", ")}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{booking.monthlyBasis}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-primary text-xs font-bold hover:underline"
                >
                  Edit
                </button>
              </div>

              <div className="flex items-start justify-between border-b border-gray-100 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-[#D48B8B] shrink-0">
                    <FiUser className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Monthly Basis</p>
                    <h4 className="text-xs text-gray-500 mt-0.5">{booking.monthlyBasis}</h4>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <div className="space-y-5 mb-8">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[#D48B8B] shrink-0">
            <FiCheckCircle className="text-lg" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">Verified & Background Checked</h4>
            <p className="text-xs text-gray-500 mt-0.5">All helpers are verified & trained</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[#D48B8B] shrink-0">
            <FiRefreshCw className="text-lg" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">Replacement Guarantee</h4>
            <p className="text-xs text-gray-500 mt-0.5">Get free replacement if not satisfied</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[#D48B8B] shrink-0">
            <FiHeadphones className="text-lg" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">24/7 Customer Support</h4>
            <p className="text-xs text-gray-500 mt-0.5">We&apos;re here to help, anytime</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[#D48B8B] shrink-0">
            <FiShield className="text-lg" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">Secure & Hassle Free</h4>
            <p className="text-xs text-gray-500 mt-0.5">
              Your security and satisfaction is our priority
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
          <FiPhoneCall className="text-lg" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Need Help?</p>
          <p className="text-sm font-bold text-gray-900 mt-0.5">Call us at +91 9778 527 419</p>
        </div>
      </div>
    </div>
  );
}
