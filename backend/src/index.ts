import { sendEmail } from './email-service';
import express  from 'express';
import dotenv from "dotenv"
import logger from './logger';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).send('Missing required fields: to, subject, text');
  }

  try{
    await sendEmail(to, subject, text);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    logger.error(`Failed to send email: ${error}`);
    res.status(500).send('Failed to send email');
  }
});

app.listen(port, () =>{
  logger.info(`Server listening on: http://localhost:${port}`);
});