import React from 'react'

import { FaFire } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const ScoreCard = ({ scoreImgs, gameName,link }) => {
  return (
   <Link to={link}>
   <div className='flex flex-col gap-3 w-[30vw]'>
      <div className=''>
        <img 
        src={scoreImgs}
        className='rounded-xl'
        />
      </div>
      <p className='flex justify-center items-center sm:gap-2 gap-1 text-center sm:text-xl text-md'><span><FaFire/></span>{gameName}</p>
    </div>
   </Link>

    
  )
}
