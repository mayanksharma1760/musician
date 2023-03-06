import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React ,{useState}from 'react'
import './mail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Mail = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    
    setOpen(true);
  };
  return (
    <div className='Mail'>
      {open && ( <div className="MailPopup">
        <div className="MailPopupTitle">SIGNUP FOR OUR MAIL LIST</div>
        <span>
        <input type="text" placeholder='Your email address...' />
        <button className='MailPopupBtn'>SUBSCRIBE</button>
        <FontAwesomeIcon
              icon={faXmark}
              className='MailPopupIcon'
              onClick={() => setOpen(false)}/>
        </span>
      </div>)}
      <img src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/musician-logo-red-white.svg" alt="" />
      <ul className="Mail_Ul">
        <li className="Mail_UlLi"> <a href=""> NEWS</a> </li>
        <li className="Mail_UlLi"><a href="">MUSIC</a></li>
        <li className="Mail_UlLi"><a href="">VIDEOS</a></li>
        <li className="Mail_UlLi"><a href="">EVENTS</a></li>
        <li className="Mail_UlLi"><a href="">ABOUT</a></li>
        <li className="Mail_UlLi"><a href="">CONTACT</a></li>
      </ul>
      <button className="Mail_btn" onClick={handleOpen}>SIGNUP FOR OUR MAIL LIST</button>
    </div>
  )
}

export default Mail
