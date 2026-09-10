import { NextResponse } from "next/server";

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

    // In a production environment with email provider configured:
    // e.g. await sendEmail({ to: process.env.CONTACT_RECEIVER_EMAIL, ... })
    // For now, securely log transmission details for server observability:
    console.log("[INQUIRY_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      organization,
      inquiryType,
      messageLength: message.length,
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
