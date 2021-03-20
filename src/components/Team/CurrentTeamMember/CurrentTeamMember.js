import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

const CurrentTeamMember = ({
  name,
  jobDescription,
  longDescription,
  photo,
}) => {
  return (
    <section className="row justify-content-center current-team-member">
      <div className="col-6 col-lg-4 p-4">
        <GatsbyImage image={photo} />
      </div>
      <article className="col-12 col-lg-8">
        <h1>{name}</h1>
        <h3>{jobDescription}</h3>
        <p>{longDescription}</p>
      </article>
    </section>
  );
}

export default CurrentTeamMember
