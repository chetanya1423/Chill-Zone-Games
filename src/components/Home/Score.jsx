import React from 'react'
import "../../CSS/Home/Score.css"
import rockPaperScissor from "../../Assets/RockPaperScissorNew.jpeg"
import ticTacToeImg from "../../Assets/TicTacToe_new_game.jpeg"
import gameImg from "../../Assets/Snake-Game.jpeg"
import { FaArrowCircleRight } from "react-icons/fa";
import { ScoreCard } from '../../Card/Home/ScoreCard';
import { Link } from 'react-router-dom';

export const Score = () => {
    return (
        

        <div className='flex flex-col gap-[3rem]'>
            <div className='flex justify-between items-center'>
                <div className='text-[25px] text-white font-bold'>Ready, Set, Play: Explore Our Epic Collection of Games!</div>
                <Link to="/games">
                <div className='text-white  seeAllBtn'>See All</div>
                </Link>
            </div>
            <div className='w-full flex justify-evenly gap-2'>
                <ScoreCard scoreImgs={rockPaperScissor} gameName={"Rock Paper Scissor"} link={"/rock-paper-scissor"} />
                <ScoreCard scoreImgs={ticTacToeImg} gameName={"Tic Tac Toe"} link={"/tic-tac-toe"}/>
                <ScoreCard scoreImgs={gameImg} gameName={"Snake"} link={"/snake"}/>


            </div>
            <div className='w-[80%] mx-auto mt-[3rem]'>
                <h1 className='text-[35px] font-bold text-center'>Where Every Click Creates Adventure: Chill Zone Games - Your Ultimate Playground !</h1>
            </div>
        </div>


    )
}
