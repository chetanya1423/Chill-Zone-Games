import React, { useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import OtpInput from 'react-otp-input';
import "../../CSS/Main.css"
import { useDispatch, useSelector } from 'react-redux';
import { publicRouteEndPoint } from '../../services/api';
import { apiConnector } from '../../services/apiConnector';
import toast from 'react-hot-toast';


export const MessageForm = () => {
    const { CONTACTUS_API } = publicRouteEndPoint
    const { token } = useSelector(state => state.auth)
    const { user } = useSelector(state => state.profile)
    const [formData, setFormData] = useState({})
    const [publicFormData, setPublicFormData] = useState({})
    const [formMessageData, setFormMessageData] = useState({})
    console.log(token)
    console.log(user)

    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (user) {
            setFormData(user)
        }
    }, [user])

    const changeHandler = (e) => {
        if (user) {
            const cloneFormData = formMessageData
            cloneFormData[e.target.name] = e.target.value
            setFormMessageData(cloneFormData)
            console.log(formMessageData)
        }
        else {
            const clonePublicFormData = publicFormData
            clonePublicFormData[e.target.name] = e.target.value
            setPublicFormData(clonePublicFormData)
            console.log(publicFormData)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("click")
        setLoading(true)
        try {
            if (user) {
                const response = await apiConnector("POST", CONTACTUS_API, {
                    firstName:formData.firstName,
                    lastName:formData.lastName,
                    email:formData.email,
                    ...formMessageData
                })
                console.log("Message Send ", response)
                toast.success("Message Sended")
            }
            else{
                const response = await apiConnector("POST", CONTACTUS_API, {
                   ...publicFormData
                })
                console.log("Message Send ", response)
                toast.success("Message Sended")
            }
            


            setLoading(false)
        }
        catch (error) {
            setLoading(false)
            toast.error("Unable to send message")
console.log(error)
        }
    }
    return (
        <div className='my-[3rem] flex flex-col gap-4'>
            <h1 className='text-3xl text-center text-black'>Hii Gamers</h1>
            <p className='text-sm text-center text-black'>Need Assistance? Contact Chill Zone Games Today.</p>
            <form className='flex justify-center items-center' onSubmit={submitHandler}>
                <div className='flex flex-col gap-3  sm:w-[500px] w-[95%] justify-center items-center mt-[2rem] '>
                    <div className='flex w-full gap-2 justify-center items-center'>
                        <div className='flex flex-col w-full justify-start items-start gap-1'>
                            <label htmlFor='firstName' className='text-black'>First Name</label>
                            <input
                                id='firstName'
                                type='text'
                                name='firstName'
                                onChange={(e) => changeHandler(e)}
                                required
                                value={user ? formData?.firstName : publicFormData?.firstName}
                                disabled={formData?.firstName}
                                className='px-2 w-full bg-black  text-white border rounded-xl py-2 border-black outline-none'
                            />
                        </div>
                        <div className='flex flex-col w-full justify-start items-start gap-1'>
                            <label htmlFor='lastName' className='text-black'>Last Name</label>
                            <input
                                id='lastName'
                                type='text'
                                name='lastName'
                                onChange={(e) => changeHandler(e)}
                                required

                                value={user ? formData?.lastName : publicFormData?.lastName}
                                disabled={formData?.lastName}
                                className='px-2 w-full bg-black  text-white border rounded-xl py-2 border-black outline-none'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col w-full justify-start items-start gap-1'>
                        <label htmlFor='email' className='text-black'>
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            onChange={(e) => changeHandler(e)}
                            required

                            disabled={formData?.email}
                            value={user ? formData?.email : publicFormData?.email}
                            className='px-2 w-full bg-black  text-white border rounded-xl py-2 border-black outline-none'
                        />
                    </div>
                    <div className='flex flex-col w-full  justify-start items-start gap-1'>
                        <label htmlFor='message' className='text-black'>
                            Message
                        </label>
                        <textarea
                            type='text'
                            id='message'
                            name='message'
                            onChange={(e) => changeHandler(e)}
                            required
                            value={user ? formMessageData?.message : publicFormData?.message}
                           
                            className='px-2 w-full h-[150px] text-white border rounded-xl py-2 border-black bg-black outline-none'

                        />
                    </div>



                    <div className='flex justify-end w-full mt-4 items-end'>
                        {
                            loading ?
                                <div className='bgColor py-2 px-5 rounded-xl w-[84] flex justify-center items-center'>
                                    <div className='loader'></div>
                                </div>
                                :
                                <input type='submit' className='bgColor py-2 px-5 rounded-xl ' />
                        }



                    </div>

                </div>
            </form>
        </div>
    )
}
