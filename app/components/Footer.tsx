import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#2A182C] text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 flex-shrink-0 bg-white rounded-full p-1">
                <Image 
                  src="/logo.png" 
                  alt="MaidEazy Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-2xl font-normal text-white tracking-[0.2em]">
                MAIDEAZY
              </span>
            </Link>
            <p className="text-sm mb-6 max-w-xs">
              Bringing trust, comfort and care to your home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                <FaWhatsapp size={14} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#services" className="hover:text-white transition-colors">Maid Services</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Cook Services</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Babysitter</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Elder Care</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Patient Care</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Other Services</Link></li>
            </ul>
          </div>

          {/* For Helpers Links */}
          <div>
            <h4 className="text-white font-bold mb-6">For Helpers</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Register as Helper</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Benefits</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Training</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FiPhone className="mt-1 flex-shrink-0" />
                <a href="tel:+919778527419" className="hover:text-white transition-colors">+91 9778 527 419</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="mt-1 flex-shrink-0" />
                <a href="mailto:hello@maideazy.in" className="hover:text-white transition-colors">hello@maideazy.in</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span>Kochi, Kerala, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Maid Eazy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
