interface EmailPayload {
  to: string | string[];
  subject: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone?: string;
  portfolioUrl?: string;
  jobTitle: string;
  message: string;
  resumeFileName: string;
  resumeFileSize: number;
  resumeFileBase64?: string;
  resumeFileType?: string;
}

export async function sendApplicationEmail(payload: EmailPayload): Promise<{ success: boolean; id?: string }> {
  const {
    to,
    subject,
    candidateName,
    candidateEmail,
    candidatePhone,
    portfolioUrl,
    jobTitle,
    message,
    resumeFileName,
    resumeFileSize,
    resumeFileBase64,
    resumeFileType,
  } = payload;

  const resendApiKey = process.env.RESEND_API_KEY;
  const sendgridApiKey = process.env.SENDGRID_API_KEY;

  // 1. If Resend API is configured
  if (resendApiKey) {
    try {
      const formattedSize = (resumeFileSize / (1024 * 1024)).toFixed(2) + " MB";
      const attachments = resumeFileBase64
        ? [
            {
              filename: resumeFileName,
              content: resumeFileBase64,
            },
          ]
        : [];

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.FROM_EMAIL || "GliaAurre Careers <careers@gliaaurre.com>",
          to: Array.isArray(to) ? to : [to],
          subject: subject,
          html: `
            <div style="font-family: monospace, sans-serif; background: #08090C; color: #F4F6F8; padding: 24px; border-radius: 8px;">
              <h2 style="color: #00E5FF; margin-bottom: 4px;">New Candidate Application</h2>
              <p style="color: #94A3B8; font-size: 13px; margin-top: 0;">GliaAurre Engineering Portal</p>
              <hr style="border: 0; border-top: 1px solid #222933; margin: 16px 0;" />
              
              <p><strong>Target Role:</strong> <span style="color: #00E5FF;">${jobTitle}</span></p>
              <p><strong>Candidate Name:</strong> ${candidateName}</p>
              <p><strong>Email Address:</strong> <a href="mailto:${candidateEmail}" style="color: #00E5FF;">${candidateEmail}</a></p>
              ${candidatePhone ? `<p><strong>Phone:</strong> ${candidatePhone}</p>` : ""}
              ${portfolioUrl ? `<p><strong>Portfolio / GitHub:</strong> <a href="${portfolioUrl}" style="color: #00E5FF;">${portfolioUrl}</a></p>` : ""}
              <p><strong>Resume File:</strong> ${resumeFileName} (${formattedSize})</p>
              
              <div style="margin-top: 16px; background: #13161C; padding: 16px; border-radius: 6px; border: 1px solid #222933;">
                <p style="color: #94A3B8; font-size: 12px; text-transform: uppercase; margin-top: 0;">Candidate Statement:</p>
                <p style="white-space: pre-wrap; font-family: sans-serif; font-size: 14px; line-height: 1.5;">${message}</p>
              </div>
            </div>
          `,
          attachments,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        return { success: true, id: data.id };
      }
    } catch (err) {
      console.error("[EMAIL_DISPATCH_ERROR_RESEND]", err);
    }
  }

  // 2. Structured Server Logging for Observability & Development
  console.log("==================================================");
  console.log("📥 NEW JOB APPLICATION RECEIVED FOR WEBSITE OWNER");
  console.log("==================================================");
  console.log(`To: ${Array.isArray(to) ? to.join(", ") : to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Role: ${jobTitle}`);
  console.log(`Candidate: ${candidateName} <${candidateEmail}>`);
  if (candidatePhone) console.log(`Phone: ${candidatePhone}`);
  if (portfolioUrl) console.log(`Portfolio: ${portfolioUrl}`);
  console.log(`Resume: ${resumeFileName} (${(resumeFileSize / 1024).toFixed(1)} KB)`);
  console.log(`Message:\n${message}`);
  console.log("==================================================");

  return { success: true, id: "mock-" + Date.now() };
}

interface ContactEmailPayload {
  to: string | string[];
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<{ success: boolean; id?: string }> {
  const { to, name, email, organization, inquiryType, message } = payload;

  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.FROM_EMAIL || "GliaAurre Contact <contact@gliaaurre.com>",
          to: Array.isArray(to) ? to : [to],
          reply_to: email,
          subject: `[New Inquiry] ${inquiryType} - ${name}`,
          html: `
            <div style="font-family: monospace, sans-serif; background: #08090C; color: #F4F6F8; padding: 24px; border-radius: 8px;">
              <h2 style="color: #00E5FF; margin-bottom: 4px;">New Contact Inquiry</h2>
              <p style="color: #94A3B8; font-size: 13px; margin-top: 0;">GliaAurre Engineering Portal</p>
              <hr style="border: 0; border-top: 1px solid #222933; margin: 16px 0;" />

              <p><strong>Inquiry Type:</strong> <span style="color: #00E5FF;">${inquiryType}</span></p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #00E5FF;">${email}</a></p>
              <p><strong>Organization:</strong> ${organization}</p>

              <div style="margin-top: 16px; background: #13161C; padding: 16px; border-radius: 6px; border: 1px solid #222933;">
                <p style="color: #94A3B8; font-size: 12px; text-transform: uppercase; margin-top: 0;">Message:</p>
                <p style="white-space: pre-wrap; font-family: sans-serif; font-size: 14px; line-height: 1.5;">${message}</p>
              </div>
            </div>
          `,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        return { success: true, id: data.id };
      }
    } catch (err) {
      console.error("[EMAIL_DISPATCH_ERROR_RESEND_CONTACT]", err);
    }
  }

  console.log("==================================================");
  console.log("📥 NEW CONTACT INQUIRY RECEIVED");
  console.log("==================================================");
  console.log(`To: ${Array.isArray(to) ? to.join(", ") : to}`);
  console.log(`Inquiry Type: ${inquiryType}`);
  console.log(`Name: ${name} <${email}>`);
  console.log(`Organization: ${organization}`);
  console.log(`Message:\n${message}`);
  console.log("==================================================");

  return { success: true, id: "mock-" + Date.now() };
}