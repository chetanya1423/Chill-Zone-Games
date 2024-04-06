const express = require("express")
const router = express.Router()


const {
    sendotp,
    signup,
    signin,
    changePassword
} = require("../controller/Auth")
const {auth} = require("../middleware/auth")

const {
    resetPasswordToken,
    resetPassword
} = require("../controller/resetPassword")


router.post("/sendotp", sendotp)
router.post("/signup", signup)
router.post("/signin", signin)
router.post("/changePassword", auth, changePassword)


router.post("/reset-password-token", resetPasswordToken)
router.post("/reset-password", resetPassword)


module.exports = router