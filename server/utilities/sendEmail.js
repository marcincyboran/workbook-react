const nodemailer = require('nodemailer');

module.exports = async options => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    let info = await transporter.sendMail({
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: options.to,
        subject: options.subject,
        text: options.message,
    });

    // console.log('Message sent: %s', info.messageId);
    console.log('Message sent: ', info.messageId);
};
