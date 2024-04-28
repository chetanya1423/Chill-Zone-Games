import React from 'react'
import goldiImage from "../../Assets/Shadow Game.png"

export const Creator = () => {
    return (
        <div className='w-full mt-10'>
            <div className='sm:text-[50px] text-[28px] font-bold text-center text-darkYellow'>Game Creator</div>
            <div className='flex flex-col justify-center items-center gap-6 mt-6'>
                <div className='w-[400px] flex flex-col bg-black justify-center items-center gap-4  p-4 rounded-xl'>
                    <div className='w-[150px] h-[150px] '>
                        <img src={goldiImage} className=' object-cover '/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='sm:text-2xl text-xl text-darkYellow text-center'>Goldi Singh</h2>
                        <p className='sm:text-md text-sm text-center'>B.Tech (CSE)</p>
                        <p className='sm:text-md text-sm text-center'>Aligarh College of Engineering & Technology</p>
                    </div>
                </div>


                <div className='w-[400px] flex flex-col bg-black justify-center items-center gap-4  p-4 rounded-xl'>
                    <div className='w-[150px] h-[150px] '>
                        <img src={goldiImage} className=' object-cover '/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 '>
                        <h2 className='sm:text-2xl text-xl text-darkYellow text-center'>Gunjan Upadhyay</h2>
                        <p className='sm:text-md text-sm text-center'>B.Tech (CSE)</p>
                        <p className='sm:text-md text-sm text-center'>Aligarh College of Engineering & Technology</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
