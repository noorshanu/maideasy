import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookHero from "./components/BookHero";
import Stepper from "./components/Stepper";
import ServiceSelection from "./components/ServiceSelection";
import BookingSummary from "./components/BookingSummary";
import TrustBanner from "./components/TrustBanner";

export default function BookNowPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <BookHero />

      <section className="py-12 grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Stepper currentStep={1} />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <ServiceSelection />
            <BookingSummary />
          </div>
        </div>
      </section>

      <TrustBanner />
      
      <Footer />
    </main>
  );
}
