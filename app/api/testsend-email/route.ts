export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import React from "react";

console.log('🔐 RESEND_API_KEY:', process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const location = formData.get("location") as string;
    const subject = formData.get("subject") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // Use React.createElement if not using .tsx:
    const { data, error } = await resend.emails.send({
      from: "Haus & Garten <info@yourdomain.de>",
      to: ["your@email.com"],
      subject: `Neue Anfrage: ${subject}`,
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
      console.error('❌ Resend error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (e: any) {
    console.error('💥 Crash in handler:', e);
    return NextResponse.json({ error: 'Server error', message: e?.message || e }, { status: 500 });
  }
}