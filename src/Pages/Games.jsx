import React from 'react'
import { Navbar } from '../components/Navbar'
import { GameIntroCont } from '../components/Games/GameIntroCont'
import { AllGames } from '../components/Games/AllGames'
import {Footer} from "../components/Home/Footer"
import "../CSS/About Us/About.css"
import ticTacToeVideo from "../Videos/TicTacToe.mp4"
import snakeGame from "../Videos/SnakeGame.mp4"
import rockPaperScissor from "../Videos/RockPaperScissorVideo.mp4"
import rockPaperScissor_img from "../Assets/Rock Paper Scissor Game/Img/RockPaperScissor_game_img.jpeg"
import ticTacToe_bg_img from "../Assets/Tic Tac Toe/ticTacToe_bg_img.jpeg"
import snakeGame_bg_img from "../Assets/Snake Game/SnakeGame_bg_img.jpeg"
import flappyBirdVideo from "../Videos/FlappyBirdVideo.mp4"

export const Games = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center bg-bgGradientColor'>
            <div className='w-11/12 mb-[3rem]'>
                <div className='w-[100%] flex justify-center items-center'>
                    <Navbar />
                </div>
                <div>
                    <GameIntroCont/>
                </div>
                <div>
                    <AllGames
                    poster={rockPaperScissor_img}
                     direction={"left"}
                      link={"/rock-paper-scissor"}
                       video={rockPaperScissor}
                       videoHad={"Master the Art of Rock Paper Scissors with Our Step-by-Step Video Guide!"}
                       videoPara={"In this video, you'll discover:"}
                       point1={"The fundamentals of Rock Paper Scissors"}
                       point2={"Pro tips for gaining the upper hand"}
                       point3={"Common pitfalls to avoid"}
                       point4={"Advanced techniques for outsmarting your opponent"}
                       gameHad={"Enter the Arena of Strategy and Wits: Play Rock Paper Scissors Now!"}
                       gamePara1={"In Rock Paper Scissors, every move counts. Will you choose the mighty rock, the swift paper, or the sharp scissors? The choice is yours, but choose wisely – victory awaits the cunning and the bold."}
                       gamePara2={"With easy-to-learn mechanics and endless possibilities, Rock Paper Scissors is the perfect game for players of all ages. So what are you waiting for? Click below to start playing and see if you have what it takes to emerge victorious in this classic game of chance and strategy!"}
                       />
                </div>
                <div>
                    <AllGames
                    poster={ticTacToe_bg_img}
                     direction={"right"}
                      link={"/tic-tac-toe"} 
                      video={ticTacToeVideo}
                      videoHad={"Master the Strategies of Tic Tac Toe with Our Comprehensive Video Guide!"}
                      videoPara={"In this video, you'll discover:"}
                      point1={"Basic rules and gameplay mechanics"}
                      point2={"Winning strategies for different board positions"}
                      point3={"Tips for anticipating your opponent's moves"}
                      point4={"Advanced tactics for securing victory"}
                      gameHad={"Enter the World of Strategy and Skill: Play Tic Tac Toe Now"}
                      gamePara1={"In Tic Tac Toe, every move counts. Will you claim victory with three X's or O's in a row? With its simple yet addictive gameplay, Tic Tac Toe is perfect for quick matches or intense battles of strategy and skill."}
                      gamePara2={"Challenge your friends, test your wits, and see if you have what it takes to outmaneuver your opponent and claim victory. Click below to start playing now and experience the timeless fun of Tic Tac Toe!"}
                      />
                </div>
                <div>
                    <AllGames 
                    poster={snakeGame_bg_img}
                    direction={"left"} 
                    link={"/snake"} 
                    video={snakeGame}
                    videoHad={"Dive Into the World of Snake: Learn How to Play with Our Video Guide!"}
                      videoPara={"In this video, you'll learn:"}
                      point1={"How to control your snake and navigate the maze"}
                      point2={"Tips for avoiding obstacles and growing your snake"}
                      point3={"Strategies for maximizing your score and achieving high scores"}
                      point4={"Advanced techniques for mastering the game and outsmarting your opponents"}
                      gameHad={"Embark on a Classic Adventure: Play Snake Now!"}
                      gamePara1={"In Snake, every move counts. Can you navigate the twists and turns of the maze without running into yourself or the walls? With its simple yet addictive gameplay, Snake offers hours of fun and challenge for players of all ages."}
                      gamePara2={"Challenge your friends, test your reflexes, and see if you can achieve the highest score. Click below to start playing now and unleash the thrill of Snake!"}
                    />
                </div>
               <div>
                    <AllGames 
                    direction={"right"} 
                    video={flappyBirdVideo}
                    videoHad={""}
                    videoPara={""}
                    point1={""}
                    point2={""}
                    point3={""}
                    point4={""}
                    gameHad={""}
                    gamePara1={""}
                    gamePara2={""}
                    />
                </div>
                {/*  <div>
                    <AllGames 
                    direction={"left"} 
                    video={ticTacToeVideo}
                    videoHad={""}
                    videoPara={""}
                    point1={""}
                    point2={""}
                    point3={""}
                    point4={""}
                    gameHad={""}
                    gamePara1={""}
                    gamePara2={""}
                    />
                </div> */}
            </div>
            <div className='w-full'>
                <Footer/>
            </div>
        </div>
    )
}
