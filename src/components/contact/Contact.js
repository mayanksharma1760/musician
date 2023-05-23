import React, { useEffect } from 'react'
import './contact.css'
import Title from '../about/components/title/Title'
import Footer from '../home/musicartist/components/footer/Footer'
import Mail from '../home/musicartist/components/mail/Mail'
import Contactbox from './components/contactbox/Contactbox'
// import Loader from '../home/musicartist/components/loader/Loader'

const Contact = () => {
  useEffect(() => {
    document.title = `Musician - Contact simple`
  });
  return (
    <div className='Contact'>
      {/* <Loader /> */}
      <Title heading='Contact' />
      <Contactbox />
      <Mail />
      <Footer />
    </div>
  )
}

export default Contact
