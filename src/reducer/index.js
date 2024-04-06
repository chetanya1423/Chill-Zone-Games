import { combineReducers } from "@reduxjs/toolkit"

import authSlice from "../slices/authSlice"
import profileSlice from "../slices/profileSlice"
import ticTacToeSlice from "../slices/ticTacToeSlice"

const rootReducer = combineReducers({
 auth: authSlice,
 profile: profileSlice,
 tickTacToe: ticTacToeSlice
})

export default rootReducer
