"use client";

import { Fragment } from "react";

const steps = [
  { id: 1, label: "Select Service" },
  { id: 2, label: "Your Requirements" },
  { id: 3, label: "Choose Duration" },
  { id: 4, label: "Review & Confirm" },
  { id: 5, label: "Booking Confirmed" },
];

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
      <div className="flex items-center justify-between relative max-w-5xl mx-auto">
        {/* Connecting Line */}
        <div className="absolute top-5 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-200 -z-10"></div>

        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isPast = step.id < currentStep;

          return (
            <div key={step.id} className="flex flex-col items-center relative bg-white px-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-3 transition-colors ${
                  isActive || isPast
                    ? "bg-primary text-white border-2 border-primary"
                    : "bg-white text-gray-400 border-2 border-gray-200"
                }`}
              >
                {step.id}
              </div>
              <span
                className={`text-xs md:text-sm font-medium text-center max-w-[80px] md:max-w-none ${
                  isActive ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
