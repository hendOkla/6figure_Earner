import nodemailer from 'nodemailer';



export default async function (req, res) {
    // Your code here
    const { mailData } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'server.it-homs.com',
        port: 587,
        secure: false,
        auth: {
          user: '6figure@6figure-earner.net',
          pass: 'UMQR9prms',
        },
    });

    const message = {
        from: '6figure@6figure-earner.net',
        to: mailData.email,
        subject: 'Test Email',
        text: ` Hello ${mailData.username}.
                Thanks for signing up to 6figure site.
                Your account has been activated.
                Your username is: ${mailData.username}.
                Your password is: ${mailData.password}.
                Your Share link is: ${mailData.link} `
    };

    try {
        await transporter.sendMail(message);
        res.status(200).json({status:200, message: 'Email sent successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status:404, message: 'Failed to send email11111.' });
    }
}