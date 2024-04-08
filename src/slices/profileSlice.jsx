import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  loading: false,
  userProfilePic:"",
  allGamesHistory:null,
  historyGameName:""

}

 const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    },
    setUserProfilePic(state, value) {
      state.userProfilePic = value.payload
    },
    setUserProfileGender(state, value) {
      state.user.additionalDetails.gender = value.payload
    },
    setAllGamesHIstory(state, value) {
      state.allGamesHistory = value.payload
    },
    setHistoryGameName(state, value){
state.historyGameName = value.payload
    },
    setUpdateData(state, value){
      if(value.payload.target.name === "dateOfBirth" || value.payload.target.name === "gender"){
        console.log("value.payload.target.value",value.payload.target.value)
        state.user.additionalDetails[value.payload.target.name] = value.payload.target.value
      }
   
      else if(value.payload.target.name === "contactNumber" ){
        state.user.additionalDetails[value.payload.target.name] = value.payload.target.value.slice(0,10)
      }
      else if(value.payload.target.name === "mobile"){
        state.user[value.payload.target.name] = value.payload.target.value.slice(0,10)
      }
      else{
        state.user[value.payload.target.name] = value.payload.target.value
      }
   
    }
  },
})

export const { setUser, setLoading, setUpdateData,setUserProfilePic,setUserProfileGender,setAllGamesHIstory,setHistoryGameName } = profileSlice.actions

export default profileSlice.reducer
