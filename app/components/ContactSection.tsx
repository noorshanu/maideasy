"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend, FiUser } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) return;
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Get in <span className="text-[#D48B8B]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions or need help booking? Our team is here for you.
            Reach out and we&apos;ll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            <a
              href="tel:+919778527419"
              className="flex items-start gap-4 bg-[#FCF9F9] rounded-xl p-5 border border-gray-100 hover:border-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <FiPhone className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Call Us
                </p>
                <p className="font-semibold text-primary">+91 9778 527 419</p>
              </div>
            </a>

            <a
              href="mailto:hello@maideazy.in"
              className="flex items-start gap-4 bg-[#FCF9F9] rounded-xl p-5 border border-gray-100 hover:border-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <FiMail className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Email Us
                </p>
                <p className="font-semibold text-primary">hello@maideazy.in</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-[#FCF9F9] rounded-xl p-5 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <FiMapPin className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Visit Us
                </p>
                <p className="font-semibold text-primary">Kochi, Kerala, India</p>
              </div>
            </div>

            <a
              href="https://wa.me/919778527419"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-xl py-4 font-semibold text-sm hover:bg-[#1fb855] transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#FCF9F9] rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
            >
              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 text-sm rounded-lg px-4 py-3">
                  Thank you! We&apos;ve received your message and will get back to you soon.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 pl-10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 9778527419"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 pl-10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Email Address <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 pl-10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary-light transition-colors"
              >
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
