require("dotenv").config()
const emailContactTemplate = require("../mail/templates/emailContactTemplate")
const nodemailer = require("nodemailer");
const ContactUs =  require("../models/ContactUs")

exports.messageSend = async (req, res) => {
    try {

        const { firstName, lastName, email, message } = req.body

        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All Field are Required."
            })
        }

        const transporter = nodemailer.createTransport({
            host: `${process.env.MAIL_HOST}`,

            secure: false,
            auth: {
                user: `${process.env.MAIL_USER}`,
                pass: `${process.env.MAIL_PASS}`,
            },
        });

        async function main() {
            const info = await transporter.sendMail({
                from: `${email}`,
                to: `${process.env.MAIL_USER}`,
                subject: "Chill Zone Game ✔",
                html: `${emailContactTemplate(firstName, lastName, email, message)}`,
            });
        }

        main().catch(console.error);

        const storeMessage = await ContactUs.create({
            firstName,
            lastName,
            email,
            message
        })

        return res
            .status(200)
            .json({ success: true, message: "Message send Successfully", data:storeMessage })

    }
    catch (error) {
        console.log(error)
        return res
        .status(400)
        .json({ success: false, message: "Cannot Send Message" })


    }
}