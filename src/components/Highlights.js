import React, { useState, useEffect } from "react"
import "./style.css"
import Card from "./Card"
import { Link } from "react-router-dom"

function TeamInformation() {
  return <div></div>
}

function GetData() {
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
    <div>
      <h1>hi</h1>hi
      {teams.map(team => (
        <li key={team.idTeam}>
          {team.strCountry}
          {team.strDescriptionEN}
        </li>
      ))}
    </div>
  )
}

function NBATeams(props) {
  const teams = props.nbaTeams.map((team, index) => {
    return <div key={index}>{team.strTeam}</div>
  })
  return <div>{teams}</div>
}

const Highlights = () => {
  return (
    <div>
      // TO DO: RENDER LAST GAME, last information
      <h2>Highlights</h2>
      <p>So you can pretend you actually saw the game</p>
      <h5>Some sentence starters: </h5>
      <p>Did you know that... </p>
      <GetData />
      <p>
        {" "}
        Yes, cannot believe they scored a (fill in the score here) - that was
        crazy!
      </p>
      <div className="row justify-content-center">
        <div className="col justify-content-center">
          {" "}
          TO DO: Render youtube video related to this tema - is there an api for
          that?
          <Card title="Youtube Clip" text="Best Shots" color="#43a047 " />
        </div>
        <div className="col">
          {" "}
          TO DO: Render youtube video related to this tema - is there an api for
          that?
          <Card title="Instagram Handle" text="Best Shots" color="#43a047 " />
        </div>{" "}
      </div>
      <div className="row justify-content-center">
        <div className="col justify-content-center">
          {" "}
          TO DO: Render youtube video related to this tema - is there an api for
          that?
          <Card title="Youtube Clip" text="Best Shots" color="#43a047 " />
        </div>
        <div className="col">
          {" "}
          TO DO: Render youtube video related to this tema - is there an api for
          that?
          <Card title="Instagram Handle" text="Best Shots" color="#43a047 " />
        </div>{" "}
      </div>
    </div>
  )
}

export default Highlights
