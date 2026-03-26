import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '15mb', // Increased for MyKad image attachments (up to 5MB each)
    },
  },
};

type Attachment = {
  filename: string;
  content: string; // Base64 content
  encoding: 'base64';
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { formType, formData, attachments } = req.body;

  if (!formData || !formType) {
    return res.status(400).json({ message: "Missing data" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for others
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const companyEmail = process.env.COMPANY_EMAIL || "sales@unifi-online.my";
  const customerEmail = formData["user-email"] || formData["email"];

  // Prepare the email body
  let emailBody = `New ${formType} Submission Received:\n\n`;
  Object.entries(formData).forEach(([key, value]) => {
    if (key !== "accept1" && key !== "user-email") {
      emailBody += `${key}: ${value}\n`;
    }
  });

  // Prepare standard attachments for Nodemailer
  const mailAttachments = (attachments || []).map((att: Attachment) => ({
    filename: att.filename,
    content: att.content,
    encoding: 'base64'
  }));

  try {
    // 1. Send to Company
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: companyEmail,
      subject: `[New ${formType}] - ${formData["user-name"] || "Customer Request"}`,
      text: emailBody,
      attachments: mailAttachments,
    });

    // 2. Send to Customer
    if (customerEmail) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: customerEmail,
        subject: `Your Unifi ${formType} Request has been received`,
        text: `Hello ${formData["user-name"] || "Customer"},\n\nThank you for reaching out to us. We have received your ${formType.toLowerCase()}. Our team will process your request and get back to you within 24 hours.\n\nSummary of your request:\n-----------------\n${emailBody}\n\nBest regards,\nUnifi Online Team`,
      });
    }

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email processing error:", error);
    return res.status(500).json({ message: "Failed to send email", error: error.message });
  }
}
