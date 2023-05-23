import React, { useEffect } from 'react'
// import Loader from '../musicartist/components/loader/Loader'
import Blogfooter from './components/blogfooter/Blogfooter'
import Blogfront from './components/blogfront/Blogfront'
import Blogmail from './components/blogmail/Blogmail'
import Blogmusic from './components/blogmusic/Blogmusic'
import Blognews from './components/blognews/Blognews'
import Blogvideo from './components/blogvideo/Blogvideo'
import Blognavbar from './components/blognavbar/Blognavbar'
import './musicblog.css'
const Musicblog = () => {
  useEffect(() => {
    document.title = `Musician - Home page music blog`
  });
  return (
    <div className='Musicblog'>
      {/* <Loader /> */}
    <Blognavbar/>
      <Blogfront />
      <Blognews />
      <Blogmail />
      <Blogmusic />
      <Blogvideo />
      <Blogfooter />
    </div>
  )
}

export default Musicblog
