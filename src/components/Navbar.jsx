import React from 'react'
import logo from "../Assets/ChillZoneGame-Logo.jpeg"
import { Link, useLocation } from 'react-router-dom'
import "../CSS/Main.css"
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../slices/profileSlice'

export const Navbar = () => {
    const { token } = useSelector(state => state.auth)
    const {user, userProfilePic} = useSelector(state => state.profile)
    // console.log(localStorage.getItem("user"))
    // const dispatch = useDispatch()
    //  const  profilePic = JSON.parse(localStorage.getItem("profilePic")) 
    // dispatch(setUser(userInfo))
    const location = useLocation()
   

    
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center p-2'>
                <div className=' w-[94px]'>
                    <img src={logo} className='rounded-lg' />
                </div>
                <div className=''>
                    <ul className='flex justify-center items-center gap-8'>
                        <Link to="/">
                            <li className={`${location.pathname === "/" ? "activeBtn" : "text-white"}  activeBtnHover cursor-pointer`}>Home</li>
                        </Link>
                        <Link to="/games">
                            <li className={`${location.pathname === "/games" ? "activeBtn" : "text-white"} activeBtnHover cursor-pointer`}>Games</li>
                        </Link>
                        <Link to="/aboutUs">
                            <li className={`${location.pathname === "/aboutUs" ? "activeBtn" : "text-white"} activeBtnHover cursor-pointer`}>About Us</li>
                        </Link>

                        <Link to="/contactUs">
                            <li className={`${location.pathname === "/contactUs" ? "activeBtn" : "text-white"} activeBtnHover cursor-pointer`}>Contact Us</li>
                        </Link>
                    </ul>
                </div>
                {
                    token ?
                        <div className='flex justify-center items-center gap-8'>
                            <Link to="/dashboard">
                                <div className='text-white  flex justify-center items-center py-2 px-4  getInDetailBtn rounded-lg cursor-pointer'>Dashboard</div>
                            </Link>
                            
                            <div>
                               <Link to="/dashboard/myprofile/">
                               <img 
                                src={userProfilePic}
                                className='w-[35px] rounded-full'
                                />
                               </Link>
                            </div>

                        </div>
                        :
                        <div className='flex justify-center items-center gap-8'>
                            <Link to="/login">
                                <div className='text-white  flex justify-center items-center py-2 px-4  getInDetailBtn rounded-lg cursor-pointer'>Log In</div></Link>
                            <Link to="/signup">
                                <div className='text-white  flex justify-center items-center py-2 px-4  getInDetailBtn rounded-lg cursor-pointer'> Sign Up</div>
                            </Link>
                        </div>
                }


            </div>
        </div>
    )
}
