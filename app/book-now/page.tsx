"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookHeader from "./components/BookHeader";
import ServiceSelection from "./components/ServiceSelection";
import ChooseDuration from "./components/ChooseDuration";
import YourDetails from "./components/YourDetails";
import BookingSummary from "./components/BookingSummary";
import TrustBanner from "./components/TrustBanner";
import ThankYouModal from "./components/ThankYouModal";
import { BookingProvider, useBooking } from "@/lib/booking/context";

function BookNowContent() {
  const {
    currentStep,
    showThankYou,
    bookingId,
    submittedName,
    pdfBase64,
    closeThankYou,
  } = useBooking();

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <ThankYouModal
        open={showThankYou}
        bookingId={bookingId}
        customerName={submittedName}
        pdfBase64={pdfBase64}
        onClose={closeThankYou}
      />

      <div className="pt-24 md:pt-28">
        <BookHeader currentStep={currentStep} />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-6 grow flex flex-col">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row overflow-hidden grow mb-6">
          <div className="w-full lg:w-[70%] p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
            {currentStep === 1 && <ServiceSelection />}
            {currentStep === 2 && <ChooseDuration />}
            {currentStep === 3 && <YourDetails />}
          </div>

          <div className="w-full lg:w-[30%] p-6 md:p-8 lg:p-10 bg-[#FFFCFC]/30">
            <BookingSummary />
          </div>
        </div>

        <div className="mb-8">
          <TrustBanner />
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function BookNowPage() {
  return (
    <BookingProvider>
      <BookNowContent />
    </BookingProvider>
  );
}
