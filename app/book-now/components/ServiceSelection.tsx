"use client";

import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineCleaningServices, MdElderly, MdOutlineLocalHospital } from "react-icons/md";
import { LuSoup, LuBaby, LuHouse } from "react-icons/lu";
import { TbSteeringWheel } from "react-icons/tb";
import { useBooking } from "@/lib/booking/context";

const services = [
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Cleaning, sweeping, mopping, dusting & more",
    icon: MdOutlineCleaningServices,
  },
  {
    id: "cooking",
    title: "Cooking",
    description: "Cooking, meal prep, kitchen cleaning",
    icon: LuSoup,
  },
  {
    id: "babysitter",
    title: "Babysitter",
    description: "Baby care, feeding, playtime & more",
    icon: LuBaby,
  },
  {
    id: "elder",
    title: "Elder Care",
    description: "Elderly care, companionship, assistance",
    icon: MdElderly,
  },
  {
    id: "patient",
    title: "Patient Care",
    description: "Patient assistance, personal care, attendance",
    icon: MdOutlineLocalHospital,
  },
  {
    id: "driver",
    title: "Driver",
    description: "Personal driver for local/ outstation",
    icon: TbSteeringWheel,
  },
  {
    id: "livein",
    title: "Full Time Live-in",
    description: "Live-in help for complete household support",
    icon: LuHouse,
  },
  {
    id: "other",
    title: "Other",
    description: "Other customized requirements",
    icon: FiMoreHorizontal,
  },
];

export default function ServiceSelection() {
  const { booking, updateBooking, setCurrentStep } = useBooking();

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mb-1">
          What type of help do you need?
        </h2>
        <p className="text-gray-500 text-sm">Choose the category that best matches your requirement</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {services.map((service) => {
          const isSelected = booking.serviceId === service.id;

          return (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                updateBooking({
                  serviceId: service.id,
                  serviceTitle: service.title,
                  serviceDescription: service.description,
                })
              }
              className={`relative bg-white rounded-xl p-4 flex flex-col items-center text-center cursor-pointer transition-all ${
                isSelected
                  ? "border-2 border-primary shadow-sm"
                  : "border border-gray-100 shadow-sm hover:border-primary/30"
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white">
                  <FiCheck className="text-xs" />
                </div>
              )}

              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-3 text-primary shrink-0">
                <service.icon className="text-2xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{service.title}</h3>
              <p className="text-gray-500 text-[11px] leading-relaxed">{service.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-auto border-t border-gray-100 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="font-serif text-lg font-bold text-primary mb-1">How many helpers do you need?</h3>
          <p className="text-gray-500 text-sm">You can change this later if required</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
            <button
              type="button"
              onClick={() =>
                updateBooking({ helperCount: Math.max(1, booking.helperCount - 1) })
              }
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
            >
              -
            </button>
            <div className="w-12 h-10 flex items-center justify-center font-bold text-gray-900 bg-white border-x border-gray-200">
              {booking.helperCount}
            </div>
            <button
              type="button"
              onClick={() => updateBooking({ helperCount: booking.helperCount + 1 })}
              className="w-10 h-10 flex items-center justify-center text-primary hover:bg-accent transition-colors bg-accent/50"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          className="bg-primary text-white px-8 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary-light transition-colors w-full md:w-auto"
        >
          CONTINUE <FiArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
}
