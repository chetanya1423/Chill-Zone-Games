const express = require("express")
const app = express()
 const userRoutes = require("./routes/user")
 const historyRoute = require("./routes/history")
 const profileRoute = require("./routes/profile")
 const database = require("./config/database")
 const cookieParser = require("cookie-parser")
 const cors = require("cors")
 const dotenv = require("dotenv")
 const sendotp = require("./controller/Auth")
const Profile = require("./models/Profile")
const {cloudinaryConnect} = require("./config/cloudinary")
const fileUpload = require("express-fileupload");

 const PORT = process.env.PORT || 3001

 dotenv.config()

 database.connect()



 app.use(express.json())
 app.use(cookieParser())
 app.use(
    cors({
        origin: "*",
        credentials:true,
    })
 )
 app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

// Connecting to cloudinary
cloudinaryConnect();

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/history", historyRoute);
app.use("/api/v1/profile", profileRoute);
// app.post("/api/v1/auth/sendotp",sendotp)

app.get("/", (req,res)=>{
    return res.json({
        success:true,
        message: "Your server is up and running....",
    })
})

app.listen(PORT,() => {
    console.log(`App is listening at ${PORT}`);
})