import React from 'react'
import "./news.css"
import Fade from 'react-reveal/Fade';

// import Carousel from 'react-bootstrap/Carousel';
import Headingline from '../headingline/Headingline';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="news">
            <div className="newsHeading"><Fade bottom duration={1500}>NEWS & PRESS</Fade></div><Headingline />
            <Slider {...settings} >
                <div >
                    <div className="newsCarousel1">
                        <div className="newsCarousel1Column1">
                            <div className="newsCarousel1Column1Date">
                                ROCKSTAR MAGAZINE / DECEMBER 6,2016
                            </div>
                            <div className="newsCarousel1Column1Title">
                                <a href=""> Wonderful vocalist, friendly, amazing, wonderful personality</a>
                            </div>
                            <div className="newsCarousel1Column1Desc">
                                <p>Hearing her sing... Simply wow, what a vocal capabilities. She and her band are amazing, bringing jazz to whole new level <a href="" className="newsCarousel1Column1DescReadmore">[...]</a> </p>
                            </div>
                        </div>
                        <div className="newsCarousel1Column2">
                            <div className="newsCarousel1Column2Date">
                                DECEMBER 6,2016
                            </div>
                            <div className="newsCarousel1Column2Title">
                                <a href="">Presenting Evelyn Burke live in London UK</a>
                            </div>
                            <div className="newsCarousel1Column2Desc">
                                <p>Hear the new live concert from Evelyn Burke, live from London UK. Evelyn and her band held a charity concert and it was great   <a href="" className="newsCarousel1Column2DescReadmore">[...]</a></p>
                            </div>
                        </div>
                        <div className="newsCarousel1Column3">
                            <div className="newsCarousel1Column3Date">
                                SPILL MAGAZINE / DECEMBER 6,2016
                            </div>
                            <div className="newsCarousel1Column3Title">
                                <a href="">Modern Jazz in whole new level - Listen to great Evelyn Burke</a>
                            </div>
                            <div className="newsCarousel1Column3Desc">
                                <p>A real refreshing vocal in jazz world. Combining elements of old and modern jazz like a pro. Evelyn and her band nailed it  <a href="" className="newsCarousel1Column3DescReadmore">[...]</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div >

                    <div className="newsCarousel2">
                        <div className="newsCarousel2Column1">
                            <div className="newsCarousel2Column1Date">
                                ROCKSTAR MAGAZINE / DECEMBER 6,2016
                            </div>
                            <div className="newsCarousel2Column1Title">
                                <a href=""> Wonderful vocalist, friendly, amazing, wonderful personality</a>

                            </div>
                            <div className="newsCarousel2Column1Desc">
                                <p>Hearing her sing... Simply wow, what a vocal capabilities. She and her band are amazing, bringing jazz to whole new level  <a href="" className="newsCarousel2Column1DescReadmore">[...]</a></p>

                            </div>
                        </div>
                        <div className="newsCarousel2Column2">
                            <div className="newsCarousel1Column2Date">
                                DECEMBER 6,2016
                            </div>
                            <div className="newsCarousel2Column2Title">
                                <a href="">Presenting Evelyn Burke live in London UK</a>
                            </div>
                            <div className="newsCarousel2Column2Desc">
                                <p>Hear the new live concert from Evelyn Burke, live from London UK. Evelyn and her band held a charity concert and it was great  <a href="" className="newsCarousel2Column2DescReadmore">[...]</a></p>

                            </div>
                        </div>
                        <div className="newsCarousel2Column3">
                            <div className="newsCarousel2Column3Date">
                                SPILL MAGAZINE / DECEMBER 6,2016
                            </div>
                            <div className="newsCarousel2Column3Title">
                                <a href="">Modern Jazz in whole new level - Listen to great Evelyn Burke</a>
                            </div>
                            <div className="newsCarousel2Column3Desc">
                                <p>A real refreshing vocal in jazz world. Combining elements of old and modern jazz like a pro. Evelyn and her band nailed it <a href="" className="newsCarousel2Column3DescReadmore">[...]</a></p>

                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default News
