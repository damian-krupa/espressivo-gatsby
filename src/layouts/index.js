import React from "react"
import TopBar from "components/TopBar/TopBar"
import "assets/styles/global-styles.scss"
import { Container } from "react-bootstrap"
import Navigation from "components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const MainLayout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <div className="layout">
      <TopBar />
      <Navigation />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default MainLayout
