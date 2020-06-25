import React from "react"
import Card from "./Card"

export default function SocialMedia({ team }) {
  const facebook = "https://" + team.strFacebook
  const instagram = "https://" + team.strInstagram
  const twitter = "https://" + team.strTwitter
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <a href={team.idTeam}>
            <Card
              link={facebook}
              title="Facebook"
              text="Fan Page"
              color="#ff6f00 "
            />
          </a>{" "}
        </div>

        <div className="col">
          <a href={team.idTeam}>
            <Card
              link={instagram}
              title="Instagram"
              text="Cool Shots"
              color="#9933CC"
            />
          </a>{" "}
        </div>

        <div className="col">
          <a href={team.idTeam}>
            <Card
              link={twitter}
              title="Twitter"
              text="Thoughts"
              color="#e91e63"
            />
          </a>{" "}
        </div>
      </div>
      <br />
      <div className="row">
        <img
          className="img-fluid z-depth-1-half rounded"
          src={team.strStadiumThumb}
          alt="..."
        />
      </div>
    </div>
  )
}
