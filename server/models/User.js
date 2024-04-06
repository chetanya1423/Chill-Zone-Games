const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        mobile: {
            type: Number,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
       
        image: {
            type: String
        },
        active: {
            type: Boolean,
            default: true,
        },
        token: {
            type: String,
          },
          resetPasswordExpires: {
            type: Date,
          },
        // additionalDetails: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref: "Profile",
        //   },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Profile",
          },

    },
  { timestamps: true }
)



module.exports = mongoose.model("user", userSchema)