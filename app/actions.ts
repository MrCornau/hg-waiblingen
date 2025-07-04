"use server"

interface ContactFormResult {
  success: boolean
  message?: string
}

export async function submitContactForm(formData: FormData): Promise<ContactFormResult> {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const location = formData.get("location") as string
  const subject = formData.get("subject") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !phone || !location || !subject || !service || !message) {
    return {
      success: false,
      message: "Bitte füllen Sie alle Pflichtfelder aus.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    }
  }

  // In a real application, you would:
  // 1. Save to database
  // 2. Send email notification
  // 3. Log the submission
  // 4. Implement spam protection

  console.log("Contact form submission:", {
    name,
    email,
    phone,
    location,
    subject,
    service,
    message,
    timestamp: new Date().toISOString(),
  })

  // Simulate successful submission
  return {
    success: true,
    message: "Ihre Nachricht wurde erfolgreich gesendet!",
  }
}
