// const BASE_URL = process.env.REACT_APP_BASE_URL
const BASE_URL = 'https://chill-zone-games.onrender.com/api/v1'
console.log("BASE_URL",BASE_URL)



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
