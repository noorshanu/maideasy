"use client";

import { motion } from "framer-motion";
import { FiHeart, FiEye, FiTarget } from "react-icons/fi";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about-us" className="py-16 md:py-20 bg-[#FCF9F9] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-accent text-[#B87B7C] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              <FiHeart className="text-sm" />
              Our Purpose
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              Our <span className="text-[#D48B8B]">Vision</span> & Mission
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              We are on a mission to make every home a happier place with trusted
              professionals and exceptional service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-[#F4E8E8] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10" />
            <div
              className="relative w-full max-w-md aspect-[4/5] overflow-hidden"
              style={{
                borderRadius: "60% 40% 55% 45% / 55% 45% 55% 45%",
              }}
            >
              <Image
                src="/testi.png"
                alt="MaidEazy professional caring for a family"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex gap-5"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
              <FiEye className="text-2xl text-[#D48B8B]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#D48B8B] mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To become India&apos;s most trusted household workforce platform by
                connecting every home with verified, trained, and reliable home
                professionals, while creating dignified employment opportunities
                and transforming the future of domestic services.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex gap-5"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
              <FiTarget className="text-2xl text-[#D48B8B]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#D48B8B] mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To simplify household management by providing safe, verified, and
                professionally trained home professionals through technology,
                exceptional customer service, and transparent processes, ensuring
                peace of mind for every family and meaningful career opportunities
                for every workforce professional.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
