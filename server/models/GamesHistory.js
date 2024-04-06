const mongoose = require("mongoose")

const allGamesSchema = new mongoose.Schema({
    game: {
        type: String,
        required: true,
    },
    scores: [
        {
            firstPlayerScore: {
                type: Number,
                required: true
            },
            firstPlayerScoreDate: {
                type: Date,
                default: Date.now()
            },
            secondPlayerName: {
                type: String,
            },
            secondPlayerScore: {
                type: Number,

            },
            secondPlayerScoreDate: {
                type: Date,
                default: Date.now()
            },
            status:{
                type:String
            }

        }
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model("GamesHistory", allGamesSchema)