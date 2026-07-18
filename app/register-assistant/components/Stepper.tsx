import React from "react";
import { FaCheck } from "react-icons/fa";

interface StepperProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: "Personal Details" },
  { id: 2, label: "Experience & Skills" },
  { id: 3, label: "Documents" },
  { id: 4, label: "Review & Submit" },
];

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <div className="w-full">
      {/* Mobile/Small Screen View (Optional: simplified) or standard flex */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;
          
          return (
            <div key={step.id} className="flex flex-col items-center relative z-10 flex-1">
              <div className="flex items-center justify-center w-full relative">
                {/* Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold z-10 shrink-0 transition-colors duration-300 ${
                    isCompleted
                      ? "bg-green-600 text-white"
                      : isActive
                      ? "bg-purple-900 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {isCompleted ? <FaCheck /> : step.id}
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[50%] right-[-50%] top-1/2 h-[2px] -translate-y-1/2 -z-10 px-4">
                    <div
                      className={`h-full w-full ${
                        isCompleted ? "bg-green-600" : "bg-gray-200"
                      } ${
                        isActive ? "bg-transparent border-t-2 border-dashed border-gray-300 h-0" : ""
                      }`}
                    ></div>
                  </div>
                )}
              </div>
              <span
                className={`mt-2 text-xs md:text-sm font-medium text-center ${
                  isCompleted
                    ? "text-green-600"
                    : isActive
                    ? "text-purple-900"
                    : "text-gray-500"
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
};

export default Stepper;
