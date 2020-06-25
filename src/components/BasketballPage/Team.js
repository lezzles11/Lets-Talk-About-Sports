import React from "react"

import Card from "./Card"

function EachPerson() {
  return (
    <div>
      <div className="avatar w-100 white d-flex justify-content-center align-items-center">
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
          className="img-fluid rounded-circle z-depth-1"
        />
      </div>{" "}
      <div className="text-center mt-3">
        <h6 className="font-weight-bold pt-2">Tom Johnson</h6>
        <p className="text-muted">
          <small>
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i>
          </small>
        </p>
      </div>
    </div>
  )
}
const Team = () => {
  return (
    <div>
      <h2>Team Members</h2>{" "}
      <div className="row">
        <div className="col">
          {" "}
          <EachPerson />
          <Card title="Statistics" color="#FF8800" />
        </div>
      </div>
    </div>
  )
}

export default Team
