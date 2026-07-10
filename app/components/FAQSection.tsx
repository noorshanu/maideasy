"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "How does MaidEazy work?",
    answer:
      "Simply tell us your requirements through our booking form, and we match you with verified, background-checked helpers suited to your home. You choose the schedule, and we handle verification, support, and replacements if needed.",
  },
  {
    question: "Are all helpers verified and background checked?",
    answer:
      "Yes. Every helper on MaidEazy goes through identity verification and background checks before being matched with families. Your safety and peace of mind are our top priorities.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer maid services, cooking, babysitting, elder care, patient care, driver services, full-time live-in help, and other custom household services based on your needs.",
  },
  {
    question: "Can I change or replace my helper?",
    answer:
      "Absolutely. All our plans include a replacement guarantee. If your helper is not the right fit, contact our support team and we will arrange a suitable replacement at no extra hassle.",
  },
  {
    question: "What are your pricing plans?",
    answer:
      "We offer flexible monthly, 3-month, 6-month, and 1-year plans starting from ₹1,999 per month. Longer plans offer better value with priority support and additional benefits.",
  },
  {
    question: "Is there a minimum commitment period?",
    answer:
      "Our monthly plan has no long-term commitment. Longer plans (3, 6, or 12 months) offer discounted rates and extra benefits for families who want consistent, reliable help.",
  },
  {
    question: "How do I book a helper?",
    answer:
      "Click \"Book Assistant\" or \"Get Started\" on any page, fill in your service requirements and contact details, and submit. Our team will reach out within 24 hours to confirm your booking.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "We are currently serving Kochi, Kerala, and expanding to more cities soon. Contact us to check availability in your area.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-20 bg-[#FCF9F9]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-accent text-[#B87B7C] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            <FiHelpCircle />
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about booking trusted home professionals
            with MaidEazy.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <FiChevronDown
                    className={`text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
