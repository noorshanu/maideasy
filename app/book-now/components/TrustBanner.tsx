"use client";

import { FiCheckCircle, FiRefreshCw, FiHeadphones, FiShield } from "react-icons/fi";

export default function TrustBanner() {
  return (
    <div className="bg-[#FAF5F5] rounded-xl p-4 md:p-6 flex flex-col lg:flex-row items-center justify-between gap-6 border border-accent">
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10">
        
        {/* Item 1 */}
        <div className="flex items-center gap-3">
          <FiCheckCircle className="text-2xl text-[#D48B8B]" />
          <span className="text-sm font-bold text-gray-800 leading-tight">Verified &<br/>Background Checked</span>
        </div>
        
        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-gray-300"></div>
        
        {/* Item 2 */}
        <div className="flex items-center gap-3">
          <FiRefreshCw className="text-2xl text-[#D48B8B]" />
          <span className="text-sm font-bold text-gray-800 leading-tight">Replacement<br/>Guarantee</span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-gray-300"></div>

        {/* Item 3 */}
        <div className="flex items-center gap-3">
          <FiHeadphones className="text-2xl text-[#D48B8B]" />
          <span className="text-sm font-bold text-gray-800 leading-tight">24/7<br/>Customer Support</span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-gray-300"></div>

        {/* Item 4 */}
        <div className="flex items-center gap-3">
          <FiShield className="text-2xl text-[#D48B8B]" />
          <span className="text-sm font-bold text-gray-800 leading-tight">Safe, Reliable &<br/>Hassle-Free</span>
        </div>

      </div>

      {/* Contact CTA */}
      <div className="bg-accent rounded-lg p-3 px-5 flex items-center gap-4 w-full lg:w-auto justify-center shrink-0">
        <FiHeadphones className="text-primary text-2xl" />
        <div>
          <p className="text-sm font-bold text-primary">Still have questions?</p>
          <p className="text-xs text-gray-600">Chat with our support team</p>
        </div>
      </div>
    </div>
  );
}
