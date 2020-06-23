import React, { useState, useEffect } from "react"
import "../../components/style.css"
import { Route } from "react-router-dom"
function EachTeam({ url, name, description }) {
  const margin = {
    margin: "20px",
  }
  return (
    <div style={margin}>
      <div className="view overlay zoom">
        <img src={url} alt="zoom" />
        <div className="mask flex-center waves-effect waves-light">
          <p className="white-text">{name}</p>
        </div>
        <p>{description} </p>
      </div>
    </div>
  )
}
/*
#TODO: Make sure you can render each page (each page should have a specific component )
*/

const TEAM_ID = "134880"
const TEAM_NAME = "ATL"

function OneGame({ game }) {
  return (
    <div key={game.dateEvent}>
      {game.strEvent}
      <br />
      Away Team: {game.strAwayTeam}
      <br />
      Away Score: {game.intAwayScore} <br />
      Home Score: {game.intHomeScore}
    </div>
  )
}
export default function ATL() {
  const [teams, setTeams] = useState([])
  const [gameResult, setGameResult] = useState([])
  const [latestResult, setLatestResult] = useState(false)
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${TEAM_ID}`
    const makeApiCall = async () => {
      const res = await fetch(url)
      const json = await res.json()
      console.log("nba teams page", json.teams)
      setTeams(json.teams)
      console.log(teams)
    }
    makeApiCall()
  }, [])
  console.log(teams)
  useEffect(() => {
    const resultApiCall = async () => {
      const resultUrl = `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${TEAM_ID}`
      const resultRes = await fetch(resultUrl)
      const resultJson = await resultRes.json()
      console.log("result", resultJson.results)
      console.log("RESULTS!")
      setLatestResult(resultJson.results)
      setGameResult(resultJson.results)
    }
    resultApiCall()
  }, [])
  if (!latestResult) {
    return <></>
  }
  console.log(gameResult)
  return (
    <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="container">
        {gameResult.map(game => (
          <OneGame game={game} />
        ))}
      </div>
      {teams.map(team => (
        <div key={team.idTeam}>
          <EachTeam
            url={team.strTeamBadge}
            name={team.strTeamShort}
            description={team.strDescriptionEN}
          />
        </div>
      ))}
    </div>
  )
}
