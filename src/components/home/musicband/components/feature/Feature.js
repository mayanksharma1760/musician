import React from 'react'
import"./feature.css"
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Headingline from '../../../musicartist/components/headingline/Headingline';
const Feature= () => {
  return (
    <div className='Feature'>   
    <div className="Feature_heading">FEATURED STORE ITEMS<Headingline type='red'/></div>
   <div className="Feature_box">
     <div className='Feature_boxItem'>
        <Link to='#'>
        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-01.jpg" alt="" />
        <div className="Feature_boxItemTitle">ROCKABILLY SHIRT</div>
        <span className="Feature_boxItemPrice">$40</span>
        <Fade bottom> <span className="Feature_boxItemCart">ADD TO CART</span></Fade>
        </Link>
    </div>
    <div className='Feature_boxItem'>
        <Link to='#'>
        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-02.jpg" alt="" />
        <div className="Feature_boxItemTitle">ROCK ‘N ROLL</div>
        <span className="Feature_boxItemPrice">$40</span>
        <Fade bottom> <span className="Feature_boxItemCart">ADD TO CART</span></Fade>



        </Link>
    </div>
    <div className='Feature_boxItem'>
        <Link to='#'>
        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-03.jpg" alt="" />
        <div className="Feature_boxItemTitle">ROCKSTAR</div>
        <span className="Feature_boxItemPrice">$40</span>
        <Fade bottom> <span className="Feature_boxItemCart">ADD TO CART</span></Fade>




        </Link>
    </div>
    <div className='Feature_boxItem'>
        <Link to='#'>
        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-04.jpg" alt="" />
        <div className="Feature_boxItemTitle">LIVE AT BERLIN</div>
        <span className="Feature_boxItemPrice">$40</span>
        <Fade bottom> <span className="Feature_boxItemCart">ADD TO CART</span></Fade>

        </Link>
    </div>

    </div>
    <div className="Feature_btn">VISIT THE STORE</div>
    </div>
    
  )
}

export default Feature
