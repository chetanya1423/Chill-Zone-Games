import React, { useEffect } from 'react'
import { Bounce } from 'react-reveal'
import { BasicData } from '../../data'
import { ScoreCard } from './ScoreCard'
import Tringle from "../../Assets/Rock Paper Scissor Game/Img/bg-triangle.svg"
import Rock from '../../Assets/Rock Paper Scissor Game/Img/icon-rock.svg'
import Paper from '../../Assets/Rock Paper Scissor Game/Img/icon-paper.svg'
import Scissor from '../../Assets/Rock Paper Scissor Game/Img/icon-scissors.svg'
import { useState } from 'react'
import { Pick } from '../../components/Rock Paper Scissor/Pick'
// import '../CSS/Basic.css'
import { Link, useNavigate } from 'react-router-dom'
import { Howl } from 'howler'
import audio from '../../Assets/Rock Paper Scissor Game/audio/sound.mp3'
import { useSelector } from 'react-redux'
import { historySend } from '../../services/GameScoreFunc'

export const Basic = () => {

  const [buttonValue, setButtonValue] = useState(0)
  const [computerValue, setComputerValue] = useState(0)
  const [isBtnActive, setIsbtnActive] = useState(false)
  const [win, setWin] = useState('')
  const [winSection, setWinSection] = useState(false);
  const [buttonActivity, setButtonActivity] = useState('')
  const [score, setScore] = useState(0)
  const [warningOn, setWarningOn] = useState(true)
  const {token} = useSelector(state => state.auth)
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate()

useEffect( ()=>{
if(!token){
    navigate("/login")
}
},[] )


  function clickHandler() {
      setIsActive(!isActive)
      setWarningOn(!warningOn)

  }


const saveBtnHandler = () => {
historySend("Rock Paper Scissor",score,token)
}


  function contentValue(num) {
    const sound = new Howl({
      src: [`${audio}`],
     
    });
    sound.play()
    const newRandomNumber = Math.floor(Math.random() * 3);
    setButtonValue(num)
    setComputerValue(newRandomNumber)
    setIsbtnActive(true)

    condition(num, newRandomNumber)

  }



  function condition(player, random) {
    if (player === random) {
      setWin("Tie")

    }
    else if (player === 0 && random === 1) {
      setWin("Paper Fold Rock")
      setButtonActivity("You Lose")


    }
    else if (player === 1 && random === 0) {
      setWin("Paper Fold Rock")
      setButtonActivity("You Win")

    }
    else if (player === 0 && random === 2) {
      setWin("Rock Break Scissor")
      setButtonActivity("You Win")

    }
    else if (player === 2 && random === 0) {
      setWin("Rock Break Scissor")
      setButtonActivity("You Lose")

    }
    else if (player === 1 && random === 2) {
      setWin("Scissor Cut Paper")
      setButtonActivity("You Lose")

    }
    else if (player === 2 && random === 1) {
      setWin("Scissor Cut Paper")
      setButtonActivity("You Win")

    }

  }





  function tryAgainHandler() {
    setIsbtnActive(false)
    setScore(0)
    setButtonActivity("")
    setWin("")
  }

  function continueHandler() {
    setIsbtnActive(false)
    setScore(score + 1)
    setButtonActivity("")
    setWin("")
  }

  return (
    <div className=' w-full  flex flex-col overflow-x-hidden'>
      <div className='w-11/12  flex flex-col justify-center items-center mx-auto gap-[3.5rem]'>
      





      <div className={`sm:w-[60%] w-[85%] flex z-10 flex-col gap-6 duration-1000  bg-black opacity-80 justify-center items-center border
    ${isActive ? "top-0" : "top-[-50rem]"} rounded-2xl absolute `}>
                    <div className='  flex flex-col gap-3 items-center p-7 '>
                        <h1 className='text-white text-3xl text-center'></h1>
                        <h1 className='text-white text-xl text-center'>You are a new player then you are redirect on the basic landing page for playing the basic Rock, Paper & Scissor Game.</h1>
                    </div>
                    <div className='border-t-2 flex flex-col justify-center items-center w-full'>
                        <button className="border-2 p-2 w-[100px] rounded-xl font-bold text-white text-lg my-3"
                            onClick={clickHandler}
                        >
                            Close
                        </button>
                    </div>

                </div>




        {/* section 1 */}
        {/* Score waala section h ye */}

        <div className={`border-2 rounded-2xl border-indigo-500/50 flex gap-5 sm:w-[70%] w-[100%] justify-between bg-transparent mt-8 pointer-events-none
        ${warningOn ? "pointer-events-none opacity-30" : "pointer-events-auto "} duration-1000`}>
          <div className='p-2'>
            {
              BasicData.map((data, index) => {
                return <ScoreCard data={data} key={index} />
              })
            }
          </div>
          <div className='p-3  flex flex-col justify-center items-center bg-white rounded-2xl m-2'>
            <h1 className='text-2xl text-blue-500 font-bold '>SCORE</h1>
            <h1 className='text-4xl text-black  font-bold'>{score}</h1>
          </div>
        </div>




        {/* Section 2 */}
        {/* Image waala section h ye */}



        <div className={`${isBtnActive ? "hidden" : "block"} pointer-events-none ${warningOn ? "pointer-events-none opacity-30" : "pointer-events-auto "} duration-1000
        `}>
          <Bounce top>
            <div style={{
              backgroundImage: `url('${Tringle}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
               // Adjust the height as needed
            }} className='sm:w-[300px] sm:h-[300px] w-[230px] h-[200px]'>




              {/* Top waale gole */}
              <div className='flex'>
                <Bounce left delay={1000}>
                  <div className='sm:w-[150px] w-[110px] sm:h-[150px] h-[110px] relative top-[-50px] sm:left-[-50px] left-[-20px]  border-2 rounded-full flex justify-center items-center
                 bg-red-700 ' onClick={contentValue.bind(this, 0)}>
                    <div className='sm:w-[120px] sm:h-[120px] w-[75px] h-[75px] border-2 rounded-full text-center bg-white'
                      style={{
                        backgroundImage: `url('${Rock}')`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',


                      }}

                    >
                      <p className='opacity-0'>0</p>
                    </div>
                  </div>
                </Bounce>
                <Bounce right delay={1000}>
                  <div className='sm:w-[150px] w-[110px] sm:h-[150px] h-[110px] relative top-[-50px] sm:right-[-50px] right-[-20px]  border-2 rounded-full flex justify-center items-center
                 bg-green-700' onClick={contentValue.bind(this, 1)}>
                    <div className='sm:w-[120px] sm:h-[120px] w-[75px] h-[75px] border-2 rounded-full text-center bg-white'
                      style={{
                        backgroundImage: `url('${Paper}')`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',


                      }}
                    >
                      <p className='opacity-0' >1</p>
                    </div>
                  </div>
                </Bounce>
              </div>

              {/* Bottom waala gola */}

              <Bounce bottom delay={1000}>

                <div className='flex  items-center justify-center'>
                  <div className='sm:w-[150px] w-[110px] sm:h-[150px] h-[110px]  border-2 rounded-full flex justify-center items-center bg-yellow-500'
                    onClick={contentValue.bind(this, 2)}>
                    <div className='sm:w-[120px] sm:h-[120px] w-[75px] h-[75px] border-2 rounded-full text-center bg-white '
                      style={{
                        backgroundImage: `url('${Scissor}')`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',


                      }}
                    >
                      <p className='opacity-0'>2</p>
                    </div>
                  </div>
                </div>

              </Bounce>


            </div>
          </Bounce>
        </div>







        <div className={`${isBtnActive ? "block" : "hidden"} relative flex flex-col justify-center items-center w-full `}>
          <div className={`flex sm:gap-8 sm:justify-center justify-between items-center w-[95%]    ${winSection ? "opacity-30" : ""}`}>
            {/* Your Pick */}
            <Pick buttonValue={buttonValue} isBtnActive={isBtnActive} text={"Your Pick"} delay={1000} />

            {/* Computer Pick */}

            {
              //  isRunning &&
              <Pick buttonValue={computerValue} isBtnActive={isBtnActive} text={"Computer"} delay={3000} />
            }
          </div>
          {/* Win waali  */}
          {
            <Bounce top delay={4000}>
             //  winSection &&
              <div className={`winsection flex flex-col gap-4 justify-center items-center absolute sm:top-[6rem] top-[0rem] p-8 bg-black opacity-100 sm:w-[60%] w-[100%] rounded-3xl ${warningOn ? "pointer-events-none opacity-30" : "pointer-events-auto "}`}>
                <p className='text-3xl font-bold text-white text-center'>{win}</p>
                <p className='text-white text-2xl font-bold text-center'>{buttonActivity}</p>
                {
                  buttonActivity === "You Win" ? (
                    <button className='border-2 border-white p-3 w-[120px] text-white font-bold rounded-xl'
                    onClick={continueHandler}
                  >Continue</button>
                   

                  ) : (
                    <button className='border-2 border-white p-3 w-[120px] text-white font-bold rounded-xl'
                      onClick={tryAgainHandler}
                    >Try Again</button>
                  )
                }


              </div>
            </Bounce>
          }

        </div>



        <div className={`max-w-max flex justify-start items-center ${warningOn ? "pointer-events-none opacity-30" : "pointer-events-auto "} duration-1000`}>
        <div className='max-w-max flex justify-center items-center sm:gap-8 gap-2'>
           
           <Link to="/">
           <button className='border text-lg sm:p-3 p-1 sm:w-[100px] w-[80px] font-bold text-white bg-black rounded-3xl'>
          Home
            </button>
           </Link>
           

           <Link to='/rock-paper-scissor/advance'>
           <button className='border text-lg sm:p-3 p-1  sm:w-[100px] w-[80px] font-bold text-white bg-black rounded-3xl'>
                Advance
            </button>
           </Link>
           
           <button className='border text-lg sm:p-3 p-1  sm:w-[100px] w-[80px] font-bold text-white bg-black rounded-3xl'
           onClick={tryAgainHandler}
           >
                Reset
            </button>

            <button className='border text-lg sm:p-3 p-1  sm:w-[100px] w-[80px] font-bold text-white bg-black rounded-3xl'
           onClick={saveBtnHandler}
           >
                Save
            </button>
        </div>
    </div>
      </div>
    </div>
    
  )
}
