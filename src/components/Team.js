import React from "react"

import Card from "./Card"
const Team = () => {
  return (
    <div>
      <h2>Team Members</h2>{" "}
      <div className="row">
        <div className="col">
          {" "}
          <Card title="Statistics" color="#FF8800" />
        </div>
      </div>
    </div>
  )
}

export default Team
