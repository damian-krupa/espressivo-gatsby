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
import TikTokIcon from "assets/vector_images/tiktok.svg"
import HamburgerToggle from "assets/vector_images/hamburger_toggle.svg"

const TopBar = () => (
  <Navbar
    className="top-bar"
    id="top-bar"
    collapseOnSelect
    expand="lg"
    sticky="top"
    variant="dark"
  >
    <Container>
      <Navbar.Brand className="navbar-brand abs">
        <img src={EspressivoLogo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <img src={HamburgerToggle} alt="navbar toggle" />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="tel:578-983-972">
            <img src={PhoneIcon} alt="telefon" />
            <span className="nav-link-text">+48 578 983 972</span>
          </Nav.Link>
          <Nav.Link href="mailto:holi@espressivomarketing.pl">
            <img src={EmailIcon} alt="email" />
            <span className="nav-link-text">holi@espressivomarketing.pl</span>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            href="https://www.facebook.com/espressivo.marketing"
            target="_blank"
          >
            <img src={FacebookIcon} alt="facebook" />
            <span className="nav-mobile-text">Facebook</span>
          </Nav.Link>
          <Nav.Link
            href="https://www.instagram.com/espressivo.marketing"
            target="_blank"
          >
            <img src={InstagramIcon} alt="instagram" />
            <span className="nav-mobile-text">Instagram</span>
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/company/espressivomarketing"
            target="_blank"
          >
            <img src={LinkedInIcon} alt="linkedIn" />
            <span className="nav-mobile-text">LinkedIn</span>
          </Nav.Link>
          <Nav.Link href="https://vm.tiktok.com/ZMJEbFFfH/" target="_blank">
            <img src={TikTokIcon} alt="tiktok" />
            <span className="nav-mobile-text">TikTok</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default TopBar
