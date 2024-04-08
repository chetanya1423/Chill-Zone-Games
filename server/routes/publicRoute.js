const express = require("express")

const {messageSend} = require("../controller/Message")


const router = express.Router()

router.post("/contactUs", messageSend)



module.exports = router