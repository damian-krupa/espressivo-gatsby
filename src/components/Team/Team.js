import React from "react"
import TitleBadge from "../TitleBadge/TitleBadge"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  {
    allPhotosJson {
      edges {
        node {
          src {
            id
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          name
        }
      }
    }
  }
`

const Team = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <div className="row justify-content-center m-5">
        <TitleBadge value="zespół" />
      </div>
      <section className="row justify-content-center">
        <div className="col-6 col-lg-4 p-4">
          <Img
            fluid={data.allPhotosJson.edges[0].node.src.childImageSharp.fluid}
          />
        </div>
        <article className="col-12 col-lg-8">
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
      <section className="row justify-content-end mb-5">
        <div className="col-3 col-lg-2 text-center">
          <Img
            fluid={data.allPhotosJson.edges[1].node.src.childImageSharp.fluid}
          />
          <h5>Adam Rus</h5>
          <h6>Projektant graficzny</h6>
        </div>
        <div className="col-3 col-lg-2 text-center">
          <Img
            fluid={data.allPhotosJson.edges[2].node.src.childImageSharp.fluid}
          />
          <h5>Izabela Antczak</h5>
          <h6>Tłumacz j. niemieckiego</h6>
        </div>
        <div className="col-3 col-lg-2 text-center">
          <Img
            fluid={data.allPhotosJson.edges[3].node.src.childImageSharp.fluid}
          />
          <h5>Hubert Krakowiak</h5>
          <h6>Operator kamery</h6>
        </div>
        <div className="col-3 col-lg-2 text-center">
          <Img
            fluid={data.allPhotosJson.edges[4].node.src.childImageSharp.fluid}
          />
          <h5>Paulina Mania</h5>
          <h6>Fotograf</h6>
        </div>
      </section>
    </>
  )
}

export default Team
