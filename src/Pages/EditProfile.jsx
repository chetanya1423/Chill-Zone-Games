import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Home/Footer'
import { FormCard } from '../components/My Profile/FormCard'
import { setUser } from '../slices/profileSlice'

export const EditProfile = () => {
    const { token } = useSelector(state => state.auth)
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const  userInfo = JSON.parse(localStorage.getItem("user")) 
    // dispatch(setUser(userInfo))
    // console.log("user ", localStorage.getItem("token"))
    // console.log("token", useSelector(state => state.profile))


    useEffect(() => {
        if (!token) {
            navigate("/login")
        }

    }, [])

    return (
        <div className='w-full flex flex-col justify-center items-center '>
            <div className='w-11/12 mb-[3rem]'>
                <div className='w-full'>
                    <Navbar />
                </div>
                <div className='w-full'>
<FormCard/>
                </div>
            </div>
            <div className='w-full'>
                <Footer />
            </div>

        </div>
    )
}
