import React from 'react'
import "./quote.css"
import Carousel from 'react-bootstrap/Carousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';


const Quote = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <div className="Quote">
      <div className="QuoteImg">
        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/slider/musician-music-artist-slide-03.jpg" />
      </div>


      {/* <Slider {...settings} >
        <div>
          <div className="Quote_Text">
            <span> <ImQuotesLeft /> I always love when you upload something new. Your <br /> attention to detail,uniqueness and story driven design
              is a <br /> joy to explore.Every pixel is there for a reason, nothing is <br /> generic, and it all works great
              together .Truly an inspiration to look up to, and steal from :)<ImQuotesRight /></span>
            <div className="Quote_Writer">colorByt</div>
          </div>
        </div>

        <div>
          <div className="Quote_Text">
            <span> <ImQuotesLeft /> I always love when you upload something new. Your <br /> attention to detail,uniqueness and story driven design
              is a <br /> joy to explore.Every pixel is there for a reason, nothing is <br /> generic, and it all works great
              together .Truly an inspiration to look up to, and steal from :)<ImQuotesRight /></span>
            <div className="Quote_Writer">colorByt</div>
          </div>
        </div>

        <div>
          <div className="Quote_Text">
            <span> <ImQuotesLeft /> I always love when you upload something new. Your <br /> attention to detail,uniqueness and story driven design
              is a <br /> joy to explore.Every pixel is there for a reason, nothing is <br /> generic, and it all works great
              together .Truly an inspiration to look up to, and steal from :)<ImQuotesRight /></span>
            <div className="Quote_Writer">colorByt</div>
          </div>
        </div>
        
      </Slider> */}

            
      <Carousel>
        <Carousel.Item>
          <div className="Quote_Text">
           <span> <ImQuotesLeft/> I always love when you upload something new. Your <br /> attention to detail,uniqueness and story driven design
            is a <br /> joy to explore.Every pixel is there for a reason, nothing is <br /> generic, and it all works great
            together .Truly an inspiration to look up to, and steal from :)<ImQuotesRight /></span> 
            <div className="Quote_Writer">colorByt</div>
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="Quote_Text">
          <span><ImQuotesLeft />  I simply love music! Performing on a stage, transferring all that positive energy to my public is like a dream
            come true.
            A feeling when someone sings your song is epic. I’m glad to be able to share that feeling and enjoy it in my
            everyday job and life!<ImQuotesRight /></span>
            <div className="Quote_Writer">Evelyn Burke</div>
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="Quote_Text">
         <span><ImQuotesLeft/> Best customer support and response time I have ever seen... not to mention
              a kick ass theme! Great feeling from this purchase.Thank you Pixel Industry! <ImQuotesRight /></span> 
            <div className="Quote_Writer">Keith Hopkins</div>
          </div>
        </Carousel.Item>
      </Carousel> 

    </div>
  )
}

export default Quote
