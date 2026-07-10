"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { LuCalendarCheck, LuCalendarDays } from "react-icons/lu";

const plans = [
  {
    id: "monthly",
    title: "Monthly Plan",
    subtitle: "Flexible & Convenient",
    price: "₹1,999",
    perMonth: "per month",
    icon: LuCalendarCheck,
    features: [
      "Verified & Background Checked Helpers",
      "Replacement Guarantee",
      "24/7 Customer Support",
      "No Long-Term Commitment",
    ],
    popular: false,
  },
  {
    id: "3-months",
    title: "3 Months Plan",
    subtitle: "Save More, Worry Less",
    price: "₹5,498",
    perMonth: "₹1,833 per month",
    icon: LuCalendarDays,
    iconLabel: "3",
    features: [
      "Verified & Background Checked Helpers",
      "Replacement Guarantee",
      "24/7 Customer Support",
      "Priority Support",
    ],
    popular: false,
  },
  {
    id: "6-months",
    title: "6 Months Plan",
    subtitle: "Great Value, Greater Care",
    price: "₹10,998",
    perMonth: "₹1,833 per month",
    icon: LuCalendarDays,
    iconLabel: "6",
    features: [
      "Verified & Background Checked Helpers",
      "Replacement Guarantee",
      "24/7 Customer Support",
      "Priority Support",
      "Flexible Rescheduling",
    ],
    popular: true,
  },
  {
    id: "1-year",
    title: "1 Year Plan",
    subtitle: "Best Value for Complete Peace",
    price: "₹19,998",
    perMonth: "₹1,667 per month",
    icon: LuCalendarDays,
    iconLabel: "12",
    features: [
      "Verified & Background Checked Helpers",
      "Replacement Guarantee",
      "24/7 Customer Support",
      "Priority Support",
      "Flexible Rescheduling",
      "Exclusive Benefits & Offers",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Simple Pricing.{" "}
            <span className="text-[#D48B8B]">Complete Peace of Mind.</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Choose the plan that suits your needs. All plans include verified
            helpers and replacement guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative bg-[#FCF9F9] rounded-2xl p-6 md:p-7 border flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg ring-1 ring-primary/20"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D48B8B] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div className="w-12 h-12 rounded-full bg-white border border-accent flex items-center justify-center mb-5 shadow-sm">
                {plan.iconLabel ? (
                  <span className="text-primary font-bold text-sm flex items-center gap-0.5">
                    <plan.icon className="text-lg text-primary" />
                    {plan.iconLabel}
                  </span>
                ) : (
                  <plan.icon className="text-xl text-primary" />
                )}
              </div>

              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                {plan.title}
              </p>
              <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>

              <div className="mb-1">
                <span className="font-serif text-3xl font-bold text-primary">
                  {plan.price}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-6">{plan.perMonth}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <FiCheck className="text-[#D48B8B] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book-now"
                className={`block text-center py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-colors ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-light"
                    : "bg-white border border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
