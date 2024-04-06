import React from 'react'
import '../../CSS/Main.css'
import pngImg from "../../Assets/ane-gameservices-icon-removebg-preview 1.png"
import eye from "../../Assets/cry 1.png"
import { Link, useLocation } from 'react-router-dom'
export const Main = ({ heading, paragraph }) => {
    const location = useLocation()
    console.log(location.pathname)
    return (
       

        <div className=' min-h-[90vh] w-full  flex flex-col justify-center items-start relative'>

            <div className='w-[40%] flex flex-col justify-between z-10 h-[300px]items-start gap-6'>
                {/* {
                    location.pathname === "/" && <p className="text-darkYellow text-[20px] font-bold">Proved By prodesigner</p>
                } */}

                {
                    location.pathname === "/aboutUs" &&
                    <p className='text-sm flex justify-start tracking-2 gap-1 items-center'>Home {">"} <span className='text-darkRed'>About Us</span></p>
                }

                <h1 className=' leading-[60px] font-bold text-[45px]'>{heading}</h1>
                <p className='text-sm'>{paragraph}</p>
               <Link to="/games">
               <button className=' max-w-max getInDetailBtn text-md py-2 px-3 rounded-full'>Get more details</button>
               </Link>
            </div>
            {
                location.pathname === "/" && <div className='w-[500px] absolute left-[20rem] top-[-1rem]'>
                    <img src={pngImg} />
                    <img src={eye} className='absolute left-[21rem] top-[6rem]' />
                </div>
            }
        </div>
    )
}
