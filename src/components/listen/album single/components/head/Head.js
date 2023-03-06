import React from 'react'
import './head.css'
import Artistnavbar from '../../../../home/musicartist/components/carousel/components/artistnavbar/Artistnavbar'

const Head = (prop) => {
  return (
    <div className='Head'>
      <Artistnavbar />
      <h1>{prop.head}</h1>
    </div>
  )
}

export default Head
