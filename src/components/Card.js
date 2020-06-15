import React from "react"

function Card({ title, color, text }) {
  const style = {
    backgroundColor: `${color}`,
  }

  return (
    <div className="card" style={style}>
      <div className="card-body">
        <div className="card-title">
          <h4 style={{ color: "white" }}> {title} </h4>
        </div>
        <div className="card-text">
          <p style={{ color: "white" }}>{text}</p>{" "}
        </div>
      </div>
    </div>
  )
}

export default Card
