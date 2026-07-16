"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiCalendar,
  FiLock,
  FiSend,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import {
  MdOutlineCleaningServices,
  MdOutlineCrib,
  MdOutlineElderly,
  MdOutlineHome,
  MdOutlineMoreHoriz,
} from "react-icons/md";
import { GiCook } from "react-icons/gi";
import { BsClock, BsCalendarCheck } from "react-icons/bs";

const SERVICES = [
  { id: "housekeeping", label: "Housekeeping", icon: <MdOutlineCleaningServices className="text-xl" /> },
  { id: "cooking", label: "Cooking", icon: <GiCook className="text-xl" /> },
  { id: "babysitting", label: "Babysitting", icon: <MdOutlineCrib className="text-xl" /> },
  { id: "elder-care", label: "Elder Care", icon: <MdOutlineElderly className="text-xl" /> },
  { id: "live-in", label: "Live-in Assistant", icon: <MdOutlineHome className="text-xl" /> },
  { id: "part-time", label: "Part-time Assistant", icon: <BsClock className="text-xl" /> },
  { id: "full-time", label: "Full-time Assistant", icon: <BsCalendarCheck className="text-xl" /> },
  { id: "other", label: "Other", icon: <MdOutlineMoreHoriz className="text-xl" /> },
];

const HOURS_OPTIONS = [
  "2–4 hours/day",
  "4–6 hours/day",
  "6–8 hours/day",
  "Full-time (8+ hours)",
  "Flexible",
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 28 },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.35, ease: "easeOut" as const },
  }),
};

export default function EnquiryModal({ isOpen, onClose }: Props) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const payload = {
      formType:     "enquiry",
      fullName:     (form.elements.namedItem("fullName")     as HTMLInputElement)?.value,
      mobile:       (form.elements.namedItem("mobile")       as HTMLInputElement)?.value,
      email:        (form.elements.namedItem("email")        as HTMLInputElement)?.value,
      city:         (form.elements.namedItem("city")         as HTMLInputElement)?.value,
      services:     selectedServices,
      startDate:    (form.elements.namedItem("startDate")    as HTMLInputElement)?.value,
      workingHours: (form.elements.namedItem("workingHours") as HTMLSelectElement)?.value,
      requirements: (form.elements.namedItem("requirements") as HTMLTextAreaElement)?.value,
    };

    try {
      if (process.env.NEXT_PUBLIC_GSHEET_WEBHOOK) {
        await fetch(process.env.NEXT_PUBLIC_GSHEET_WEBHOOK, {
          method: "POST",
          body: JSON.stringify(payload),
        });
      } else {
        console.warn("NEXT_PUBLIC_GSHEET_WEBHOOK is not defined");
      }
    } catch (err) {
      console.error("Failed to submit enquiry:", err);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              >
                <FiX className="text-lg" />
              </button>

              <div className="p-6 md:p-8">
                {/* Header */}
                <motion.div
                  custom={0}
                  variants={fieldVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start gap-4 mb-6"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#F4E8E8" }}
                  >
                    <FiCalendar className="text-xl" style={{ color: "#4A2B4D" }} />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-gray-900">
                      Tell Us About Your Requirements
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Please provide your details and our team will get in touch with you.
                    </p>
                  </div>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-6" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 gap-4"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#F4E8E8" }}
                    >
                      <FiSend className="text-2xl" style={{ color: "#4A2B4D" }} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900">Inquiry Submitted!</h3>
                    <p className="text-sm text-gray-500 text-center max-w-xs">
                      Thank you! Our team will reach out to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Full Name + Mobile */}
                    <motion.div
                      custom={1}
                      variants={fieldVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                          <input
                            required
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition"
                            style={{ "--tw-ring-color": "#4A2B4D" } as React.CSSProperties}
                            onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #4A2B4D40"}
                            onBlur={(e) => e.target.style.boxShadow = ""}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                          <input
                            required
                            type="tel"
                            name="mobile"
                            placeholder="Enter 10 digit mobile number"
                            maxLength={10}
                            className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition"
                            onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #4A2B4D40"}
                            onBlur={(e) => e.target.style.boxShadow = ""}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Row 2: Email + Location */}
                    <motion.div
                      custom={2}
                      variants={fieldVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition"
                            onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #4A2B4D40"}
                            onBlur={(e) => e.target.style.boxShadow = ""}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Location / City <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                          <input
                            required
                            type="text"
                            name="city"
                            placeholder="Enter your city or area"
                            className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition"
                            onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #4A2B4D40"}
                            onBlur={(e) => e.target.style.boxShadow = ""}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Service Required */}
                    <motion.div
                      custom={3}
                      variants={fieldVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {SERVICES.map((service, idx) => {
                          const selected = selectedServices.includes(service.id);
                          return (
                            <motion.button
                              key={service.id}
                              type="button"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.15 + idx * 0.04 }}
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.96 }}
                              onClick={() => toggleService(service.id)}
                              className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 text-xs font-semibold cursor-pointer transition-all"
                              style={{
                                borderColor: selected ? "#4A2B4D" : "#E5E7EB",
                                backgroundColor: selected ? "#F4E8E8" : "#FAFAFA",
                                color: selected ? "#4A2B4D" : "#6B7280",
                              }}
                            >
                              <span style={{ color: selected ? "#4A2B4D" : "#9CA3AF" }}>
                                {service.icon}
                              </span>
                              {service.label}
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Row 3: Date + Hours */}
                    <motion.div
                      custom={4}
                      variants={fieldVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Preferred Start Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            name="startDate"
                            className="w-full pl-3 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none transition appearance-none"
                            onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #4A2B4D40"}
                            onBlur={(e) => e.target.style.boxShadow = ""}
                          />
                          <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Preferred Working Hours
                        </label>
                        <div className="relative">
                          <select
                            name="workingHours"
                            className="w-full pl-3 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none transition appearance-none bg-white cursor-pointer"
                            onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #4A2B4D40"}
                            onBlur={(e) => e.target.style.boxShadow = ""}
                          >
                            <option value="">Select an option</option>
                            {HOURS_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▾</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Requirements Textarea */}
                    <motion.div
                      custom={5}
                      variants={fieldVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-0.5">
                        Tell us about your requirements{" "}
                        <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <p className="text-xs text-gray-400 mb-1.5">
                        Any specific preferences, family size, languages, experience needed, etc.
                      </p>
                      <textarea
                        rows={3}
                        name="requirements"
                        placeholder="Type your requirements here..."
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none resize-none transition"
                        onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #4A2B4D40"}
                        onBlur={(e) => e.target.style.boxShadow = ""}
                      />
                    </motion.div>

                    {/* Submit */}
                    <motion.div
                      custom={6}
                      variants={fieldVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-sm uppercase tracking-widest text-white shadow-lg cursor-pointer transition-all"
                        style={{ backgroundColor: "#4A2B4D" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A355D")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4A2B4D")}
                      >
                        <FiSend className="text-base" />
                        Submit Inquiry
                      </motion.button>

                      {/* Privacy note */}
                      <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-3">
                        <FiLock className="text-sm" />
                        Your information is safe with us. We respect your privacy.
                      </p>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
