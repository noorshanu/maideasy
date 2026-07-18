import React from "react";

interface Step1Props {
  formData: Record<string, unknown>;
  updateFormData: (data: Record<string, unknown>) => void;
  nextStep: () => void;
}

const Step1PersonalDetails: React.FC<Step1Props> = ({
  formData,
  updateFormData,
  nextStep,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleRadioChange = (name: string, value: string) => {
    updateFormData({ [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-purple-900 flex items-center justify-center gap-2">
           <span className="text-purple-500 text-3xl">🌿</span> Register Yourself
        </h2>
        <p className="text-gray-600 mt-2">Please fill in your details below to get started.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName || ""}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dob"
            required
            value={formData.dob || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              +91
            </span>
            <input
              type="tel"
              name="mobile"
              required
              pattern="[0-9]{10}"
              value={formData.mobile || ""}
              onChange={handleChange}
              placeholder="Enter 10 digit mobile number"
              className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alternate Number (Optional)
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              +91
            </span>
            <input
              type="tel"
              name="alternateMobile"
              pattern="[0-9]{10}"
              value={formData.alternateMobile || ""}
              onChange={handleChange}
              placeholder="Enter alternate number"
              className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email ID (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="Enter your email ID"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-6 items-center">
            {["Female", "Male", "Other"].map((gender) => (
              <label key={gender} className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={() => handleRadioChange("gender", gender)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 shrink-0"
                  required
                />
                <span className="ml-2 text-gray-700 text-sm">{gender}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address <span className="text-red-500">*</span>
        </label>
        <textarea
          name="address"
          required
          rows={3}
          value={formData.address || ""}
          onChange={handleChange}
          placeholder="Enter your complete address"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City / Town <span className="text-red-500">*</span>
          </label>
          <select
            name="city"
            required
            value={formData.city || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500 bg-white"
          >
            <option value="" disabled>Select your city</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pincode <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="pincode"
            required
            pattern="[0-9]{6}"
            value={formData.pincode || ""}
            onChange={handleChange}
            placeholder="Enter pincode"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Preferred Work Location <span className="text-red-500">*</span>
        </label>
        <div className="flex space-x-6">
          {["Local (Within City)", "Within District", "Willing to Relocate"].map((loc) => (
            <label key={loc} className="flex items-center">
              <input
                type="radio"
                name="preferredLocation"
                value={loc}
                checked={formData.preferredLocation === loc}
                onChange={() => handleRadioChange("preferredLocation", loc)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 shrink-0"
                required
              />
              <span className="ml-2 text-gray-700 text-sm">{loc}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Type of Work You Are Looking For <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Housekeeping", "Cooking", "Babysitting", "Elder Care", "Full-time (Live-in)", "Part-time", "Other"].map((workType) => {
            const isSelected = formData.workTypes?.includes(workType);
            return (
              <div
                key={workType}
                onClick={() => {
                  const currentWorkTypes = formData.workTypes || [];
                  const newWorkTypes = isSelected
                    ? currentWorkTypes.filter((w: string) => w !== workType)
                    : [...currentWorkTypes, workType];
                  updateFormData({ workTypes: newWorkTypes });
                }}
                className={`border rounded-lg p-3 flex items-center justify-center cursor-pointer transition-colors ${
                  isSelected ? "border-purple-600 bg-purple-50 text-purple-900 font-medium" : "border-gray-200 text-gray-600 hover:border-purple-300"
                }`}
              >
                <span className="text-sm text-center">{workType}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-purple-900 text-white font-medium py-4 rounded-md hover:bg-purple-800 transition-colors flex justify-center items-center gap-2"
        >
          Save & Continue <span>→</span>
        </button>
        <p className="text-center text-sm text-green-700 mt-3 flex items-center justify-center gap-1">
           <span className="text-xs">🔒</span> Your information is safe with us.
        </p>
      </div>
    </form>
  );
};

export default Step1PersonalDetails;
