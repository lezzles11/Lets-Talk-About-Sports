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
      <div className="col">
        {" "}
        TO DO: Render youtube video related to this tema - is there an api for
        that?
        <Card title="Youtube Clip" text="Best Shots" color="#43a047 " />
      </div>
    </div>
  )
}

export default Highlights
