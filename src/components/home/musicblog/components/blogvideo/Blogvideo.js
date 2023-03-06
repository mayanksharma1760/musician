import React from 'react'
import './blogvideo.css'
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Blogvideo = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (<>
        <Slider {...settings} >


            <div className='Blogvideo'>
            <Fade><div className="BlogvideoHeading">VIDEO <a href="">#MUSICIANTRACKS</a></div></Fade>
                <div className="BlogvideoHeadingline"></div>

                <div>
                    <div className="BlogvideoRow">
                        <div className="BlogvideoRowBox">
                            <a href=''> <img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-13.jpg" alt="" /></a>

                            <div className="BlogvideoRowBoxText">
                                <div className="BlogvideoRowBoxTextBy">
                                    BY: <a href="">MUSICIAN</a>/<a href="" className="BlogvideoRowBoxTextByActive">VIDEO</a>/ <p>MAY21</p>
                                </div>
                                <a href="" className='BlogvideoRowBoxTextTitle'>
                                    James Blake debuts new single, new album should be out soon
                                </a>
                            </div>
                        </div>
                        <div className="BlogvideoRowBox">
                            <a href=''>  <img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-14.jpg" alt="" /></a>

                            <div className="BlogvideoRowBoxText">
                                <div className="BlogvideoRowBoxTextBy">
                                    BY: <a href="">MUSICIAN</a>/<a href="" className="BlogvideoRowBoxTextByActive">VIDEO</a>/ <p>MAY21</p>
                                </div>
                                <a href="" className='BlogvideoRowBoxTextTitle'>
                                    New Indie rock band hits the stage at latest “Indie Rock music festival” in London                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div>
                <div className='Blogvideo'>
                <Fade><div className="BlogvideoHeading">VIDEO <a href="">#MUSICIANTRACKS</a></div></Fade>
                <div className="BlogvideoHeadingline"></div>

                    <div className="BlogvideoRow">

                        <div className="BlogvideoRowBox">
                            <a href=''>  <img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-14.jpg" alt="" /></a>

                            <div className="BlogvideoRowBoxText">
                                <div className="BlogvideoRowBoxTextBy">
                                    BY: <a href="">MUSICIAN</a>/<a href="" className="BlogvideoRowBoxTextByActive">VIDEO</a>/ <p>MAY21</p>
                                </div>
                                <a href="" className='BlogvideoRowBoxTextTitle'>
                                    New Indie rock band hits the stage at latest “Indie Rock music festival” in London                </a>
                            </div>
                        </div>
                        <div className="BlogvideoRowBox">
                            <a href=''> <img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-13.jpg" alt="" /></a>

                            <div className="BlogvideoRowBoxText">
                                <div className="BlogvideoRowBoxTextBy">
                                    BY: <a href="">MUSICIAN</a>/<a href="" className="BlogvideoRowBoxTextByActive">VIDEO</a>/ <p>MAY21</p>
                                </div>
                                <a href="" className='BlogvideoRowBoxTextTitle'>
                                    James Blake debuts new single, new album should be out soon
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </Slider>

<div className="BlogvideoTag">
    <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/ad-placeholder.jpg" alt="" />
</div>

        </>

    )
}

export default Blogvideo
