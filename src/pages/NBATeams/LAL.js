import React, { useState, useEffect } from "react"
import "../../components/style.css"
import "./Timeline.css"
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

const TEAM_ID = "134867"
const TEAM_NAME = "Los Angeles Lakers"

function OneGame({ game }) {
  return (
    <li className="timeline-element">
      <div key={game.dateEvent}>
        <h5 className="font-weight-bold dark-grey-text mb-3">
          {game.strEvent}
        </h5>
        <p className="grey-text font-small">
          <time datetime="2017-08-17">{game.dateEvent}</time>
        </p>
        <br />
        Away Score: {game.intAwayScore} <br />
        Home Score: {game.intHomeScore}
      </div>
    </li>
  )
}
export default function LAL() {
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
    <div className="container">
      <div className="row">
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
      <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="container z-depth-1 my-5 py-5 px-4 px-lg-0">
          <h3 className="font5 font-weight-bold text-center dark-grey-text pb-2">
            {TEAM_NAME}
          </h3>
          <hr className="w-header my-4" />
          <p className="lead text-center text-muted pt-2 mb-5">Recent Games</p>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <ol className="timeline">
                {gameResult.map(game => (
                  <OneGame game={game} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EventWithImage() {
  return (
    <li className="timeline-element">
      <h5 className="font-weight-bold dark-grey-text mb-3">
        Got the first 100 users
      </h5>
      <p className="grey-text font-small">
        <time datetime="2017-08-17">17 Aug 2017</time>
      </p>
      <p>
        <img
          className="img-fluid z-depth-1-half rounded"
          src="https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20(6).jpg"
          alt="..."
        />
      </p>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam
        adipisci reiciendis porro natus laudantium similique. Explicabo amet
        ipsum fugiat aliquam alias.
      </p>
    </li>
  )
}
