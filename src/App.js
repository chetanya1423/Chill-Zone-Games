import React, { useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Pages/Home";
import { LogIn } from "./Pages/Auth/LogIn";
import { SignUp } from "./Pages/Auth/SignUp";
import { About } from "./Pages/About";
import { Games } from "./Pages/Games";
import { ContactUs } from "./Pages/ContactUs";
import { EditProfile } from "./Pages/EditProfile";
import { Dashboard } from "./Pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserProfilePic } from "./slices/profileSlice";
import { RockPaperScissor } from "./Pages/RockPaperScissor";
import { Basic } from "./Pages/Rock Paper Scissor/Basic";
import { Advance } from "./Pages/Rock Paper Scissor/Advance";
import { setToken } from "./slices/authSlice";
import { ForgotPassowrd } from "./Pages/ForgotPassowrd";
import { ResetPassword } from "./Pages/ResetPassword";
import { TicTacToeStart } from "./Pages/Tic Tac Toe/TicTacToeStart";
import { TicTacToe } from "./Pages/TicTacToe";
import SnakeGame from "./Pages/Snake Game/SnakeGame";
import { MyProfile } from "./Pages/MyProfile";
import { ChangePassword } from "./Pages/ChangePassword";





function App() {
  const dispatch = useDispatch()
  const { user, userProfilePic } = useSelector(state => state.profile)
  const location = useLocation()

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("token"))


    try {
      const userProfileImg = JSON.parse(localStorage.getItem("profilePic"))
      dispatch(setUserProfilePic(userProfileImg))
      const userInfo = JSON.parse(localStorage.getItem("user"))
      dispatch(setUser(userInfo))

      const userToken = JSON.parse(localStorage.getItem("token"))
      dispatch(setToken(userToken))
    }
    catch (err) {
      dispatch(setUserProfilePic(localStorage.getItem("profilePic")))
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))))

      dispatch(setToken(JSON.parse(localStorage.getItem("token"))))
    }

    console.log(user)

  }, [location.pathname])
  return (
    <div className="App ">
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgot-password" element={<ForgotPassowrd />}></Route>
          <Route path="/myProfile/changePassword" element={<ChangePassword />}></Route>
          <Route path="/update-password/:id" element={<ResetPassword />}></Route>

          <Route path="/aboutUs" element={<About />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/dashboard/myprofile/editProfile" element={<EditProfile />}></Route>
          <Route path="/dashboard/myprofile" element={<MyProfile />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/rock-paper-scissor" element={<RockPaperScissor />}></Route>
          <Route path="/rock-paper-scissor/basic" element={<Basic />}></Route>
          <Route path="/rock-paper-scissor/advance" element={<Advance />}></Route>
          <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
          <Route path="/tic-tac-toe/playing" element={<TicTacToeStart />}></Route>
          <Route path="/snake" element={<SnakeGame />}></Route>

        </Routes>

      </div>

    </div>
  );
}

export default App;
