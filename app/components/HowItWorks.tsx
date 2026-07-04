"use client";

import { motion } from "framer-motion";
import { FiClipboard, FiUsers, FiCalendar, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Tell Us Your Need",
    description: "Share your requirements in less than a minute.",
    icon: FiClipboard,
  },
  {
    id: 2,
    title: "We Match",
    description: "We find and verify the best suitable helper.",
    icon: FiUsers,
  },
  {
    id: 3,
    title: "Schedule",
    description: "Choose your preferred date & time.",
    icon: FiCalendar,
  },
  {
    id: 4,
    title: "Relax & Enjoy",
    description: "We ensure a hassle-free experience.",
    icon: FiCheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#FCF9F9]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-16 bg-primary/30"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">
              How It Works
            </h2>
            <div className="h-[1px] w-16 bg-primary/30"></div>
          </div>
          <div className="flex justify-center">
             <Image src="/logo.png" alt="Decorative" width={40} height={40} className="opacity-20" />
          </div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-primary/20 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mb-6 relative shadow-sm border-[6px] border-[#FCF9F9]">
                  <step.icon className="text-3xl text-primary" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm border-4 border-[#FCF9F9]">
                    {step.id}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
