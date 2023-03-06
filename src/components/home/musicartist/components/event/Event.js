import React from 'react'
import "./event.css"
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Headingline from '../headingline/Headingline';
import { HiShoppingCart } from 'react-icons/hi';
import { AiOutlineRight } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
const Event = () => {
  return (
    <div className="event">
      <div className="event_heading"><Fade bottom duration={1500}>UPCOMING EVENTS</Fade><Headingline /></div>
      <div className="event_columns">
        <div className="event_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />   AUG 21, 2016. Hulla Lounge London</div>
        <div className="event_columnsFlex">
          <div className="event_columnsFlexTitle">London Manifesto Late Spring Tour</div>

          <div className="event_columnsFlexButton">

            <button className="event_columnsFlexButton1">READ MORE <AiOutlineRight /></button>
            <button className="event_columnsFlexButton2"><HiShoppingCart /></button>

          </div>
        </div>
      </div>
      <hr className='eventLine' />
      <div className="event_columns">
        <div className="event_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />  AUG 24, 2016. Long City Bar Liverpool</div>
        <div className="event_columnsFlex">
          <div className="event_columnsFlexTitle">Ìnspiring Sounds Jazz Festival</div>
          <div className="event_columnsFlexButton">
            <button className="event_columnsFlexButton1">READ MORE <AiOutlineRight /></button>
            <button className="event_columnsFlexButton2"><HiShoppingCart /></button>
          </div>
        </div>
      </div>
      <hr className='eventLine' />
      <div className="event_columns">
        <div className="event_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />  AUG 24, 2016. Lounge bar Matrix, Berlin</div>
        <div className="event_columnsFlex">
          <div className="event_columnsFlexTitle">Evelyn Burke Quartet - Here Comes Jazz</div>
          <div className="event_columnsFlexButton">
            <button className="event_columnsFlexButton1">READ MORE <AiOutlineRight /></button>
            <button className="event_columnsFlexButton2"><HiShoppingCart /></button>
          </div>
        </div>
      </div>
      <hr className='eventLine' />
      <div className="event_columns">
        <div className="event_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />  AUG 24, 2016. City Square, London</div>
        <div className="event_columnsFlex">
          <div className="event_columnsFlexTitle"> Found raising London - Charity Concert</div>
          <div className="event_columnsFlexButton">
            <button className="event_columnsFlexButton1">READ MORE<AiOutlineRight /></button>
            <button className="event_columnsFlexButton2"><HiShoppingCart /></button>
          </div>
        </div>
      </div>
      <hr className='eventLine' />
      <Fade bottom duration={1500}> <button className="eventButton"><FaCalendarAlt className='eventButtonIcon'/> VIEW ALL DATES</button></Fade>
    </div>

  )
}

export default Event
