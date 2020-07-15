import React from "react"
import Card from "./Card"

const BasicInfo = ({ team }) => {
  let location = team.strStadiumLocation
  let newLocation = location.split("")
  console.log(newLocation[0])
  return (
    <div className="row">
      <div className="col">
        <Card title="Stadium" text={team.strStadium} color="#1e88e5" />
      </div>

      <div className="col">
        <Card title="Year Formed" text={team.intFormedYear} color="red" />
      </div>

      <div className="col">
        <Card
          title="Location"
          text={team.strStadiumLocation}
          color="#43a047 "
        />
      </div>
    </div>
  )
}

export default BasicInfo
