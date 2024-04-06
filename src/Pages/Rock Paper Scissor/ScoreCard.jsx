import React from 'react'

export const ScoreCard  = ({data,key}) => {
  return (
    <div key={key}>
        <h1 className='text-white font-bold sm:text-xl text-lg'>
            {
            data.title
            }
            </h1>
    </div>
  )
}
