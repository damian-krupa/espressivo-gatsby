import React from "react"
import CookieConsent from "react-cookie-consent"

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      style={{ fontSize: "0.7rem", padding: "0 7rem", zIndex: "1001", justifyContent: "center" }}
      buttonClasses="btn btn-primary"
      buttonText="Zgoda"
      contentStyle={{ flex: "1 0", textAlign: "center" }}
    >
      Ta strona korzysta z ciasteczek, aby świadczyć usługi na najwyższym
      poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
      użycie.
    </CookieConsent>
  )
}

export default CookieConsentBanner
