import React, { useState } from "react"
import TitleBadge from "../TitleBadge/TitleBadge"
import { graphql, useStaticQuery } from "gatsby"
import TeamMember from "./TeamMember/TeamMember"
import CurrentTeamMember from "./CurrentTeamMember/CurrentTeamMember"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import "./team.scss"

const query = graphql`
  {
    allPhotosJson {
      edges {
        node {
          src {
            id
            childImageSharp {
              gatsbyImageData(
                width: 300
                height: 300
                quality: 100
                placeholder: NONE
                layout: CONSTRAINED
              )
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

  const currentTeamMember = data.allPhotosJson.edges[teamMemberIndex].node
  return (
    <>
      <div className="row justify-content-center m-5">
        <TitleBadge value="zespół" />
      </div>
      <SwitchTransition>
        <CSSTransition
          key={teamMemberIndex}
          classNames="fade"
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
        >
          <CurrentTeamMember
            name={currentTeamMember.name}
            photo={currentTeamMember.src.childImageSharp.gatsbyImageData}
            jobDescription={currentTeamMember.jobDescription}
            longDescription={currentTeamMember.longDescription}
          />
        </CSSTransition>
      </SwitchTransition>
      <section className="row justify-content-end mb-5">
        {data.allPhotosJson.edges.map(
          (edge, index) =>
            !(index === teamMemberIndex) && (
              <TeamMember
                name={edge.node.name}
                jobDescription={edge.node.jobDescription}
                photo={edge.node.src.childImageSharp.gatsbyImageData}
                onClick={() => setTeamMemberIndex(index)}
              />
            )
        )}
      </section>
    </>
  )
}

export default Team
