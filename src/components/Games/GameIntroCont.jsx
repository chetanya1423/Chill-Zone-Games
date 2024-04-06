import React from 'react'

export const GameIntroCont = () => {
  return (
    <div className=' mt-[4rem] flex flex-col gap-4'>
        <div className='flex justify-center items-center'>
            <p className='text-sm flex justify-start tracking-2 gap-1 items-center'>Home {">"} <span className='text-darkRed'>Games</span></p>
        </div>
        <div className=' flex flex-col justify-center items-center gap-2'>
            <h2 className='text-[33px]'>Welcome to the Game Zone at Chill Zone Games!</h2>
            <p className='text-sm text-center'>Welcome to the heart of Chill Zone Games, where the magic happens. Our game section is a carefully curated selection of the best titles across all genres, designed to ignite your passion for gaming and keep you entertained for hours on end.</p>
        </div>
    </div>
  )
}
