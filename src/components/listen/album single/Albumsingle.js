import React, { useEffect } from 'react'
import './albumsingle.css'
import Desc from './components/desc/Desc'
import Mail from '../../home/musicartist/components/mail/Mail'
import Footer from '../../home/musicartist/components/footer/Footer'
import Head from './components/head/Head'
// import Loader from '../../home/musicartist/components/loader/Loader'

const Albumsingle = () => {
  useEffect(() => {
    document.title = `Musician - Album single artist`
  });
  return (
    <div className='Albumsingle'>
      {/* <Loader /> */}
      <Head head='Live From London'/>
      <Desc />
      <Mail />
      <Footer />
    </div>
  )
}

export default Albumsingle
