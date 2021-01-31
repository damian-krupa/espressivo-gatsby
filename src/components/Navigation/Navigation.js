import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "gatsby"
import "./navigation.scss"

const Navigation = () => {
  return (
    <Navbar
      className="navigation-bar shadow py-0 justify-content-center"
      sticky="top"
      variant="dark"
    >
      <Nav className="navigation-list">
        <Nav.Item>
          <Link to="/#top">My</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/#oferta">Oferta</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/#portfolio">Portfolio</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/#blog">Blog</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="#kontakt">Kontakt</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default Navigation
