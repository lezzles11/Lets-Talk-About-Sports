import React from "react"
import "./style.css"
import Card from "./Card"
const Highlights = () => {
  return (
    <div>
      // TO DO: RENDER LAST GAME, last information
      <h2>Highlights</h2>
      <p>So you can pretend you actually saw the game</p>
      <h5>Some sentence starters: </h5>
      <p>Did you know that... </p>
      <p>
        {" "}
        Yes, cannot believe they scored a (fill in the score here) - that was
        crazy!
      </p>
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <Card title="Statistics" color="#1e88e5 " />
          </div>
          <div className="col">
            {" "}
            <Card title="Statistics" text="bloop" color="red" />
          </div>
        </div>{" "}
        <br />
        <div className="row">
          {" "}
          <div className="col">
            {" "}
            <Card title="Statistics" color="#43a047 " />
          </div>
          <div className="col">
            {" "}
            <Card title="Statistics" color="#fb8c00" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights
