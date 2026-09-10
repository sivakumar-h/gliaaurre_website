import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

interface ContactPayload {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, organization, inquiryType, message } = body;

    // Validate presence
    if (!name || !email || !organization || !inquiryType || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Split comma-separated recipient list from env, e.g.
    // CONTACT_RECEIVER_EMAIL=hr1@gliaaurre.com,divyam@gliaaurre.com,isha@gliaaurre.com
    const recipients = (process.env.CONTACT_RECEIVER_EMAIL || "contact@gliaaurre.com")
      .split(",")
      .map((addr) => addr.trim())
      .filter(Boolean);

    await sendContactEmail({
      to: recipients,
      name,
      email,
      organization,
      inquiryType,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}
