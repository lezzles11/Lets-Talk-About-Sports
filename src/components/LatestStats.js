import React, { useState, useEffect } from "react"

function LatestStats(props) {
  console.log("results", props)
  console.log("team-id", props.team.idTeam)
  const [latestResult, setLatestResult] = useState(false)
  useEffect(() => {
    const resultApiCall = async () => {
      const resultUrl = `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${props.team.idTeam}`
      const resultRes = await fetch(resultUrl)
      const resultJson = await resultRes.json()
      console.log("result", resultJson.results)
      setLatestResult(resultJson.results)
    }
    resultApiCall()
  }, [props.team])
  if (!latestResult) {
    return <></>
  }

  let opponents = []
  for (let i = 0; i < latestResult.length; i++)
    if (latestResult[i].strHomeTeam === props.match.params.name) {
      opponents.push(latestResult[i].strAwayTeam)
    } else {
      opponents.push(latestResult[i].strHomeTeam)
    }
  console.log("opponents", opponents)

  if (!props.nbaTeams) {
    return <></>
  }
  let opponentOne = []
  let opponentTwo = []
  let opponentThree = []
  let opponentFour = []
  let opponentFive = []
  for (let j = 0; j < props.nbaTeams.length; j++)
    if (props.nbaTeams[j].strTeam === opponents[0]) {
      opponentOne = props.nbaTeams[j]
    }
  for (let j = 0; j < props.nbaTeams.length; j++)
    if (props.nbaTeams[j].strTeam === opponents[1]) {
      opponentTwo = props.nbaTeams[j]
    }
  for (let j = 0; j < props.nbaTeams.length; j++)
    if (props.nbaTeams[j].strTeam === opponents[2]) {
      opponentThree = props.nbaTeams[j]
    }
  for (let j = 0; j < props.nbaTeams.length; j++)
    if (props.nbaTeams[j].strTeam === opponents[3]) {
      opponentFour = props.nbaTeams[j]
    }
  for (let j = 0; j < props.nbaTeams.length; j++)
    if (props.nbaTeams[j].strTeam === opponents[4]) {
      opponentFive = props.nbaTeams[j]
    }
  console.log("opponentOne", opponentOne)
  console.log("opponentTwo", opponentTwo)
  console.log("opponentThree", opponentThree)
  console.log("opponentFour", opponentFour)
  console.log("opponentFive", opponentFive)
  return (
    <>
      <h1 className="sectionTitle">Latest Events </h1>
      <div className="resultsContainer">
        <div className="gameInfo">
          <p>{latestResult[0].dateEvent}</p>
          <p>{latestResult[0].strTimeLocal}</p>
          {latestResult[0].strHomeTeam === props.match.params.name ? (
            <span className="homeLabel">Home</span>
          ) : (
            <span className="awayLabel">Away</span>
          )}
        </div>
        <div className="gameOpponentFlexHolder">
          <div className="gameOpponent">
            <img src={opponentOne.strTeamBadge} alt={opponentOne.strTeam} />
            <div>
              <p className="teamName">{opponentOne.strTeam}</p>
            </div>
          </div>
          <div className="gameScores">
            <p>
              {latestResult[0].strHomeTeam}: {latestResult[0].intHomeScore} -{" "}
              {latestResult[0].intAwayScore} :{latestResult[0].strAwayTeam}
            </p>
          </div>
        </div>
      </div>
      <div className="resultsContainer">
        <div className="gameInfo">
          <p>{latestResult[1].dateEvent}</p>
          <p>{latestResult[1].strTimeLocal}</p>
          {latestResult[1].strHomeTeam === props.match.params.name ? (
            <span className="homeLabel">Home</span>
          ) : (
            <span className="awayLabel">Away</span>
          )}
        </div>
        <div className="gameOpponentFlexHolder">
          <div className="gameOpponent">
            <img src={opponentTwo.strTeamBadge} alt={opponentTwo.strTeam} />
            <div>
              <p className="teamName">{opponentTwo.strTeam}</p>
            </div>
          </div>
          <div className="gameScores">
            <p>
              {latestResult[1].strHomeTeam}: {latestResult[1].intHomeScore} -{" "}
              {latestResult[1].intAwayScore} :{latestResult[1].strAwayTeam}
            </p>
          </div>
        </div>
      </div>
      <div className="resultsContainer">
        <div className="gameInfo">
          <p>{latestResult[2].dateEvent}</p>
          <p>{latestResult[2].strTimeLocal}</p>
          {latestResult[2].strHomeTeam === props.match.params.name ? (
            <span className="homeLabel">Home</span>
          ) : (
            <span className="awayLabel">Away</span>
          )}
        </div>
        <div className="gameOpponentFlexHolder">
          <div className="gameOpponent">
            <img src={opponentThree.strTeamBadge} alt={opponentThree.strTeam} />
            <div>
              <p className="teamName">{opponentThree.strTeam}</p>
            </div>
          </div>
          <div className="gameScores">
            <p>
              {latestResult[2].strHomeTeam}: {latestResult[2].intHomeScore} -{" "}
              {latestResult[2].intAwayScore} :{latestResult[2].strAwayTeam}
            </p>
          </div>
        </div>
      </div>
      <div className="resultsContainer">
        <div className="gameInfo">
          <p>{latestResult[3].dateEvent}</p>
          <p>{latestResult[3].strTimeLocal}</p>
          {latestResult[3].strHomeTeam === props.match.params.name ? (
            <span className="homeLabel">Home</span>
          ) : (
            <span className="awayLabel">Away</span>
          )}
        </div>
        <div className="gameOpponentFlexHolder">
          <div className="gameOpponent">
            <img src={opponentFour.strTeamBadge} alt={opponentFour.strTeam} />
            <div>
              <p className="teamName">{opponentFour.strTeam}</p>
            </div>
          </div>
          <div className="gameScores">
            <p>
              {latestResult[3].strHomeTeam}: {latestResult[3].intHomeScore} -{" "}
              {latestResult[3].intAwayScore} :{latestResult[3].strAwayTeam}
            </p>
          </div>
        </div>
      </div>
      <div className="resultsContainer">
        <div className="gameInfo">
          <p>{latestResult[4].dateEvent}</p>
          <p>{latestResult[4].strTimeLocal}</p>
          {latestResult[4].strHomeTeam === props.match.params.name ? (
            <span className="homeLabel">Home</span>
          ) : (
            <span className="awayLabel">Away</span>
          )}
        </div>
        <div className="gameOpponentFlexHolder">
          <div className="gameOpponent">
            <img src={opponentFive.strTeamBadge} alt={opponentFive.strTeam} />
            <div>
              <p className="teamName">{opponentFive.strTeam}</p>
            </div>
          </div>
          <div className="gameScores">
            <p>
              {latestResult[4].strHomeTeam}: {latestResult[4].intHomeScore} -{" "}
              {latestResult[4].intAwayScore} :{latestResult[4].strAwayTeam}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestStats
