import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Snake = props => {
  const {token} = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect( ()=>{
if(!token){
navigate("/login")
}
  }, [] )
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        };
        return <div className="snake" key={i} style={style} />;
      })}
    </div>
  );
};
export default Snake;