/**
 * WhatsApp Cloud API (Meta) helpers.
 * Docs: https://developers.facebook.com/docs/whatsapp/cloud-api
 */

async function uploadMedia(pdfBuffer: Buffer, filename: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!token || !phoneNumberId) {
    throw new Error(
      "Missing WhatsApp env vars: WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID"
    );
  }

  const form = new FormData();
  form.append("messaging_product", "whatsapp");
  form.append("type", "application/pdf");
  form.append(
    "file",
    new Blob([new Uint8Array(pdfBuffer)], { type: "application/pdf" }),
    filename
  );

  const res = await fetch(
    `https://graph.facebook.com/v21.0/${phoneNumberId}/media`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || "Failed to upload WhatsApp media");
  }

  return data.id as string;
}

function normalizePhone(phone: string) {
  // Expect E.164 without + for WhatsApp Cloud API, e.g. 919061222123
  return phone.replace(/\D/g, "");
}

export async function sendBookingPdfToWhatsApp(
  toPhone: string,
  pdfBuffer: Buffer,
  bookingId: string,
  customerName: string
) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const adminPhone = process.env.WHATSAPP_ADMIN_PHONE; // optional: also notify admin

  if (!token || !phoneNumberId) {
    throw new Error(
      "Missing WhatsApp env vars: WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID"
    );
  }

  const filename = `MaidEazy-Booking-${bookingId}.pdf`;
  const mediaId = await uploadMedia(pdfBuffer, filename);
  const recipients = [normalizePhone(toPhone)];

  if (adminPhone) {
    recipients.push(normalizePhone(adminPhone));
  }

  const results = [];

  for (const to of recipients) {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to,
          type: "document",
          document: {
            id: mediaId,
            filename,
            caption: `MaidEazy booking confirmed for ${customerName}. Booking ID: ${bookingId}`,
          },
        }),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data?.error?.message || `Failed to send WhatsApp message to ${to}`
      );
    }
    results.push(data);
  }

  return results;
}
