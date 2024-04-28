const BASE_URL = process.env.REACT_APP_BASE_URL
console.log("BASE_URL",BASE_URL)


// export const authEndPoint = {
//     SENDOTP_API :"http://localhost:4000/api/v1/auth/sendotp",
//     SIGNUP_API :  "http://localhost:4000/api/v1/auth/signup",
//     SIGNIN_API :  "http://localhost:4000/api/v1/auth/signin",
// UPDATEPROFILEPICTURE : "http://localhost:4000/api/v1/profile/updateDisplayPicture",
// UPDATEPROFILE_API :  "http://localhost:4000/api/v1/profile/updateProfile",
// FORGOTPASSWORD_API :  "http://localhost:4000/api/v1/auth/reset-password-token",
// RESETPASSWORD_API :  "http://localhost:4000/api/v1/auth/reset-password",
// CHANGEPASSWORD_API :  "http://localhost:4000/api/v1/auth/changePassword"

// }

// export const historyEndPoint = {
// SENDHISTORY_API : "http://localhost:4000/api/v1/history/createHistory",
// SENDAllGAMEHISTORY_API :  "http://localhost:4000/api/v1/history/createAllGameHistory",
// GETALLGAMEHISTORY_API : "http://localhost:4000/api/v1/profile/getAllGamesHistoryDetails"

// }


// export const publicRouteEndPoint = {
//     CONTACTUS_API :  "http://localhost:4000/api/v1/public/contactUs", 
//     }

export const authEndPoint = {
    SENDOTP_API :BASE_URL + "/auth/sendotp",
    SIGNUP_API : BASE_URL +   "/auth/signup",
    SIGNIN_API : BASE_URL +  "/auth/signin",
UPDATEPROFILEPICTURE : BASE_URL +  "/profile/updateDisplayPicture",
UPDATEPROFILE_API :  BASE_URL +  "/profile/updateProfile",
FORGOTPASSWORD_API : BASE_URL +  "/auth/reset-password-token",
RESETPASSWORD_API : BASE_URL +  "/auth/reset-password",
CHANGEPASSWORD_API : BASE_URL + "/auth/changePassword"

}

export const historyEndPoint = {
SENDHISTORY_API :BASE_URL +  "/history/createHistory",
SENDAllGAMEHISTORY_API : BASE_URL +  "/history/createAllGameHistory",
GETALLGAMEHISTORY_API :BASE_URL +  "/profile/getAllGamesHistoryDetails"

}


export const publicRouteEndPoint = {
    CONTACTUS_API : BASE_URL +  "/public/contactUs", 
    }
