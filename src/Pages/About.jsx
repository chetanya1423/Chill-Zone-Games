import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Home/Main'
import gameImg from "../Assets/Rectangle 6.png"
import { TopContainer } from '../components/About Us/TopContainer'
import "../CSS/About Us/About.css"
import { GameInfo } from '../components/About Us/GameInfo'
import {Creator} from "../components/Home/Creator"
import {Footer} from "../components/Home/Footer"

export const About = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-bgGradientColor '>
      <div className='w-11/12 mb-[3rem]'>
        <div className='w-[100%] flex justify-center items-center'>
          <Navbar />
        </div>
        <div className='flex justify-center items-center'>
          <TopContainer
            heading={"Crafted by Gaming Visionaries: Meet the Minds Behind Chill Zone Games"}
            paragraph={"At Chill Zone Games, our journey started with a single vision: to craft captivating gaming experiences that ignite excitement and adventure. From pixel to play, every aspect of Chill Zone Games reflects our passion for gaming excellence. Join us as we embark on this thrilling adventure at Chill Zone Games."}
          />

        </div>
      </div>
      <div className='w-full bg-white'>
        <GameInfo />
      </div>
      <div className='w-11/12 mb-[3rem]'>
        <div>
          <Creator/>
        </div>
      </div>
      <div className='w-full bg-white'>
      <Footer/>
      </div>
    </div>
  )
}
