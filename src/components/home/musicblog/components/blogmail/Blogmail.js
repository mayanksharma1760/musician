import React from 'react'
import "./blogmail.css"
import Fade from 'react-reveal/Fade';


const Blogmail = () => {
  return (
    <div className="Blogmail">
   <Fade bottom duration={1500}><div className="BlogmailSubheading">NEWSLETTER SIGNUP</div>
  <div className="Blogmail_heading">Join 30,000+ subscribers </div></Fade>
  <div className="Blogmail_input">
  <input type="text" name="email" id="email" className="Blogmail_inputText" placeholder="Your email address.."/>
  <button className="Blogmail_inputButton">subscribe</button>
</div>
</div>

  )
}

export default Blogmail
