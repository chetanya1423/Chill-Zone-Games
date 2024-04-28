import React from "react";
import Birdimg from "../../Assets/Flappy Bird/bird.png";
const Bird = ({ size }) => {
  return (
    <div className="Bird">
      <img src={Birdimg} width={size} alt="" />
    </div>
  );
};

export default Bird;
