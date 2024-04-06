const User = require("../models/User")
const OTP = require("../models/OTP")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const otpGenerator = require("otp-generator")
require("dotenv").config()
const Profile = require("../models/Profile")


const signup = async (req, res) => {
    console.log("sign up")
    try {
        const {
            firstName,
            lastName,
            email,
            mobile,
            password,
            confirmPassword,
            otp,
        } = req.body

        if (!firstName ||
            !lastName ||
            !email ||
            !mobile ||
            !password ||
            !confirmPassword ||
            !otp
        ) {
            return res.status(403).send({
                success: false,
                message: "All Fields are required"
            })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password do not match. Please try again.",
            })
        }

        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please sign in to continue.",
            })
        }

        // const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1)
        // console.log(response)
        // if (response.length === 0) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "The OTP is not valid"
        //     })
        // }

        const hashPassword = await bcrypt.hash(password, 10)

        // let approved = ""
        // approved === "Instructor" ? (approved = false) : (approved = true)

        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null,
            games:null
          })

console.log("profile data",profileDetails)


        const user = await User.create({
            firstName,
            lastName,
            email,
            mobile,
            password: hashPassword,
            additionalDetails: profileDetails._id,
            image: ""
        })


        return res.status(200).json({
            success: true,
            user,
            message: "User registered successfully",
        })
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again."
        })
    }
}


const sendotp = async (req, res) => {
    try {
        const { email } = req.body


        const checkUserPresent = await User.findOne({ email })



        if (checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: `User is Already Registered`,
            })
        }

        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        })
        const result = await OTP.findOne({ otp: otp })
        console.log("Result is Generate OTP Func")
        console.log("OTP", otp)
        console.log("Result", result)
        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
            })
        }
        const otpPayload = { email, otp }
        const otpBody = await OTP.create(otpPayload)
        console.log("OTP Body", otpBody)
        res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            // otp,
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: false, error: error.message })
    }
}


const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the required Fields`
            })
        }


        const user = await User.findOne({ email }).populate("additionalDetails")
        if (!user) {
            return res.status(401).json({
                success: false,
                message: `User is not Registered with Us Please SignUp to Continue`,
            })
        }

        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                {
                    email: user.email, id: user._id
                }
                ,
                process.env.JWT_SECRET,
                {
                    expiresIn: "365d"
                }
            )


            user.token = token
            user.password = undefined

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: `User Login Success`,
            })
        }
        else {
            return res.status(401).json({
                success: false,
                message: `Password is incorrect`,
            })
        }


    }
    catch (error) {
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
            success: false,
            message: `Login Failure Please Try Again`,
        })
    }
}


const changePassword = async (req, res) => {
    try {
        const userDetail = await User.findById(req.user.id)
console.log(userDetail)
        const { oldPassword, newPassword } = req.body
        const isPasswordMatch = await bcrypt.compare(
            oldPassword,
            userDetail.password
        )

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "The password is incorrect"
            })
        }
        

        const encrytedPassword = await bcrypt.hash(newPassword, 10)
        const updatedUserDetails = await User.findByIdAndUpdate(
            req.user.id,
            { password: encrytedPassword },
            { new: true }
        )

        // try{
        //     const emailRespone = await mailSender(
        //         updatedUserDetails.email,
        //         "Password for your account has been updated",
        //         passwor
        //     )
        // }

        return res
            .status(200)
            .json({ success: true, message: "Password updated successfully" })

    }
    catch (error) {
       
        console.error("Error occurred while updating password:", error)
        return res.status(500).json({
            success: false,
            message: "Error occurred while updating password",
            error: error.message,
        })
    }
}


module.exports = {
    sendotp,
    signup,
    signin,
    changePassword
};
