import React from "react"
import TitleBadge from "../TitleBadge/TitleBadge"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  {
    file(name: { eq: "madzia" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

const TeamSection = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <div className="row justify-content-center m-5">
        <TitleBadge value="zespół" />
      </div>
      <section className="row mb-5">
        <div className="col-4 p-4">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <article className="col-8">
          <h1 id="about-us">Magdalena Gospodarek</h1>
          <h3>CEO & Founder</h3>
          <p>
            Jako założycielka agencji marketingowej w Częstochowie, która
            działaniami obejmuje nie tylko Polskę, a także zagranicę, spełniam
            się jako dyrektor kreatywny, marketingowiec, PR-owiec, menedżer
            odpowiadający przed klientami oraz specjalista mediów
            społecznościowych. Jak każdy przedsiębiorca występuje jako jedna
            osoba w paru rolach, ale kocham to! Moja praca jest z ludźmi i dla
            ludzi. W naszej agencji marketingowej mnóstwo się dzieje, każdego
            dnia pracy analizuję różne scenariusze, tworzę strategię, prowadzę
            wnikliwe rozmowy z klientami, nadzoruję każdy projekt i jego efekt
            końcowy, tworzę komunikację w social media i obsługuję kampanie
            reklamowe Facebook Ads.
          </p>
        </article>
      </section>
    </>
  )
}

export default TeamSection
