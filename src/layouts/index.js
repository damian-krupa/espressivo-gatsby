import React from "react"
import TopBar from "components/TopBar/TopBar"
import "assets/styles/global-styles.scss"
import { Container } from "react-bootstrap"
import Navigation from "components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import { Helmet } from "react-helmet"
import CookieConsent from "react-cookie-consent"

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
      <CookieConsent
        style={{ fontSize: "0.7rem", padding: "0 7rem" }}
        buttonClasses="btn btn-primary"
        buttonText="Zgoda"
        contentStyle={{ flex: "1 0" }}
      >
        Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
        poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
        użycie.
      </CookieConsent>
    </div>
  )
}

export default MainLayout
