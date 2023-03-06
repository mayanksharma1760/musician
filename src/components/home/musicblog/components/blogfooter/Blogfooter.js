import React from 'react'
import './blogfooter.css'
import {FaFacebookF,FaSoundcloud,FaLastfm, FaYoutube, FaInstagram} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
const Blogfooter = () => {
  return (
    <div className='Blogfooter'>
      <img src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/musician-logo-red-white.svg" alt="" />

      <ul>
        <li><a href=""> NEWS</a></li>
        <li><a href=""> REVIEWS</a></li>
        <li><a href=""> ABOUT</a></li>
        <li><a href=""> CONTACT</a></li>
      </ul>


      <ul style={{fontSize:'17px'}}>
        <li>
      <a target="_blank" href="http://soundcloud.com">
      <FaSoundcloud /> 
      </a>
      </li>
  
      <li>
      <a target="_blank" href="https://www.facebook.com/pixel.industry.themes/">
          <FaFacebookF/>
      </a>
  </li>

  <li>
      <a target="_blank" href="http://lastfm.com">
          <FaLastfm  />
      </a>
      </li>
  
      <li>
      <a target="_blank" href="http://youtube.com">
          <FaYoutube/>
      </a>
  </li>

  <li>
      <a target="_blank" href="https://twitter.com/pixel_industry" >
          <AiOutlineTwitter />
      </a>
      </li>
  
      <li>
      <a target="_blank" href="https://instagram.com">
          <FaInstagram  />
      </a>
      </li>
  </ul>




    <span className="BlogfooterText">Designed by  <a href="">Pixel Industry</a>. All rights reserved.</span>

      
    </div>
  )
}

export default Blogfooter
