import React from "react"
import TopBar from "../components/TopBar/TopBar"
import "../assets/styles/globalStyles.scss"
import { Container } from "react-bootstrap"
import Navigation from "../components/Navigation/Navigation"
import './layout.scss'

const MainLayout = ({ children }) => {
  return (
    <div className='layout'>
      <TopBar />
      <Navigation />
      <Container>{children}</Container>
    </div>
  )
}

export default MainLayout
