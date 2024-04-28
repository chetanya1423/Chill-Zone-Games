import React from 'react'
import ReactPlayer from 'react-player'

import { TiTick } from "react-icons/ti";
import "../../CSS/Games/AllGames.css"
import { Link } from 'react-router-dom';

export const AllGames = ({poster,direction,link,video,videoHad,videoPara,point1,point2,point3,point4,gameHad, gamePara1,gamePara2}) => {
    return (
        <div className="py-[5rem] sm:mt-[3rem] flex flex-col gap-[3rem] ">
            <div className={`flex justify-between sm:gap-0 gap-8  items-center ${direction === "right" ? "sm:flex-row-reverse flex-col " : "sm:flex-row flex-col"}`}>
                <div className=' sm:w-[47%] w-full'>
                    <ReactPlayer
                        // url="https://giphy.com/embed/NMmZdltHWoMbNqSXas/video"
                        url={video}
                        controls={true} // Show video controls
                        width="100%"
                        height="300px"
                        poster={poster}

                    />
                </div>
                <div className=' sm:w-[47%] w-full flex justify-start items-start'>
                    <div className='sm:w-[70%] w-full flex flex-col gap-4'>
                        <h2 className='sm:text-[30px] text-[22px] sm:text-left text-center'>{videoHad}</h2>
                        <p className='text-sm'>{videoPara}</p>
                        <div className=' flex flex-col justify-start items-start gap-2'>
                            <div className='flex justify-start items-center gap-2'>
                                <TiTick className='text-darkGreen' />
                                <p className='text-sm'>{point1}</p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <TiTick className='text-darkGreen' />
                                <p className='text-sm'>{point2}</p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <TiTick className='text-darkGreen' />
                                <p className='text-sm'>{point3}</p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <TiTick className='text-darkGreen' />
                                <p className='text-sm'>{point4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`flex sm:justify-between sm:gap-0 gap-8 justify-center items-center sm:mt-[6rem] ${direction === "right" ? "sm:flex-row-reverse flex-col-reverse" : "sm:flex-row flex-col-reverse"}`}>
                <div className=' flex flex-col gap-8 sm:w-[40%] w-full ' >
                    <h3 className='font-bold sm:text-[30px] text-[22px] sm:text-left text-center'>{gameHad}</h3>
                    <p className='sm:text-sm sm:text-left text-center text-[11px] tracking-[1px]'>{gamePara1}</p>
                    <p className='sm:text-sm sm:text-left text-center text-[11px] tracking-[1px]'>{gamePara2}</p>
                  <Link to={link}>
                  <div className='sm:block flex justify-center items-center'>
                  <button className='sm:text-sm text-[12px] py-2 px-6 rounded-xl bg-darkRed max-w-max'>Play Now</button>
                  </div>
                  </Link>
                </div>
                <div className=' sm:w-[40%] w-full sm:block flex justify-center items-center'>
                    <img src={poster} className='sm:h-[550px] h-[300px] rounded-xl object-cover' />
                </div>
            </div>
        </div>
    )
}


{/* 
<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/NMmZdltHWoMbNqSXas/video" width="480"></iframe></div> 
*/}
