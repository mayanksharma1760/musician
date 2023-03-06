import React, { useEffect } from 'react'
import './albumview.css'
import Title from '../../about/components/title/Title'
import Mail from '../../home/musicartist/components/mail/Mail'
import Footer from '../../home/musicartist/components/footer/Footer'
import List from './components/list/List'
import Loader from '../../home/musicartist/components/loader/Loader'
const Albumview = () => {
  useEffect(() => {
    document.title = `Musician - music artist album view`
  });
  return (
    <div className='Albumview'>
      <Loader />
      <Title heading='THE LISTEN' />
      <List />
      <Mail />
      <Footer />
    </div>
  )
}

export default Albumview
