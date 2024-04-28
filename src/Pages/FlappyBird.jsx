import React, { useState, useEffect } from "react";
import "../CSS/Flappy Bird/FlappyBird.css";
import birdPng from "../Assets/Flappy Bird/bird.png";
import styled from "styled-components";
import Bg from "../Assets/Flappy Bird/bg.png";
import floorPng from "../Assets/Flappy Bird/fg.png";
import pipTop from "../Assets/Flappy Bird/pipe-top.png";
import pipBottom from "../Assets/Flappy Bird/pipe-bottom.png";
import { useSelector } from "react-redux";
import { historySend } from "../services/GameScoreFunc";

const BirdSize = 60; //px
const GameWidth = 26; //rem
const GameHeight = 34; //rem
const FloorSize = 5; //rem
const Jumping = 60; //px
const ObstacleWidth = 55; //px

const FlappyBird = () => {
  const [birdPostiton, setBirdPositon] = useState(240);
  const [birdHeadUp, setBirdHeadUp] = useState(0);
  const [score, setScore] = useState(0);
  const {token} = useSelector(state => state.auth)
  //firstObstacles
  const [obstacleHeight, setObstacleHeight] = useState(200);
  const [obstacleRight, setObstacleRight] = useState(-60);
  const [ObstacleGap, setObstacleGap] = useState(130);

  //SecondObstacles
  const [obstacleHeight2, setObstacleHeight2] = useState(100);
  const [obstacleRight2, setObstacleRight2] = useState(-300);
  const [ObstacleGap2, setObstacleGap2] = useState(100);

  const [gameOver, setGameOver] = useState(false);

  const bottomObstacleHeight =
    GameHeight * 17 - ObstacleGap - obstacleHeight - 5 * 17;

  const bottomObstacleHeight2 =
    GameHeight * 17 - ObstacleGap2 - obstacleHeight2 - 5 * 17;

  //Bird is Falling
  useEffect(() => {
    let timeinterval;

    

    if (birdPostiton <= GameHeight * 17 - BirdSize - FloorSize * 17 - 10) {
      timeinterval = setInterval(() => {
        setBirdPositon((birdPostiton) => birdPostiton + 2);
        if (birdHeadUp > 0) {
          setBirdHeadUp((birdHeadUp) => birdHeadUp - 2);
        }
      }, 17);
    } else {
      setGameOver(true);
    }
    return () => {
      clearInterval(timeinterval);
    };
  }, [birdPostiton, !gameOver]);

  //Obstacles is Moving
  useEffect(() => {
    let obstacleId;
    if (!gameOver) {
      obstacleId = setInterval(() => {
        setObstacleRight((obstacleRight) => obstacleRight + 2);
        setObstacleRight2((obstacleRight2) => obstacleRight2 + 2);
      }, 17);
    }

    if (obstacleRight > GameWidth * 16) {
      setScore((score) => score + 1);
      setObstacleRight(-60);
      setObstacleHeight(Math.floor(Math.random() * (300 - 130 + 1) + 130));
      setObstacleGap(Math.floor(Math.random() * (150 - 90 + 1) + 90));
    }
    if (obstacleRight2 > GameWidth * 16) {
      setScore((score) => score + 1);
      setObstacleRight2(-60);
      setObstacleHeight2(Math.floor(Math.random() * (300 - 130 + 1) + 130));
      setObstacleGap2(Math.floor(Math.random() * (150 - 90 + 1) + 90));
    }
    return () => {
      clearInterval(obstacleId);
    };
  });
  /* ||
      (obstacleRight2 >= GameWidth * 16 - 130 */

  useEffect(() => {
    if (
      obstacleRight >= GameWidth * 16 - 130 &&
      obstacleRight <= GameWidth * 16 - 45 &&
      (birdPostiton <= obstacleHeight - 20 ||
        birdPostiton >= GameWidth * 16 - bottomObstacleHeight + 20)
    ) {
      setGameOver(true);
      
    }

    if (
      obstacleRight2 >= GameWidth * 16 - 130 &&
      obstacleRight2 <= GameWidth * 16 - 45 &&
      (birdPostiton <= obstacleHeight2 - 20 ||
        birdPostiton >= GameWidth * 16 - bottomObstacleHeight2 + 20)
    ) {
      setGameOver(true);
   
    }
  });

  useEffect( ()=>{
if(gameOver === true){
    if(score !== 0){
historySend("Flappy Bird",score,token)
    }
}
  }, [gameOver] )

  const handlerJumping = () => {

    if (gameOver !== true) {
      if (birdPostiton > 30) {
        setBirdPositon((birdPostiton) => birdPostiton - Jumping);
        setBirdHeadUp(35);
      } else setBirdPositon(0);
    }
  };


  const keyBtnHandler = (e)=>{
console.log("key",e)
  }


// document.addEventListener("keyup",(e)=>{
//   if (gameOver !== true) {
//     if (birdPostiton > 30) {
//       setBirdPositon((birdPostiton) => birdPostiton - Jumping);
//       setBirdHeadUp(35);
//     } else setBirdPositon(0);
//   }
// })

  return (
    <div className="flappyBird">
      <GameBox
        Width={GameWidth}
        Height={GameHeight}
        img={Bg}
        onClick={()=>handlerJumping()}
        
      >
        <Bird
          img={birdPng}
          size={BirdSize}
          Top={birdPostiton}
          headUp={birdHeadUp}
        ></Bird>
        <Floor Height={FloorSize} img={floorPng}></Floor>
        {gameOver === true ? (
          <GameOver>
            GameOver
            <RestartBtn
              onClick={() => {
                window.location.reload();
              }}
            >
              Restart
            </RestartBtn>
          </GameOver>
        ) : (
          <Score>{score}</Score>
        )}

        <Obstacles
          img={pipTop}
          Height={obstacleHeight}
          Right={obstacleRight}
        ></Obstacles>
        <BottomObstacles
          img={pipBottom}
          Right={obstacleRight}
          Height={bottomObstacleHeight}
        ></BottomObstacles>
        <Obstacles
          img={pipTop}
          Height={obstacleHeight2}
          Right={obstacleRight2}
        ></Obstacles>
        <BottomObstacles
          img={pipBottom}
          Right={obstacleRight2}
          Height={bottomObstacleHeight2}
        ></BottomObstacles>
      </GameBox>
    </div>
  );
}

