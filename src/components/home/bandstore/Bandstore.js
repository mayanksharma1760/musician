import React, { useEffect } from 'react'
import Footer from '../musicartist/components/footer/Footer'
import Loader from '../musicartist/components/loader/Loader'
import Mail from '../musicband/components/mail/Mail'
import Smallnavbar from '../musicband/components/smallnavbar/Smallnavbar'
import './bandstore.css'
import Bandfront from './components/bandfront/Bandfront'
import Productlist from './components/productlist/Productlist'
import Shop from './components/shop/Shop'
import Store from './components/store/Store'
const Bandstore = () => {
  useEffect(() => {
    document.title = `Musician - Band store`
  });
  return (
    <div className='Bandstore'>
      <Loader />
      <Smallnavbar />

      <Bandfront />
      <Shop />
      <Store />
      <Productlist />
      <Mail />
      <Footer type='red' />
    </div>
  )
}

export default Bandstore
