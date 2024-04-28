import React from 'react'
import pngImg from "../../Assets/GameOn_Img.jpeg"
import "../../CSS/Main.css"
import { Link } from 'react-router-dom'

export const FirstCont = () => {
    return (
        <div className='w-full'>
            {/* <div className='text-[50px] font-bold text-center text-darkYellow mt-[3rem] mb-[1rem]'>Dashboard</div> */}
            <div className='flex justify-center items-center w-full'>
                <div className=' w-full flex sm:flex-row flex-col-reverse justify-between items-center sm:gap-2 gap-8 p-4'>
                    <div className='sm:w-[52%] w-full flex flex-col justify-start items-center sm:gap-2 gap-6'>
                        <h1 className='lg:text-[3rem] sm:text-[30px] text-center font-[700] w-full lg:leading-[47px] sm:leading-[40px] text-3xl '>WELCOME TO CHILL ZONE GAME</h1>
                        <p className='sm:text-sm text-[12px] tracking-[1px] sm:text-left text-center'>Founded with a vision to redefine the gaming landscape, Chill Zone Games is more than just a website – it's a community. Our diverse collection of games caters to every interest and skill level, ensuring there's something for everyone to enjoy.</p>
                        <div className='w-full flex justify-start items-start gap-4 '>
                         
                                <div className='w-full sm:block flex justify-center items-center'>
                                <Link to="/games">
                                    <button className=' w-[100px] sm:text-sm text-[12px]  flex justify-center items-center py-2 px-4  getInDetailBtn rounded-lg cursor-pointer'>Play Now</button>
                                    </Link>
                                </div>
                          
                            {/* <div className='w-[100px]  flex justify-center items-center py-2 px-4   bg-white rounded-lg cursor-pointer'><p className='activeBtn font-bold'>View</p></div> */}
                        </div>
                    </div>
                    <div className='sm:w-[40%] w-full'>
                        <img src={pngImg} className='rounded-xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}
