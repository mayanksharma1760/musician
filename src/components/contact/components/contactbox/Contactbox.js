import React, { useState } from 'react';
import './contactbox.css'
import ReCAPTCHA from "react-google-recaptcha";
const Contactbox = () => {
  const [verfied, setVerifed] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <div className='Contactbox'>
      <div className="Contactbox_booking">
        <div className="Contactbox_bookingHeading">Booking </div><div className="Contactbox_bookingHeadingLine"></div>
        <div className="Contactbox_bookingId">info@musician.com</div>

        <p>Booking Manager: Jerry Howard</p>
        <p>Phone: +00 41 258 7895</p>
      </div>

      <div className="Contactbox_message">
        <div className="Contactbox_messageHeading">Your message</div><div className="Contactbox_messageHeadingLine"></div>
        <div className="Contactbox_messageInputs">

          <div className='Contactbox_messageInputsCol1'>
            <p>Your name</p>
            <input type="text" placeholder='Your name' />
          </div>
          <div className='Contactbox_messageInputsCol2'>
            <p>Your email</p>
            <input type="text" placeholder='Your email' />
          </div>
        </div>
        <p>Your message</p>
        <textarea type="text" className='Contactbox_messageText' name="" id="" placeholder='Your message' />
        <ReCAPTCHA style={{height:'60px'}}
          
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKh"
          onChange={onChange}
        />


        <button className="Contactbox_messageBtn" disabled={!verfied}>SEND</button>

      </div>
    </div>
  )
}

export default Contactbox
