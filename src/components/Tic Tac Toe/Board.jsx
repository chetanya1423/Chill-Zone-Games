// Board.js
import React from 'react';
import { Square } from './Square';

export const Board = (props) => {
    // console.log("Board Props", props)
  const renderSquare = i => (
    <Square
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
      setFilledCell={props.setFilledCell}
      filledCell={props.filledCell}
      winner={props.winner}
    />
  );

  return (
    <div className='max-w-max flex flex-col gap-2'>
      <div className="board-row flex max-w-max gap-2">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row flex max-w-max gap-2">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row flex max-w-max gap-2">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

// export default Board;
