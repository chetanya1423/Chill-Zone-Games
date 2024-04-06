import React, { useState } from 'react'

import { Navbar } from '../components/Navbar';
import { MessageForm } from '../components/Contact Us/MessageForm';
import {Footer} from "../components/Home/Footer"

export const ContactUs = () => {

    return (
        <div className='w-full flex flex-col justify-center items-center bg-bgGradientColor'>
            <div className='w-11/12 mb-[3rem]'>
                <Navbar />
            </div>
            <div className='w-full bg-white'>
                <MessageForm />
            </div>
            <div className='w-11/12 mb-[3rem]'>

            </div>
            <div className='w-full '>
                <Footer />
            </div>
        </div>
    )
}
