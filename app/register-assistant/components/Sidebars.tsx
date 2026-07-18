import React from "react";
import { FaShieldAlt, FaRupeeSign, FaBookOpen, FaChartLine, FaCheckCircle, FaLightbulb, FaHeadset, FaLock, FaUserClock, FaPhoneAlt, FaFileAlt, FaGraduationCap, FaBriefcase, FaSearch } from "react-icons/fa";

interface SidebarProps {
  step: number;
}

const ContactHelp = () => (
    <div className="bg-purple-50 rounded-lg p-6 mt-6 border border-purple-100">
        <div className="flex items-center gap-3 mb-2">
            <FaHeadset className="text-purple-800 text-2xl" />
            <h4 className="font-semibold text-purple-900">Need Help?</h4>
        </div>
        <p className="text-sm text-gray-600 mb-2">Our support team is here for you!</p>
        <p className="text-lg font-bold text-purple-900 mb-1">+91 9778 527 419</p>
        <p className="text-xs text-gray-500 mb-4">Mon - Sat | 9:00 AM - 7:00 PM</p>
        <button className="w-full bg-white border border-purple-900 text-purple-900 font-medium py-2 rounded-md hover:bg-purple-50 transition-colors">
            Chat with Support
        </button>
    </div>
);

const Sidebars: React.FC<SidebarProps> = ({ step }) => {
  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-purple-900 text-center mb-6">Why Join MaidEazy?</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-full text-purple-600 shrink-0"><FaCheckCircle /></div>
              <div>
                <h4 className="font-semibold text-sm text-gray-800">Genuine & Verified Job Opportunities</h4>
                <p className="text-xs text-gray-500 mt-1">We connect you with trusted families.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-full text-purple-600 shrink-0"><FaRupeeSign /></div>
              <div>
                <h4 className="font-semibold text-sm text-gray-800">Timely Salary Payments</h4>
                <p className="text-xs text-gray-500 mt-1">Get paid on time, every time.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-full text-purple-600 shrink-0"><FaShieldAlt /></div>
              <div>
                <h4 className="font-semibold text-sm text-gray-800">Safe & Respectful Workplaces</h4>
                <p className="text-xs text-gray-500 mt-1">We ensure your safety and dignity.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-full text-purple-600 shrink-0"><FaBookOpen /></div>
              <div>
                <h4 className="font-semibold text-sm text-gray-800">Training & Skill Development</h4>
                <p className="text-xs text-gray-500 mt-1">Free training to help you grow.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-full text-purple-600 shrink-0"><FaChartLine /></div>
              <div>
                <h4 className="font-semibold text-sm text-gray-800">Career Growth</h4>
                <p className="text-xs text-gray-500 mt-1">Better opportunities for a brighter future.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
           <h3 className="text-lg font-bold text-gray-800 text-center mb-8">Our Simple Process</h3>
           <div className="space-y-0">
              {[
                  { id: 1, title: "Register", desc: "Fill in your details and tell us about yourself." },
                  { id: 2, title: "Verification", desc: "We verify your details and documents." },
                  { id: 3, title: "Training (If Required)", desc: "Get free training to enhance your skills." },
                  { id: 4, title: "Get Matched", desc: "We match you with suitable job opportunities." },
                  { id: 5, title: "Start Working", desc: "Begin your journey with MaidEazy." },
              ].map((item, idx, arr) => (
                  <div key={item.id} className="flex gap-4 group cursor-default">
                      <div className="flex flex-col items-center">
                          <div className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 group-hover:bg-purple-900 group-hover:text-white transition-colors duration-300">
                              {item.id}
                          </div>
                          {idx !== arr.length - 1 && (
                              <div className="w-0.5 h-full bg-gray-200 my-1 group-hover:bg-purple-300 transition-colors duration-300 min-h-[2rem]"></div>
                          )}
                      </div>
                      <div className="pb-6 pt-1">
                          <h4 className="font-semibold text-sm text-gray-800 group-hover:text-purple-900 transition-colors">{item.title}</h4>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                  </div>
              ))}
           </div>
           
           <div className="bg-green-50 mt-2 p-4 rounded-xl border border-green-100 flex items-start gap-3 hover:bg-green-100 transition-colors">
                <FaShieldAlt className="text-green-600 text-xl shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-semibold text-sm text-green-900">100% Safe & Secure</h4>
                    <p className="text-xs text-green-800 mt-1 leading-relaxed opacity-90">Your data is protected and never shared without consent.</p>
                </div>
           </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
      return (
          <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col items-center mb-6">
                    <div className="bg-purple-100 p-4 rounded-full text-purple-600 text-2xl mb-4">
                        <FaUserClock />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 text-center">Why We Ask This</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                      This information helps us match you with the right families looking for your specific skills and preferences.
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                      Your profile becomes more visible and you get better job opportunities when completed.
                  </p>
                  <div className="flex justify-center my-4 text-purple-300">🌿</div>
                  
                  <h4 className="font-bold text-gray-800 text-center mb-4">Profile Completion</h4>
                  
                  <div className="flex justify-center mb-6">
                      {/* CSS Donut Chart */}
                      <div className="relative w-32 h-32 rounded-full flex items-center justify-center"
                           style={{ background: "conic-gradient(#581c87 50%, #f3e8ff 0)" }}>
                          <div className="absolute w-24 h-24 bg-white rounded-full flex items-center justify-center">
                              <span className="text-2xl font-bold text-purple-900">50%</span>
                          </div>
                      </div>
                  </div>

                  <ul className="space-y-3 text-sm">
                      <li className="flex justify-between items-center text-green-600">
                          <div className="flex items-center gap-2"><FaCheckCircle /> Personal Details</div>
                          <span className="text-xs">Completed</span>
                      </li>
                      <li className="flex justify-between items-center text-purple-900 font-medium">
                          <div className="flex items-center gap-2"><span className="bg-purple-900 text-white w-4 h-4 rounded-full flex justify-center items-center text-[10px]">2</span> Experience & Skills</div>
                          <span className="text-xs">In Progress</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-400">
                          <div className="flex items-center gap-2"><span className="border border-gray-300 rounded-full w-4 h-4 flex justify-center items-center text-[10px]">3</span> Documents</div>
                          <span className="text-xs">Pending</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-400">
                          <div className="flex items-center gap-2"><span className="border border-gray-300 rounded-full w-4 h-4 flex justify-center items-center text-[10px]">4</span> Review & Submit</div>
                          <span className="text-xs">Pending</span>
                      </li>
                  </ul>
              </div>
              <ContactHelp />
          </div>
      )
  }

  if (step === 3) {
      return (
          <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                      <FaLightbulb className="text-purple-600 text-2xl" />
                      <h3 className="text-xl font-bold text-purple-900">Tips for Uploading</h3>
                  </div>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-500 shrink-0 mt-1" />
                          <p className="text-sm text-gray-700">Ensure documents are clear and not blurred.</p>
                      </li>
                      <li className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-500 shrink-0 mt-1" />
                          <p className="text-sm text-gray-700">All details should be visible and easy to read.</p>
                      </li>
                      <li className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-500 shrink-0 mt-1" />
                          <p className="text-sm text-gray-700">File size should be less than 5MB.</p>
                      </li>
                      <li className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-500 shrink-0 mt-1" />
                          <p className="text-sm text-gray-700">Correct documents help in faster verification.</p>
                      </li>
                  </ul>
                  <div className="flex justify-center my-6 text-purple-300">🌿</div>
              </div>
              
              <ContactHelp />

              <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3 border border-green-100">
                  <FaLock className="text-green-600 text-2xl shrink-0" />
                  <div>
                      <h4 className="font-semibold text-green-800 text-sm">We Protect Your Privacy</h4>
                      <p className="text-xs text-green-700 mt-1">We never share your documents with anyone. They are used only for verification and safety.</p>
                  </div>
              </div>
          </div>
      )
  }

  if (step === 5) {
      return (
          <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-purple-900 mb-2 text-center">What Happens Next?</h3>
            <div className="flex justify-center mb-6 text-purple-300">🌿</div>
            <div className="space-y-0">
                {[
                    { id: 'review', icon: <FaSearch />, title: "Our team will review your application", desc: "We usually take 24-48 hours." },
                    { id: 'docs', icon: <FaFileAlt />, title: "Document verification", desc: "We will verify your documents and background." },
                    { id: 'interview', icon: <FaPhoneAlt />, title: "Short interview", desc: "You may be contacted for a short telephonic interview." },
                    { id: 'training', icon: <FaGraduationCap />, title: "Training (If required)", desc: "Complete training to improve your skills and confidence." },
                    { id: 'work', icon: <FaBriefcase />, title: "Start receiving opportunities", desc: "Once approved, you can start getting matched with families." }
                ].map((item, idx, arr) => (
                    <div key={item.id} className="flex gap-4 group cursor-default">
                        <div className="flex flex-col items-center">
                            <div className="bg-purple-50 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-lg z-10 group-hover:bg-purple-900 group-hover:text-white transition-colors duration-300">
                                {item.icon}
                            </div>
                            {idx !== arr.length - 1 && (
                                <div className="w-0.5 h-full bg-purple-100 my-1 group-hover:bg-purple-300 transition-colors duration-300 min-h-[2rem]"></div>
                            )}
                        </div>
                        <div className="pb-6 pt-2">
                            <h4 className="font-semibold text-sm text-gray-800 group-hover:text-purple-900 transition-colors">{item.title}</h4>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
              <ContactHelp />
          </div>
      )
  }

  // Fallback or review step
  return (
      <div className="space-y-6">
          <ContactHelp />
      </div>
  )
};

export default Sidebars;
