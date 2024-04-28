import React from 'react'

export const GameIntroCont = () => {
  return (
    <div className=' mt-[4rem] flex flex-col gap-4'>
        <div className='flex justify-center items-center'>
            <p className='text-sm flex justify-start tracking-2 gap-1 items-center'>Home {">"} <span className='text-darkRed'>Games</span></p>
        </div>
        <div className=' flex flex-col justify-center items-center gap-2'>
            <h2 className='sm:text-[33px] md:text-[28px] text-[25px] sm:text-start text-center '>Welcome to the Game Zone at Chill Zone Games!</h2>
            <p className='sm:text-sm text-[11px] text-center'>Welcome to the heart of Chill Zone Games, where the magic happens. Our game section is a carefully curated selection of the best titles across all genres, designed to ignite your passion for gaming and keep you entertained for hours on end.</p>
        </div>
    </div>
  )
}
