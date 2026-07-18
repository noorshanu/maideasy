import React from "react";
import { FaEdit } from "react-icons/fa";

interface Step4Props {
  formData: Record<string, unknown>;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
}

const Step4Review: React.FC<Step4Props> = ({ formData, nextStep, prevStep, setStep }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        nextStep();
    }, 1000);
  };

  const SectionHeader = ({ title, step }: { title: string, step: number }) => (
      <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4 mt-6">
          <h3 className="text-lg font-semibold text-purple-900">{title}</h3>
          <button 
            type="button" 
            onClick={() => setStep(step)}
            className="text-sm text-purple-600 hover:text-purple-800 flex items-center gap-1"
          >
              <FaEdit /> Edit
          </button>
      </div>
  );

  const DataRow = ({ label, value }: { label: string, value: unknown }) => (
      <div className="mb-2 grid grid-cols-3 gap-2">
          <span className="text-sm text-gray-500 col-span-1">{label}:</span>
          <span className="text-sm font-medium text-gray-900 col-span-2">
              {Array.isArray(value) ? value.join(", ") : (value || "-")}
          </span>
      </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-purple-900">
           Review & Submit
        </h2>
        <p className="text-gray-600 mt-2">Please review your details before final submission.</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <SectionHeader title="Personal Details" step={1} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div>
                <DataRow label="Full Name" value={formData.fullName} />
                <DataRow label="Date of Birth" value={formData.dob} />
                <DataRow label="Gender" value={formData.gender} />
                <DataRow label="City" value={formData.city} />
              </div>
              <div>
                <DataRow label="Mobile" value={formData.mobile} />
                <DataRow label="Email" value={formData.email} />
                <DataRow label="Location Pref" value={formData.preferredLocation} />
                <DataRow label="Work Types" value={formData.workTypes} />
              </div>
          </div>
          <div className="mt-2">
             <DataRow label="Address" value={formData.address} />
          </div>

          <SectionHeader title="Experience & Skills" step={2} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div>
                <DataRow label="Experience" value={formData.experience} />
                <DataRow label="Languages" value={formData.languages} />
                <DataRow label="Relocate" value={formData.relocate} />
                <DataRow label="Availability" value={formData.availability} />
              </div>
              <div>
                <DataRow label="Services" value={formData.services} />
                <DataRow label="Comfortable With" value={formData.comfortableWith} />
                <DataRow label="Expected Salary" value={formData.salary ? `₹${formData.salary}` : "-"} />
                <DataRow label="Weekly Off" value={formData.weeklyOff} />
              </div>
          </div>

          <SectionHeader title="Documents" step={3} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div>
                 <DataRow label="Aadhaar Card" value={formData.aadhaar ? "Uploaded" : "Pending"} />
                 <DataRow label="Profile Photo" value={formData.photo ? "Uploaded" : "Pending"} />
              </div>
              <div>
                 <DataRow label="PAN Card" value={formData.pan ? "Uploaded" : "Not Provided"} />
              </div>
          </div>
      </div>

      <div className="bg-purple-50 text-purple-800 text-sm p-4 rounded-md mt-6">
          <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required className="mt-1 h-4 w-4 text-purple-600 rounded border-purple-300 focus:ring-purple-500" />
              <span>I hereby declare that the information provided above is true and correct to the best of my knowledge. I understand that any false information may lead to rejection of my application.</span>
          </label>
      </div>

      <div className="pt-6 flex justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 flex items-center gap-2"
        >
          <span>←</span> Back
        </button>
        <button
          type="submit"
          className="flex-1 max-w-[200px] bg-purple-900 text-white font-medium py-3 rounded-md hover:bg-purple-800 transition-colors flex justify-center items-center gap-2 ml-auto"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default Step4Review;
