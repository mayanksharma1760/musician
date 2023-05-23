import React, { useEffect } from 'react'
import "./musicband.css"
import Front from './components/front/Front'
import Box from './components/box/Box'
import Smallnavbar from './components/smallnavbar/Smallnavbar'
import Dates from './components/dates/Dates'
import Music from './components/music/Music'
import Video from './components/video/Video'
import Buzz from './components/buzz/Buzz'
import Feature from './components/feature/Feature'
import Mail from './components/mail/Mail'
import Footer from '../musicartist/components/footer/Footer'
// import Loader from '../musicartist/components/loader/Loader'

const Musicband = () => {
  useEffect(() => {
    document.title = `Musician - Home page music band`
  });
  return (
    <div className='Musicband'>
      {/* <Loader /> */}
      <Smallnavbar />

      <Front />
      <Box />
      <div className="MusicbandImg1">
        <img className='MusicbandImg1Borderup' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-top-border.svg" alt="" />
        <img className='MusicbandImg1Borderdown' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-bottom-border.svg" alt="" />
      </div>


      <Dates />
      <div className="MusicbandImg2">
        <img className='MusicbandImg1Borderup' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-top-border.svg" alt="" />
        {/* <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/bkg-img-07.jpg" alt="" /> */}
        <img className='MusicbandImg1Borderdown' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-bottom-border.svg" alt="" />
      </div>

      <Music />
      <div className="MusicbandImg3">
        <img className='MusicbandImg1Borderup' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-top-border.svg" alt="" />
        {/* <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/bkg-img-08.jpg" alt="" /> */}
        <img className='MusicbandImg1Borderdown' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-bottom-border.svg" alt="" />
      </div>
      <Video />
      <div className="MusicbandImg4">
        <img className='MusicbandImg1Borderup' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-top-border.svg" alt="" />
        {/* <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/bkg-img-09.jpg" alt="" /> */}
        <img className='MusicbandImg1Borderdown' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-bottom-border.svg" alt="" />
      </div>
      <Feature />
      <div className="MusicbandImg5">
        <img className='MusicbandImg1Borderup' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-top-border.svg" alt="" />
        {/* <img  src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/bkg-img-10.jpg" alt="" /> */}
        <img className='MusicbandImg1Borderdown' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-bottom-border.svg" alt="" />
      </div>
      <Buzz />
      <Mail />
      <Footer type='red' />
    </div>
  )
}

export default Musicband
