import React from "react"
import "./footer.scss"
import Container from "react-bootstrap/Container"
import PhoneIcon from "assets/vector_images/phone.svg"
import EmailIcon from "assets/vector_images/email.svg"

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <footer id="kontakt" className="row justify-content-around">
          <div className="footer__contact-us col-6 col-md-5 col-lg-4 mt-5">
            <p>Skontaktuj się z nami, jeśli wierzysz, że</p>
            <p className="gold-text-decoration">
              <strong>HOLISTYCZNA WSPÓŁPRACA</strong>
            </p>
            <p>rozwinie Twój biznes.</p>
            <a className="d-block my-2" href="tel:578-983-972">
              <img src={PhoneIcon} alt="telefon" />
              <span className="ml-1 text-nowrap">+48 578 983 972</span>
            </a>
            <a
              className="footer__mail d-block mb-4"
              href="mailto:holi@espressivomarketing.pl"
            >
              <img src={EmailIcon} alt="email" />
              <span className="ml-1">holi@espressivomarketing.pl</span>
            </a>
          </div>
          <div className="footer__working-hours col-6 col-md-5 col-lg-4 mt-5 text-center">
            <h5 className="mb-3">
              <b>GODZINY OTWARCIA</b>
            </h5>
            <div>
              <p>Poniedziałek - Piątek</p>
              <p> 09:00 - 17:00</p>
              <p>Sobota</p>
              <p>09:00 - 14:00</p>
            </div>
          </div>
        </footer>
        <small className="footer__small-print row justify-content-center pb-2">
          Designed by us with{" "}
          <span className="footer--gold-text">&nbsp;joy</span>
        </small>
      </Container>
    </section>
  )
}

export default Footer
