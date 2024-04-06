import React from 'react'
import Rock from '../../Assets/Rock Paper Scissor Game/Img/icon-rock.svg'
import Paper from '../../Assets/Rock Paper Scissor Game/Img/icon-paper.svg'
import Scissor from '../../Assets/Rock Paper Scissor Game/Img/icon-scissors.svg'
import { Bounce } from 'react-reveal'
import Lizard from '../../Assets/Rock Paper Scissor Game/Img/icon-lizard.svg'
import Spock from '../../Assets/Rock Paper Scissor Game/Img/icon-spock.svg'

export const Pick = ({ buttonValue, isBtnActive, text,delay }) => {
    return (
        <div className={` flex flex-col justify-center items-center  `}>
            <Bounce  delay={delay} >
                <div>
                    {
                        buttonValue === 0 ? (
                            <div className='sm:w-[150px] w-[110px] sm:h-[150px] h-[110px]  border-2 rounded-full flex justify-center items-center
bg-red-700 ' >
                                <div className='sm:w-[120px] sm:h-[120px] w-[75px] h-[75px] border-2 rounded-full text-center bg-white'
                                    style={{
                                        backgroundImage: `url('${Rock}')`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',


                                    }}
                                >
                                </div>
                            </div>
                        ) : (<div></div>)
                    }
                </div>

                <div>
                    {
                        buttonValue === 1 ? (
                            <div className='sm:w-[150px] w-[110px] sm:h-[150px] h-[110px] border-2 rounded-full flex justify-center items-center
        bg-green-700 ' >
                                <div className='sm:w-[120px] sm:h-[120px] w-[75px] h-[75px] border-2 rounded-full text-center bg-white'
                                    style={{
                                        backgroundImage: `url('${Paper}')`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',


                                    }}

                                >
                                    <p className='opacity-0'></p>
                                </div>
                            </div>
                        ) : (<div></div>)
                    }
                </div>
                <div >
                    {
                        buttonValue === 2 ? (
                            <div className='sm:w-[150px] w-[110px] sm:h-[150px] h-[110px]  border-2 rounded-full flex justify-center items-center bg-yellow-500'
                            >
                                <div className='sm:w-[120px] sm:h-[120px] w-[75px] h-[75px] border-2 rounded-full text-center bg-white '
                                    style={{
                                        backgroundImage: `url('${Scissor}')`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',


                                    }}
                                >
                                    <p className='opacity-0'></p>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </div>






                <div >
                    {
                        buttonValue === 3 ? (
                            <div className='sm:w-[150px] w-[110px] sm:h-[150px] h-[110px]  border-2 rounded-full flex justify-center items-center bg-yellow-500'
                            >
                                <div className='sm:w-[120px] sm:h-[120px] w-[75px] h-[75px] border-2 rounded-full text-center bg-white '
                                    style={{
                                        backgroundImage: `url('${Lizard}')`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',


                                    }}
                                >
                                    <p className='opacity-0'></p>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </div>







                <div >
                    {
                        buttonValue === 4 ? (
                            <div className='sm:w-[150px] w-[110px] sm:h-[150px] h-[110px]  border-2 rounded-full flex justify-center items-center bg-yellow-500'
                            >
                                <div className='sm:w-[120px] sm:h-[120px] w-[75px] h-[75px] border-2 rounded-full text-center bg-white '
                                    style={{
                                        backgroundImage: `url('${Spock}')`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',


                                    }}
                                >
                                    <p className='opacity-0'></p>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </div>

            </Bounce>
            <div>
                <h1 className='text-2xl font-bold text-white'>{text}</h1>
            </div>





        </div>
    )
}
