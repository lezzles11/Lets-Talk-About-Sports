import React from "react"

export default function EventWithImage({ game }) {
  return (
    <li className="timeline-element">
      <div key={game.dateEvent}>
        <h5 className="font24 font-weight-bold dark-grey-text mb-3">
          {game.strEvent}
        </h5>
        <p className="font24 grey-text font-small">
          <time datetime={game.dateEvent}>{game.dateEvent}</time>
        </p>
        <p>
          <img
            className="img-fluid z-depth-1-half rounded"
            src={game.strThumb}
            alt="..."
          />
        </p>
        <br />
        <p className="font24 text-muted">
          Away Score: {game.intAwayScore} <br />
          Home Score: {game.intHomeScore}
        </p>
        <a href={game.strVideo}>
          <button className="font24 btn btn-outline-dark waves-effect">
            {" "}
            See highlights
          </button>
        </a>
      </div>
    </li>
  )
}
