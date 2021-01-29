import React from "react"
import BigLogo from "../../assets/images/big_logo.svg"

const CompanyIntroduction = () => {
  return (
    <section className="row">
      <BigLogo className="col-md-4 p-4" />
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
        </p>
      </article>
    </section>
  )
}

export default CompanyIntroduction
