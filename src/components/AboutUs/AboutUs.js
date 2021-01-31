import React from "react"
import BigLogo from "assets/vector_images/big_logo.svg"
import { Link } from "gatsby"

const AboutUs = () => {
  return (
    <section className="row pt-4">
      <BigLogo className="col-md-4 p-2 mb-4" />
      <article className="col-md-8">
        <h1 id="about-us">Holistyczny Marketing</h1>
        <p>
          ESPRESSIVO z j. włoskiego wykonywać coś z uczuciem, wkładać w coś
          serce. W holistycznym marketingu patrzymy na markę i jej przekaz
          całościowo, nie pracujemy tylko nad jednym aspektem. Nasza perspektywa
          jest nastawiona długofalowe korzyści. Jako specjaliści, najpierw
          diagnozujemy, a następnie doradzamy i działamy. Nie wypisujemy recept
          na życzenie, które wiemy, że nic nie pomogą, ponieważ bierzemy pełną
          odpowiedzialność za nasze działania. Jesteśmy zwolennikami budowania
          relacji i autentycznej postawy marki, co wpisuje się
          perspektywistyczną strategię brandingową. Zapraszamy do HOLISTYCZNEJ
          WSPÓŁPRACY.
          <Link className="font-italic ml-2" to={"/about-us"}>
            Czytaj więcej...
          </Link>
        </p>
      </article>
    </section>
  )
}

export default AboutUs
