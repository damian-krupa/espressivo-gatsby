import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
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
          <Nav.Link href="/#top">My</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#oferta">Oferta</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#blog">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#kontakt">Kontakt</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default Navigation
