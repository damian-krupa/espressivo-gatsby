import React from "react"
import TitleBadge from "../TitleBadge/TitleBadge"

const Portfolio = () => {
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
      </section>
    </>
  )
}

export default Portfolio
