
import React, { useEffect, useState } from 'react';
import { Board } from '../../components/Tic Tac Toe/Board';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Xpng from "../../Assets/Tic Tac Toe/X png.jpeg"
import Opng from "../../Assets/Tic Tac Toe/O Png.jpeg"
import { useDispatch, useSelector } from 'react-redux';
import { setFirstPlayerScore, setSecondPlayerScore } from '../../slices/ticTacToeSlice';
import { historySend } from '../../services/GameScoreFunc';
import { apiConnector } from '../../services/apiConnector';
import { historyEndPoint } from '../../services/api';
import toast from 'react-hot-toast';

export const TicTacToeStart = () => {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const {SENDHISTORY_API,SENDAllGAMEHISTORY_API} = historyEndPoint
    const [xIsNext, setXIsNext] = useState(true);
    const [filledCell, setFilledCell] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { firstPlayerScore, secondPlayerScore } = useSelector(state => state.tickTacToe)
    const { token } = useSelector(state => state.auth)
  const location = useLocation()

    const current = history[stepNumber];

    const winner = calculateWinner(current.squares);
    // const [winner, setWinner] = useState(calculateWinner(current.squares))

    useEffect( ()=>{
        if(!token){
            navigate("/login")
        }
    },[] )

    useEffect( ()=>{
        if(firstPlayerScore !==0){
            saveBtnHandler()
        }
       dispatch(setFirstPlayerScore(0))
       dispatch(setSecondPlayerScore(0))
    },[location.pathname] )


    useEffect(() => {
        console.log("filled cell", filledCell)
        if (filledCell === 9) {
            console.log("retry")
            // navigate("/tic-tac-toe/playing")
        }
    }, [filledCell])
    useEffect(() => {
        console.log("filled cell", filledCell)
        if (winner === "X") {
            console.log("X jeet gya")
            dispatch(setFirstPlayerScore((firstPlayerScore + 1)))
            // navigate("/tic-tac-toe/playing")
        }
        if (winner === "O") {
            console.log("O jeet gya")
            dispatch(setSecondPlayerScore((secondPlayerScore + 1)))
            // navigate("/tic-tac-toe/playing")
        }

        console.log("winner ", winner)

    }, [winner])


    const saveBtnHandler = async() => {
        // historySend("Tic Tac Toe", firstPlayerScore, token)
        try {
            const response = await apiConnector("POST", SENDAllGAMEHISTORY_API, {
                game: "Tic Tac Toe",
                firstPlayerScore:firstPlayerScore,
                secondPlayerScore:secondPlayerScore,
                status:firstPlayerScore>secondPlayerScore ? "Win" : "Lose"

            },
                {
                    Authorization: `Bearer ${token}`,
                }
            )
           
    
            console.log("Send History............", response)
            if (!response.data.success) {
                throw new Error(response.data.message)
            }
    
            if(response.status === 200){
               
                    navigate("/tic-tac-toe")
             
            }
            toast.success("Score Added")
    
        }
        catch (error) {
            console.log(error)
        }
        
    }


    const resetHandler = () => {
        dispatch(setSecondPlayerScore(0))
        dispatch(setFirstPlayerScore(0))
        // navigate("/tic-tac-toe/")
        setFilledCell(0)
        // history.map((cell) => {
        //     cell = null
        // })
        // console.log("hisotry",history)
        jumpTo(0)


    }
    const continueHandler = () => {


        setFilledCell(0)

        jumpTo(0)


    }

    const handleClick = i => {
        const newHistory = history.slice(0, stepNumber + 1);
        const currentSquares = current.squares.slice();
        if (winner || currentSquares[i]) return;
        currentSquares[i] = xIsNext ?
            // <img
            //     src={Xpng}
            //     className='w-full h-full rounded-xl'
            // />
            'X'
            :
            // <img
            //     className='w-full h-full rounded-xl'
            //     src={Opng}
            // />
            'O';
        setHistory(newHistory.concat([{ squares: currentSquares }]));
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = step => {
        console.log("step", step)
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };

    const moves = history.map((step, move) => {
        const desc = move ? `Go to move #${move}` : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ?
            <img src={Xpng} />
            // 'X'
            :
            <img src={Opng} />
            //  'O'
            }`;
    }

    const emptyWinner = () => {
        if (winner) {
            return null
        }
    }

    return (
        <div className="game w-full min-h-[100vh]">
            <div className=' w-full flex justify-between items-center py-2 px-4'>
                <div className=' flex flex-col gap-2 justify-center  items-start max-w-max'>
                    <div className='max-w-max flex gap-4 items-center justify-start'>
                        <h2 className=' text-3xl font-bold'>Player 1 :</h2>
                        <h2 className=' text-3xl font-bold'>X</h2>
                        {/* <img className='w-[70px] h-[70px]' src={Xpng} /> */}

                    </div>
                    <h2 className=' text-3xl text-center font-bold'>Score :- <span>{firstPlayerScore}</span></h2>
                </div>
                {
                    filledCell === 9 &&
                    <div className=' flex flex-col gap-2 justify-center  items-start max-w-max'>
                        <div className='max-w-max flex gap-4 items-center justify-start'>
                            <h2 className=' text-3xl font-bold'>Match Tie</h2>

                            {/* <img className='w-[70px] h-[70px]' src={Xpng} /> */}

                        </div>

                    </div>
                }

                {
                    winner &&
                    <div className=' flex flex-col gap-2 justify-center  items-start max-w-max'>
                        <div className='max-w-max flex gap-4 items-center justify-start'>
                            <h2 className=' text-3xl font-bold'>{winner === "X" ? "Player 1 win" : "Player 2 win"} </h2>
                            {/* <button>Continue</button> */}

                            {/* <img className='w-[70px] h-[70px]' src={Xpng} /> */}

                        </div>

                    </div>
                }

                <div className=' flex flex-col gap-2 justify-center  items-start max-w-max'>
                    <div className='max-w-max flex gap-4 items-center justify-start'>
                        <h2 className=' text-3xl font-bold'>Player 2 :</h2>
                        <h2 className=' text-3xl font-bold'>O</h2>
                        {/* <img className='w-[70px] h-[70px]' src={Opng} /> */}

                    </div>
                    <h2 className=' text-3xl text-center font-bold'>Score :- <span>{secondPlayerScore}</span></h2>
                </div>
            </div>


            <div className="game-board w-full  flex flex-col justify-center items-center py-[3rem] gap-8 relative">


                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                    setFilledCell={setFilledCell}
                    filledCell={filledCell}
                    winner={winner}
                />
                {/* <div className="game-info flex gap-4 justify-center items-center">
                    <img src={Xpng} className='w-[70px] h-[70px]'/>
                    <img src={Opng} className='w-[70px] h-[70px]'/>
                </div> */}

                <div className='flex gap-4'>
                    <Link to="/">
                        <button className='border-2 border-white p-3 w-[120px] text-white font-bold rounded-xl'>Home</button>
                    </Link>
                    <button
                        className='border-2 border-white p-3 w-[120px] text-white font-bold rounded-xl'
                        onClick={() => resetHandler(filledCell)}
                    >Reset</button>
                    <button
                        className='border-2 border-white p-3 w-[120px] text-white font-bold rounded-xl'
                        onClick={() => saveBtnHandler()}
                    >Save</button>
                </div>
                {
                    winner && <div className='w-full h-full absolute top-0  bg-black z-10 flex justify-center items-center'>
                        <button
                            onClick={() => continueHandler()}
                            className='border-2 border-white p-3 w-[120px] text-white font-bold rounded-xl'>Continue</button>
                    </div>
                }

            </div>



        </div>
    );
}

function calculateWinner(squares) {
    console.log(squares)
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// export default TicTacToeStart;
