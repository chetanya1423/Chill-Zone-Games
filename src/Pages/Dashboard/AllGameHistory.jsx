import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import "../../CSS/Main.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "../../CSS/Dashboard/AllGameHistory.css"


export const AllGameHistory = () => {
    const { historyGameName,allGamesHistory } = useSelector(state => state.profile)
    const navigate = useNavigate()
    console.log("historyGameName", historyGameName)
    const [historyData, setHistoryData] = useState([])
    const [copyHistoryData, setCopyHistoryData] = useState(allGamesHistory)


useEffect( ()=>{
if(!historyGameName){
    navigate(-1)
}
},[] )


    useEffect( ()=>{
        if(allGamesHistory){
            const filterDate = copyHistoryData.filter( (data)=> data.game === historyGameName )
            setHistoryData(filterDate)
        }

    },[allGamesHistory] )


    const playAgainHandler =()=>{
        if(historyGameName === "Rock Paper Scissor"){
            navigate("/rock-paper-scissor")
        }
        if(historyGameName === "Tic Tac Toe"){
            navigate("/tic-tac-toe")
        }
        if(historyGameName === "Snake"){
            navigate("/snake")
        }
    }

    console.log("historyData",historyData)
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-11/12'>
                <Navbar />
            </div>
            <div className='w-11/12 flex justify-center items-center'>
                <div className='mt-[3rem]'>
                    <h1 className='activeBtn text-3xl font-bold text-center'>{historyGameName}{" "}Game History</h1>
                </div>

            </div>
            <div className='w-11/12'>
                <div className='w-full  gap-4 boxGridDiv mt-8'>
                   {
                    historyData.length !== 0 ?
                    historyData[0].scores.map( (data,index)=>(
                        <div key={index} className='flex justify-between items-center w-full p-2'>
                        <div className='w-[100%] flex justify-between items-center'>
                            <div className='border w-[100%] flex flex-col gap-2 rounded-xl'>
                                <div className='text-3xl font-bold flex justify-center items-center'>Score {index+1}</div>
                              {
                               data?.status &&   
                                <h2 className='text-center text-2xl font-bold text-darkRed'>{data.status}</h2>
                              }
                                <p className='text-xl text-center font-bold'>{data.firstPlayerScoreDate.slice(0, 10)}{" , "}{data.firstPlayerScoreDate.slice(11, 16)}</p>
                                <div className='w-full flex flex-col justify-center items-center'>
                                    <div className='text-green-500 text-2xl font-bold'>Score</div>
                                    <p className='text-darkYellow font-bold text-2xl'>
                                        {data.firstPlayerScore}
                                    </p>
                                </div>
                                <div className='flex flex-col mb-2 justify-center items-center gap-2'>
                                    <button className=' py-2 px-3 w-[130px] bgColor rounded-xl font-bold text-lg' onClick={()=>playAgainHandler()}>Play Again</button>
                                 
                                </div>
                            </div>

                        </div>
                    </div>
                    ) )
                    :
                    <div className='w-full h-[70vh] flex justify-center items-center'>
                        <h1 className='activeBtn text-4xl font-bold'>No History Available.</h1>
                    </div>
                   }
                </div>
            </div>
        </div>
    )
}