export default FlappyBird;

const GameBox = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
  width: ${(props) => props.Width}rem;
  overflow: hidden;
  border-radius: 20px;
  height: ${(props) => props.Height}rem;
`;

/* const Bird = styled.div`
  position: absolute;
  top: ${(props) => props.Top}px;
  left: 1.5rem;
  background-position: center;
  background-size: cover;
  transform: rotate(-${(props) => props.headUp}deg);
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`; */

const Bird = styled.section.attrs(({ headUp, Top }) => ({
  style: {
    top: Top + "px",
  },
}))`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-image: url(${(props) => props.img});
  position: absolute;
  left: 30px;
  transform: rotate(-${(props) => props.headUp}deg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Floor = styled.div`
  width: 100%;
  height: ${(props) => props.Height}rem;
  background-image: url(${(props) => props.img});
  position: absolute;
  bottom: 0;
  z-index: 2;
  left: 0;
`;

const GameOver = styled.h1`
  text-align: center;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index:199
  flex-direction: column;
  height: 100%;
`;

const RestartBtn = styled.button`
  z-index: 3;
  width: 4rem;
  height: 2rem;
  border: none;
  border-radius: 20px;
  background: rgba(90, 190, 0);
  cursor: pointer;
  outline: none;
  color: white;
`;

/* const Obstacles = styled.div`
  position: absolute;
  right: ${(props) => props.Right}px;
  top: 0;
  width: 58px;
  background-size: cover;
  background-position: bottom center;
  background-image: url(${(props) => props.img});
  height: ${(props) => props.Height}px;
`; */

const Obstacles = styled.section.attrs(({ Right }) => ({
  style: {
    right: Right + "px",
  },
}))`
  position: absolute;
  top: 0;
  width: 58px;
  background-size: cover;
  background-position: bottom center;
  background-image: url(${(props) => props.img});
  height: ${(props) => props.Height}px;
`;

/* const BottomObstacles = styled.div`
  position: absolute;
  right: ${(props) => props.Right}px;
  background-size: cover;
  background-position: top center;
  width: 58px;
  bottom: 5rem;
  background-image: url(${(props) => props.img});
  height: ${(props) => props.Height}px;
`; */

const BottomObstacles = styled.section.attrs(({ Right }) => ({
  style: {
    right: Right + "px",
  },
}))`
  position: absolute;
  background-size: cover;
  background-position: top center;
  width: 58px;
  bottom: 5rem;
  background-image: url(${(props) => props.img});
  height: ${(props) => props.Height}px;
`;

const Score = styled.div`
  text-align: center;
  z-index: 100;
  position: absolute;
  right: 50%;
  font-size: 2rem;
  color: white;
`;
