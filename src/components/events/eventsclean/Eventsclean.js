import React, { useEffect } from 'react'
import './eventsclean.css'
import Mail from '../../home/musicartist/components/mail/Mail'
import Footer from '../../home/musicartist/components/footer/Footer'
import Table from './components/table/Table'
import Mainheading from './components/mainheading/Mainheading'
// import Loader from '../../home/musicartist/components/loader/Loader'
const Eventsclean = () => {
  useEffect(() => {
    document.title = `Musician - events clean`
  });
  return (
    <div className='Eventsclean'>
      {/* <Loader /> */}
      <Mainheading heading='EVENTS - TOURS' />
      <Table />
      <Mail />
      <Footer />
    </div>
  )
}

export default Eventsclean
