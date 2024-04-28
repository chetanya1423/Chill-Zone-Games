import React from 'react'
import '../../CSS/Main.css'
import pngImg from "../../Assets/ane-gameservices-icon-removebg-preview 1.png"
import eye from "../../Assets/cry 1.png"
import { Link, useLocation } from 'react-router-dom'
export const Main = ({ heading, paragraph }) => {
    const location = useLocation()
    console.log(location.pathname)
    return (
       

        <div className=' min-h-[90vh]  w-full mb-4  flex lg:flex-col sm:flex-row flex-col-reverse  justify-center lg:items-start items-center relative'>

            <div className='sm:w-[45%] w-full p-4 flex flex-col justify-between z-10 h-[300px]items-start gap-6'>
                {/* {
                    location.pathname === "/" && <p className="text-darkYellow text-[20px] font-bold">Proved By prodesigner</p>
                } */}

                {
                    location.pathname === "/aboutUs" &&
                    <p className='text-sm flex justify-start tracking-2 gap-1 items-center'>Home {">"} <span className='text-darkRed'>About Us</span></p>
                }

                <h1 className=' leading-[40px] font-bold md:text-[45px] text-4xl sm:text-left text-center'>{heading}</h1>
                <p className='md:text-sm text-[12px] sm:text-left text-center'>{paragraph}</p>
               <Link to="/games">
                <div className='flex sm:justify-start sm:items-start justify-center items-center'>
                    <button className=' max-w-max getInDetailBtn sm:text-md text-sm py-2 px-3 rounded-full '>Get more details</button>
                    </div>
               
               </Link>
            </div>
            {
                location.pathname === "/" && <div className='lg:w-[500px] sm:w-[50%] w-full lg:absolute left-[20rem] top-[-1rem] '>
                    <img src={pngImg} />
                    {/* <img src={eye} className='absolute left-[21rem] top-[6rem] eyeBol' /> */}
                </div>
            }
        </div>
    )
}
