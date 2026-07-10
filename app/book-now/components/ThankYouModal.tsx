"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiDownload, FiX, FiHome } from "react-icons/fi";
import Link from "next/link";

type ThankYouModalProps = {
  open: boolean;
  bookingId: string;
  customerName: string;
  pdfBase64: string | null;
  onClose: () => void;
};

function downloadPdf(base64: string, bookingId: string) {
  const link = document.createElement("a");
  link.href = `data:application/pdf;base64,${base64}`;
  link.download = `MaidEazy-Booking-${bookingId}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function ThankYouModal({
  open,
  bookingId,
  customerName,
  pdfBase64,
  onClose,
}: ThankYouModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <FiX />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-center mx-auto mb-5">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                <FiCheck className="text-xl" />
              </div>
            </div>

            <h2 className="font-serif text-2xl font-bold text-primary mb-2">
              Thank You{customerName ? `, ${customerName.split(" ")[0]}` : ""}!
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              Your booking request has been submitted successfully. Our team will contact you shortly.
            </p>
            <p className="text-xs text-gray-500 mb-6">
              Booking ID: <span className="font-bold text-primary">{bookingId}</span>
            </p>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                disabled={!pdfBase64}
                onClick={() => {
                  if (pdfBase64) downloadPdf(pdfBase64, bookingId);
                }}
                className="w-full bg-primary text-white py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary-light transition-colors disabled:opacity-50"
              >
                <FiDownload className="text-lg" />
                Download PDF
              </button>

              <Link
                href="/"
                className="w-full bg-white border border-gray-200 text-gray-800 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <FiHome className="text-lg" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
