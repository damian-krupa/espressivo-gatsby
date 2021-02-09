import React, { useState } from "react"
import TitleBadge from "../TitleBadge/TitleBadge"
import { graphql, useStaticQuery } from "gatsby"
import TeamMember from "./TeamMember/TeamMember"
import CurrentTeamMember from "./CurrentTeamMember/CurrentTeamMember"

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
          jobDescription
          longDescription
        }
      }
    }
  }
`

const Team = () => {
  const data = useStaticQuery(query)
  const [teamMemberIndex, setTeamMemberIndex] = useState(0)

  const curentTeamMember = data.allPhotosJson.edges[teamMemberIndex].node
  return (
    <>
      <div className="row justify-content-center m-5">
        <TitleBadge value="zespół" />
      </div>
      <CurrentTeamMember
        name={curentTeamMember.name}
        photo={curentTeamMember.src.childImageSharp.fluid}
        jobDescription={curentTeamMember.jobDescription}
        longDescription={curentTeamMember.longDescription}
      />
      <section className="row justify-content-end mb-5">
        {data.allPhotosJson.edges.map((edge, index) => (
          <TeamMember
            name={edge.node.name}
            jobDescription={edge.node.jobDescription}
            photo={edge.node.src.childImageSharp.fluid}
            onClick={() => setTeamMemberIndex(index)}
          />
        ))}
      </section>
    </>
  )
}

export default Team
