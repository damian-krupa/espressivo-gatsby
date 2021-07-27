import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import './team-member.scss'

const TeamMember = ({ photo, name, jobDescription, onClick }) => {
  return (
    <div
      className="col-3 col-lg-2 text-center"
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
    >
      <GatsbyImage image={photo} alt="team member" />
      <h5 className="team-member__name">{name}</h5>
      <h6>{jobDescription}</h6>
    </div>
  )
}

export default TeamMember
