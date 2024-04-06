// Square.js
import React from 'react';

export const Square = (props) => {
    // console.log("Square Props", props.filledCell)

    const clickHandler = ()=>{
        props.onClick()
        if(!props.winner){
            props.setFilledCell(props.filledCell+1)
        }
       
    }
  return (
    <button 
    className="square border w-[100px] h-[100px] rounded-xl text-[53px]" 
    onClick={clickHandler}
    disabled={props.value || props.winner}
    >
      {props.value}
    </button>
  );
}

// export default Square;
