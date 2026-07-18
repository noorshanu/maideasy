import React from "react";
import { FaCheckCircle, FaEnvelope, FaFileAlt, FaSearch, FaUserFriends, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Step5Success: React.FC = () => {
  return (
    <div className="space-y-8 flex flex-col items-center py-8">
        <div className="text-center relative">
            {/* Confetti or decorative elements could go here */}
            <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-4 relative">
                    <div className="absolute inset-0 rounded-full animate-ping bg-green-200 opacity-75"></div>
                    <FaCheckCircle className="text-6xl text-green-500 relative z-10" />
                </div>
            </div>
            <h1 className="text-4xl font-bold text-purple-900 mb-2">Registration <span className="text-green-600">Received!</span></h1>
            <p className="text-lg font-medium text-gray-800">Thank you for joining MaidEazy family.</p>
            <p className="text-gray-600 mt-2 max-w-lg mx-auto">
                Your application has been successfully submitted. Our team will review your details and get in touch with you soon.
            </p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 flex items-center gap-4 max-w-2xl w-full border border-green-100">
            <div className="bg-white p-2 rounded-md shadow-sm">
                <FaEnvelope className="text-green-600 text-xl" />
            </div>
            <p className="text-sm text-green-800">
                We have sent a confirmation SMS and email to your registered mobile number and email ID.
            </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 max-w-3xl w-full mt-8">
            <h3 className="text-xl font-semibold text-center text-purple-900 mb-8">Application Status</h3>
            
            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-gray-200 -z-10 border-t border-dashed border-gray-300"></div>
                
                <div className="flex justify-between items-start">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center w-1/5">
                        <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                            <FaFileAlt className="text-xl" />
                        </div>
                        <span className="text-sm font-medium text-center text-gray-800">1. Application<br/>Received</span>
                        <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md mt-2">Completed</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center w-1/5">
                        <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-[0_0_0_4px_white]">
                            <FaSearch className="text-xl" />
                        </div>
                        <span className="text-sm font-medium text-center text-gray-800">2. Verification<br/>Pending</span>
                        <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-md mt-2">In Progress</span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center w-1/5">
                        <div className="bg-gray-100 text-gray-400 w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-[0_0_0_4px_white]">
                            <FaUserFriends className="text-xl" />
                        </div>
                        <span className="text-sm font-medium text-center text-gray-500">3. Interview</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md mt-2">Upcoming</span>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center w-1/5">
                        <div className="bg-gray-100 text-gray-400 w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-[0_0_0_4px_white]">
                            <FaGraduationCap className="text-xl" />
                        </div>
                        <span className="text-sm font-medium text-center text-gray-500">4. Training</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md mt-2">Upcoming</span>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col items-center w-1/5">
                        <div className="bg-gray-100 text-gray-400 w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-[0_0_0_4px_white]">
                            <FaBriefcase className="text-xl" />
                        </div>
                        <span className="text-sm font-medium text-center text-gray-500">5. Active<br/>Assistant</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md mt-2">Upcoming</span>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex gap-4 justify-center">
                <button className="px-6 py-3 border border-purple-900 text-purple-900 rounded-md font-medium hover:bg-purple-50 flex items-center gap-2">
                    <FaFileAlt /> View Application
                </button>
                <button className="px-6 py-3 bg-purple-900 text-white rounded-md font-medium hover:bg-purple-800 flex items-center gap-2">
                    <FaBriefcase /> Go to Dashboard
                </button>
            </div>
        </div>
    </div>
  );
};

export default Step5Success;
