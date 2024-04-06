import React from 'react'
import gameImg from "../../Assets/GameOn_Img.jpeg"

export const GameInfo = () => {
    return (
        <div className='flex justify-between items-center gap-10 px-6 py-10 w-11/12 mx-auto'>
            <img src={gameImg} className='w-[400px] h-full rounded-xl' />
            <div className=' flex flex-col gap-6 w-[50%] '>
                {/* <p className='text-sm font-bold text-black'>Lorem ipsum</p> */}
                <h2 className='font-semibold text-[28px] text-black leading-[40px] text-center'>Score with Confidence: Trusting Our Scoring System.</h2>
                <p className='text-sm text-black leading-[20px] tracking-[1px]'>With our transparent and reliable scoring system, players can trust that their hard-earned scores are accurately recorded and celebrated. Join us at Chill Zone Games and let your skills shine as you climb the ranks and make your mark in the gaming world.</p>
            </div>
        </div>
    )
}
