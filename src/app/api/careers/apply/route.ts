import { NextResponse } from "next/server";
import { JOB_OPENINGS } from "@/lib/careers-data";
import { sendApplicationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const portfolio = formData.get("portfolio")?.toString();
    const jobId = formData.get("jobId")?.toString();
    const message = formData.get("message")?.toString();
    const resumeFile = formData.get("resume") as File | null;

    // Validate essential fields
    if (!name || !email || !jobId || !message) {
      return NextResponse.json(
        { error: "Please provide all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!resumeFile) {
      return NextResponse.json(
        { error: "Please attach your resume file." },
        { status: 400 }
      );
    }

    // Determine job title
    let jobTitle = "General Engineering Exploration";
    const foundJob = JOB_OPENINGS.find((j) => j.id === jobId);
    if (foundJob) {
      jobTitle = foundJob.title;
    }

    // Convert file to base64 buffer for email attachment
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const resumeBase64 = buffer.toString("base64");

    const ownerEmail = process.env.OWNER_EMAIL || "careers@gliaaurre.com";

    // Dispatch email to website owner
    await sendApplicationEmail({
      to: ownerEmail,
      subject: `[New Candidate Application] ${name} - ${jobTitle}`,
      candidateName: name,
      candidateEmail: email,
      candidatePhone: phone,
      portfolioUrl: portfolio,
      jobTitle: jobTitle,
      message: message,
      resumeFileName: resumeFile.name,
      resumeFileSize: resumeFile.size,
      resumeFileBase64: resumeBase64,
      resumeFileType: resumeFile.type,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CAREERS_APPLY_API_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error submitting application." },
      { status: 500 }
    );
  }
}