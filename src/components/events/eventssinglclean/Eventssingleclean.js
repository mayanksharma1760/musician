import React, { useEffect } from 'react'
import Mail from '../../home/musicartist/components/mail/Mail'
import Footer from '../../home/musicartist/components/footer/Footer'
import Head from '../../listen/album single/components/head/Head'
import Detail from './components/detail/Detail'
import './eventssingleclean.css'
// import Loader from '../../home/musicartist/components/loader/Loader'


const Eventssingleclean = () => {
  useEffect(() => {
    document.title = `Musician - events single clean`
  });
  return (
    <div className='Eventssingleclean'>
      {/* <Loader /> */}
      <Head head='London Manifesto Late Spring Tour' />
      <Detail />
      <Mail />
      <Footer />
    </div>
  )
}

export default Eventssingleclean
