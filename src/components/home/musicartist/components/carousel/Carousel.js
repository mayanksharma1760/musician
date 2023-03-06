import React from 'react'
import "./carousel.css"
import Fade from 'react-reveal/Fade';
import Sidebar from './components/sidebar/Sidebar';
import { DiApple } from 'react-icons/di';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Artistnavbar from './components/artistnavbar/Artistnavbar';


const carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <Slider {...settings} >
      
      <div className='carousel'>
      
        <div className="carousel-cell1">
        <Artistnavbar/>
          <Sidebar />
          <div className="carousel-cell1Desc">
            <Fade bottom duration={3000}>Evelyn Burke-Live in London-May 2016</Fade>
          </div>
          <div className="carousel-cell1Heading"><Fade duration={2000}>NOW AVAILABLE</Fade></div>
          <div className="carousel-cell1Desc2"><Fade top duration={3000}>Buy on iTunes store</Fade></div>
<button className="carousel-cell1Button"><DiApple/>Download Now</button>
        </div>
      </div>
      <div className='carousel'>
        <div className="carousel-cell2">
        <Artistnavbar/>
          <Sidebar />


          
          <div className="carousel-cell2Desc">
            <Fade bottom duration={3000}> Evelyn Burke-Hulla Lounge London</Fade>
          </div>
          <div className="carousel-cell2Heading"><Fade duration={2000}>LATE SPRING TOUR</Fade></div>
          <div className="carousel-cell1Desc2"><Fade top duration={3000}>July 22,2017</Fade></div>
          <button className="carousel-cell2Button">Grab Your Ticket</button>
        </div>
      </div>

    </Slider>


  )
}

export default carousel
