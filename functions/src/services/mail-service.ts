import * as nodemailer from 'nodemailer';
import { EnvironmentVariables } from '../models/environment-variables';

export class MailService {
  constructor(private config: EnvironmentVariables) {}

  public sendContactEmail(name: string, email: string, message: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.config.mailaccount.key,
        pass: this.config.mailpassword.key
      }
    });

    const mailOptions = {
      from: 'conferencesmdonline@gmail.com',
      to: this.config.adminmail.key,
      subject: 'Conferences MD | Contact Message',
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `
    };

    transporter.sendMail(mailOptions, (err: Error | null, info: any) => {
      if (!err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }

  public sendSuggestEmail(eventName: string, eventLink: string, email: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.config.mailaccount.key,
        pass: this.config.mailpassword.key
      }
    });

    const mailOptions = {
      from: 'conferencesmdonline@gmail.com',
      to: this.config.adminmail.key,
      subject: 'Conferences MD | Event Suggested',
      html: `
        <p>Event: ${eventName}</p>
        <p>Event Link: ${eventLink}</p>
        <p>Contact Email: ${email}</p>
        `
    };

    transporter.sendMail(mailOptions, (err: Error | null, info: any) => {
      if (!err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
}
