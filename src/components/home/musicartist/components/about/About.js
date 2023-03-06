import React from 'react'
import "./about.css"
import Fade from 'react-reveal/Fade';
import Headingline from '../headingline/Headingline';


const About = () => {
  return (
    <div className="About">

      <div className="About_heading"><Fade bottom duration={1500}>ABOUT EVELYN</Fade>
        <Headingline /></div>

      <div className="About_desc">Evelyn Burke is a London-based creative artist. She’s inspired by well known modern Jazz
        artists. Evelyn’s
        <br /> exquisite vocal has been recognized along Uk and Europe, and been discovered by most popular <br /> music
        magazines and publications. Evelyn has performed as a solo artist and with her new band <br /> across Europe and now
        starting a tour in USA.
      </div>
    </div>
  )
}

export default About
