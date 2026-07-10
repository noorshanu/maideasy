"use client";

import { FaBroom } from "react-icons/fa";
import { FiClock, FiCalendar, FiUsers, FiMapPin, FiCheck, FiPhoneCall } from "react-icons/fi";
import { LuCalendarClock } from "react-icons/lu";

export default function BookingSummary() {
  return (
    <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-6">
      {/* Summary Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">Booking Summary</h3>

        {/* Selected Service */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
            <FaBroom className="text-xl" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Maid Services</h4>
            <p className="text-gray-500 text-xs mt-1">Full-time or part-time housekeeping services</p>
          </div>
        </div>

        {/* Details List */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FiClock className="text-gray-400 text-lg mt-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-900">Working Hours</p>
              <p className="text-xs text-gray-500 mt-0.5">Not selected</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <LuCalendarClock className="text-gray-400 text-lg mt-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-900">Duration</p>
              <p className="text-xs text-gray-500 mt-0.5">Not selected</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiUsers className="text-gray-400 text-lg mt-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-900">No. of Helpers</p>
              <p className="text-xs text-gray-500 mt-0.5">Not selected</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiCalendar className="text-gray-400 text-lg mt-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-900">Start Date</p>
              <p className="text-xs text-gray-500 mt-0.5">Not selected</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiMapPin className="text-gray-400 text-lg mt-0.5" />
            <div>
              <p className="text-xs font-bold text-gray-900">Address</p>
              <p className="text-xs text-gray-500 mt-0.5">Not added</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Book with Us Box */}
      <div className="bg-background rounded-2xl p-6 border border-accent">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-[#D48B8B] flex items-center justify-center text-white">
            <FiCheck className="text-sm" />
          </div>
          <h4 className="font-bold text-gray-900 text-sm">Why Book with MaidEazy?</h4>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-xs text-gray-700">
            <FiCheck className="text-[#D48B8B] mt-0.5 shrink-0" />
            <span>Verified & Background Checked Professionals</span>
          </li>
          <li className="flex items-start gap-2 text-xs text-gray-700">
            <FiCheck className="text-[#D48B8B] mt-0.5 shrink-0" />
            <span>Replacement Guarantee</span>
          </li>
          <li className="flex items-start gap-2 text-xs text-gray-700">
            <FiCheck className="text-[#D48B8B] mt-0.5 shrink-0" />
            <span>24/7 Customer Support</span>
          </li>
          <li className="flex items-start gap-2 text-xs text-gray-700">
            <FiCheck className="text-[#D48B8B] mt-0.5 shrink-0" />
            <span>Safe, Reliable & Hassle-Free</span>
          </li>
        </ul>
      </div>

      {/* Need Help Box */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
          <FiPhoneCall className="text-lg" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Need help booking?</p>
          <p className="text-sm font-bold text-gray-900 mt-0.5">Call us at +91 9061 222 123</p>
        </div>
      </div>
    </div>
  );
}
