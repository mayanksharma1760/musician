import React from 'react'
import Artistnavbar from '../../../home/musicartist/components/carousel/components/artistnavbar/Artistnavbar'
import './title.css'
const Title = (props) => {
  return (
    <div className='Title'>
      <Artistnavbar/>
      <h1>{props.heading}</h1>
    </div>
  )
}

export default Title
