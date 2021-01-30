import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import "./top-bar.scss"
import EspressivoLogo from "assets/vector_images/logo-espressivo.svg"
import PhoneIcon from "assets/vector_images/phone.svg"
import EmailIcon from "assets/vector_images/email.svg"
import FacebookIcon from "assets/vector_images/fb.svg"
import InstagramIcon from "assets/vector_images/instagram.svg"
import LinkedInIcon from "assets/vector_images/linkedin.svg"
import TumblrIcon from "assets/vector_images/tumblr.svg"
import TikTokIcon from "assets/vector_images/tiktok.svg"
import SearchIcon from "assets/vector_images/search.svg"

const TopBar = () => (
  <Navbar
    className="top-bar"
    id='top-bar'
    collapseOnSelect
    expand="lg"
    sticky="top"
    variant="dark"
  >
    <Container>
      <Navbar.Brand className="navbar-brand abs">
        <EspressivoLogo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="tel:578-983-972">
            <PhoneIcon />
            <span className="nav-link-text">+48 578 983 972</span>
          </Nav.Link>
          <Nav.Link href="mailto:holi@espressivo.pl">
            <EmailIcon />
            <span className="nav-link-text">holi@espressivo.pl</span>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            href="https://www.facebook.com/espressivo.marketing"
            target="_blank"
          >
            <FacebookIcon />
          </Nav.Link>
          <Nav.Link
            href="https://www.instagram.com/espressivo.marketing"
            target="_blank"
          >
            <InstagramIcon />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/company/espressivomarketing"
            target="_blank"
          >
            <LinkedInIcon />
          </Nav.Link>
          <Nav.Link href="https://espressivo-poems.tumblr.com" target="_blank">
            <TumblrIcon />
          </Nav.Link>
          <Nav.Link href="https://vm.tiktok.com/ZMJEbFFfH/" target="_blank">
            <TikTokIcon />
          </Nav.Link>
          <Nav.Link href="#search">
            <SearchIcon />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default TopBar
