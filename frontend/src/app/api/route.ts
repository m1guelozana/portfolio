import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, subject, message } = req.body;
      if (!fromEmail) {
        throw new Error("FROM_EMAIL environment variable is not set");
      }

      const data = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: subject,
        text: `Thank you for contacting me! \n\n ${message}`
      });

      res.status(200).json(data);
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
