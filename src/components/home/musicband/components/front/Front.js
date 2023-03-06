import React from 'react'
import Bandnavbar from './components/bandnavbar/Bandnavbar'
import './front.css'
const Front = () => {
  return (
    <> 
    <Bandnavbar/>
      <div className='Front'>
 
        <div className="Front_date">2016</div>
        <div className="Front_heading">EUROPEAN TOUR DATES ANNOUNCED</div>
        <button className='Front_button'>VIEW DATE</button>
      <img className='FrontBorder' src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/bkg-bottom-border.svg" alt="" />
        

      </div>
      </>
  )
}

export default Front
