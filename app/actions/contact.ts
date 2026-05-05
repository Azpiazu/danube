"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormState = {
  success: boolean
  message: string
} | null

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all fields",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  try {
    // Send email to the owner (stored in env variable - not exposed to client)
    await resend.emails.send({
      from: "Danube Waterfront <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "jonathanazpiazu@gmail.com",
      replyTo: email,
      subject: `New inquiry from ${name} - Danube Waterfront`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f7fafc; padding: 15px; border-radius: 8px;">${message}</p>
          <hr style="border: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="color: #718096; font-size: 12px;">This message was sent from the Danube Waterfront website contact form.</p>
        </div>
      `,
    })

    return {
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}
