const mongoose = require("mongoose")

const historySchema = new mongoose.Schema({
    game: {
        type: String,
        required: true,
    },
    scores: [
        {
            totalScore: {
                type: Number,
                required: true
            },
            scoreDate: {
                type: Date,
                default: Date.now()
            },
            // secondPlayerName: {
            //     type: String,
            // },
            // secondPlayerScore: {
            //     type: Number,

            // },
            // secondPlayerScoreDate: {
            //     type: Date,
            //     default: Date.now()
            // }

        }
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model("History", historySchema)