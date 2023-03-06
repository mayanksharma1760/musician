import React ,{useState}from 'react'
import "./pastevent.css"
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Headingline from '../headingline/Headingline';
import {TfiReload} from 'react-icons/tfi';
import {FaSearch} from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Pastevent = () => {
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
    }
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
    <div className="pastevent_heading"><Fade bottom duration={1500}>PAST EVENTS PHOTOS & VIDEOS</Fade></div>
    <Headingline/>
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
               
               <FaSearch
                className='pastevent_imagesHoverIcon'
                /> 
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="pastevent_imagesWrapperImg"
                  
                />
               
              </div>
            ))}
          </div>
     
          <Fade bottom duration={1500}>  <button className="pasteventContentButton"><TfiReload className='pasteventContentButtonIcon' />  LOAD MORE</button></Fade>
    </div>
  </div>
  
  
  )
}

export default Pastevent
