"use client";

import Link from "next/link";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

export default function BookHeader({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 px-4 md:px-8 bg-background">
      <div className="flex items-start gap-4">
        <Link href="/" className="mt-1.5 text-gray-800 hover:text-primary transition-colors">
          <FiArrowLeft className="text-2xl" />
        </Link>
        <div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-1">Book a Helper</h1>
          <p className="text-gray-500 text-sm">Find the right help for your home in 3 simple steps</p>
        </div>
      </div>
      
      {/* Stepper */}
      <div className="flex items-center gap-2 md:gap-4 mt-6 md:mt-0 text-xs md:text-sm font-medium text-gray-500 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
        <div className={`flex items-center gap-2 shrink-0 ${currentStep >= 1 ? "text-primary" : ""}`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep > 1 ? "bg-white border border-primary text-primary" : currentStep === 1 ? "bg-primary text-white" : "bg-accent text-primary"}`}>
            {currentStep > 1 ? <FiCheck /> : "1"}
          </div>
          <span className={currentStep >= 1 ? "font-bold" : ""}>Select Requirement</span>
        </div>
        <div className="w-8 md:w-12 h-px bg-gray-300 shrink-0"></div>
        <div className={`flex items-center gap-2 shrink-0 ${currentStep >= 2 ? "text-primary" : ""}`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep > 2 ? "bg-white border border-primary text-primary" : currentStep === 2 ? "bg-primary text-white" : "bg-accent text-primary"}`}>
            {currentStep > 2 ? <FiCheck /> : "2"}
          </div>
          <span className={currentStep >= 2 ? "font-bold" : ""}>Choose Duration</span>
        </div>
        <div className="w-8 md:w-12 h-px bg-gray-300 shrink-0"></div>
        <div className={`flex items-center gap-2 shrink-0 ${currentStep >= 3 ? "text-primary" : ""}`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep === 3 ? "bg-primary text-white" : "bg-accent text-primary"}`}>
            3
          </div>
          <span className={currentStep >= 3 ? "font-bold" : ""}>Your Details</span>
        </div>
      </div>
    </div>
  );
}
