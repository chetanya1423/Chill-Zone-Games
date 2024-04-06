const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            secure: false,
        })

        let info = await transporter.sendMail({
            form: `"Game | Chetanya Pathak"<${process.env.MAIL_USER}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })

        console.log(info.response)
        return info
    }
    catch (err) {
        console.log(err.message)
        return err.message
    }

}

module.exports = mailSender