import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import "./top-bar.scss"
import EspressivoLogo from "../../assets/images/logo-espressivo.svg"
import PhoneIcon from "../../assets/images/phone.svg"
import EmailIcon from "../../assets/images/email.svg"
import FacebookIcon from "../../assets/images/fb.svg"
import InstagramIcon from "../../assets/images/instagram.svg"
import LinkedInIcon from "../../assets/images/linkedin.svg"
import TumblrIcon from "../../assets/images/tumblr.svg"
import TikTokIcon from "../../assets/images/tiktok.svg"
import SearchIcon from "../../assets/images/search.svg"

const TopBar = () => (
  <Navbar
    className="top-bar"
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
          <Nav.Link href="email:holi@espressivo.pl">
            <EmailIcon />
            <span className="nav-link-text">holi@espressivo.pl</span>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.facebook.com/espressivo.marketing">
            <FacebookIcon />
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/espressivo.marketing">
            <InstagramIcon />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/company/espressivomarketing">
            <LinkedInIcon />
          </Nav.Link>
          <Nav.Link href="https://espressivo-poems.tumblr.com">
            <TumblrIcon />
          </Nav.Link>
          <Nav.Link href="https://vm.tiktok.com/ZMJEbFFfH/">
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
