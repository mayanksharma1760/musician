import React from 'react'
import "./smallnavbar.css"
import { FaFacebookF,FaSoundcloud,FaLastfm, FaYoutube, FaInstagram} from 'react-icons/fa';
import { TfiYoutube} from 'react-icons/tfi';
import { AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Smallnavbar = () => {
  return (
    <Navbar className='Smallnavbar'  variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='Smallnavbar_Icon' href="http://soundcloud.com"><FaSoundcloud /> </Nav.Link>
            <Nav.Link className='Smallnavbar_Icon' href="https://www.facebook.com/pixel.industry.themes/"><FaFacebookF/></Nav.Link>
            <Nav.Link className='Smallnavbar_Icon' href="http://lastfm.com"><FaLastfm  /></Nav.Link>
            <Nav.Link className='Smallnavbar_Icon' href="http://youtube.com"><FaYoutube/></Nav.Link>
            <Nav.Link className='Smallnavbar_Icon' href="https://twitter.com/pixel_industry"> <AiOutlineTwitter /></Nav.Link>
            <Nav.Link className='Smallnavbar_Icon' href="https://instagram.com"><FaInstagram  /></Nav.Link>
            
            <Nav.Link href="#" className='NavLink_Cart'>
            <div className='Smallnavbar_cart'><HiShoppingCart/>
                <span className='Smallnavbar_cartCount'>
                1
            </span>
            </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      /* <ul className="Smallnavbar_list">

      <a target="_blank" href="http://soundcloud.com">
      <FaSoundcloud /> 
      </a>
  
      <a target="_blank" href="https://www.facebook.com/pixel.industry.themes/">
          <FaFacebookF/>
      </a>
  
      <a target="_blank" href="http://lastfm.com">
          <FaLastfm  />
      </a>
  
      <a target="_blank" href="http://youtube.com">
          <FaYoutube/>
      </a>
  
      <a target="_blank" href="https://twitter.com/pixel_industry" >
          <AiOutlineTwitter />
      </a>
  
      <a target="_blank" href="https://instagram.com">
          <FaInstagram  />
      </a>
        </ul>
        <div className='Smallnavbar_cart'><HiShoppingCart/>
        <span className='Smallnavbar_cartCount'>
            1
            </span>
            </div> */
    
  )
}

export default Smallnavbar
