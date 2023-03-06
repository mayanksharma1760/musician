import React from 'react'
import './store.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Headingline from '../../../musicartist/components/headingline/Headingline';
const Store = () => {
    return (
        <div className='Store'>
            <div className="Store_heading">FEATURED STORE ITEMS<Headingline type='red' /></div>

            <div className="Store_box">
                <div className='Store_boxItem'>
                    <Link to='#'>
                        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-01.jpg" alt="" />
                        <div className="Store_boxItemTitle">ROCKABILLY SHIRT</div>
                        <span className="Store_boxItemPrice">$40</span>
                        <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                    </Link>
                </div>

                <div className='Store_boxItem'>
                    <Link to='#'>
                        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-02.jpg" alt="" />
                        <div className="Store_boxItemTitle">ROCK ‘N ROLL</div>
                        <span className="Store_boxItemPrice">$40</span>
                        <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                    </Link>
                </div>

                <div className='Store_boxItem'>
                    <Link to='#'>
                        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-03.jpg" alt="" />
                        <div className="Store_boxItemTitle">ROCKSTAR</div>
                        <span className="Store_boxItemPrice">$40</span>
                        <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                    </Link>
                </div>

                <div className='Store_boxItem'>
                    <Link to='#'>
                        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-04.jpg" alt="" />
                        <div className="Store_boxItemTitle">LIVE AT BERLIN</div>
                        <span className="Store_boxItemPrice">$40</span>
                        <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                    </Link>
                </div>
            </div>

            <div className="Store_box">
            <div className='Store_boxItem'>
                <Link to='#'>
                    <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-02.jpg" alt="" />
                    <div className="Store_boxItemTitle">LIVE AT BERLIN</div>
                    <span className="Store_boxItemPrice">$40</span>
                    <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                </Link>
            </div>
            <div className='Store_boxItem'>
                <Link to='#'>
                    <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-03.jpg" alt="" />
                    <div className="Store_boxItemTitle">LIVE AT BERLIN</div>
                    <span className="Store_boxItemPrice">$40</span>
                    <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                </Link>
            </div>
            <div className='Store_boxItem'>
                <Link to='#'>
                    <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-07.jpg" alt="" />
                    <div className="Store_boxItemTitle">LIVE AT BERLIN</div>
                    <span className="Store_boxItemPrice">$40</span>
                    <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                </Link>
            </div>
            <div className='Store_boxItem'>
                <Link to='#'>
                    <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-08.jpg" alt="" />
                    <div className="Store_boxItemTitle">LIVE AT BERLIN</div>
                    <span className="Store_boxItemPrice">$40</span>
                    <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                </Link>
            </div>
            </div>

   <div className="Store_box">


            <div className='Store_boxItem'>
                <Link to='#'>
                    <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-09.jpg" alt="" />
                    <div className="Store_boxItemTitle">LIVE AT BERLIN</div>
                    <span className="Store_boxItemPrice">$40</span>
                    <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                </Link>
            </div>
            <div className='Store_boxItem'>
                <Link to='#'>
                    <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-10.jpg" alt="" />
                    <div className="Store_boxItemTitle">LIVE AT BERLIN</div>
                    <span className="Store_boxItemPrice">$40</span>
                    <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                </Link>
            </div>
            <div className='Store_boxItem'>
                <Link to='#'>
                    <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-11.jpg" alt="" />
                    <div className="Store_boxItemTitle">LIVE AT BERLIN</div>
                    <span className="Store_boxItemPrice">$40</span>
                    <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                </Link>
            </div>
            <div className='Store_boxItem'>
                <Link to='#'>
                    <img src="https://www.pixel-industry.com/html/musician/musician-html/img/shop/shop-item-12.jpg" alt="" />
                    <div className="Store_boxItemTitle">LIVE AT BERLIN</div>
                    <span className="Store_boxItemPrice">$40</span>
                    <Fade bottom> <span className="Store_boxItemCart">ADD TO CART</span></Fade>
                </Link>
            </div>
            </div>
           

            <div className="Store_btn">VISIT THE STORE</div>
        </div>
    )
}

export default Store
