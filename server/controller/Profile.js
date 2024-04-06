
const Profile = require("../models/Profile")
const User = require("../models/User")
const { uploadImageToCloudinary } = require("../utils/imageUploader")


exports.getAllUserDetails = async (req, res) => {
  try {
    console.log("Get users detail")
    const id = req.user.id
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec()
    console.log(userDetails)
    return res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: userDetails,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


//   exports.updateProfile = async (req, res) => {
//     try {
//       const {
//         firstName,
//         lastName ,
//         dateOfBirth = "",
//         about = "",
//         contactNumber = "",
//         gender = "",
//       } = req.body
//       const id = req.user.id

//       // Find the profile by id
//       const userDetails = await User.findById(id)
//       console.log("User Details",userDetails)
//       const profile = await Profile.findById(userDetails.additionalDetails)
//       console.log("User Profile",profile)

//       const user = await User.findByIdAndUpdate(id ,{
//        firstName,
//        lastName
//       }
//       //   {
//       //   firstName,
//       //   lastName,
//       // }
//       )

// console.log("user data",user)

//       await user.save()

//       // Update the profile fields
//       profile.dateOfBirth = dateOfBirth
//       profile.about = about
//       profile.contactNumber = contactNumber
//       profile.gender = gender

//       // Save the updated profile
//       await profile.save()

//       // Find the updated user details
//       const updatedUserDetails = await User.findById(id)
//         .populate("additionalDetails")
//         .exec()

//       return res.json({
//         success: true,
//         message: "Profile updated successfully",
//         updatedUserDetails,
//       })
//     } catch (error) {
//       console.log(error)
//       return res.status(500).json({
//         success: false,
//         error: error.message,
//       })
//     }
//   }


exports.updateProfile = async (req, res) => {
  try {



    const {
      firstName,
      lastName,
      mobile,

    } = req.body

    const { dateOfBirth,
      about,
      contactNumber,
      gender } = req.body.additionalDetails

    const id = req.user.id



    // Find the profile by id
    const userDetails = await User.findById(id)
    console.log("User Details", userDetails)
    const profile = await Profile.findById(userDetails.additionalDetails)
    console.log("User Profile", profile)

    const user = await User.findByIdAndUpdate(id, {
      firstName,
      lastName,
      mobile
    }
      //   {
      //   firstName,
      //   lastName,
      // }
    )

    console.log("user data", user)

    await user.save()

    // Update the profile fields
    profile.dateOfBirth = dateOfBirth
    profile.about = about
    profile.contactNumber = contactNumber
    profile.gender = gender

    // Save the updated profile
    await profile.save()

    // Find the updated user details
    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec()

    return res.json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}


exports.updateDisplayPicture = async (req, res) => {
  try {
    console.log("Profile")
    // console.log(req.body.displayPicture)
    console.log("File", req)
    console.log("displayPicture", req.files)
    const displayPicture = req.files.displayPicture

    // const displayPicture = req.body.displayPicture
    const userId = req.user.id
    console.log("user Id", userId)
    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    )


    console.log(" image ", image)
    const updatedProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { image: image.secure_url },
      { new: true }
    )

    console.log("updateProfile", updatedProfile)

    return res.status(200).send({
      success: true,
      message: `Image Updated successfully`,
      data: updatedProfile,
    })

  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


// exports.noneUserProfile = async (req, res) => {
//   try {
//     const id = req.user.id
//     const img = req.body
//     console.log("img", img)
//     const userFind = await User.findById(id)
//     console.log("userFind", userFind)
//     userFind.image = img
//     userFind.save()
//     console.log("userFind", userFind)
//     // const userProfileUpdate = await User.findByIdAndUpdate(
//     //   { _id: id },
//     //   { image: img },
//     //   { new: true }
//     // )
//     // userProfileUpdate.save()
//     // console.log("profile", userProfileUpdate)
//   }
//   catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     })
//   }
// }