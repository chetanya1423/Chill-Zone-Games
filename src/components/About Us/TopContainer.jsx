import React from 'react'
import gameImg from "../../Assets/Rectangle 6.png"
import { Link } from 'react-router-dom'

export const TopContainer = ({ heading, paragraph }) => {
    return (
        <div className=' min-h-[90vh] w-full sm:gap-0 gap-8  flex sm:flex-row flex-col-reverse  justify-between items-center relative max-w-max px-6 py-10'>

            <div className='sm:w-[40%] w-full flex flex-col justify-between z-10  items-start gap-6'>


                <p className='text-sm sm:flex hidden justify-start tracking-2 gap-1 items-center '>Home {">"} <span className='text-darkRed'>About Us</span></p>
                <h1 className=' lg:leading-[60px] md:leading-[50px] text-[22px] sm:text-start text-center sm:leading-[40px] font-bold lg:text-[45px] md:text-[30px] sm:text-[25px]'>{heading}</h1>
                <p className='sm:text-sm text-[11px] tracking-[1px] sm:text-left text-center'>{paragraph}</p>
                <Link to="/games" className='w-full'>
                   <div className='sm:block flex justify-center items-center w-full '>
                   <button className=' max-w-max getInDetailBtn  sm:text-md text-[13px] py-2 px-3 rounded-full'>Get more details</button>
                   </div>
                </Link>
            </div>
            <div className='sm:w-[55%] w-full h-full flex justify-center items-center '>
                <img src={gameImg} className='lg:w-[500px]  h-[100%]' />
            </div>
        </div>
    )
}
