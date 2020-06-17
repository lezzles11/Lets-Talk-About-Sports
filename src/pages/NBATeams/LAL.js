import React, { useState, useEffect } from "react"
import "../../components/style.css"
import "./Timeline.css"
import Card from "../../components/Card"
function EachTeam({ url, name }) {
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
          <time datetime={game.dateEvent}>{game.dateEvent}</time>
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
      <div className="row justify-content-center">
        {teams.map(team => (
          <div key={team.idTeam}>
            <EachTeam url={team.strTeamBadge} name={team.strTeamShort} />
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

        <div className="row">
          {teams.map(team => (
            <div key={team.idTeam}>
              <CardDescription team={team} />
            </div>
          ))}
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

function BasicInfo({ team }) {
  return (
    <div className="row">
      <div className="col">
        <Card title="Stadium" text={team.strStadium} color="#1e88e5" />
      </div>

      <div className="col">
        <Card title="Year Formed" text={team.intFormedYear} color="red" />
      </div>

      <div className="col">
        <Card title="Youtube Clip" text={team.strStadium} color="#43a047 " />
      </div>
      <div className="col">
        <Card title="Youtube Clip" text={team.strStadium} color="#fb8c00" />
      </div>
    </div>
  )
}

function CardDescription({ team }) {
  return (
    <div className="container mt-5">
      <section className="mb-5">
        <h3 className="text-center font-weight-bold mb-5">{team.strStadium}</h3>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row h-100 d-flex align-items-center">
                  <div className="col-lg-6">
                    <p className="text-muted font-weight-light ml-3 mb-5">
                      {team.strDescriptionEN}
                    </p>
                    <ul className="fa-ul mb-5 text-muted font-weight-light">
                      <li className="mb-2">
                        <span className="fa-li">
                          <i className="fas fa-check green-text"></i>
                        </span>
                        Built in GPS
                      </li>
                      <li className="mb-2">
                        <span className="fa-li">
                          <i className="fas fa-check green-text"></i>
                        </span>
                        Heart Rate Sensor
                      </li>
                      <li className="mb-2">
                        <span className="fa-li">
                          <i className="fas fa-check green-text"></i>
                        </span>
                        Water Resistant 50 Meters
                      </li>
                      <li className="mb-2">
                        <span className="fa-li">
                          <i className="fas fa-check green-text"></i>
                        </span>
                        Comprehensive Workout App
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between ml-3">
                      <button type="button" className="btn btn-primary mx-0">
                        Purchase
                      </button>
                      <div className="text-center">
                        <h4 className="mb-0">$399</h4>
                        <small className="grey-text">+ $10 shipping fees</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      id="carousel-thumb"
                      className="carousel slide carousel-thumbnails"
                      data-ride="carousel"
                    >
                      <div
                        className="carousel-inner text-center text-md-left"
                        role="listbox"
                      >
                        <div className="carousel-item active">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/17.jpg"
                            alt="First slide"
                            className="img-fluid"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/18.jpg"
                            alt="Second slide"
                            className="img-fluid"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/19.jpg"
                            alt="Third slide"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carousel-thumb"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carousel-thumb"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
