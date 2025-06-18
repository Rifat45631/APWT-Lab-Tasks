//mailer.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';


@Injectable()
export class MailerService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'arafinutsha2@gmail.com', 
        pass: 'ifxk uqpb pmet mumx',   
      },
    });
  }

  async sendEmailVerification(to: string, token: string): Promise<void> {
    const link = `https://642f-103-187-94-48.ngrok-free.app/auth/verify-email?token=${token}`;
    console.log(`Preparing to send email to ${to} with token: ${token}`);

    try {
        const info = await this.transporter.sendMail({
          from: '"EduQuest" <arafinutsha2@gmail.com>',
          to,
          subject: 'Verify Your Email',
          html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
              <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <h2 style="text-align: center; color: #333;">Welcome to EduQuest!</h2>
                <p style="font-size: 16px; color: #555;">Thank you for registering. Please confirm your email address by clicking the button below:</p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${link}" style="background-color: #4CAF50; color: white; padding: 14px 24px; text-decoration: none; border-radius: 6px; font-size: 16px;">Verify Email</a>
                </div>
                <p style="font-size: 14px; color: #999;">If you didn’t request this, you can safely ignore this email.</p>
                <p style="font-size: 14px; color: #999;">— The EduQuest Team</p>
              </div>
            </div>
          `,
        });

      console.log(`Email sent: ${info.messageId}`);
    } catch (error) {
      console.error('Failed to send email:', error.message);
      throw new InternalServerErrorException('Failed to send verification email');
    }
  }
}
