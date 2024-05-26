import nodemailer from 'nodemailer';
import logger from './logger'

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // if port 465 change to true.
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: '"Your Name" <your-email@example.com>',
    to,
    subject,
    text
  }
  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Èmail sent: ${info.response}`);
  } catch(error){
    logger.error(`Error sending mail: ${error}`);
  }
}