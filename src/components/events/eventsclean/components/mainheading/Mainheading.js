import React from 'react'
import './mainheading.css'
import Artistnavbar from '../../../../home/musicartist/components/carousel/components/artistnavbar/Artistnavbar'

const Mainheading = (props) => {
  return (
    <div className='Mainheading'>
      <Artistnavbar/>
      <div className="MainheadingTitle">{props.heading}</div>
    </div>
  )
}

export default Mainheading
