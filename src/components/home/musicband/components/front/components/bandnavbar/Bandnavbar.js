import React ,{useState}from 'react'
import "./bandnavbar.css"
import Fade from 'react-reveal/Fade';
import { BsChevronCompactDown, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {LinkContainer} from 'react-router-bootstrap'

function BandNavbar({type}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
   setOpen(!open)
  };

  
  const [Scroll, setScroll] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 20){
       setScroll(true);
     }
     else{
       setScroll(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
   
    <Navbar className={Scroll ? 'BandNavbar Positionchange' : 'BandNavbar' } variant="lg">
    <Container>
    <a href='/' className="BandNavbar_Title">
        <img src="https://www.pixel-industry.com/html/musician/musician-html/img/svg/musician-logo-red-white.svg" alt="img" />
    </a>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav  className="me-auto" >
          
          <NavDropdown className='BandNavbarItem' title={<span className='NavDropdownItem'>HOME<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
        <NavDropdown.Item href="/musicartist">Music Artist</NavDropdown.Item>
        <NavDropdown.Item href="/musicband">Music Band</NavDropdown.Item>
        <NavDropdown.Item href="/musicblog">Music Blog</NavDropdown.Item>
        <NavDropdown.Item href="/bandstore">Band Store</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className='BandNavbarItem' title={<span className='NavDropdownItem'>ABOUT<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
            <NavDropdown.Item href="#">ABOUT THE BAND</NavDropdown.Item>
            <NavDropdown.Item href="#">ABOUT ARTIST BAND MEMBER</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className='BandNavbarItem' title={<span className='NavDropdownItem'>MEDIA<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
            <LinkContainer ><NavDropdown.Item href="#">MUSIC ALBUM VIEW</NavDropdown.Item></LinkContainer>
            <LinkContainer ><NavDropdown.Item href="#">MUSIC GRID VIEW</NavDropdown.Item></LinkContainer>
            <LinkContainer ><NavDropdown.Item href="#">MUSIC ALBUM SINGLE CREATIVE</NavDropdown.Item></LinkContainer>
            <LinkContainer ><NavDropdown.Item href="#">VIDEO GRID</NavDropdown.Item></LinkContainer>
          </NavDropdown>

          <NavDropdown className='BandNavbarItem' title={<span className='NavDropdownItem'>EVENTS<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
            <NavDropdown.Item href="#">EVENTS CREATIVE</NavDropdown.Item>
            <NavDropdown.Item href="#">EVENTS SINGLE CREATIVE</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className='BandNavbarItem' title={<span className='NavDropdownItem'>NEWS<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
            <NavDropdown.Item href="#">NEWS CREATIVE DARK</NavDropdown.Item>
            <NavDropdown.Item href="#">NEWS SINGLE CREATIVE DARK</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className='BandNavbarItem' title={<span className='NavDropdownItem'>SHOP<BsChevronCompactDown className='NavDropdownIcon' /></span>} id="basic-nav-dropdown" renderMenuOnMount={true}>
            <NavDropdown.Item href="#">BAND STORE</NavDropdown.Item>
            <NavDropdown.Item href="#">SHOP STORE FULL</NavDropdown.Item>
            <NavDropdown.Item href="#">SHOP PRODUCTS SIDEBAR LEFT</NavDropdown.Item>
            <NavDropdown.Item href="#">SHOP PRODUCTS SIDEBAR RIGHT</NavDropdown.Item>
            <NavDropdown.Item href="#">SHOP PRODUCT SINGLE</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className='BandNavbarItem' href="/contact">CONTACT</Nav.Link>


          <Button><BsSearch className='ButtonSearchIcon' onClick={handleOpen}/></Button>
          {open && (<Form className="d-flex">
          <Form.Control
              type="search"
              placeholder="Type and hit enter"
              className="me-2"
              aria-label="Search"
            />
          </Form>)}

        {/* <li className="BandnavbarIcon"><BsSearch onClick={handleOpen}/></li>
           {open && (<input type="text"className='Navbar_ComponentsUlItemsInput' placeholder='Type and hit enter' />)} */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 



  )
}

export default BandNavbar
