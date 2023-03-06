import React from 'react'
import './blogfront.css'
import Fade from 'react-reveal/Fade';
import { DiApple } from 'react-icons/di';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Blognavbar from './components/blognavbar/Blognavbar';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
    />
  );
}
const Blogfront = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Slider {...settings} >
      <div className='Blogfront'>
        <div className="Blogfront_cell1">
          {/* <Blognavbar /> */}

          <Fade>
            <div className="Blogfront_cell1Box">

              <div className="Blogfront_cell1BoxCol1">
                <div className="Blogfront_cell1BoxLine"></div>
                <div className="Blogfront_cell1BoxDate">MAY 21</div>
              </div>

              <div className="Blogfront_cell1BoxCol2">
                <div className="Blogfront_cell1BoxTitle">
                  London Music Fest 2016 Announced - AC/DC, Artic Monkeys, Rammstein and more
                </div>
                <div className="Blogfront_cell1BoxDesc">Bring your friends and come to the best ever London Music Fest, June 2016. What can you expect? A lot of great artist, great music and a lot of fun! Buy tickets today and see you at the show!</div>
              </div>
            </div>
          </Fade>


          <div className="Blogfront_cell1Btn">
            <button className="Blogfront_cell1BtnNext" onClick={SampleNextArrow} ><FaAngleRight className='Blogfront_cell1BtnNextIcon' /> </button>
            <button className="Blogfront_cell1BtnPrev" onClick={SamplePrevArrow}><FaAngleLeft className='Blogfront_cell1BtnPrevIcon' /></button>
          </div>

        </div>
      </div>
      <div className='Blogfront'>
        <div className="Blogfront_cell2">
          {/* <Blognavbar /> */}
          <Fade duration={3000}>
            <div className="Blogfront_cell1Box">

              <div className="Blogfront_cell1BoxCol1">
                <div className="Blogfront_cell1BoxLine"></div>
                <div className="Blogfront_cell1BoxDate">MAY 21</div>
              </div>

              <div className="Blogfront_cell1BoxCol2">
                <div className="Blogfront_cell1BoxTitle">
                  Fun fun - Guns’n’Roses at Coachella 2016

                </div>
                <div className="Blogfront_cell1BoxDesc">
                  One of the most popular group in the world have a new frontman. After doctor’s orders, their frontman Brian Johnson had to stop touring. It’s been confirmed that Axl Rose is the new frontman. Sure you know who Axl Rose is, Guns ‘n’ Roses sound familiar right.
                  Although we believe that Axl is amazing performer and vocalist, we can’t but wonder if he can fill Brian’s shoes.
                </div>
              </div>
            </div>
          </Fade>
          <div className="Blogfront_cell1Btn">
            <button className="Blogfront_cell1BtnNext" onClick={SampleNextArrow} ><FaAngleRight className='Blogfront_cell1BtnNextIcon' /> </button>
            <button className="Blogfront_cell1BtnPrev" onClick={SamplePrevArrow}><FaAngleLeft className='Blogfront_cell1BtnPrevIcon' /></button>
          </div>

        </div>

      </div>

    </Slider>

  )
}

export default Blogfront
