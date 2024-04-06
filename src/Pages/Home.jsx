import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Home/Main'
import { Score } from '../components/Home/Score'
import { Creator } from '../components/Home/Creator'
import { Footer } from '../components/Home/Footer'
import { Poster } from '../components/Home/Poster'
import { AvailableGame } from '../components/Home/AvailableGame'
import { useSelector } from 'react-redux'

export const Home = () => {
  const {user} = useSelector(state=>state.profile)
 
 

  return (
    <div className='w-full flex flex-col justify-center items-center '>
      <div className='w-11/12 mb-[3rem]'>
        <div className='w-[100%] flex justify-center items-center'>
          <Navbar />
        </div>
        <div className='w-full '>
          <Main 
          heading={"Welcome to Chill Zone Games."}
          paragraph={"At Chill Zone Games, we're all about bringing the joy of gaming to your fingertips. Dive into a world of excitement, adventure, and endless entertainment right from the comfort of your own home. Whether you're a hardcore gamer or just looking for a way to unwind after a long day, we've got something for everyone."}
          />
        </div>
        <div className='w-full '>
          <Score />
        </div>
        <div className='w-full'>
          <Poster />
        </div>


      </div>
      <div className='mb-[3rem] w-full'>
        <div className='w-full '>
          <AvailableGame />
        </div>
      </div>
      {/* <div className='w-11/12 mb-[3rem]'>
        <div className='w-full'>
          <Creator />
        </div>
        
      </div> */}
      <div className=' w-full'>
         <div className='w-full'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
