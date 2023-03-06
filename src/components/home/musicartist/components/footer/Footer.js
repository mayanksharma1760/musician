import React from 'react'
import"./footer.css"

import {FaFacebookF,FaSoundcloud,FaLastfm, FaYoutube, FaInstagram} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
const Footer = ({type}) => {
  return (
    <div className="footer">
    <span className="footer_text">Designed by  <a href="">Pixel Industry</a>. All rights reserved.</span>
    <ul  className={type === "red" ? "footer_iconsRed" : "footer_icons" }>
      <a target="_blank" href="http://soundcloud.com">
      <FaSoundcloud /> 
      </a>
  
      <a target="_blank" href="https://www.facebook.com/pixel.industry.themes/">
          <FaFacebookF/>
      </a>
  
      <a target="_blank" href="http://lastfm.com">
          <FaLastfm  />
      </a>
  
      <a target="_blank" href="http://youtube.com">
          <FaYoutube/>
      </a>
  
      <a target="_blank" href="https://twitter.com/pixel_industry" >
          <AiOutlineTwitter />
      </a>
  
      <a target="_blank" href="https://instagram.com">
          <FaInstagram  />
      </a>
  </ul>
  </div>
  
  
  )
}

export default Footer
