import React from 'react'
import poster from "../../Assets/Rectangle 4.png"
import dotImg from "../../Assets/Group 21.png"

export const Poster = () => {
    return (
        <div className='mt-[5rem] flex flex-col gap-12'>
            <div className='sm:w-[50%] w-full flex flex-col gap-[1.5rem]'>
                <h1 className='sm:text-[30px] text-[22px] sm:text-left text-center font-bold'>Fuel Your Adventure: Explore, Play, Conquer!</h1>
                <p className='sm:text-md text-sm sm:text-left text-center '>Step into the ultimate gaming sanctuary where excitement knows no bounds and fun reigns supreme let your creativity run wild with our endless customization options</p>
            </div>
            <div className='w-full relative'>
                <img src={poster} className='w-full' />
                <img src={dotImg} className=' sm:block hidden absolute right-[6rem] top-[-4rem]' />
            </div>
        </div>
    )
}
