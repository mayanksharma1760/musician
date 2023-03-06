import React from 'react'
import Bandnavbar from '../../../musicband/components/front/components/bandnavbar/Bandnavbar'
import './bandfront.css'
const Bandfront = () => {
  return (
    <div className='Bandfront'>
      <Bandnavbar/>
      <img className='BandfrontImg1' src="https://www.pixel-industry.com/html/musician/musician-html/img/slider/store-slider-item-02.png" alt="" />
      <img className='BandfrontImg2' src="https://www.pixel-industry.com/html/musician/musician-html/img/slider/store-slider-item-01.png" alt="" />
      <div className="BandfrontDesc1">Get the best sellers from</div>
      <div className="BandfrontHeading">Coachella 2016</div>
      <div className="BandfrontDesc2">Available only in our official store</div>
      <button className="BandfrontBtn">VISIT THE STORE</button>
    </div>
  )
}

export default Bandfront
