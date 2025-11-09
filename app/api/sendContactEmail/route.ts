import nodemailer from "nodemailer";

async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) throw new Error("reCAPTCHA secret key not set");

  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );
  const data = await res.json();
  return data.success;
}

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      country,
      services,
      recaptchaToken,
    } = await req.json();

    // ✅ Verify reCAPTCHA first
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "reCAPTCHA verification failed",
        }),
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USERNAME;
    const emailPass = process.env.EMAIL_APP_PASSWORD;

    if (!emailUser || !emailPass) {
      return new Response(
        JSON.stringify({ error: "Email credentials not configured" }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const ownerMailOptions = {
      from: `"${firstName} ${lastName}" <${emailUser}>`,
      replyTo: email,
      to: emailUser,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Services:</strong> ${services}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const replyMailOptions = {
      from: `"CoreX Vision" <${emailUser}>`,
      to: email,
      subject: `Thanks for contacting us, ${firstName}!`,
      html: `
        <p>Hi ${firstName},</p>
        <p>Thanks for reaching out! We’ve received your message and will respond soon.</p>
        <br/>
        <p>Best regards,<br/><strong>CoreX Vision</strong></p>
      `,
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(replyMailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
