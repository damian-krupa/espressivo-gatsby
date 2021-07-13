import React from "react"
import TitleBadge from "../TitleBadge/TitleBadge"
import { Container } from "react-bootstrap"
import OrtoPlusImgSrc from "assets/vector_images/orto-puls.svg"
import OxygenImgSrc from "assets/vector_images/oxygen.svg"
import FullCallImgSrc from "assets/vector_images/fullcall.svg"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./portfolio.scss"

const Portfolio = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 2,
    },
  }
  return (
    <>
      <div id="portfolio" className="row justify-content-center m-4">
        <TitleBadge value="portfolio" />
      </div>
      <div className="row justify-content-center">
        <h1>Zaufali nam</h1>
      </div>
      <section
        className="row mb-5 mx-0 mx-lg-5 text-center"
        data-sal="slide-up"
        data-sal-delay="150"
        data-sal-duration="500"
      >
        <p>
          Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
          przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
          nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć
          wieków później zaczął być używany przemyśle elektronicznym, pozostając
          praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz
          z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a
          ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem
          przeznaczonym do realizacji druków na komputerach osobistych, jak
          Aldus PageMaker.
        </p>
        <Container>
          <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={2500}
            infinite
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable
          >
            <img
              className="d-block w-100 px-4"
              src={OrtoPlusImgSrc}
              alt="First slide"
            />
            <img
              className="d-block w-100 px-4"
              src={OxygenImgSrc}
              alt="Second slide"
            />
            <img
              className="d-block w-100 px-4"
              src={FullCallImgSrc}
              alt="Third slide"
            />
          </Carousel>
        </Container>
      </section>
    </>
  )
}

export default Portfolio
