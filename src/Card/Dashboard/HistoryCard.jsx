import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import "../../CSS/Home/Score.css"
import rockPaperScissorGame from "../../Assets/RockPaperScissorNew.jpeg"
import ticTacToeGame from "../../Assets/TicTacToe_new_game.jpeg"
import snakeGame from "../../Assets/Snake-Game.jpeg"
import flappyBird from "../../Assets/Flappy Bird/flapybirdsmall.jpeg"
import "../../CSS/Main.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHistoryGameName } from '../../slices/profileSlice';
// import rockPaperScissorGame from "../../Assets/RockPaperScissorNew.jpeg"
// import rockPaperScissorGame from "../../Assets/RockPaperScissorNew.jpeg"

export const HistoryCard = ({ scoreImgs, history }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()





  console.log("history", history)



  const seeAllHandler = (gameName) => {
    dispatch(setHistoryGameName(gameName))
    navigate("/dashboard/gameHistoryName")
    // navigate(`dashboard/gameHistoryName/${gameName.split(" ").join("-").toLowerCase()}`)
  }

  const playAgainHandler =(name)=>{
    if(name === "Rock Paper Scissor"){
        navigate("/rock-paper-scissor")
    }
    if(name === "Tic Tac Toe"){
        navigate("/tic-tac-toe")
    }
    if(name === "Snake"){
        navigate("/snake")
    }
}

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full flex justify-end items-center '>
        <div className='flex flex-col max-w-max justify-end items-center '>
          <div className='max-w-max seeAllBtn' onClick={() => seeAllHandler(history.game)}>See All</div>
        </div>
      </div>
      <div className='flex sm:flex-row flex-col justify-between items-center w-full p-2 sm:gap-0 gap-4'>
        
        <div className='sm:w-[30%] w-full  sm:relative flex justify-center items-center'>
          {
            history?.game === "Rock Paper Scissor" && <img src={rockPaperScissorGame} className='sm:absolute opacity-30' />
          }
          {
            history?.game === "Tic Tac Toe" && <img src={ticTacToeGame} className='sm:absolute opacity-30' />
          }
          {
            history?.game === "Snake" && <img src={snakeGame} className='sm:absolute opacity-30' />
          }
           {
            history?.game === "Flappy Bird" && <img src={flappyBird} className='sm:absolute opacity-30' />
          }

          <p className='text-white font-bold text-3xl sm:relative absolute'>{history?.game}</p>
        </div>
        <div className='sm:w-[67%] w-full flex sm:flex-row flex-col sm:gap-0 gap-4 justify-between items-center'>
          {
            history?.scores[0] &&  <div className='border sm:w-[48%] w-full flex flex-col gap-2 rounded-xl'>
            <div className='text-3xl font-bold flex justify-center items-center'>Score 1</div>
            <p className='text-xl text-center font-bold'>{history?.scores[0].firstPlayerScoreDate.slice(0, 10)}{" , "}{history?.scores[0].firstPlayerScoreDate.slice(11, 16)}</p>
            <div className='w-full flex flex-col justify-center items-center'>
              <div className='text-green-500 text-2xl font-bold'>Score</div>
              <p className='text-darkYellow font-bold text-2xl'>
                {history?.scores[0]?.firstPlayerScore}
              </p>
            </div>
            <div className='flex flex-col mb-2 justify-center items-center gap-2'>
              <button className=' py-2 px-3 w-[130px] bgColor rounded-xl font-bold text-lg' onClick={()=>playAgainHandler(history?.game)}>Play Again</button>
              {/* <button className=' py-2 px-3 text-darkYellow bg-white rounded-xl font-bold text-lg flex justify-center items-center gap-2 w-[130px]'>More <span><FaArrowCircleRight className='' /></span></button> */}
            </div>
          </div>
          }
         

          {
            history?.scores[1] && <div className='border sm:w-[48%] w-full flex flex-col gap-2 rounded-xl'>
              <div className='text-3xl font-bold flex justify-center items-center'>Score 2</div>
              <p className='text-xl text-center font-bold'>{history?.scores[1].firstPlayerScoreDate.slice(0, 10)}{" , "}{history?.scores[1].firstPlayerScoreDate.slice(11, 16)}</p>
              <div className='w-full flex flex-col justify-center items-center'>
                <div className='text-green-500 text-2xl font-bold'>Score</div>
                <p className='text-darkYellow font-bold text-2xl'>
                  {history?.scores[1]?.firstPlayerScore}
                </p>
              </div>
              <div className='flex flex-col mb-2 justify-center items-center gap-2'>
                <button className=' py-2 px-3 w-[130px] bgColor rounded-xl font-bold text-lg'>Play Again</button>
                {/* <button className=' py-2 px-3 text-darkYellow bg-white rounded-xl font-bold text-lg flex justify-center items-center gap-2 w-[130px]'>More <span><FaArrowCircleRight className='' /></span></button> */}
              </div>
            </div>
          }

        </div>
      </div>
    </div>

  )
}
