import React from "react";

interface Step2Props {
  formData: any;
  updateFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const Step2Experience: React.FC<Step2Props> = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleRadioChange = (name: string, value: string) => {
    updateFormData({ [name]: value });
  };
  
  const handleCheckboxChange = (name: string, value: string) => {
      const currentValues = formData[name] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v: string) => v !== value)
        : [...currentValues, value];
      updateFormData({ [name]: newValues });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-purple-900 border-b border-gray-200 pb-2 mb-6">
          Tell Us About Your Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Years of Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Years of Experience <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            {["Fresher", "1-2 Years", "3-5 Years", "5+ Years"].map((exp) => (
              <label key={exp} className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value={exp}
                  checked={formData.experience === exp}
                  onChange={() => handleRadioChange("experience", exp)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 shrink-0"
                  required
                />
                <span className="ml-3 text-gray-700 text-sm">{exp}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Services You Can Provide */}
        <div>
           <label className="block text-sm font-medium text-gray-700 mb-3">
            Services You Can Provide <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Housekeeping", "Cooking", "Babysitting", "Elder Care", "Patient Care", "Pet Care", "Live-in Assistant", "Full-time", "Part-time", "Other"].map((service) => (
                  <label key={service} className="flex items-center space-x-3 border rounded-md p-3 bg-gray-50 border-gray-200 cursor-pointer hover:bg-purple-50 hover:border-purple-200 transition-colors">
                      <input 
                        type="checkbox"
                        checked={(formData.services || []).includes(service)}
                        onChange={() => handleCheckboxChange("services", service)}
                        className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 shrink-0"
                      />
                      <span className="text-sm text-gray-700 leading-tight">{service}</span>
                  </label>
              ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
          {/* Languages Known */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
                Languages Known <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
                {["Malayalam", "English", "Hindi", "Tamil", "Kannada", "Other"].map((lang) => (
                    <label key={lang} className="flex items-center space-x-2">
                        <input
                        type="checkbox"
                        checked={(formData.languages || []).includes(lang)}
                        onChange={() => handleCheckboxChange("languages", lang)}
                        className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 shrink-0"
                        />
                        <span className="text-gray-700 text-sm">{lang}</span>
                    </label>
                ))}
            </div>
          </div>
          
          {/* Comfortable With */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
                Comfortable With <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Children", "Elderly", "Pets", "Large Homes", "Apartments"].map((item) => (
                    <label key={item} className="flex items-center space-x-3 border rounded-md p-3 bg-gray-50 border-gray-200 cursor-pointer hover:bg-purple-50 hover:border-purple-200 transition-colors">
                        <input 
                            type="checkbox"
                            checked={(formData.comfortableWith || []).includes(item)}
                            onChange={() => handleCheckboxChange("comfortableWith", item)}
                            className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 shrink-0"
                        />
                        <span className="text-sm text-gray-700 leading-tight">{item}</span>
                    </label>
                ))}
            </div>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-gray-100 items-start">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Can You Relocate?
          </label>
          <div className="flex space-x-6">
            {["Yes", "No"].map((relocate) => (
              <label key={relocate} className="flex items-center">
                <input
                  type="radio"
                  name="relocate"
                  value={relocate}
                  checked={formData.relocate === relocate}
                  onChange={() => handleRadioChange("relocate", relocate)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 shrink-0"
                />
                <span className="ml-2 text-gray-700 text-sm">{relocate}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                Preferred Salary (Per Month)
            </label>
            <div className="text-center font-bold text-xl text-purple-900 mb-2">
                ₹{formData.salary || "18,000"}
            </div>
            <input 
                type="range" 
                min="10000" 
                max="35000" 
                step="500"
                name="salary"
                value={formData.salary || "18000"}
                onChange={handleChange}
                className="w-full accent-purple-900"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹10,000</span>
                <span>₹35,000</span>
            </div>
        </div>

        <div>
           <label className="block text-sm font-medium text-gray-700 mb-3">
            Availability <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {["Immediately", "Within 7 Days", "Within 15 Days", "Within 30 Days"].map((avail) => (
              <label key={avail} className="flex items-center">
                <input
                  type="radio"
                  name="availability"
                  value={avail}
                  checked={formData.availability === avail}
                  onChange={() => handleRadioChange("availability", avail)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 shrink-0"
                  required
                />
                <span className="ml-3 text-gray-700 text-sm">{avail}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Weekly Off Preference <span className="text-red-500">*</span>
            </label>
            <select
                name="weeklyOff"
                required
                value={formData.weeklyOff || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500 bg-white"
            >
                <option value="" disabled>Select Day</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Any">Any Day</option>
            </select>
        </div>
        <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Skills (Optional)
            </label>
            <textarea
                name="additionalSkills"
                rows={2}
                value={formData.additionalSkills || ""}
                onChange={handleChange}
                placeholder="E.g. Basic first aid, Driving, Sewing, Gardening, etc."
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <div className="text-right text-xs text-gray-400 mt-1">
                {(formData.additionalSkills || "").length} / 200
            </div>
        </div>
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
          Continue <span>→</span>
        </button>
      </div>
    </form>
  );
};

export default Step2Experience;
