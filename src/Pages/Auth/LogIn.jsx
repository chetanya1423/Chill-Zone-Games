import React, { useEffect, useState } from 'react'
import "../../CSS/Auth/LogIn.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Navbar } from '../../components/Navbar';
import { apiConnector } from '../../services/apiConnector';
import { authEndPoint } from '../../services/api';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from "../../slices/authSlice"
import { setUser, setUserProfilePic } from '../../slices/profileSlice';
import "../../Button Loader/ButtonLoader.css"
import { Link, useNavigate } from 'react-router-dom';

export const LogIn = () => {
    const [formData, setFormData] = useState({})
    const { SIGNIN_API, UPDATEPROFILEPICTURE } = authEndPoint
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { token } = useSelector(state => state.auth)
    const {user} = useSelector(state =>state.profile)

    useEffect(() => {
        if (token) {
            navigate("/dashboard")
        }
    }, [])

    const changeHandler = (e) => {
        const copyFormData = formData

        copyFormData[e.target.name] = e.target.value
        setFormData(copyFormData)
        console.log(formData)
    }

    const submitHandler = async (e) => {
        setLoading(true)
        console.log("click")
        e.preventDefault();
        try {
            const response = await apiConnector("POST", SIGNIN_API, {
                ...formData
            })

            console.log("LOGIN API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Login Successful")

            dispatch(setToken(response.data.token))
            // if(response.status === 200){
            //     try{
            //         if(!response.data.user.image){
            //             const formData = new FormData()
            //             const imageFile =`https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
            //             formData.append("displayPicture", imageFile)
            //             const updateImage = await apiConnector("PUT",UPDATEPROFILEPICTURE,  formData,
            //             {
            //                 "Content-Type": "multipart/form-data",
            //                 Authorization: `Bearer ${response.data.token}`,
            //             }
            //           )
            //           console.log(
            //             "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
            //             response
            //           )
            //         }
            //     }
            //     catch (error) {
            //         console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)

            //       }
            // }
            const userImage = response.data?.user?.image 
                ? response.data.user.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`

                console.log("image",userImage)
            dispatch(setUser({ ...response.data.user, image: userImage }))
            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/dashboard")
            localStorage.setItem("profilePic", JSON.stringify(userImage))
            dispatch(setUserProfilePic(userImage))
            setLoading(false)


        }
        catch (error) {
            console.log("LOGIN API ERROR............", error)
            toast.error("Login Failed")
            setLoading(false)
        }
    }
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-11/12'>
                <Navbar />

                <div className='body'>

                    <div className='sm:w-[500px] w-[95%] flex flex-col justify-center items-center'>
                        <div class="glass-panel ">
                            <div className='text-4xl text-darkYellow'>Log In</div>
                            <form className='w-full' onSubmit={(e) => submitHandler(e)}>
                                <div className='flex flex-col gap-3  w-full justify-center items-center'>
                                    <div className='sm:w-[80%] w-[95%] flex flex-col justify-start items-start gap-2'>

                                        <label htmlFor='email' className='text-darkYellow'>
                                            Email
                                        </label>
                                        <input
                                            className='px-2 w-full bg-transparent  text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'
                                            id='email'
                                            type='email'
                                            onChange={(e) => changeHandler(e)}
                                            name='email'
                                            required
                                        />
                                    </div>

                                    <div className='flex flex-col sm:w-[80%] w-[95%] justify-start items-start gap-2'>
                                        {/* <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="Email" variant="outlined"
                                    className='LogInPage' />

                            </Box> */}
                                        <label htmlFor='password' className='text-darkYellow'>
                                            Password
                                        </label>
                                        <input
                                            className='px-2 w-full bg-transparent text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'
                                            id='password'
                                            type='password'
                                            onChange={(e) => changeHandler(e)}
                                            name='password'
                                            required
                                        />
                                    </div>
                                    <div className='flex justify-between sm:w-[80%] w-[95%] mt-4 items-center'>
                                        <Link to="/forgot-password">
                                            <div className=' max-w-max cursor-pointer text-darkYellow'>Forgot Password</div>
                                        </Link>


                                        {
                                            loading ?
                                                <div className='bg-darkYellow py-2 px-5 rounded-xl w-[84] flex justify-center items-center'>
                                                    <div className='loader'></div>
                                                </div>
                                                :
                                                <button type='submit' className='bg-darkYellow py-2 px-5 rounded-xl'>Log In</button>
                                        }

                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
