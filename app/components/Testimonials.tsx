"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "Maid Eazy made finding a reliable helper so easy! The staff is professional, polite and the replacement guarantee gives us complete peace of mind.",
    name: "Anjali Nair",
    location: "Kakkanad, Kochi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "Excellent service! The cook we hired is fantastic and very hygienic. The customer support team was very responsive throughout the entire process.",
    name: "Rahul Sharma",
    location: "Indiranagar, Bangalore",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "We needed a babysitter urgently and Maid Eazy provided a verified, caring professional within 24 hours. Highly recommended for working parents.",
    name: "Priya Patel",
    location: "Andheri West, Mumbai",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 4,
    text: "The elder care attendant is very compassionate and well-trained. It's a huge relief knowing my parents are in safe hands while I am at work.",
    name: "Vikram Singh",
    location: "Vasant Kunj, Delhi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#FCF9F9] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-4"
        >
          <h2 className="lora-font text-3xl md:text-4xl font-semibold text-primary ">
            What Our Clients Say
          </h2>
          <div className="relative w-80 h-12 md:w-[28rem] md:h-14 lg:w-[32rem] lg:h-16">
            <Image
              src="/leafline.png"
              alt="Decorative line"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">
          
          {/* Left Content: Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[60%] flex flex-col items-center lg:items-stretch"
          >
            {/* Card Container */}
            <div className="relative w-full max-w-3xl mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 w-full">
                <div className="flex flex-col min-h-[220px]">
                  <div className="text-6xl text-[#E2CACA] font-serif leading-none h-10 mb-2 opacity-70">
                    &ldquo;
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col flex-grow"
                    >
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 flex-grow">
                        {current.text}
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-14 h-14 rounded-full overflow-hidden relative flex-shrink-0">
                          <Image 
                            src={current.image} 
                            alt={current.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base">{current.name}</h4>
                          <div className="flex items-center gap-3 mt-0.5">
                            <p className="text-sm text-gray-500">{current.location}</p>
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
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrev}
                className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#D48B8B] hover:text-primary transition-colors border border-gray-50 z-10"
              >
                <FiChevronLeft className="text-xl md:text-2xl" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#D48B8B] hover:text-primary transition-colors border border-gray-50 z-10"
              >
                <FiChevronRight className="text-xl md:text-2xl" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center lg:justify-center gap-2 mt-8 w-full max-w-3xl">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-primary" : "bg-[#E2CACA]"
                  }`}
                ></button>
              ))}
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
