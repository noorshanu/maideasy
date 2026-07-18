import React from "react";
import { FaIdCard, FaRegCreditCard, FaUserCircle, FaFileAlt, FaBriefcase, FaUniversity, FaAddressCard } from "react-icons/fa";

interface Step3Props {
  formData: any;
  updateFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const Step3Documents: React.FC<Step3Props> = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
      // In a real app, you would handle the file upload here
      if (e.target.files && e.target.files[0]) {
        updateFormData({ [fieldName]: e.target.files[0].name });
      }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };
  
  const documents = [
      {
          id: "aadhaar",
          name: "Aadhaar Card",
          required: true,
          desc: "Upload front side of your Aadhaar card.",
          icon: <FaIdCard className="text-purple-600 text-xl" />,
          format: "JPG, PNG or PDF (Max 5MB)"
      },
      {
          id: "pan",
          name: "PAN Card",
          required: false,
          desc: "Upload your PAN card.",
          icon: <FaRegCreditCard className="text-purple-600 text-xl" />,
          format: "JPG, PNG or PDF (Max 5MB)"
      },
      {
          id: "photo",
          name: "Profile Photo",
          required: true,
          desc: "Upload a recent passport size photo.",
          icon: <FaUserCircle className="text-purple-600 text-xl" />,
          format: "JPG, PNG (Max 2MB)"
      },
      {
          id: "police",
          name: "Police Verification / Character Certificate",
          required: false,
          desc: "Upload your police verification certificate.",
          icon: <FaFileAlt className="text-purple-600 text-xl" />,
          format: "JPG, PNG or PDF (Max 5MB)"
      },
      {
          id: "experienceCert",
          name: "Experience Certificate (If Any)",
          required: false,
          desc: "Upload any previous work experience certificate.",
          icon: <FaBriefcase className="text-purple-600 text-xl" />,
          format: "JPG, PNG or PDF (Max 5MB)"
      },
      {
          id: "bank",
          name: "Bank Account Details",
          required: false,
          desc: "Upload cancelled cheque or passbook first page.",
          icon: <FaUniversity className="text-purple-600 text-xl" />,
          format: "JPG, PNG or PDF (Max 5MB)"
      },
      {
          id: "emergencyContact",
          name: "Emergency Contact Proof (Optional)",
          required: false,
          desc: "Any ID proof of your emergency contact.",
          icon: <FaAddressCard className="text-purple-600 text-xl" />,
          format: "JPG, PNG or PDF (Max 5MB)"
      }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-6">
        <div className="bg-purple-100 p-3 rounded-full">
            <FaFileAlt className="text-purple-900 text-xl" />
        </div>
        <div>
            <h2 className="text-2xl font-semibold text-purple-900">
            Required Documents
            </h2>
            <p className="text-sm text-gray-500">Please upload clear and valid documents. All files should be in JPG, PNG or PDF format.</p>
        </div>
      </div>

      <div className="space-y-4">
          {documents.map((doc) => (
              <div key={doc.id} className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="bg-gray-50 p-3 rounded-md border border-gray-100">
                          {doc.icon}
                      </div>
                      <div>
                          <h4 className="font-medium text-gray-900 text-sm">
                              {doc.name} {doc.required && <span className="text-red-500">*</span>}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{doc.desc}</p>
                      </div>
                  </div>
                  <div className="w-full md:w-auto flex flex-col items-center">
                      <label className="cursor-pointer bg-white border border-dashed border-purple-300 hover:border-purple-500 text-purple-700 px-6 py-2 rounded-md font-medium text-sm flex items-center justify-center gap-2 transition-colors w-full md:w-48">
                          <span>☁️ Upload File</span>
                          <input 
                            type="file" 
                            className="hidden" 
                            required={doc.required && !formData[doc.id]}
                            onChange={(e) => handleFileChange(e, doc.id)}
                          />
                      </label>
                      <span className="text-[10px] text-gray-400 mt-1">{doc.format}</span>
                      {formData[doc.id] && (
                          <span className="text-xs text-green-600 mt-1 block truncate max-w-[180px]">
                              ✓ {formData[doc.id]}
                          </span>
                      )}
                  </div>
              </div>
          ))}
      </div>
      
      <div className="bg-green-50 text-green-800 text-sm p-3 rounded-md flex items-center gap-2 mt-4">
          <span>🔒</span> Your documents are 100% secure and only used for verification.
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
          Save & Continue <span>→</span>
        </button>
      </div>
    </form>
  );
};

export default Step3Documents;
