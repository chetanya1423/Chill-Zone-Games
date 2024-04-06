import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstPlayerScore:0,
    secondPlayerScore:0
 
};

 const ticTacToeSlice = createSlice({
  name: "tictactoe",
  initialState: initialState,
  reducers: {
    setFirstPlayerScore(state, value) {
      state.firstPlayerScore = value.payload;
    },
    setSecondPlayerScore(state, value) {
      state.secondPlayerScore = value.payload;
    }
   
  },
});

export const { setFirstPlayerScore, setSecondPlayerScore } = ticTacToeSlice.actions;

export default ticTacToeSlice.reducer;
