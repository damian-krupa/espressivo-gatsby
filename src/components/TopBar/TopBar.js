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

const TopBar = () => (
  <>
    <Navbar
      className="top-bar"
      collapseOnSelect
      expand="lg"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="navbar-brand abs" href="#home">
          <EspressivoLogo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#phone">
              <PhoneIcon />
              <span className="nav-link-text">+48 578 983 972</span>
            </Nav.Link>
            <Nav.Link href="#email">
              <EmailIcon />
              <span className="nav-link-text">holi@espressivo.pl</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#facebook">
              <FacebookIcon />
            </Nav.Link>
            <Nav.Link href="#instagram"><InstagramIcon/></Nav.Link>
            <Nav.Link href="#instagram"><InstagramIcon/></Nav.Link>
            <Nav.Link href="#linkedin"><LinkedInIcon/></Nav.Link>
            <Nav.Link href="#tumblr"><TumblrIcon/></Nav.Link>
            <Nav.Link href="#tiktok"><TikTokIcon/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default TopBar
