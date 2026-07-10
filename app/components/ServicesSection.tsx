"use client";

import { motion } from "framer-motion";
import { FaBroom, FaUtensils, FaBaby, FaUserNurse, FaHeartbeat, FaHandsHelping } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Maid Services",
    description: "Full-time or part-time housekeeping services",
    icon: FaBroom,
  },
  {
    id: 2,
    title: "Cook Services",
    description: "Experienced cooks for your daily cooking",
    icon: FaUtensils,
  },
  {
    id: 3,
    title: "Babysitter",
    description: "Caring babysitters for your little ones",
    icon: FaBaby,
  },
  {
    id: 4,
    title: "Elder Care",
    description: "Compassionate care for your loved ones",
    icon: FaUserNurse,
  },
  {
    id: 5,
    title: "Patient Care",
    description: "Trained attendants for patient care at home",
    icon: FaHeartbeat,
  },
  {
    id: 6,
    title: "Other Services",
    description: "Household & other custom services",
    icon: FaHandsHelping,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <div className="flex items-center justify-center gap-4 ">
            <div className="h-[1px] w-16 bg-primary/30"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">
              Our Services
            </h2>
            <div className="h-[1px] w-16 bg-primary/30"></div>
          </div>
          <div className="flex justify-center">
             <Image src="/leafline.png" alt="Decorative" width={240} height={140} className="" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05  }}
               
              className="bg-[#FCF9F9] rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors duration-300">
                <service.icon className="text-3xl text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{service.description}</p>
              <button className="flex items-center gap-2 text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors mt-auto">
                Know More <FiArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
