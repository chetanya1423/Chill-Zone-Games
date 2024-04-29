import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { History } from '../components/Dashboard/History'
import { FirstCont } from '../Card/Dashboard/FirstCont'
import { Footer } from "../components/Home/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { apiConnector } from '../services/apiConnector'
import { historyEndPoint } from '../services/api'
import { setAllGamesHIstory } from '../slices/profileSlice'
import { Bar, Line, Pie } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

export const Dashboard = () => {
    const { user } = useSelector(state => state.profile)
    const { GETALLGAMEHISTORY_API } = historyEndPoint
    const { token } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const { allGamesHistory } = useSelector(state => state.profile)
    const [userHistoryRockChart, setUserHistoryRockChart] = useState(null)
    const [userHistoryRockChart1, setUserHistoryRockChart1] = useState(null)
    const [userHistoryRockChart2, setUserHistoryRockChart2] = useState(null)
    const [userHistoryRockChart3, setUserHistoryRockChart3] = useState(null)
    // const [userHistoryRockChart, setUserHistoryRockChart] = useState(null)
    // const [userHistoryRockChart, setUserHistoryRockChart] = useState(null)
  
    let rockPaperScissorScores = []
    let rockPaperScissorOnlyScores = []



    const generateRandomColors = (numColors) => {
        const colors = []
        for (let i = 0; i < numColors; i++) {
            const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)})`
            colors.push(color)
        }
        return colors
    }


    const getAllGameHistory = async () => {
        try {
            const response = await apiConnector("GET", GETALLGAMEHISTORY_API, null,
                { Authorization: `Bearer ${token}`, }

            )
            // const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
            //     Authorization: `Bearer ${token}`,
            //   })


            console.log("All Game History", response.data.data)
            dispatch(setAllGamesHIstory(response.data.data))

            

            setUserHistoryRockChart({
                labels: response.data.data[0].scores.map((data) => data.firstPlayerScore),
                datasets: [{
                    label: `${response.data.data[0].game} Game Score Chart`,
                    data: response.data.data[0].scores.map((data) => data.firstPlayerScore),
                    backgroundColor: generateRandomColors(response.data.data[0].scores.length),
                }]
            })
            setUserHistoryRockChart1({
                labels: response.data.data[1].scores.map((data) => data.firstPlayerScore),
                datasets: [{
                    label: `${response.data.data[1].game} Game Score Chart`,
                    data: response.data.data[1].scores.map((data) => data.firstPlayerScore),
                    backgroundColor: generateRandomColors(response.data.data[1].scores.length),
                }]
            })
            setUserHistoryRockChart2({
                labels: response.data.data[2].scores.map((data) => data.firstPlayerScore),
                datasets: [{
                    label: `${response.data.data[2].game} Game Score Chart`,
                    data: response.data.data[2].scores.map((data) => data.firstPlayerScore),
                    backgroundColor: generateRandomColors(response.data.data[2].scores.length),
                }]
            })
            setUserHistoryRockChart3({
                labels: response.data.data[3].scores.map((data) => data.firstPlayerScore),
                datasets: [{
                    label: `${response.data.data[3].game} Game Score Chart`,
                    data: response.data.data[3].scores.map((data) => data.firstPlayerScore),
                    backgroundColor: generateRandomColors(response.data.data[3].scores.length),
                }]
            })
    
        }
        catch (error) {
            console.log("Could not fetch Data------>", error)
        }
    }

    useEffect(() => {
        console.log("Dashboard Token", token)
        if (token) {
            getAllGameHistory()
        }
    }, [token])



    // const data = {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [
    //       {
    //         label: 'My First Dataset',
    //         data: [65, 59, 80, 81, 56, 55, 40],
    //         fill: false,
    //         borderColor: 'rgb(75, 192, 192)',
    //         tension: 0.1
    //       }
    //     ]
    //   };

    //   const options = {
    //     scales: {
    //       yAxes: [
    //         {
    //           ticks: {
    //             beginAtZero: true,
    //           },
    //         },
    //       ],
    //     },
    //   };



    //     const generateRandomColors = (numColors) => {
    //         const colors = []
    //         for (let i = 0; i < numColors; i++) {
    //           const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    //             Math.random() * 256
    //           )}, ${Math.floor(Math.random() * 256)})`
    //           colors.push(color)
    //         }/
    //         return colors
    //       }





    //        const TotalGameChart = {
    //             labels: allGamesHistory && allGamesHistory.map((date) => date.game),
    //             datasets: [
    //               {
    //                 data: allGamesHistory && allGamesHistory.map((data) => data.game),
    //                 backgroundColor: allGamesHistory && generateRandomColors(allGamesHistory.length),
    //               },
    //             ],
    //           }





    // const options = {
    //     maintainAspectRatio: false,
    //   }


    console.log("token", localStorage.getItem("user"))
    return (
        <div className='w-full flex flex-col justify-center items-center '>
            <div className='w-11/12 mb-[3rem]'>
                <div className='w-full'>
                    <Navbar />
                </div>
                <div className='w-full'>
                    <FirstCont />
                </div>
                {
                    userHistoryRockChart && <div className='w-full flex justify-center items-center mt-4'>
                        <div className='sm:w-[400px] w-[300px]'>
                            <Pie
                                data={userHistoryRockChart}
                            // options={options}
                            />
                        </div>

                    </div>
                }
                 {
                    userHistoryRockChart1 && <div className='w-full flex justify-center items-center mt-8'>
                        <div className='sm:w-[400px] w-[300px]'>
                            <Pie
                                data={userHistoryRockChart1}
                            // options={options}
                            />
                        </div>

                    </div>
                }
                 {
                    userHistoryRockChart2 && <div className='w-full flex justify-center items-center mt-8'>
                        <div className='sm:w-[400px] w-[300px]'>
                            <Pie
                                data={userHistoryRockChart2}
                            // options={options}
                            />
                        </div>

                    </div>
                }
                 {
                    userHistoryRockChart3 && <div className='w-full flex justify-center items-center mt-8'>
                        <div className='sm:w-[400px] w-[300px]'>
                            <Pie
                                data={userHistoryRockChart3}
                            // options={options}
                            />
                        </div>

                    </div>
                }
                <div className='w-full mt-8'>
                    <History />
                </div>
            </div>
            <div className='w-full'>
                <Footer />
            </div>

        </div>
    )
}

