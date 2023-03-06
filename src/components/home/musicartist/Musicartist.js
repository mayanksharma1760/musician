import React, { useEffect } from 'react';
import "./musicartist.css"
import Loader from './components/loader/Loader.js'
import Carousel from './components/carousel/Carousel'
import About from './components/about/About'
import Quote from './components/quote/Quote.js'
import Sound from './components/sound/Sound.js'
import Event from './components/event/Event'
import Pastevent from './components/pastevent/Pastevent'
import News from './components/news/News'
import Mail from './components/mail/Mail'
import Footer from './components/footer/Footer'

const Musicartist = () => {
  useEffect(() => {
    document.title = `Musician - Home page music artist`
  });


  return (
    <>

      <Loader />
      <div className='Musicartist'>

        <Carousel />
        <About />
        <Quote />

        <Sound />
        <img className='Musicartist_Img' src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/bkg-img-02.jpg" alt="" />

        <Event />
        <img className='Musicartist_Img' src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/bkg-img-03.jpg" alt="" />

        <Pastevent />
        <img className='Musicartist_Img' src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/bkg-img-03.jpg" alt="" />

        <News />
        <Mail />
        <Footer />

      </div>
    </>

  )
}

export default Musicartist
