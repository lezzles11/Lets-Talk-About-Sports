import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

function Badge({ url, name }) {
  const margin = {
    margin: "20px",
  }
  console.log("BADGE")
  console.log(name)
  let link = ""
  let firstName = ""
  if (name === "Man United") {
    firstName = "ManUnited"
  } else {
    link = name.split(" ")
    firstName = link[0]
  }

  console.log("successfully split!")
  console.log(firstName)
  console.log(name.split(" "))
  return (
    <div style={margin}>
      <div className="view overlay zoom">
        <Link to={`/EPLTeams/${firstName}`}>
          <img src={url} alt="zoom" />
          <div className="mask flex-center waves-effect waves-light">
            <h5 className="white-text">{name}</h5>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default function EPLTeams() {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    const makeApiCall = async () => {
      const res = await fetch(url)
      const json = await res.json()
      console.log("nba teams page", json.teams)
      setTeams(json.teams)
      console.log(teams)
    }
    makeApiCall()
  }, [])
  console.log("STRING TEAM HERE")

  return (
    <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
      {teams.map(team => (
        <div className="col-3" key={team.idTeam}>
          <Badge url={team.strTeamBadge} name={team.strTeam} />
        </div>
      ))}
    </div>
  )
}
