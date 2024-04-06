import React from 'react'
import goldiImage from "../../Assets/Shadow Game.png"

export const Creator = () => {
    return (
        <div className='w-full mt-10'>
            <div className='text-[50px] font-bold text-center text-darkYellow'>Game Creator</div>
            <div className='flex flex-col justify-center items-center gap-6 mt-6'>
                <div className='w-[400px] flex flex-col bg-black justify-center items-center gap-4  p-4 rounded-xl'>
                    <div className='w-[150px] h-[150px] '>
                        <img src={goldiImage} className=' object-cover '/>
                    </div>
                    <div className='flex-col justify-center items-center gap-4'>
                        <h2 className='text-2xl text-darkYellow text-center'>Goldi Singh</h2>
                        <p className='text-md text-center'>B.Tech (CSE)</p>
                        <p className='text-md text-center'>Aligarh College of Engineering & Technology</p>
                    </div>
                </div>


                <div className='w-[400px] flex flex-col bg-black justify-center items-center gap-4  p-4 rounded-xl'>
                    <div className='w-[150px] h-[150px] '>
                        <img src={goldiImage} className=' object-cover '/>
                    </div>
                    <div className='flex-col justify-center items-center gap-4'>
                        <h2 className='text-2xl text-darkYellow text-center'>Gunjan Upadhyay</h2>
                        <p className='text-md text-center'>B.Tech (CSE)</p>
                        <p className='text-md text-center'>Aligarh College of Engineering & Technology</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
