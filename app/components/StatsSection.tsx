"use client";

import { motion } from "framer-motion";
import { FiUsers, FiShield, FiSmile, FiHeadphones } from "react-icons/fi";

const stats = [
  {
    id: 1,
    value: "5,000+",
    label: "Happy Families",
    icon: FiUsers,
  },
  {
    id: 2,
    value: "10,000+",
    label: "Verified Helpers",
    icon: FiShield,
  },
  {
    id: 3,
    value: "98%",
    label: "Customer Satisfaction",
    icon: FiSmile,
  },
  {
    id: 4,
    value: "24/7",
    label: "Support Available",
    icon: FiHeadphones,
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left px-4"
            >
              <stat.icon className="text-4xl text-accent-dark opacity-90" />
              <div>
                <h4 className="font-bold text-2xl md:text-3xl text-white mb-1">{stat.value}</h4>
                <p className="text-white/80 text-sm font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
