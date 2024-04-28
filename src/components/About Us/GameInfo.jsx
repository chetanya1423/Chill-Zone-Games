import React from 'react'
import gameImg from "../../Assets/GameOn_Img.jpeg"

export const GameInfo = () => {
    return (
        <div className='flex justify-between sm:flex-row flex-col items-center gap-10 px-6 py-10 w-11/12 mx-auto'>
            <img src={gameImg} className='sm:w-[400px] w-full h-full rounded-xl' />
            <div className=' flex flex-col gap-6 sm:w-[50%] w-full '>
                {/* <p className='text-sm font-bold text-black'>Lorem ipsum</p> */}
                <h2 className='font-semibold sm:text-[30px] text-[22px] text-black leading-[30px] text-center'>Score with Confidence: Trusting Our Scoring System.</h2>
                <p className='sm:text-sm text-[12px] text-black leading-[20px] tracking-[1px]'>With our transparent and reliable scoring system, players can trust that their hard-earned scores are accurately recorded and celebrated. Join us at Chill Zone Games and let your skills shine as you climb the ranks and make your mark in the gaming world.</p>
            </div>
        </div>
    )
}
