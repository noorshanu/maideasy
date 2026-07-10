"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBroom, FaUtensils, FaBaby, FaUserNurse, FaHeartbeat, FaHandsHelping } from "react-icons/fa";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const services = [
  {
    id: "maid",
    title: "Maid Services",
    description: "Full-time or part-time housekeeping services",
    icon: FaBroom,
  },
  {
    id: "cook",
    title: "Cook Services",
    description: "Experienced cooks for your daily cooking",
    icon: FaUtensils,
  },
  {
    id: "babysitter",
    title: "Babysitter",
    description: "Caring babysitters for your little ones",
    icon: FaBaby,
  },
  {
    id: "elder",
    title: "Elder Care",
    description: "Compassionate care for your loved ones",
    icon: FaUserNurse,
  },
  {
    id: "patient",
    title: "Patient Care",
    description: "Trained attendants for patient care at home",
    icon: FaHeartbeat,
  },
  {
    id: "other",
    title: "Other Services",
    description: "Household & other custom services",
    icon: FaHandsHelping,
  },
];

export default function ServiceSelection() {
  const [selectedService, setSelectedService] = useState<string>("maid");

  return (
    <div className="grow">
      <div className="mb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          1. Select the type of service you need
        </h2>
        <p className="text-gray-600">Choose the service that best fits your requirements.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        {services.map((service) => {
          const isSelected = selectedService === service.id;

          return (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedService(service.id)}
              className={`relative bg-white rounded-xl p-6 flex flex-col items-center text-center cursor-pointer transition-all ${
                isSelected
                  ? "border-2 border-primary shadow-md"
                  : "border border-gray-100 shadow-sm hover:border-primary/30"
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                  <FiCheck className="text-sm" />
                </div>
              )}

              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 text-primary">
                <service.icon className="text-2xl" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
            </motion.div>
          );
        })}
      </div>

      <button className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-primary-light transition-colors shadow-md">
        Continue <FiArrowRight className="text-lg" />
      </button>
    </div>
  );
}
