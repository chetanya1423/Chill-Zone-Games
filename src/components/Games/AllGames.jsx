import React from 'react'
import ReactPlayer from 'react-player'

import { TiTick } from "react-icons/ti";
import "../../CSS/Games/AllGames.css"
import { Link } from 'react-router-dom';

export const AllGames = ({poster,direction,link,video,videoHad,videoPara,point1,point2,point3,point4,gameHad, gamePara1,gamePara2}) => {
    return (
        <div className="py-[5rem] mt-[3rem] flex flex-col gap-[3rem] ">
            <div className={`flex justify-between items-center ${direction === "right" && "flex-row-reverse"}`}>
                <div className=' w-[47%]'>
                    <ReactPlayer
                        // url="https://giphy.com/embed/NMmZdltHWoMbNqSXas/video"
                        url={video}
                        controls={true} // Show video controls
                        width="100%"
                        height="300px"
                        poster={poster}

                    />
                </div>
                <div className=' w-[47%]  flex justify-start items-start'>
                    <div className='w-[70%] flex flex-col gap-4'>
                        <h2 className='text-[30px]'>{videoHad}</h2>
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

            <div className={`flex justify-between items-center mt-[6rem] ${direction === "right" && "flex-row-reverse"}`}>
                <div className=' flex flex-col gap-8 w-[40%] ' >
                    <h3 className='font-bold text-[30px]'>{gameHad}</h3>
                    <p className='text-sm tracking-[1px]'>{gamePara1}</p>
                    <p className='text-sm tracking-[1px]'>{gamePara2}</p>
                  <Link to={link}>
                  <button className='text-sm py-2 px-6 rounded-xl bg-darkRed max-w-max'>Play Now</button>
                  </Link>
                </div>
                <div className=' w-[40%]'>
                    <img src={poster} className='h-[550px] rounded-xl object-cover' />
                </div>
            </div>
        </div>
    )
}


{/* 
<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/NMmZdltHWoMbNqSXas/video" width="480"></iframe></div> 
*/}
