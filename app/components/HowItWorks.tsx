"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { FaClipboardList } from "react-icons/fa";
import { LuUserRoundSearch } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Tell Us Your Need",
    description: "Share your requirements in less than a minute.",
    icon: FaClipboardList,
  },
  {
    id: 2,
    title: "We Match",
    description: "We find and verify the best suitable helper.",
    icon: LuUserRoundSearch,
  },
  {
    id: 3,
    title: "Schedule",
    description: "Choose your preferred date & time.",
    icon: SlCalender,
  },
  {
    id: 4,
    title: "Relax & Enjoy",
    description: "We ensure a hassle-free experience.",
    icon: FaRegCircleCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-10 bg-[#FCF9F9]" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary/30"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">
              How It Works
            </h2>
            <div className="h-px w-16 bg-primary/30"></div>
          </div>
          <div className="flex justify-center">
            <Image src="/leafline.png" alt="Decorative" width={240} height={140} />
          </div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Mobile: stacked steps */}
          <div className="grid grid-cols-1 gap-10 md:hidden">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mb-6 relative shadow-sm">
                  <step.icon className="text-5xl text-primary" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Desktop: steps with arrow connectors */}
          <div className="hidden md:flex items-start justify-between">
            {steps.map((step, index) => (
              <Fragment key={step.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center flex-1"
                >
                  <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mb-6 relative shadow-sm">
                    <step.icon className="text-5xl text-primary" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                  <p className="text-gray-600 text-sm max-w-[200px]">{step.description}</p>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="flex items-center self-start pt-12 px-1 lg:px-2 shrink-0">
                    <Image
                      src="/arrow.png"
                      alt=""
                      width={120}
                      height={24}
                      className="w-14 lg:w-24 h-auto object-contain"
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
