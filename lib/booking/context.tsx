"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  initialBookingData,
  type BookingData,
} from "./types";

type BookingContextValue = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  booking: BookingData;
  updateBooking: (patch: Partial<BookingData>) => void;
  resetBooking: () => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
  submitError: string | null;
  setSubmitError: (value: string | null) => void;
  showThankYou: boolean;
  submittedName: string;
  bookingId: string;
  pdfBase64: string | null;
  setSubmitSuccess: (data: {
    bookingId: string;
    pdfBase64: string | null;
    customerName: string;
  }) => void;
  closeThankYou: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [booking, setBooking] = useState<BookingData>(initialBookingData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);

  const resetBooking = () => {
    setBooking(initialBookingData);
    setCurrentStep(1);
    setSubmitError(null);
  };

  const setSubmitSuccess = (data: {
    bookingId: string;
    pdfBase64: string | null;
    customerName: string;
  }) => {
    setBookingId(data.bookingId);
    setPdfBase64(data.pdfBase64);
    setSubmittedName(data.customerName);
    setShowThankYou(true);
    resetBooking();
  };

  const closeThankYou = () => {
    setShowThankYou(false);
    setBookingId("");
    setPdfBase64(null);
    setSubmittedName("");
  };

  const value = useMemo(
    () => ({
      currentStep,
      setCurrentStep,
      booking,
      updateBooking: (patch: Partial<BookingData>) =>
        setBooking((prev) => ({ ...prev, ...patch })),
      resetBooking,
      isSubmitting,
      setIsSubmitting,
      submitError,
      setSubmitError,
      showThankYou,
      submittedName,
      bookingId,
      pdfBase64,
      setSubmitSuccess,
      closeThankYou,
    }),
    [
      currentStep,
      booking,
      isSubmitting,
      submitError,
      showThankYou,
      submittedName,
      bookingId,
      pdfBase64,
    ]
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}
