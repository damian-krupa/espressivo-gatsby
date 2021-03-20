import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

const TeamMember = ({ photo, name, jobDescription, onClick }) => {
  return (
    <div
      className="col-3 col-lg-2 text-center"
      onClick={onClick}
    >
      <GatsbyImage image={photo} />
      <h5>{name}</h5>
      <h6>{jobDescription}</h6>
    </div>
  );
}

export default TeamMember
