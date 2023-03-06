import React from 'react'
import"./box.css"
import { Link } from 'react-router-dom'
const Box= () => {
  return (
    <div className='Box'>   
     <div className='BoxItem'>
        <Link to='#'>
        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/img-01.jpg" alt="" />
        <div className="BoxTitle">TOURS</div>
        </Link>
    </div>
    <div className='BoxItem'>
        <Link to='#'>
        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/img-02.jpg" alt="" />
        <div className="BoxTitle">MUSIC</div>
        </Link>
    </div>
    <div className='BoxItem'>
        <Link to='#'>
        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/img-03.jpg" alt="" />
        <div className="BoxTitle">STORE</div>
        </Link>
    </div>

    </div>

  )
}

export default Box
