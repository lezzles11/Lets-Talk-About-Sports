import React, { useState, useEffect } from "react"
import "../../components/style.css"
import "./Timeline.css"
import Layout from "../../components/layout"
import SocialMedia from "../../components/BasketballPage/SocialMedia"
import OneGame from "../../components/BasketballPage/OneGame"
import EachTeam from "../../components/BasketballPage/EachTeam"
import BasicInfo from "../../components/BasketballPage/BasicInfo"
import EventWithImage from "../../components/BasketballPage/EventWithImage"
import CardDescription from "../../components/BasketballPage/CardDescription"

/*
#TODO: Make sure you can render each page (each page should have a specific component )
*/

const TEAM_ID = "134873"
const TEAM_NAME = "Indiana Pacers"

OneGame.defaultProps = {
  strThumb:
    "https://cdn.nba.net/nba-drupal-prod/2019-09/SEO-image-NBA-logoman.jpg",
}

export default function IND() {
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
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          {teams.map(team => (
            <div key={team.idTeam}>
              <EachTeam url={team.strTeamBadge} name={team.strTeamShort} />
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          {" "}
          {teams.map(team => (
            <div key={team.idTeam}>
              <SocialMedia team={team} />
            </div>
          ))}
        </div>

        {teams.map(team => (
          <div key={team.idTeam}>
            <BasicInfo team={team} />
          </div>
        ))}
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="container z-depth-1 my-5 py-5 px-4 px-lg-0">
            <h3 className="font24 font-weight-bold text-center dark-grey-text pb-2">
              {TEAM_NAME}
            </h3>
            <hr className="w-header my-4" />
            <p className="font24 lead text-center text-muted pt-2 mb-5">
              Recent Games
            </p>

            <div className="row">
              <div className="col-lg-8 mx-auto">
                <ol className="timeline">
                  {gameResult.map(game =>
                    game.strThumb ? (
                      <EventWithImage game={game} />
                    ) : (
                      <OneGame game={game} />
                    )
                  )}
                </ol>
              </div>
            </div>
          </div>
          <div className="row">
            {teams.map(team => (
              <div key={team.idTeam}>
                <CardDescription team={team} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
