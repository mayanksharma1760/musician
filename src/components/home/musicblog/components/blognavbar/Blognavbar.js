import React, { useState } from 'react'
import './blognavbar.css'
import Fade from 'react-reveal/Fade';
import { BsChevronCompactDown } from 'react-icons/bs';
import { FaFacebookF, FaSoundcloud, FaLastfm, FaYoutube, FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Blognavbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  };
  return (
    <Navbar className='Blognavbar' variant="dark">

      <a href='/' className="Blognavbar_Title">
        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/musician-logo-red-white.svg" alt="img" />
      </a>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >

          <Container className='Blognavbar_mainItems'>
            <NavDropdown className='NavDropdownItem' title={<span className='NavDropdownItem'>HOME<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="/musicartist">Music Artist</NavDropdown.Item>
              <NavDropdown.Item href="/musicband">Music Band</NavDropdown.Item>
              <NavDropdown.Item href="/musicblog">Music Blog</NavDropdown.Item>
              <NavDropdown.Item href="/bandstore">Band Store</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className='NavDropdownItem' href="/contact">ABOUT</Nav.Link>

            <NavDropdown className='NavDropdownItem' title={<span className='NavDropdownItem'>NEWS<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#">NEWS CREATIVE DARK</NavDropdown.Item>
              <NavDropdown.Item href="#">NEWS SINGLE CREATIVE DARK</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className='NavDropdownItem' title={<span className='NavDropdownItem'>REVIEWS<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#">REVIEWS GRID </NavDropdown.Item>
              <NavDropdown.Item href="#">REVIEWS SINGLE</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className='NavDropdownItem' href="/contact">CONTACT</Nav.Link>
          </Container>


          <div className="BlognavbarLine"></div>
          <Nav.Link href="#" className='Blognavbar_Cart'>
            <HiShoppingCart />
            <span className='Blognavbar_cartCount'>
              1
            </span>
          </Nav.Link>
          <div className="BlognavbarLine"></div>

          <Button><BsSearch className='Blognavbar_SearchIcon' onClick={handleOpen} /></Button>
          <div className="BlognavbarLine"></div>

          {open && (<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Type and hit enter"
              className="me-2"
              aria-label="Search"
            />
          </Form>)}


          <Container className='Blognavbar_Icon'>
            <Nav.Link className='Blognavbar_IconItem' href="http://soundcloud.com"><FaSoundcloud /> </Nav.Link>
            <Nav.Link className='Blognavbar_IconItem' href="https://www.facebook.com/pixel.industry.themes/"><FaFacebookF /></Nav.Link>
            <Nav.Link className='Blognavbar_IconItem' href="http://lastfm.com"><FaLastfm /></Nav.Link>
            <Nav.Link className='Blognavbar_IconItem' href="http://youtube.com"><FaYoutube /></Nav.Link>
            <Nav.Link className='Blognavbar_IconItem' href="https://twitter.com/pixel_industry"> <AiOutlineTwitter /></Nav.Link>
            <Nav.Link className='Blognavbar_IconItem' href="https://instagram.com"><FaInstagram /></Nav.Link>
          </Container>

        </Nav>
      </Navbar.Collapse>

    </Navbar>

   
  )
}

export default Blognavbar
