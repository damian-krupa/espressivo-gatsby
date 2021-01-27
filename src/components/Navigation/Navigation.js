import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./navigation.scss"

const Navigation = () => {
  return (
    <Navbar
      className="navigation-bar justify-content-center"
      sticky="top"
      variant="dark"
    >
      <Nav className="navigation-list" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#test">My</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Oferta</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Kontakt</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default Navigation
