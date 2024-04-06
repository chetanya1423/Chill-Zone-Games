const GamesHistory = require("../models/GamesHistory")
const User = require("../models/User")

exports.createAllGamesHistory = async (req, res) => {
    try {
        const userId = req.user.id

        console.log("User id", userId)

        let {
            game,
            firstPlayerScore,
            secondPlayerName,
            secondPlayerScore,
            status
        } = req.body

        console.log(" datas", game,
            firstPlayerScore,
            secondPlayerName,
            secondPlayerScore,
            status)

        if (!game || !firstPlayerScore) {
            return res.status(400).json({
                success: false,
                message: "All Fields are Mandatory",
            })
        }
        const prevHistory = await GamesHistory.findOne({
            userId,
            game
        })

        console.log("prev history", prevHistory)

        let result;
        const formData = {
            
            firstPlayerScore:firstPlayerScore,
            secondPlayerName: secondPlayerName,
            secondPlayerScore : secondPlayerScore,
            status : status
        }

        if (!prevHistory) {

         

            result = await GamesHistory.create({
                userId,
                game,
                scores: [formData]
            })
        }
        else {
            result = await GamesHistory.updateOne({
                userId,
                game
            },
                {
                    $push: {
                        scores: [formData]
                    }
                }
            )
        }

        return res.status(200).json({
            success: true,
            message: "Score added.",
        })


    }
    catch (error) {
        console.log(error)
        res
            .status(500)
            .json({
                success: false,
                message: error.message || "Internal Server Errer"
            })
    }
}
exports.getAllGamesHistoryDetails = async (req, res) => {
    try {
        const id = req.user.id
        console.log("Id is here",id)
        //   const userDetails = await User.findById(id)
        //     .populate("additionalDetails")
        //     .exec()
        //   console.log(userDetails)
        //   res.status(200).json({
        //     success: true,
        //     message: "User Data fetched successfully",
        //     data: userDetails,
        //   })

        const historyDetail = await GamesHistory.find({ userId: id}).populate()
        console.log("History Detail", historyDetail)
        return res.status(200).json({
            success: true,
            message: "User Data fetched successfully",
            data: historyDetail
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

