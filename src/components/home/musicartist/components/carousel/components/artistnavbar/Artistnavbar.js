import React, { useState } from 'react'
import "./artistnavbar.css"
// import Fade from 'react-reveal/Fade';
import { BsChevronCompactDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
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

            <LinkContainer to="/"><NavDropdown.Item className='ArtistnavbarItemDropdown'>Music Artist</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/musicband"><NavDropdown.Item className='ArtistnavbarItemDropdown'>Music Band</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/musicblog"><NavDropdown.Item className='ArtistnavbarItemDropdown'>Music Blog</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/bandstore"><NavDropdown.Item className='ArtistnavbarItemDropdown'>Band Store</NavDropdown.Item></LinkContainer>
            </NavDropdown>


            <LinkContainer to="/aboutpage"><Nav.Link className='ArtistnavbarItem'>ABOUT</Nav.Link></LinkContainer>

            <NavDropdown className='ArtistnavbarItem' title={<span>LISTEN<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
              <LinkContainer to="/albumview"><NavDropdown.Item >Album View</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/albumsingle"><NavDropdown.Item >Album Single</NavDropdown.Item></LinkContainer>
            </NavDropdown>

            <NavDropdown className='ArtistnavbarItem' title={<span>EVENTS<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
              <LinkContainer to="/eventsclean"><NavDropdown.Item >Events Clean</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/eventssingleclean"><NavDropdown.Item >Events Single Clean</NavDropdown.Item></LinkContainer>
            </NavDropdown>

            <LinkContainer to="/gallery"><Nav.Link className='ArtistnavbarItem'>GALLERY</Nav.Link></LinkContainer>
            <LinkContainer to="/contact"><Nav.Link className='ArtistnavbarItem'>CONTACT</Nav.Link></LinkContainer>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  



  )
}

export default Artistnavbar
