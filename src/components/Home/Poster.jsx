import React from 'react'
import poster from "../../Assets/Rectangle 4.png"
import dotImg from "../../Assets/Group 21.png"

export const Poster = () => {
    return (
        <div className='mt-[5rem] flex flex-col gap-12'>
            <div className='w-[50%] flex flex-col gap-[1.5rem]'>
                <h1 className='text-[30px] font-bold'>Fuel Your Adventure: Explore, Play, Conquer!</h1>
                <p className='text-md'>Step into the ultimate gaming sanctuary where excitement knows no bounds and fun reigns supreme let your creativity run wild with our endless customization options</p>
            </div>
            <div className='w-full relative'>
                <img src={poster} className='w-full' />
                <img src={dotImg} className=' absolute right-[6rem] top-[-4rem]' />
            </div>
        </div>
    )
}
