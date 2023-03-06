import React from 'react'
import "./mail.css"
import Fade from 'react-reveal/Fade';
import Headingline from '../headingline/Headingline';

const Mail = () => {
  return (
    <div className="mail">
  <div className="mail_heading"><Fade bottom duration={1500}>JOIN EVELYN’S MAILING LIST</Fade><Headingline/></div>
  <div className="mail_input">
  <input type="text" name="email" id="email" className="mail_inputText" placeholder="Your email address.."/>
  <button className="mail_inputButton">subscribe</button>
</div>
</div>

  )
}

export default Mail
