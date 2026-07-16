"use client";

import { useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiHome,
  FiUsers,
  FiCheck,
} from "react-icons/fi";
import { LuBaby } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import { useBooking } from "@/lib/booking/context";
import { validateBookingDetails, type BookingFieldErrors } from "@/lib/booking/validation";

const inputClass = (hasError: boolean) =>
  `w-full bg-white border rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 pl-10 ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-200"
      : "border-gray-200 focus:border-primary focus:ring-primary"
  }`;

export default function YourDetails() {
  const {
    booking,
    updateBooking,
    setCurrentStep,
    isSubmitting,
    setIsSubmitting,
    submitError,
    setSubmitError,
    setSubmitSuccess,
  } = useBooking();

  const [fieldErrors, setFieldErrors] = useState<BookingFieldErrors>({});

  const clearFieldError = (field: keyof BookingFieldErrors) => {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async () => {
    setSubmitError(null);

    const { valid, errors, message } = validateBookingDetails({
      fullName: booking.fullName,
      mobile: booking.mobile,
      address: booking.address,
      email: booking.email,
    });

    if (!valid) {
      setFieldErrors(errors);
      setSubmitError(message || "Please fix the highlighted fields.");
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      const data = await res.json();

      if (!res.ok && res.status !== 207) {
        throw new Error(data.error || "Failed to submit booking");
      }

      setSubmitSuccess({
        bookingId: data.bookingId || "",
        pdfBase64: data.pdfBase64 || null,
        customerName: booking.fullName,
      });
      setFieldErrors({});
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mb-1">Your Details</h2>
        <p className="text-gray-500 text-sm">
          Please provide your details so we can find the best helper for you.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-gray-900 text-sm mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="Full Name"
                value={booking.fullName}
                onChange={(e) => {
                  updateBooking({ fullName: e.target.value });
                  clearFieldError("fullName");
                }}
                className={inputClass(!!fieldErrors.fullName)}
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <FiUser className="text-sm" />
              </div>
            </div>
            {fieldErrors.fullName && (
              <p className="text-xs text-red-600 mt-1">{fieldErrors.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                inputMode="numeric"
                placeholder="e.g. 9778527419"
                value={booking.mobile}
                onChange={(e) => {
                  updateBooking({ mobile: e.target.value });
                  clearFieldError("mobile");
                }}
                className={inputClass(!!fieldErrors.mobile)}
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <FiPhone className="text-sm" />
              </div>
            </div>
            {fieldErrors.mobile && (
              <p className="text-xs text-red-600 mt-1">{fieldErrors.mobile}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-xs font-bold text-gray-700 mb-1.5">
            Email Address <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              value={booking.email}
              onChange={(e) => {
                updateBooking({ email: e.target.value });
                clearFieldError("email");
              }}
              className={inputClass(!!fieldErrors.email)}
            />
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <FiMail className="text-sm" />
            </div>
          </div>
          {fieldErrors.email && (
            <p className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="Address"
                value={booking.address}
                onChange={(e) => {
                  updateBooking({ address: e.target.value });
                  clearFieldError("address");
                }}
                className={inputClass(!!fieldErrors.address)}
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <FiMapPin className="text-sm" />
              </div>
            </div>
            {fieldErrors.address && (
              <p className="text-xs text-red-600 mt-1">{fieldErrors.address}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              Pincode <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                placeholder="Pincode"
                value={booking.pincode}
                onChange={(e) => updateBooking({ pincode: e.target.value })}
                className={inputClass(false)}
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <FiMapPin className="text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-gray-900 text-sm mb-1">Home Details</h3>
        <p className="text-gray-500 text-xs mb-4">Tell us about your home for better matching.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <label className="block text-[10px] font-bold text-gray-500 absolute top-1.5 left-10 z-10">
              Type of Home
            </label>
            <select
              value={booking.homeType}
              onChange={(e) => updateBooking({ homeType: e.target.value })}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 pt-5 pb-1.5 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pl-10"
            >
              <option value="">Select</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Independent House</option>
            </select>
            <div className="absolute top-3 left-3 flex items-center pointer-events-none text-gray-400">
              <FiHome className="text-lg" />
            </div>
          </div>
          <div className="relative">
            <label className="block text-[10px] font-bold text-gray-500 absolute top-1.5 left-10 z-10">
              Number of Members
            </label>
            <select
              value={booking.members}
              onChange={(e) => updateBooking({ members: e.target.value })}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 pt-5 pb-1.5 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pl-10"
            >
              <option value="">Select</option>
              <option>1-2</option>
              <option>3-4</option>
              <option>5+</option>
            </select>
            <div className="absolute top-3 left-3 flex items-center pointer-events-none text-gray-400">
              <FiUsers className="text-lg" />
            </div>
          </div>
          <div className="relative">
            <label className="block text-[10px] font-bold text-gray-500 absolute top-1.5 left-10 z-10">
              Do you have Kids?
            </label>
            <select
              value={booking.hasKids}
              onChange={(e) => updateBooking({ hasKids: e.target.value })}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 pt-5 pb-1.5 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pl-10"
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <div className="absolute top-3 left-3 flex items-center pointer-events-none text-gray-400">
              <LuBaby className="text-lg" />
            </div>
          </div>
          <div className="relative">
            <label className="block text-[10px] font-bold text-gray-500 absolute top-1.5 left-10 z-10">
              Do you have Pets?
            </label>
            <select
              value={booking.hasPets}
              onChange={(e) => updateBooking({ hasPets: e.target.value })}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 pt-5 pb-1.5 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pl-10"
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <div className="absolute top-3 left-3 flex items-center pointer-events-none text-gray-400">
              <MdOutlinePets className="text-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-gray-900 text-sm mb-1">Additional Notes (Optional)</h3>
        <p className="text-gray-500 text-xs mb-3">
          Any specific instructions or preferences we should know?
        </p>
        <div className="relative">
          <textarea
            rows={3}
            maxLength={250}
            value={booking.notes}
            onChange={(e) => updateBooking({ notes: e.target.value })}
            placeholder="E.g. Language preference, experience required, specific tasks, etc."
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
          />
          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
            {booking.notes.length} / 250
          </div>
        </div>
      </div>

      <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-lg p-3 flex items-center gap-3 mb-4">
        <FiCheck className="text-green-600 shrink-0" />
        <p className="text-xs text-gray-700">
          <span className="font-bold text-green-800">Your information is safe with us.</span> We
          never share your details with anyone.
        </p>
      </div>

      {submitError && (
        <p className="text-sm text-red-600 mb-4 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
          {submitError}
        </p>
      )}

      <div className="mt-auto border-t border-gray-100 pt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          disabled={isSubmitting}
          className="bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          <FiArrowLeft className="text-lg" /> BACK
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-primary-light transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "SUBMITTING..." : "REVIEW & CONFIRM"}{" "}
          {!isSubmitting && <FiArrowRight className="text-lg" />}
        </button>
      </div>
    </div>
  );
}
