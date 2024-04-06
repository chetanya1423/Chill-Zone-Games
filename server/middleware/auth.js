const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const User = require("../models/User")

dotenv.config()


exports.auth = async (req, res, next) => {
 
    try {
        console.log("Auth")
        const token = req.cookies.token ||
            req.body.token ||
            req.header("Authorization").replace("Bearer ", "");
        // jb token nhi milega to 401 unauthorized response message dega


console.log("token",token)

        if (!token) {
            return res.status(401).json({
                success: false,
                message: `Token Missing`
            })
        }

        try {
            const decode = await jwt.verify(token, process.env.JWT_SECRET)
            console.log("decode ho rha h", decode)
            req.user = decode
        }
        catch (err) {
            return res.status(401).json({ success: false, message: "token is invalid" })
        }
next()
    }
    catch (err) {
        return res.status(401).json({
			success: false,
			message: `Something Went Wrong While Validating the Token`,
		});
    }
}