import React from "react"
import TopBar from "components/TopBar/TopBar"
import "assets/styles/global-styles.scss"
import { Container } from "react-bootstrap"
import Navigation from "components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import { Helmet } from "react-helmet"
import CookieConsentBanner from "../components/CookieConsentBanner/CookieConsentBanner"

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Helmet>
        <html lang="pl-PL" />
        <title>Espressivo</title>
        <meta name="facebook-domain-verification" content="typ6m312ajt31eizky04rsx1gwp8sv" />
      </Helmet>
      <div id="top" />
      <TopBar />
      <Navigation />
      <Container>{children}</Container>
      <Footer />
      <CookieConsentBanner />
    </div>
  )
}

export default MainLayout
