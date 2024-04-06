import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import "../../CSS/Home/Score.css"
import rockPaperScissorGame from "../../Assets/RockPaperScissorNew.jpeg"
import ticTacToeGame from "../../Assets/TicTacToe_new_game.jpeg"
import snakeGame from "../../Assets/Snake-Game.jpeg"
import "../../CSS/Main.css"
// import rockPaperScissorGame from "../../Assets/RockPaperScissorNew.jpeg"
// import rockPaperScissorGame from "../../Assets/RockPaperScissorNew.jpeg"

export const HistoryCard = ({ scoreImgs,history }) => {
  console.log("history",history)
  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full flex justify-end items-center '>
        <div className='flex flex-col max-w-max justify-end items-center '>
          <div className='max-w-max seeAllBtn'>See All</div>
        </div>
      </div>
      <div className='flex justify-between items-center w-full p-2'>
        <div>

        </div>
        <div className='w-[30%]  relative flex justify-center items-center'>
          {
            history?.game === "Rock Paper Scissor" &&  <img src={rockPaperScissorGame} className='absolute opacity-30' />
          }
           {
            history?.game === "Tic Tac Toe" &&  <img src={ticTacToeGame} className='absolute opacity-30' />
          }
            {
            history?.game === "Snake" &&  <img src={snakeGame} className='absolute opacity-30' />
          }
         
          <p className='text-white font-bold text-3xl'>{history?.game}</p>
        </div>
        <div className='w-[67%] flex justify-between items-center'>
          <div className='border w-[48%] flex flex-col gap-2 rounded-xl'>
            <div className='text-3xl font-bold flex justify-center items-center'>Score 1</div>
            <p className='text-xl text-center font-bold'>{history?.scores[0].firstPlayerScoreDate.slice(0,10)}{" , "}{history?.scores[0].firstPlayerScoreDate.slice(11,16)}</p>
            <div className='w-full flex flex-col justify-center items-center'>
              <div className='text-green-500 text-2xl font-bold'>Score</div>
              <p className='text-darkYellow font-bold text-2xl'>
              {history?.scores[0]?.firstPlayerScore}
              </p>
            </div>
            <div className='flex flex-col mb-2 justify-center items-center gap-2'>
              <button className=' py-2 px-3 w-[130px] bgColor rounded-xl font-bold text-lg'>Play Again</button>
              {/* <button className=' py-2 px-3 text-darkYellow bg-white rounded-xl font-bold text-lg flex justify-center items-center gap-2 w-[130px]'>More <span><FaArrowCircleRight className='' /></span></button> */}
            </div>
          </div>

          {
            history?.scores[1] &&   <div className='border w-[48%] flex flex-col gap-2 rounded-xl'>
            <div className='text-3xl font-bold flex justify-center items-center'>Score 2</div>
            <p className='text-xl text-center font-bold'>{history?.scores[1].firstPlayerScoreDate.slice(0,10)}{" , "}{history?.scores[1].firstPlayerScoreDate.slice(11,16)}</p>
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
