"use client";

import { motion } from "framer-motion";
import { FiShield, FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="py-12 bg-[#FCF9F9]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center flex-shrink-0">
              <FiShield className="text-3xl text-white" />
            </div>
            <div>
              <p className="text-white/80 font-medium mb-1">Safe. Reliable. Hassle-Free.</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                Book the Right Helper for Your Home.
              </h3>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all backdrop-blur-sm whitespace-nowrap relative z-10 w-full md:w-auto"
          >
            Book a Helper Now <FiArrowRight className="text-lg" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
