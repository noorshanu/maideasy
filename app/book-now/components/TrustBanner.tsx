"use client";

import { FiShield, FiRefreshCw } from "react-icons/fi";

export default function TrustBanner() {
  return (
    <div className="border-t border-gray-100 bg-white py-8 mt-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-32">
          
          {/* Trust Item 1 */}
          <div className="flex items-center gap-4 max-w-sm">
            <div className="w-14 h-14 rounded-full bg-background border border-accent flex items-center justify-center text-[#D48B8B] shrink-0">
              <FiShield className="text-2xl" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Safe • Verified • Reliable</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                All our professionals are background verified, trained and committed to your satisfaction.
              </p>
            </div>
          </div>

          {/* Divider on Desktop */}
          <div className="hidden md:block w-px h-16 bg-gray-200"></div>

          {/* Trust Item 2 */}
          <div className="flex items-center gap-4 max-w-sm">
            <div className="w-14 h-14 rounded-full bg-background border border-accent flex items-center justify-center text-[#D48B8B] shrink-0">
              <FiRefreshCw className="text-2xl" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">100% Satisfaction Guarantee</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Not satisfied? We provide free replacement within 24 hours.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
