import React from "react"
import TopBar from "components/TopBar/TopBar"
import "assets/styles/global-styles.scss"
import { Container } from "react-bootstrap"
import Navigation from "components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const MainLayout = ({ children }) => {
  typeof window !== "undefined" && localStorage.setItem("fcWebHash", "004e7dcdf427d3fe5357686a01ac212cb56c49c7601dd236fe5e462122b87c37");
  return (
    <div className="layout">
      <div id="top" />
      <TopBar />
      <Navigation />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default MainLayout
