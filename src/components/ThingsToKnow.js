import React, { useState, useEffect } from "react"
import Card from "./Card"

function GetData() {
  const [teams, setTeams] = useState(false)
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA"
    const makeApiCall = async () => {
      const res = await fetch(url)
      const json = await res.json()
      console.log("nba teams page", json.teams)
      setTeams(json.teams)
    }
    makeApiCall()
  }, [])
  return (
    <div>
      {teams.map((team, index) => {
        return <li key={index}>{team.strTeam}</li>
      })}
    </div>
  )
}

const ThingsToKnow = () => {
  return (
    <div className="container">
      <h2> Cool things to know </h2> <br />
      todo: render nickname,
      <GetData />
      <div className="row">
        <div className="col">
          {" "}
          <Card title="City" text="Los Angeles" color="#1e88e5 " />
        </div>
        <div className="col">
          {" "}
          <Card title="Nickname" text="bloop" color="red" />
        </div>
        <div className="col">
          {" "}
          <Card title="Win Percentage " color="#43a047 " />
        </div>
        <div className="col">
          {" "}
          <Card title="Statistics" color="#fb8c00" />
        </div>
      </div>
    </div>
  )
}

export default ThingsToKnow
