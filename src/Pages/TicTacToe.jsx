

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const TicTacToe = () => {

    const [isActive, setIsActive] = useState(true);
    const [warningOn, setWarningOn] = useState(true)
    const { token } = useSelector(state => state.auth)


    const navigate = useNavigate();

    
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])

    function clickHandler() {
        setIsActive(!isActive)
        setWarningOn(!warningOn)

    }

    function enterHandler() {
        navigate('/tic-tac-toe/playing')
    }

    return (
        <div className='home w-full h-[100vh] flex flex-col justify-center items-center'>
            <div className='w-11/12 flex flex-col justify-center items-center '>


                {/* Welcome waali screen */}
                {/* Section 1 */}
                {/* <Warning text1={"Hii !,"} text2={"Welcome to Rock, Paper & Scissor."}/> */}


                <div className={` lg:w-[60%] md:w-[60%] sm:w-[60%] w-[80%] flex z-10 flex-col gap-6 duration-500 bg-black opacity-80 justify-center items-center border
${isActive ? "top-0" : "top-[-20rem]"} rounded-2xl absolute `}>
                    <div className='max-w-max  flex flex-col gap-3 items-center p-7 '>
                        <h1 className='text-white text-3xl text-center'>Hii !,</h1>
                        <h1 className='text-white text-xl text-center'>Welcome to Tic Tac Toe.</h1>
                    </div>
                    <div className='border-t-2 flex flex-col justify-center items-center w-full'>
                        <button className="border-2 p-2 w-[100px] rounded-xl font-bold text-white text-lg my-3 "
                            onClick={clickHandler}
                        >
                            Close
                        </button>
                    </div>

                </div>



                <div className='border-[3px]  rounded-3xl mt-12'>
                    <h1 className='text-white sm:text-4xl text-2xl  p-5 font-bold text-center'>
                    Tic Tac Toe
                    </h1>
                </div>

                <div className=' h-[80vh]  flex justify-center items-center '>
                    <button className={`text-white text-xl w-[120px] p-3 border-[3px] rounded-2xl animated-running-border font-bold ${warningOn ? "pointer-events-none" : ""}`}
                        onClick={enterHandler}
                    >
                        Enter
                    </button>
                </div>







                {/* Section 2 */}






                {/* Section 3 */}







            </div>
        </div>
    )
}

