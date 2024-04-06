import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import OtpInput from 'react-otp-input';
import "../../CSS/Main.css"


export const MessageForm = () => {

    const [loading, setLoading] = useState(false)

    const changeHandler = (e) => {

    }
    return (
        <div className='my-[3rem] flex flex-col gap-4'>
            <h1 className='text-3xl text-center text-black'>Hii Gamers</h1>
            <p className='text-sm text-center text-black'>Need Assistance? Contact Chill Zone Games Today.</p>
            <form className='flex justify-center items-center'>
                <div className='flex flex-col gap-3  w-[500px] justify-center items-center mt-[2rem] '>
                    <div className='flex w-full gap-2 justify-center items-center'>
                        <div className='flex flex-col w-full justify-start items-start gap-1'>
                            <label htmlFor='firstName' className='text-black'>First Name</label>
                            <input
                                id='firstName'
                                type='text'
                                name='firstName'
                                onChange={(e) => changeHandler(e)}
                                required
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
