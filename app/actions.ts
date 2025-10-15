"use server";

import { redirect } from "next/navigation"

import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const location = formData.get("location") as string;
  const subject = formData.get("subject") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("website_url") as string;

if (honeypot) {
  console.warn("🚫 Bot detected via honeypot:", honeypot);
  return { success: true }; // pretend it worked to not give feedback to bots
}

  if (!name || !email || !message) {
    return { success: false, message: "Bitte füllen Sie alle Pflichtfelder aus." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["info@hg-waiblingen.de"],
      subject: `Neue Kontaktanfrage: ${subject}`,
      react: React.createElement(EmailTemplate, {
        name,
        email,
        phone,
        location,
        subject,
        service,
        message,
      }),
    });

    if (error) {
      console.error("❌ E-Mail-Fehler:", error);
      return { success: false, message: "E-Mail konnte nicht gesendet werden." };
    }

   

  } catch (err) {
    console.error("💥 Serverfehler:", err);
    return { success: false, message: "Interner Serverfehler" };
  }
  redirect("/success")
}