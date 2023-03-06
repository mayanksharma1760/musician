import React from 'react'
import './detail.css'
import { BiTime } from 'react-icons/bi';
import { BiCalendar } from 'react-icons/bi';
import { IoLocationSharp } from 'react-icons/io5';
import { HiShoppingCart } from 'react-icons/hi';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoTwitter } from 'react-icons/io';


const Detail = () => {
  return (
    <div className='Detail'>
      <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/img-04.jpg" alt="" />

      <div className="DetailText">
        <div className="DetailTextList">
          <div className='DetailTextListItem'> <BiCalendar className='DetailTextListItemIcon' /> <p> AUG21,2016</p></div>
          <div className='DetailTextListItem'> <BiTime className='DetailTextListItemIcon' /><p>20 P.M. -</p></div>
          <div className='DetailTextListItem'>  <IoLocationSharp className='DetailTextListItemIcon' /><a href=''>Hulla Lounge,London</a></div>
        </div>

        <p className="DetailTextPara1">Join us for London Manifesto Late Spring Tour in Hulla Lounge bar. This is the first concert of Europe tour, where Evelyn will present singles from her new album “The Jazz Soul”.</p>
        <p className="DetailTextPara2">Event starts at 20 P.M. You can reserve your place by contacting the host, Hulla lounge bar. Tickets are already on sale. You can buy them in our official store or in Hulla lounge bar. Get your tickets, bring your friends and see you there!</p>


        <div className="DetailTextShareicon">
          <GrFacebookOption className='DetailTextShareiconFb' />
          <IoLogoTwitter className='DetailTextShareiconTwitter' />
          <AiOutlineGooglePlus className='DetailTextShareiconGoogle' />

        </div>

        <button className="DetailTextBtn"><HiShoppingCart className='DetailTextBtnIcon' />GET TICKETS</button>
      </div>
    </div>

  )
}

export default Detail
