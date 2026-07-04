"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FCF9F9] relative overflow-hidden">
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
              What Our Clients Say
            </h2>
            <div className="h-[1px] w-16 bg-primary/30"></div>
          </div>
          <div className="flex justify-center">
             <Image src="/logo.png" alt="Decorative" width={40} height={40} className="opacity-20" />
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Testimonial Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-xl relative z-10 lg:translate-x-10"
            >
              <FaQuoteLeft className="text-4xl text-accent mb-6" />
              
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                "Maid Eazy made finding a reliable helper so easy! The staff is professional, polite and the replacement guarantee gives us complete peace of mind."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
                    alt="Anjali Nair"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Anjali Nair</h4>
                  <p className="text-sm text-gray-500 mb-1">Kakkanad, Kochi</p>
                  <div className="flex text-yellow-400 text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
                <button className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-primary transition-colors border border-gray-100">
                  <FiChevronLeft className="text-xl" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
                <button className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-primary transition-colors border border-gray-100">
                  <FiChevronRight className="text-xl" />
                </button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg hidden lg:block"
            >
              <Image 
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop" 
                alt="Beautiful home interior"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-10">
            <button className="w-2.5 h-2.5 rounded-full bg-primary"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
