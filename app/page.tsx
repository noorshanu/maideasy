import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import ServicesSection from "./components/ServicesSection";
import HowItWorks from "./components/HowItWorks";
import StatsSection from "./components/StatsSection";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <HowItWorks />
      <StatsSection />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}
