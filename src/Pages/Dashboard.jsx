import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { History } from '../components/Dashboard/History'
import { FirstCont } from '../Card/Dashboard/FirstCont'
import {Footer} from "../components/Home/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { apiConnector } from '../services/apiConnector'
import { historyEndPoint } from '../services/api'
import { setAllGamesHIstory } from '../slices/profileSlice'

export const Dashboard = () => {
    const {user} = useSelector(state => state.profile)
    const {GETALLGAMEHISTORY_API} = historyEndPoint
    const {token} = useSelector( state =>state.auth )
    const dispatch = useDispatch()
    

    const getAllGameHistory = async()=>{
       try{
        const response = await apiConnector("GET",GETALLGAMEHISTORY_API, null,
        { Authorization: `Bearer ${token}`, }
 
    )
    // const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
    //     Authorization: `Bearer ${token}`,
    //   })


    console.log("All Game History", response.data.data)
    dispatch(setAllGamesHIstory(response.data.data))
       }
       catch(error){
console.log("Could not fetch Data------>",error)
       }
    }

    useEffect( ()=>{
        console.log("Dashboard Token",token)
if(token){
    getAllGameHistory()
}
    },[token] )



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
                <div className='w-full'>
                    <History />
                </div>
            </div>
            <div className='w-full'>
<Footer/>
            </div>

        </div>
    )
}
