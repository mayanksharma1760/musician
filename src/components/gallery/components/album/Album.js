import React ,{useState}from 'react'
import './album.css'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import {TfiReload} from 'react-icons/tfi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Slide from 'react-reveal/Slide';
const Album = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
  
    const photos = [
      {
        src: "https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-01.jpg",
      },
      {
        src: "https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-02.jpg",
      },
      {
        src: "https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-03.jpg",
      },
      {
        src: "https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-04.jpg",
      },
      {
        src: "https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-05.jpg",
      },
      {
        src: "https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-06.jpg",
      },
      {
        src:"https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-07.jpg" ,
      },
      {
        src:"https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-08.jpg" ,
      },
      {
        src:"https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-09.jpg" ,
      },
      {
        src:"https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-10.jpg" ,
      },
      {
        src:"https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-11.jpg" ,
      },
      {
        src:"https://www.pixel-industry.com/html/musician/musician-html/img/gallery/music-artist-gallery-12.jpg" ,
      },
    ];
  
    const handleOpen = (i) => {
      setSlideNumber(i);
      setOpen(true);
    };
  
  
    const handleMove = (direction) => {
      let newSlideNumber;
  
      if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 8 : slideNumber - 1;
      } else {
        newSlideNumber = slideNumber === 8 ? 0 : slideNumber + 1;
      }
  
      setSlideNumber(newSlideNumber)
    };
    return (
      <div className="pastevent">
        <ul className="pasteventNav">
        <li className="pasteventNavItem"><a href="">ALL<div className='pasteventNavItemLine' style={{display:'block'}}/></a></li>
        <li className="pasteventNavItem"><a href="">CONCERTS <Slide left><div className='pasteventNavItemLine'/></Slide></a></li>
        <li className="pasteventNavItem"><a href="">FUN TIME <Slide left><div className='pasteventNavItemLine'/></Slide></a></li>
        <li className="pasteventNavItem"><a href="">FILMING <Slide left><div className='pasteventNavItemLine'/></Slide></a></li>
        </ul>
      <div className="pastevent_content">
      {open && (
            <div className="pastevent_contentSlider">
              <FontAwesomeIcon
                icon={faXmark}
                className="pastevent_contentSliderClose"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCaretLeft}
                className="pastevent_contentSliderArrow"
                onClick={() => handleMove("l")}
              />
              <div className="pastevent_contentSliderWrapper">
                <img src={photos[slideNumber].src} alt="" className="pastevent_contentSliderWrapperImg" />
              </div>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="pastevent_contentSliderArrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
            <div className="pastevent_images">
              {photos.map((photo, i) => (
                <div className="pastevent_imagesWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="pastevent_imagesWrapperImg"
                  />
                </div>
              ))}
            </div>
       
      </div>
    </div>
    
    
    )
  }
  

export default Album
