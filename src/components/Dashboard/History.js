import React from 'react'
import rockPaperScissor from "../../Assets/Rock Paper Sicsor.jpeg"
import { HistoryCard } from '../../Card/Dashboard/HistoryCard'
import "../../CSS/Main.css"
import { useDispatch, useSelector } from 'react-redux';

export const History = () => {
  const {allGamesHistory} = useSelector(state =>state.profile)

  console.log("allGamesHistory",allGamesHistory)
  return (
   <div className=''>
            <div className='flex flex-col justify-center items-center w-full gap-8'>
           {
            allGamesHistory &&
            allGamesHistory.length !== 0 &&  <div className='text-[50px] font-bold text-center activeBtn'>Score</div>
           }    


                <div className='w-full flex flex-col items-center gap-[4rem]'>
                  {
                    allGamesHistory && allGamesHistory[0] &&
                      <HistoryCard scoreImgs={rockPaperScissor}  history={allGamesHistory[0]} />
                   
                  }
                   {
                    allGamesHistory && allGamesHistory[1] &&
                      <HistoryCard scoreImgs={rockPaperScissor}  history={allGamesHistory[1]}/>
                   
                  }
                   {
                    allGamesHistory && allGamesHistory[2] &&
                      <HistoryCard scoreImgs={rockPaperScissor}  history={allGamesHistory[2]}/>
                   
                  }
                   {
                    allGamesHistory && allGamesHistory[3] &&
                      <HistoryCard scoreImgs={rockPaperScissor}  history={allGamesHistory[3]}/>
                   
                  }
                   {
                    allGamesHistory && allGamesHistory[4] &&
                      <HistoryCard scoreImgs={rockPaperScissor}  history={allGamesHistory[4]}/>
                   
                  }

{/* {
                    allGamesHistory && allGamesHistory.map( (history,index)=>(
                      <HistoryCard scoreImgs={rockPaperScissor} key={index} history={his}/>
                    ) )
                  }
                   */}
                    {/* <HistoryCard scoreImgs={rockPaperScissor}/>
                     <HistoryCard scoreImgs={rockPaperScissor}/>
                     <HistoryCard scoreImgs={rockPaperScissor}/>
                     <HistoryCard scoreImgs={rockPaperScissor}/> */}
                </div>
            </div>
        </div>
  )
}
