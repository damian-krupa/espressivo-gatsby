import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./navigation.scss"

const Navigation = () => {
  return (
    <Navbar className="navigation justify-content-center" sticky='top' variant='dark'>
      <Nav className="" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">My</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Oferta</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Kontakt</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default Navigation
