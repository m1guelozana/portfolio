import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json();

    if (!fromEmail) {
      throw new Error("FROM_EMAIL environment variable is not set");
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: subject,
      text: `Thank you for contacting me! \n\n ${message}`
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
