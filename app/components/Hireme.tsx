"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiShield, FiClock, FiUsers, FiTrendingUp } from "react-icons/fi";

const features = [
  {
    icon: <FiShield className="w-5 h-5" />,
    label: "Stable Income",
  },
  {
    icon: <FiClock className="w-5 h-5" />,
    label: "Flexible Timings",
  },
  {
    icon: <FiUsers className="w-5 h-5" />,
    label: "Verified Jobs",
  },
  {
    icon: <FiTrendingUp className="w-5 h-5" />,
    label: "Career Growth",
  },
];

export default function Hireme() {
  return (
    <section className=" py-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col md:flex-row  justify-center rounded-2xl overflow-hidden px-4 py-5"
          style={{ backgroundColor: "#F4ECF0" }}
        >
          {/* Left — Maid Illustration */}
          <div className="relative w-full sm:w-1/2 flex  justify-center gap-2 ">
            <img
              src="/happen.png"
              alt="MaidEazy Household Assistant"
     
            className="w-[200px]"
            />
              <div className="flex flex-col justify-center gap-4 px-6 py-8 flex-1 w-full sm:w-1/2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                {/* Icon circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    borderColor: "#4A2B4D",
                    color: "#4A2B4D",
                    backgroundColor: "rgba(74,43,77,0.07)",
                  }}
                >
                  {feature.icon}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
          </div>

          {/* Middle — Feature List */}
        

       

          {/* Right — CTA */}
          <div className="w-full sm:w-1/2  px-4 border-l">
               {/* Divider */}
          <div
            className="hidden md:block w-px self-stretch my-8"
            style={{ backgroundColor: "#D8C4D8" }}
          />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3"
            >
              Become a MaidEazy <br /> Household Assistant
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-gray-500 leading-relaxed mb-6"
            >
              Join our network of trusted professionals and <br /> build a better future with MaidEazy.
            </motion.p>

            <motion.a
              href="/register-assistant"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg font-semibold text-xs uppercase tracking-widest text-white transition-colors shadow-md"
              style={{ backgroundColor: "#4A2B4D" }}
            >
              Register as Assistant <FiArrowRight className="text-base" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}