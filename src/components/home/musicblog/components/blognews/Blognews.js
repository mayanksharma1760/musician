import React from 'react'
import './blognews.css'
import { ImArrowRight2 } from 'react-icons/im';
import Fade from 'react-reveal/Fade';

const Blognews = () => {
  return (
    <div className='Blognews'>
      <Fade><div className="BlognewsHeading">LATEST NEWS <div className="BlognewsHeadingline"></div> </div></Fade>
      <div className="BlognewsMainRow">
       <a href=""> <img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-01.jpg" alt="" /></a>
        <div className="BlognewsMainRowText">
          <a href="" className='BlognewsMainRowTextTitle'>AC/DC’s singer Brian Johnson stop touring, Axl Rose is new frontman</a>

          <div className="BlognewsMainRowTextBy">
            BY: <a href="">musician</a>/ <a href="" id="BlognewsMainRowTextByActive">news</a>/ <p>3 HOURS AGO</p>
          </div>
          <div className='BlognewsMainRowTextDesc'>
            One of the most popular group in the world have a new frontman. After doctor’s orders, their frontman Brian Johnson had to stop touring. It’s been confirmed that Axl Rose is
            <a href="">[...]</a>
          </div>

          <a href="" className='BlognewsMainRowTextBtn'>READ MORE</a> <a href="" className='BlognewsMainRowTextArrow'><ImArrowRight2 /></a>

        </div>
      </div>


      <div className="BlognewsBox">
        <div className="BlognewsBoxCol">

          <div className="BlognewsBoxColRow">
           <a href=""> <img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-02.jpg" alt=""/></a>
            <div className="BlognewsBoxColRowText">
              <a href="">NEWS</a>/ <p>3 HOURS AGO</p>
              <div className="BlognewsBoxColRowTextTitle">Prodigy comes to Zadar, Croatia 2016</div>
              <a href="" className='BlognewsBoxColRowTextBtn'>READ MORE</a> <a href="" className='BlognewsBoxColRowTextArrow'><ImArrowRight2 /></a>
            </div>
          </div>
          <div className="BlognewsBoxColRow">
          <a href=""><img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-04.jpg" alt="" /></a>
            <div className="BlognewsBoxColRowText">
              <a href="">NEWS</a>/ <p>3 HOURS AGO</p>
              <div className="BlognewsBoxColRowTextTitle">Coachella day 2 - everything to know</div>
              <a href="" className='BlognewsBoxColRowTextBtn'>READ MORE</a> <a href="" className='BlognewsBoxColRowTextArrow'><ImArrowRight2 /></a>
            </div>
          </div>
          <div className="BlognewsBoxColRow">
          <a href=""><img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-06.jpg" alt="" /></a>
            <div className="BlognewsBoxColRowText">
              <a href="">NEWS</a>/ <p>3 HOURS AGO</p>
              <div className="BlognewsBoxColRowTextTitle">LCD Soundsystem Coachella Day 1</div>
              <a href="" className='BlognewsBoxColRowTextBtn'>READ MORE</a> <a href="" className='BlognewsBoxColRowTextArrow'><ImArrowRight2 /></a>
            </div>
          </div>

        </div>
        <div className="BlognewsBoxCol">

          <div className="BlognewsBoxColRow">
          <a href=""><img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-03.jpg" alt="" /></a>
            <div className="BlognewsBoxColRowText">
              <a href="">NEWS</a>/ <p>3 HOURS AGO</p>
              <div className="BlognewsBoxColRowTextTitle">Fun fun - Guns’n’Roses at Coachella 2016</div>
              <a href="" className='BlognewsBoxColRowTextBtn'>READ MORE</a> <a href="" className='BlognewsBoxColRowTextArrow'><ImArrowRight2 /></a>
            </div>
          </div>
          <div className="BlognewsBoxColRow">
          <a href=""> <img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-05.jpg" alt="" /></a>
            <div className="BlognewsBoxColRowText">
              <a href="">NEWS</a>/ <p>3 HOURS AGO</p>
              <div className="BlognewsBoxColRowTextTitle">Coachella day 1 - everything to know</div>
              <a href="" className='BlognewsBoxColRowTextBtn'>READ MORE</a> <a href="" className='BlognewsBoxColRowTextArrow'><ImArrowRight2 /></a>
            </div>
          </div>
          <div className="BlognewsBoxColRow">
          <a href=""> <img src="https://www.pixel-industry.com/html/musician/musician-html/img/blog/music-blog-post-07.jpg" alt="" /></a>
            <div className="BlognewsBoxColRowText">
              <a href="">NEWS</a>/ <p>3 HOURS AGO</p>
              <div className="BlognewsBoxColRowTextTitle">Goldenvoice, three day festival is coming</div>
              <a href="" className='BlognewsBoxColRowTextBtn'>READ MORE</a> <a href="" className='BlognewsBoxColRowTextArrow'><ImArrowRight2 /></a>
            </div>
          </div>

        </div>
      </div>
      <a href="" className='BlognewsBtn'>READ ALL NEWS <ImArrowRight2 /></a>
    </div>
  )
}

export default Blognews
