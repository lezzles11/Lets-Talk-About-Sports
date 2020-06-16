import React, { useState, useEffect } from "react"
import Card from "./Card"

const ThingsToKnow = () => {
  return (
    <div className="container">
      <h2> Cool things to know </h2> <br />
      todo: render nickname,
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
