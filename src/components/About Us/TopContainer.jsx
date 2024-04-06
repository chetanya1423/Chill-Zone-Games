import React from 'react'
import gameImg  from "../../Assets/Rectangle 6.png"
import { Link } from 'react-router-dom'

export const TopContainer = ({ heading, paragraph }) => {
    return (
        <div className=' min-h-[90vh] w-full  flex  justify-between items-start relative max-w-max px-6 py-10'>

            <div className='w-[40%] flex flex-col justify-between z-10 h-[300px]items-start gap-6'>


                <p className='text-sm flex justify-start tracking-2 gap-1 items-center'>Home {">"} <span className='text-darkRed'>About Us</span></p>
                <h1 className=' leading-[60px] font-bold text-[45px]'>{heading}</h1>
                <p className='text-sm'>{paragraph}</p>
               <Link to="/games">
               <button className=' max-w-max getInDetailBtn text-md py-2 px-3 rounded-full'>Get more details</button>
               </Link>
            </div>
            <div>
            <img src={gameImg} className='w-[500px] h-[100%]'/>
            </div>
            </div>
    )
}
