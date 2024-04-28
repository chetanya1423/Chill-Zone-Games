import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { authEndPoint } from '../services/api'
import { apiConnector } from '../services/apiConnector'
import toast from 'react-hot-toast'

export const ForgotPassowrd = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { token } = useSelector(state => state.auth)
    const { FORGOTPASSWORD_API } = authEndPoint
    const [email, setEmail] = useState('')



    useEffect( ()=>{
        console.log("navi")
    if(token){
      navigate("/dashboard")
      console.log("navi")
    }
      },[] )

    const changeHandler = (e) => {
        setEmail(e.target.value)
        console.log("email", email)
    }

    const submitHandler = async (e) => {
        setLoading(true)
        console.log("click")
        e.preventDefault();

        try {
            const response = await apiConnector("POST", FORGOTPASSWORD_API, { email })
            console.log("Send Reset Password Link", response)
            if (response?.status === 200) {
                toast.success("Reset Password Link Sended.")
            }
            setLoading(false)
        }
        catch (error) {
            console.log(error)
            toast.error("Unavailble To send reset link.")
            setLoading(false)
        }
    }
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-11/12'>
                <Navbar />

                <div className='body'>

                    <div className='sm:w-[500px] w-[95%] flex flex-col justify-center items-center'>
                        <div class="glass-panel flex flex-col gap-8 ">
                            <div className='text-4xl text-darkYellow'>Forgot Password</div>
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


                                    <div className='flex justify-end sm:w-[80%] w-[95%] mt-4 items-center'>


                                        {
                                            loading ?
                                                <div className='bg-darkYellow py-2 px-5 rounded-xl w-[84] flex justify-center items-center'>
                                                    <div className='loader'></div>
                                                </div>
                                                :
                                                <button type='submit' className='bg-darkYellow py-2 px-5 rounded-xl'>Submit</button>
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
