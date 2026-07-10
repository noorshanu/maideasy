export type BookingFieldErrors = {
  fullName?: string;
  mobile?: string;
  address?: string;
  email?: string;
};

export function isValidIndianMobile(mobile: string) {
  const digits = mobile.replace(/\D/g, "");
  // Accept 10-digit Indian mobile or 91 + 10 digits
  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }
  if (digits.length === 12 && digits.startsWith("91")) {
    return /^91[6-9]\d{9}$/.test(digits);
  }
  return false;
}

export function isValidFullName(name: string) {
  const trimmed = name.trim();
  return trimmed.length >= 2 && /^[a-zA-Z\s.'-]+$/.test(trimmed);
}

export function validateBookingDetails(data: {
  fullName?: string;
  mobile?: string;
  address?: string;
  email?: string;
}): { valid: boolean; errors: BookingFieldErrors; message?: string } {
  const errors: BookingFieldErrors = {};

  if (!data.fullName?.trim()) {
    errors.fullName = "Full name is required.";
  } else if (!isValidFullName(data.fullName)) {
    errors.fullName = "Enter a valid name (at least 2 letters).";
  }

  if (!data.mobile?.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!isValidIndianMobile(data.mobile)) {
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!data.address?.trim()) {
    errors.address = "Address is required.";
  } else if (data.address.trim().length < 5) {
    errors.address = "Please enter a complete address.";
  }

  if (data.email?.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Enter a valid email address.";
    }
  }

  const firstError = errors.fullName || errors.mobile || errors.address || errors.email;

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    message: firstError,
  };
}
