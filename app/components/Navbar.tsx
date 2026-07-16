"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isBookNow = pathname === "/book-now";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about-us" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isBookNow ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="MaidEazy Logo" 
              fill
              priority
              className="object-contain w-full h-full"
            />
          </div>
        
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-primary font-medium text-sm xl:text-base transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <a
            href="tel:+919778527419"
            className="flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
          >
            <FiPhone className="text-lg" />
            <span>+91 9778 527 419</span>
          </a>
          <motion.a
            href="/book-now"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-primary-light transition-colors shadow-sm"
          >
            Book Assistant
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg absolute w-full"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 font-medium py-2 border-b border-gray-50 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a
                  href="tel:+919778527419"
                  className="flex items-center gap-2 text-primary font-medium justify-center py-2 bg-accent rounded-lg"
                >
                  <FiPhone />
                  <span>+91 9778 527 419</span>
                </a>
                <Link
                  href="/book-now"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-primary-light transition-colors w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Helper
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
