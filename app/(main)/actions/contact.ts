"use server"

import * as React from "react"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill out all required fields.",
      }
    }

    const { error } = await resend.emails.send({
      from: "Scholar Studio <contact@scholarstudio.com>",
      to: ["scholarstudios@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: React.createElement(EmailTemplate, { name, email, phone, message }),
      replyTo: email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "Failed to send your message. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Your message has been sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
 