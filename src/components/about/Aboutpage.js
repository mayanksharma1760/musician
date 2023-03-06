import React, { useEffect } from 'react'
import './aboutpage.css'
import About from '../home/musicartist/components/about/About'
import Footer from '../home/musicartist/components/footer/Footer'
import Loader from '../home/musicartist/components/loader/Loader'
import Mail from '../home/musicartist/components/mail/Mail'
import Sound from '../home/musicartist/components/sound/Sound'
import Title from './components/title/Title'

const Aboutpage = () => {
  useEffect(() => {
    document.title = `Musician - About the artist`
  });
  return (
    <div className='Aboutpage'>
      <Loader />

      <Title heading='THE ARTIST' />
      <About />
      <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/bkg-img-03.jpg" alt="" />
      <Sound />
      <Mail />
      <Footer />

    </div>
  )
}

export default Aboutpage
