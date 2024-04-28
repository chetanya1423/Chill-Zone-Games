import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authEndPoint } from '../services/api'
import { apiConnector } from '../services/apiConnector'
import toast from 'react-hot-toast'

export const ResetPassword = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { token } = useSelector(state => state.auth)
    const [formData, setFormData] = useState({})
    const { RESETPASSWORD_API } = authEndPoint
    const loaction = useLocation()

    useEffect( ()=>{
        console.log("navi")
    if(token){
      navigate("/dashboard")
      console.log("navi")
    }
      },[] )

    const changeHandler = (e) => {
        const copyFormData = formData

        copyFormData[e.target.name] = e.target.value
        setFormData(copyFormData)
    }

    const submitHandler = async (e) => {
        setLoading(true)
        console.log("click")
        e.preventDefault();
        const token = loaction.pathname.split("/").at(-1)


        if (formData?.password === formData?.confirmPassword) {
            try {
                const response = await apiConnector("POST", RESETPASSWORD_API, { ...formData, token })
                console.log("Send Reset Password Link", response)
                if (response?.status === 200) {
                    toast.success("Password Reset")
                    navigate("/login")
                }
                setLoading(false)
            }
            catch (error) {
                console.log(error)
                toast.error("Unavailble To send reset link.")
                setLoading(false)
            }
        }
        else {
            toast.error("Please Enter Same Password")
        }
        setLoading(false)

    }
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-11/12'>
                <Navbar />

                <div className='body'>

                    <div className='sm:w-[500px] w-[90%] flex flex-col justify-center items-center'>
                        <div class="glass-panel flex flex-col gap-8">
                            <div className='text-4xl text-darkYellow'>Reset Password</div>
                            <form className='w-full' onSubmit={(e) => submitHandler(e)}>
                                <div className='flex flex-col gap-3  w-full justify-center items-center'>

                                    <div className='flex flex-col sm:w-[80%] w-[95%] justify-start items-start gap-2'>

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

                                    <div className='flex flex-col sm:w-[80%] w-[95%] justify-start items-start gap-2'>

                                        <label htmlFor='confirmPassword' className='text-darkYellow'>
                                            Confirm Password
                                        </label>
                                        <input
                                            className='px-2 w-full bg-transparent text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'
                                            id='confirmPassword'
                                            type='password'
                                            onChange={(e) => changeHandler(e)}
                                            name='confirmPassword'
                                            required
                                        />
                                    </div>
                                    <div className='flex justify-end sm:w-[80%] w-[95%] mt-4 items-center'>


                                        {
                                            loading ?
                                                <div className='bg-darkYellow py-2 px-5 rounded-xl w-[84] flex justify-center items-center'>
                                                    <div className='loader'></div>
                                                </div>
                                                :
                                                <button type='submit' className='bg-darkYellow py-2 px-5 rounded-xl'>Reset</button>
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
