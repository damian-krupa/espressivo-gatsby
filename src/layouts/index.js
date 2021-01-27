import React from "react"
import TopBar from "../components/TopBar/TopBar"
import "../assets/styles/globalStyles.scss"
import { Container } from "react-bootstrap"

const MainLayout = ({ children }) => {
  return (
    <Container>
      <TopBar />
      {children}
    </Container>
  )
}

export default MainLayout
