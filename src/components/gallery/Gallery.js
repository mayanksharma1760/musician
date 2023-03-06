import React, { useEffect } from 'react'
import Mainheading from '../events/eventsclean/components/mainheading/Mainheading'
import Footer from '../home/musicartist/components/footer/Footer'
import Loader from '../home/musicartist/components/loader/Loader'
import Mail from '../home/musicartist/components/mail/Mail'
import Album from './components/album/Album'
import './gallery.css'
const Gallery = () => {
  useEffect(() => {
    document.title = `Musician - Photo video gallery`
  });
  return (
    <div className='Gallery'>
      <Loader />
      <Mainheading heading='PHOTO & VIDEO GALLERY' />
      <Album />
      <Mail />
      <Footer />
    </div>
  )
}

export default Gallery
