import React ,{useState }from 'react'
import "./sound.css"
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Headingline from '../headingline/Headingline';
import { HiMusicNote } from 'react-icons/hi';
import { Reveal } from 'react-reveal';

const Sound = () => {  
  return (
    <div className="sound">
      <div className="sound_heading">
        {/* <div className="sound_headingLogo"></div> */}
        <Fade bottom duration={1500}>SOUND THAT INSPIRES</Fade> <Headingline /></div>
      <iframe width="100%" height="300" scrolling="no" frameborder="no" title='iframe'
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254864491&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
     <Fade bottom duration={1500}> <button className="soundButton">
      <HiMusicNote className='soundButtonIcon'/>   VIEW DISCOGRAPHY
</button></Fade>
    </div>
  )
}

export default Sound
