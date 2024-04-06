const History = require("../models/History")
const User = require("../models/User")

exports.createHistory = async (req, res) => {
    try {
        const userId = req.user.id

        console.log("User id", userId)

        let {
            game,
            score
        } = req.body


        if (!game || !score) {
            return res.status(400).json({
                success: false,
                message: "All Fields are Mandatory",
            })
        }
        const prevHistory = await History.findOne({
            userId,
            game
        })

        console.log("prev history", prevHistory)

        let result

        if (!prevHistory) {

            result = await History.create({
                userId,
                game,
                scores: [score]
            })
        }
        else {
            result = await History.updateOne({
                userId,
                game
            },
                {
                    $push: {
                        scores: score
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
exports.getAllUserHistoryDetails = async (req, res) => {
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

        const historyDetail = await History.find({ userId: id}).populate()
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

