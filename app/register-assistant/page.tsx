"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stepper from "./components/Stepper";
import Step1PersonalDetails from "./components/Step1PersonalDetails";
import Step2Experience from "./components/Step2Experience";
import Step3Documents from "./components/Step3Documents";
import Step4Review from "./components/Step4Review";
import Step5Success from "./components/Step5Success";
import Sidebars from "./components/Sidebars";
import Image from "next/image";
import { FaHeadset, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const RegisterAssistantPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, unknown>>({});

  const updateFormData = (newData: Record<string, unknown>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 5));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-gray-900 ">
      <Navbar />

      {/* Banner Section (Shown on every step as requested) */}
      <div className="bg-[#FAF7F2] relative overflow-hidden pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="z-10 relative">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Join <span className="text-purple-900">MaidEazy</span> as a<br />
                <span className="text-purple-900">Household Assistant</span>
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-6 max-w-md">
                Find genuine work opportunities, get trained, and grow with a platform that values your skills.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 text-sm font-medium text-gray-700">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-700 text-xl flex items-center justify-center min-w-[3rem] min-h-[3rem]">💼</div>
                  <span className="text-center text-xs">Verified<br/>Opportunities</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-700 text-xl flex items-center justify-center min-w-[3rem] min-h-[3rem]">🛡️</div>
                  <span className="text-center text-xs">Safe & Secure<br/>Workplaces</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-700 text-xl flex items-center justify-center min-w-[3rem] min-h-[3rem]">₹</div>
                  <span className="text-center text-xs">Timely<br/>Payments</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-700 text-xl flex items-center justify-center min-w-[3rem] min-h-[3rem]">📈</div>
                  <span className="text-center text-xs">Growth & Training<br/>Opportunities</span>
                </div>
              </div>
            </div>
            <div className="relative h-[250px] md:h-[350px] lg:h-[450px] hidden md:block">
                {/* Banner Image */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/register.png" 
                        alt="MaidEazy Household Assistant" 
                        fill
                        className="object-contain object-bottom md:object-right-bottom"
                        priority
                    />
                </div>
                
                {/* Trusted Community Badge */}
                <div className="absolute bottom-0 right-0 bg-white/40 backdrop-blur-md p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-20 w-56 lg:w-64 text-center border border-purple-300/50">
                    <div className="bg-white/50 backdrop-blur-sm shadow-sm border border-purple-300/50 w-12 h-12 lg:w-16 lg:h-16 rounded-full mx-auto flex items-center justify-center text-purple-700 text-xl lg:text-2xl mb-3">
                        👥
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 lg:mb-2 text-sm lg:text-base">Be a Part of a<br/>Trusted Community</h4>
                    <p className="text-[10px] lg:text-xs text-gray-700">5000+ household assistants trust MaidEazy to build better careers.</p>
                    <div className="text-purple-400 mt-2 lg:mt-4">🌿</div>
                </div>
            </div>
          </div>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Stepper (Only show on steps 1-4) */}
        {step >= 1 && step <= 4 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6 max-w-5xl mx-auto overflow-x-auto">
             <div className="min-w-[600px]">
                <Stepper currentStep={step} />
             </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Form Area */}
          <div className={`w-full ${step === 5 ? 'lg:w-full' : 'lg:w-2/3'} bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10 relative`}>
            
            {/* Step Content */}
            {step === 1 && (
              <Step1PersonalDetails
                formData={formData}
                updateFormData={updateFormData}
                nextStep={nextStep}
              />
            )}
            {step === 2 && (
              <Step2Experience
                formData={formData}
                updateFormData={updateFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 3 && (
              <Step3Documents
                formData={formData}
                updateFormData={updateFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 4 && (
              <Step4Review
                formData={formData}
                nextStep={nextStep}
                prevStep={prevStep}
                setStep={setStep}
              />
            )}
            {step === 5 && <Step5Success />}

          </div>

          {/* Sidebar Area (Hidden on Step 4 and 5) */}
          {step >= 1 && step <= 3 && (
            <div className="w-full lg:w-1/3 sticky top-6">
               <Sidebars step={step} />
            </div>
          )}
          {step === 4 && (
             <div className="w-full lg:w-1/3 sticky top-6">
                <Sidebars step={4} />
             </div>
          )}

        </div>
      </div>
      
      {/* Horizontal Need Help Banner (Step 1) */}
      {step === 1 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="bg-purple-50/30 border border-purple-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                <div className="flex items-center gap-4 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-purple-100 pb-6 md:pb-0 md:pr-8">
                    <div className="text-purple-800 text-3xl shrink-0">
                        <FaHeadset />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg">Need Help?</h3>
                        <p className="text-sm text-gray-600 mt-1">Our team is here to help you at every step.</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-purple-100 pb-6 md:pb-0 md:pr-8">
                    <div className="bg-purple-900 text-white p-3.5 rounded-full text-xl shrink-0">
                        <FaPhoneAlt />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">Call Us</p>
                        <h4 className="font-bold text-gray-900 text-lg leading-none">+91 9778 527 419</h4>
                        <p className="text-[10px] text-gray-500 mt-1.5">Mon - Sat | 9:00 AM - 7:00 PM</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-1/3">
                    <div className="bg-green-500 text-white p-3.5 rounded-full text-2xl shrink-0">
                        <FaWhatsapp />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">WhatsApp Us</p>
                        <h4 className="font-bold text-gray-900 text-lg leading-none">+91 9778 527 419</h4>
                        <p className="text-[10px] text-gray-500 mt-1.5">We usually reply within a few minutes.</p>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* Footer Trust Badge (Only on steps 1-4) */}
      {step >= 1 && step <= 4 && (
          <div className="text-center mt-6 pb-8 flex items-center justify-center gap-2 text-sm text-gray-700">
              <span className="text-purple-700">🛡️</span> Trusted by 5000+ Household Assistants Across India 
              <span className="text-yellow-400 ml-2">★★★★★</span>
          </div>
      )}

      <Footer />
    </div>
  );
};

export default RegisterAssistantPage;