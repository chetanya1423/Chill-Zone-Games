import React from 'react'
import poster from "../../Assets/db4d123c4b390965f684f22d4bf13849 1.png"
import phoneImg from "../../Assets/Group 48.png"
import pcGame from "../../Assets/Group 49.png"

export const AvailableGame = () => {
  return (
    <div className='w-[100%] relative flex flex-col justify-center items-center max-h-max'>
         
        <div className='w-full    '>
            <img src={poster} className='w-full  object-fill'/>
        </div>
        <div className=' absolute w-[60%] flex flex-col gap-5'>
            <h1 className='text-[30px] text-center'>Gear Up for Gaming Glory: Your Adventure Awaits!</h1>
            <p className='text-sm text-center'>Get ready for timeless fun with our classic game selection. Challenge friends, sharpen your skills, and enjoy endless entertainment!</p>
            <div className='flex justify-center items-center gap-8 mt-10 z-20'>
                <div className=' flex flex-col justify-center items-center gap-4'>
                    <img src={phoneImg} className=' w-[50px]'/>
                    <p className='text-sm'>Mobile Game</p>
                </div>
                <div className=' flex flex-col justify-center items-center gap-4'>
                    <img src={pcGame} className=' w-[50px]'/>
                    <p className='text-sm'>PC Game</p>
                </div>
            </div>
        </div>
        <div className=' absolute top-0 opacity-[0.3] bg-[#000] h-[100%] w-[40%] right-0 backdrop-blur-[1px]'>

        </div>
       
    </div>
  )
}
