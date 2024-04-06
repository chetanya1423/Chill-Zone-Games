const express = require("express")
const { getAllUserDetails, updateProfile,updateDisplayPicture} = require("../controller/Profile")
const { auth } = require("../middleware/auth")
const { getAllUserHistoryDetails } = require("../controller/History")
const {getAllGamesHistoryDetails} = require("../controller/AllGamesHistory")


const router = express.Router()




router.get("/getAllUserHistoryDetails", auth , getAllUserHistoryDetails )
router.get("/getAllGamesHistoryDetails", auth , getAllGamesHistoryDetails )
router.put("/updateProfile", auth, updateProfile)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
// router.put("/noneUserProfile", auth, noneUserProfile)


module.exports = router