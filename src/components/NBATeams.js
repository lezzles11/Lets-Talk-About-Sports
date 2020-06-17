import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./style.css"

function Badge({ url, name }) {
  const margin = {
    margin: "20px",
  }
  return (
    <div style={margin}>
      <div className="view overlay zoom">
        <Link to={`/MLBTeams/${name}`}>
          <img src={url} alt="zoom" />
          <div className="mask flex-center waves-effect waves-light">
            <p className="white-text">{name}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default function NBATeams() {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA"
    const makeApiCall = async () => {
      const res = await fetch(url)
      const json = await res.json()
      console.log("nba teams page", json.teams)
      setTeams(json.teams)
      console.log(teams)
    }
    makeApiCall()
  }, [])

  return (
    <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
      {teams.map(team => (
        <div className="col-3" key={team.idTeam}>
          <Badge url={team.strTeamBadge} name={team.strTeamShort} />
        </div>
      ))}
    </div>
  )
}
