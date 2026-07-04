"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiRefreshCw, FiHeadphones, FiArrowRight, FiPlayCircle } from "react-icons/fi";
import Image from "next/image";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-[800px] flex items-center">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Professional domestic helper smiling"
          fill
          className="object-cover object-center md:object-right"
          priority
        />
        {/* Optional overlay to ensure text readability on smaller screens if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent md:via-white/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl bg-white/60 md:bg-transparent p-6 md:p-0 rounded-2xl backdrop-blur-sm md:backdrop-blur-none"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block py-1.5 px-4 rounded-full bg-accent text-primary text-sm font-medium">
                India's Trusted Domestic Help Service
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
            >
              Bringing <br />
              <span className="text-primary italic font-medium">Trust</span> Home.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Maid Eazy connects you with verified, trained and reliable household professionals for your everyday needs.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <FiCheckCircle className="text-primary text-xl" />
                <span className="text-sm">Verified &<br/>Background Checked</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <FiRefreshCw className="text-primary text-xl" />
                <span className="text-sm">Replacement<br/>Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <FiHeadphones className="text-primary text-xl" />
                <span className="text-sm">24/7 Customer<br/>Support</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary-light transition-colors shadow-md"
              >
                Book a Helper <FiArrowRight className="text-lg" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors"
              >
                How It Works <FiPlayCircle className="text-xl" />
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end h-full"
          >
            {/* Floating Booking Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[320px] w-full z-10 border border-gray-100"
            >
              <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                Book a Helper in <br/> 60 Seconds
              </h3>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-gray-700 text-sm font-medium pt-1">Select your requirement</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-gray-700 text-sm font-medium pt-1">Choose your duration</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-gray-700 text-sm font-medium pt-1">Get matched with the best helper</p>
                </div>
              </div>
              
              <button className="w-full bg-primary text-white py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-primary-light transition-colors shadow-md">
                Get Started Now
              </button>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
