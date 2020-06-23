import React from "react"
import { Link } from "gatsby"
function Card({ title, color, text, link }) {
  const style = {
    backgroundColor: `${color}`,
  }
  const height = {
    width: "200px",
    maxWidth: "250px",
    display: "inline-block",
  }

  return (
    <div className="card " style={style}>
      <div className="card-body" style={{ margin: "auto 15px" }}>
        <a href={link}>
          <div className="card-title justify-content-center row">
            <h4 className="font24" style={{ color: "white" }}>
              {text}
            </h4>{" "}
          </div>
          <div className="card-text justify-content-center row">
            <h5 className="font24" style={{ color: "white" }}>
              {" "}
              {title}{" "}
            </h5>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Card
