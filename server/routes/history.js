const express = require("express")
const { createHistory } = require("../controller/History")
const {createAllGamesHistory} = require("../controller/AllGamesHistory")
const { auth } = require("../middleware/auth")
const router = express.Router()




router.post("/createHistory", auth,createHistory)
router.post("/createAllGameHistory", auth,createAllGamesHistory)



module.exports = router