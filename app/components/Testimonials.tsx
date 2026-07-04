"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FCF9F9] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content: Title and Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[60%] flex flex-col items-center lg:items-stretch"
          >
            {/* Title */}
            <div className="flex flex-col items-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-3">
                What Our Clients Say
              </h2>
              <div className="relative w-48 h-6">
                <Image 
                  src="/leafline.png" 
                  alt="Decorative line" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>

            {/* Card Container */}
            <div className="relative w-full max-w-3xl mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 w-full">
                <div className="flex flex-col">
                  <div className="text-6xl text-[#E2CACA] font-serif leading-none h-10 mb-4 opacity-70">
                    &ldquo;
                  </div>
                  
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                    Maid Eazy made finding a reliable helper so easy! The staff is professional, polite and the replacement guarantee gives us complete peace of mind.
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden relative flex-shrink-0">
                      <Image 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
                        alt="Anjali Nair"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Anjali Nair</h4>
                      <div className="flex items-center gap-3 mt-0.5">
                        <p className="text-sm text-gray-500">Kakkanad, Kochi</p>
                        <div className="flex text-[#D48B8B] text-sm gap-0.5">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#D48B8B] hover:text-primary transition-colors border border-gray-50 z-10">
                <FiChevronLeft className="text-xl md:text-2xl" />
              </button>
              <button className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#D48B8B] hover:text-primary transition-colors border border-gray-50 z-10">
                <FiChevronRight className="text-xl md:text-2xl" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center lg:justify-center gap-2 mt-8 w-full max-w-3xl">
              <button className="w-2 h-2 rounded-full bg-[#E2CACA] transition-colors"></button>
              <button className="w-2 h-2 rounded-full bg-primary transition-colors"></button>
              <button className="w-2 h-2 rounded-full bg-[#E2CACA] transition-colors"></button>
            </div>
          </motion.div>

          {/* Right Content: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[40%] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image 
                src="/testi.png" 
                alt="Beautiful home interior with chair and flowers"
                fill
                className="object-contain object-center lg:object-right"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
