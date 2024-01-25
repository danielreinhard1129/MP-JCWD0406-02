import { transporter } from '@/lib/nodemailer';
import { statusTransaction } from '@/repositories/transaction/statusTransaction';
import path from 'path';
import fs from 'fs/promises';
import Handlebars from 'handlebars';

interface Data {
  uuid: any;
  statusId: number;
  email: string;
}

export const proofTransactionAction = async (data: Data) => {
  try {
    const { uuid, statusId, email } = data;
    const result = await statusTransaction(uuid, statusId);

    const templatePath = path.join(
      __dirname,
      '../../templates',
      'sendmail.hbs',
    );

    const templatesSource = await fs.readFile(templatePath, 'utf-8');

    const compileTemplate = Handlebars.compile(templatesSource);

    const html = compileTemplate({
      icon: 'https://res.cloudinary.com/dge4bmoog/image/upload/v1706064041/success-icon_vwwqfi.png',
      status: 'Success',
      msg1: 'We have received your payment for Order ID # 81279544',
      msg2: 'You will receive your e-ticket.',
    });

    await transporter.sendMail({
      from: 'sender',
      to: email,
      subject: 'Yay Payment success',
      html,
    });

    return {
      message: 'proof transaction success',
      status: 200,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
