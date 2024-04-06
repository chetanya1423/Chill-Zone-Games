import React from 'react'
import pngImg from "../../Assets/GameOn_Img.jpeg"
import "../../CSS/Main.css"
import { Link } from 'react-router-dom'

export const FirstCont = () => {
  return (
   <div className='w-full'>
       {/* <div className='text-[50px] font-bold text-center text-darkYellow mt-[3rem] mb-[1rem]'>Dashboard</div> */}
            <div className='flex justify-center items-center w-full'>
                <div className=' w-full flex justify-between items-center gap-2 p-4'>
                    <div className='w-[52%] flex flex-col justify-start items-center gap-2'>
                        <h1 className='text-[3rem] font-[700] w-full leading-[47px] '>WELCOME TO CHILL ZONE GAME</h1>
                        <p className='text-sm'>Founded with a vision to redefine the gaming landscape, Chill Zone Games is more than just a website – it's a community. Our diverse collection of games caters to every interest and skill level, ensuring there's something for everyone to enjoy.</p>
                        <div className='w-full flex justify-start items-start gap-4 '>
                            <Link to="/games">
                            
                            <div className=' w-[100px]  flex justify-center items-center py-2 px-4  getInDetailBtn rounded-lg cursor-pointer'>Play Now</div>
                            </Link>
                            {/* <div className='w-[100px]  flex justify-center items-center py-2 px-4   bg-white rounded-lg cursor-pointer'><p className='activeBtn font-bold'>View</p></div> */}
                        </div>
                    </div>
                    <div className='w-[40%]'>
                        <img src={pngImg} className='rounded-xl'/>
                    </div>
                </div>
            </div>
        </div>
  )
}
