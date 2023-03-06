import React, { useState } from 'react'
import "./artistnavbar.css"
// import Fade from 'react-reveal/Fade';
import { BsChevronCompactDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Artistnavbar() {
  const [Scroll, setScroll] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (

    <Navbar className={Scroll ? 'Artistnavbar Positionchange' : 'Artistnavbar'} variant="lg">
      <Container>
        <Link to='/' className="Artistnavbar_Title">
          <img src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/musician-logo-blue-white.svg" alt="img" />
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <NavDropdown className='ArtistnavbarItem' title={<span>HOME<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>

              <NavDropdown.Item className='ArtistnavbarItemDropdown' href="/">Music Artist</NavDropdown.Item>
              <NavDropdown.Item className='ArtistnavbarItemDropdown' href="/musicband">Music Band</NavDropdown.Item>
              <NavDropdown.Item className='ArtistnavbarItemDropdown' href="/musicblog">Music Blog</NavDropdown.Item>
              <NavDropdown.Item className='ArtistnavbarItemDropdown' href="/bandstore">Band Store</NavDropdown.Item>

            </NavDropdown>


            <Nav.Link className='ArtistnavbarItem' href="/aboutpage">ABOUT</Nav.Link>

            <NavDropdown className='ArtistnavbarItem' title={<span>LISTEN<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="/albumview">Album View</NavDropdown.Item>
              <NavDropdown.Item href="/albumsingle">Album Single</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className='ArtistnavbarItem' title={<span>EVENTS<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="/eventsclean">Events Clean</NavDropdown.Item>
              <NavDropdown.Item href="/eventssingleclean">Events Single Clean</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className='ArtistnavbarItem' href="/gallery">GALLERY</Nav.Link>
            <Nav.Link className='ArtistnavbarItem' href="/contact">CONTACT</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  



  )
}

export default Artistnavbar
