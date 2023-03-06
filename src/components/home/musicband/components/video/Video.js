import React from 'react'
import Headingline from '../../../musicartist/components/headingline/Headingline'
import './video.css'
const Video = () => {
  return (
    <div className='Video'> 
      <div className="Video_heading">LIVE AT COCHELLA<Headingline type='red'/></div>

      <iframe src="https://www.youtube.com/embed/MOwhkVpwKn4" width="100%" height="500" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

    </div>
  )
}

export default Video
