import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import "../../CSS/Home/Footer.css"
import logo from "../../Assets/ChillZoneGame-Logo.jpeg"
import { Link } from 'react-router-dom';

export const Footer = () => {
    // const [isInstagram, setIsInstagram] = useState(false)
    // const [isLinkedIn, setIsLinkedIn] = useState(false)
    // const [isGitHub, setIsGitHub] = useState(false)
    // const [isGfg, setIsGfg] = useState(false)
    return (
        // <div className='h-[100px] mt-[4rem]'>
        //     <div className='flex gap-14 items-center justify-center'>
        //         <div className=' relative max-w-max flex flex-col justify-center items-center'>
        //             <FaInstagram
        //                 onMouseEnter={() => setIsInstagram(true)}
        //                 onMouseLeave={() => setIsInstagram(false)}
        //                 className='text-4xl text-darkYellow'
        //             />
        //             {
        //                 isInstagram &&
        //                 <div className=' absolute top-10  p-4 flex flex-col bg-gray-600 rounded-xl w-[150px] justify-center items-center gap-2 triangle'>
        //                     <div>
        //                         <a href="https://www.example.com">dsfsdf</a>
        //                     </div>
        //                     <div>
        //                         <a href="https://www.example.com">dsfsdf</a>
        //                     </div>
        //                 </div>
        //             }
        //         </div>
        //         <div className=' relative max-w-max flex flex-col justify-center items-center'>
        //             <CiLinkedin
        //                 onMouseEnter={() => setIsLinkedIn(true)}
        //                 onMouseLeave={() => setIsLinkedIn(false)}
        //                 className='text-4xl text-darkYellow'
        //             />
        //             {
        //                 isLinkedIn &&
        //                 <div className=' absolute top-10  p-4 flex flex-col bg-gray-600 rounded-xl w-[150px] justify-center items-center gap-2 triangle'>
        //                     <div>
        //                         <a href="https://www.example.com">dsfsdf</a>
        //                     </div>
        //                     <div>
        //                         <a href="https://www.example.com">dsfsdf</a>
        //                     </div>
        //                 </div>
        //             }
        //         </div>
        //         <div className=' relative max-w-max flex flex-col justify-center items-center'>
        //             <FaGithub
        //                 onMouseEnter={() => setIsGitHub(true)}
        //                 onMouseLeave={() => setIsGitHub(false)}
        //                 className='text-4xl text-darkYellow'
        //             />
        //             {
        //                 isGitHub &&
        //                 <div className=' absolute top-10  p-4 flex flex-col bg-gray-600 rounded-xl w-[150px] justify-center items-center gap-2 triangle'>
        //                     <div>
        //                         <a href="https://www.example.com">dsfsdf</a>
        //                     </div>
        //                     <div>
        //                         <a href="https://www.example.com">dsfsdf</a>
        //                     </div>
        //                 </div>
        //             }
        //         </div>
        //         <div className=' relative max-w-max flex flex-col justify-center items-center'>
        //             <SiGeeksforgeeks
        //                 onMouseEnter={() => setIsGfg(true)}
        //                 onMouseLeave={() => setIsGfg(false)}
        //                 className='text-4xl text-darkYellow'
        //             />
        //             {
        //                 isGfg &&
        //                 <div className=' absolute top-10  p-4 flex flex-col bg-gray-600 rounded-xl w-[150px] justify-center items-center gap-2 triangle'>
        //                     <div>
        //                         <a href="https://www.example.com">dsfsdf</a>
        //                     </div>
        //                     <div>
        //                         <a href="https://www.example.com">dsfsdf</a>
        //                     </div>
        //                 </div>
        //             }
        //         </div>
        //     </div>
        // </div>


        <div className='w-full bg-white'>
            <div className=' flex justify-between items-center px-[1rem] py-[3rem] gap-8'>
                <div className=' flex flex-col gap-8 w-[80%] '>
                    <img src={logo} className="w-[84px] text-black rounded-lg"/>
                    <p className='text-black text-sm'>Crafted with creativity. For inquiries or collaborations,  <span className='text-darkYellow '><Link to="/contactUs">contact us</Link></span>. © 2024 Chill Zone Games. All rights reserved.</p>
                </div>
                <div className=' flex flex-col gap-4 w-[80%]'>
                    <div>
                        <h4 className='text-black font-bold text-lg'>About Us</h4>
                    </div>
                    <ul className='flex flex-col gap-2'>
                        <Link to="/games">
                        <li className='text-black text-sm'>Games</li>
                        </Link>
                        <Link to="/contactUs">
                        <li className='text-black text-sm'>Contact Us</li>
                        </Link>
                        
                       
                    </ul>
                </div>
                <div className='flex flex-col gap-4 w-[80%]'>
                    <div>
                        <h4 className='text-black font-bold text-lg'>Contact Us</h4>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-black text-sm'>Discover Your Next Gaming Obsession at Chill Zone Games - Where Every Click Sparks Excitement!</p>
                        {/* <p className='text-black text-sm'>+908 89097 890</p> */}
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 w-[80%]'>
                    <FaInstagram className='text-black text-3xl'/>
                    <CiLinkedin className='text-black text-3xl'/>
                    <FaGithub className='text-black text-3xl'/>
                    <SiGeeksforgeeks className='text-black text-3xl'/>
                </div>
            </div>
        </div>
    )
}
