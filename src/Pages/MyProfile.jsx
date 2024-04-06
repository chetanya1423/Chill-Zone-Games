import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaAngleRight } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import { Navbar } from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../slices/profileSlice';
import "../CSS/Main.css"

export const MyProfile = () => {
    const { userProfilePic, user } = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])

    const signOutHandler = () => {
        localStorage.clear()
        dispatch(setUser(null))
        navigate("/")
    }

    console.log(user)
    return (
        <div className='w-full flex flex-col  '>
            <div className='w-11/12'>
                <Navbar />
            </div>
            <div className='flex flex-col justify-center items-center h-full  min-h-[90vh]'>
                <div className='w-[400px] bgColor relative rounded-lg'>
                    <div className='w-full flex flex-col gap-4 absolute top-[-5rem]'>
                        <div className='flex justify-center items-center '>
                            <img
                                className='w-[10rem] rounded-full '
                                src={userProfilePic} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h2 className=' text-3xl font-bold text-center'>{user?.firstName}{" "}{user?.lastName}</h2>
                        </div>
                    </div>
                    <div className='w-full mt-[9rem]'>
                        <Link to="/dashboard/myprofile/editProfile">
                        <div className='flex justify-between items-center px-4 py-4 cursor-pointer'>
                            <div className='flex justify-start items-center gap-1'>
                                <FaEdit className=' text-xl' />
                                <p className=' text-md font-bold'>Edit Profile</p>
                            </div>
                            <FaAngleRight className=" text-lg" />
                        </div>
                        </Link>
                      
<Link to="/myProfile/changePassword">
<div className='flex justify-between items-center px-4 py-4 cursor-pointer'>
                            <div className='flex justify-start items-center gap-1'>
                                <RiLockPasswordLine className=' text-xl' />
                                <p className=' text-md font-bold'>Change Password</p>
                            </div>
                            <FaAngleRight className=" text-lg" />
                        </div>
</Link>
                       

                        {/* <div className='flex justify-between items-center px-4 py-4'>
                    <div className='flex justify-start items-center gap-1'>
                        <FaEdit className='text-gray-500 text-xl'/>
                        <p className='text-gray-500 text-md font-bold'>Edit Profile</p>
                    </div>
                    <FaAngleRight className="text-gray-500 text-lg"/>
                </div> */}

                        <div className='flex justify-between items-center px-4 py-4 mb-[1rem] cursor-pointer' onClick={() => signOutHandler()}>
                            <div className='flex justify-start items-center gap-1'>
                                <FaEdit className='text-darkRed text-xl' />
                                <p className='text-darkRed text-md font-bold'>Sign Out</p>
                            </div>
                            <GoSignOut className="text-darkRed text-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
