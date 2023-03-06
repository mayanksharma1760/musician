import React from 'react'
import './table.css'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HiShoppingCart } from 'react-icons/hi';
import { AiOutlineGoogle, AiOutlineGooglePlus, AiOutlineRight } from 'react-icons/ai';
import {GrFacebookOption} from 'react-icons/gr';
import {IoLogoTwitter} from 'react-icons/io';
import { FaCalendarAlt, FaFacebook, FaFacebookF } from 'react-icons/fa';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Headingline from '../../../../home/musicartist/components/headingline/Headingline';

const Table = () => {
  return (
      <div className="Table">
      <div className="Table_columns">
        <div className="Table_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />   AUG 21, 2016. Hulla Lounge London</div>
        <div className="Table_columnsFlex">
          <div className="Table_columnsFlexTitle"><a href="">London Manifesto Late Spring Tour</a> </div>

          <div className="Table_columnsFlexButton">

            <button className="Table_columnsFlexButton1">READ MORE <AiOutlineRight /></button>
            <button className="Table_columnsFlexButton2"><HiShoppingCart /></button>

          </div>
        </div>
      </div>
      <hr className='eventLine' />
      <div className="Table_columns">
        <div className="Table_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />  AUG 24, 2016. Long City Bar Liverpool</div>
        <div className="Table_columnsFlex">
          <div className="Table_columnsFlexTitle"> <a href=""> Ìnspiring Sounds Jazz Festival</a></div>
          <div className="Table_columnsFlexButton">
            <button className="Table_columnsFlexButton1">READ MORE <AiOutlineRight /></button>
            <button className="Table_columnsFlexButton2"><HiShoppingCart /></button>
          </div>
        </div>
      </div>
      <hr className='eventLine' />
      <div className="Table_columns">
        <div className="Table_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />  AUG 24, 2016. Lounge bar Matrix, Berlin</div>
        <div className="Table_columnsFlex">
          <div className="Table_columnsFlexTitle"><a href="">Evelyn Burke Quartet - Here Comes Jazz</a> </div>
          <div className="Table_columnsFlexButton">
            <button className="Table_columnsFlexButton1">READ MORE <AiOutlineRight /></button>
            <button className="Table_columnsFlexButton2"><HiShoppingCart /></button>
          </div>
        </div>
      </div>
      <hr className='eventLine' />
      <div className="Table_columns">
        <div className="Table_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />  AUG 24, 2016. City Square, London</div>
        <div className="Table_columnsFlex">
          <div className="Table_columnsFlexTitle"> <a href="">Found raising London - Charity Concert</a> </div>
          <div className="Table_columnsFlexButton">
            <button className="Table_columnsFlexButton1">READ MORE<AiOutlineRight /></button>
            <button className="Table_columnsFlexButton2"><HiShoppingCart /></button>
          </div>
        </div>
      </div>
      <hr className='eventLine' />

      <div className="Table_columns">
        <div className="Table_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />  AUG 24, 2016. City Square, London</div>
        <div className="Table_columnsFlex">
          <div className="Table_columnsFlexTitle"><a href="">The Old Blue Last - Jazz Fest</a> </div>
          <div className="Table_columnsFlexButton">
            <button className="Table_columnsFlexButton1">READ MORE<AiOutlineRight /></button>
            <button className="Table_columnsFlexButton2"><HiShoppingCart /></button>
          </div>
        </div>
      </div>
      <hr className='eventLine' />

      <div className="Table_columns">
        <div className="Table_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />  AUG 24, 2016. City Square, London</div>
        <div className="Table_columnsFlex">
          <div className="Table_columnsFlexTitle"><a href=""> The Jazz Underworld</a></div>
          <div className="Table_columnsFlexButton">
            <button className="Table_columnsFlexButton1">READ MORE<AiOutlineRight /></button>
            <button className="Table_columnsFlexButton2"><HiShoppingCart /></button>
          </div>
        </div>
      </div>
      <hr className='eventLine' />
      <div className="Table_columns">
        <div className="Table_columnsDesc"><FontAwesomeIcon icon={faCalendarDays} />  AUG 24, 2016. City Square, London</div>
        <div className="Table_columnsFlex">
          <div className="Table_columnsFlexTitle"><a href="">Budapest Jazz Fest</a> </div>
          <div className="Table_columnsFlexButton">
            <button className="Table_columnsFlexButton1">READ MORE<AiOutlineRight /></button>
            <button className="Table_columnsFlexButton2"><HiShoppingCart /></button>
          </div>
        </div>
      </div>
      <hr className='eventLine' />


    <div className="Table_heading">SHARE THIS TOUR <Headingline/></div>
    <div className="Table_Icons">
        <a href='' className="Table_IconsBox1">
    <GrFacebookOption/>
        </a>
        <a href='' className="Table_IconsBox2 ">
        <IoLogoTwitter/>
        </a>
        <a href='' className="Table_IconsBox3">
<AiOutlineGooglePlus/>
        </a>
    </div>
    </div>

  )
}

export default Table
