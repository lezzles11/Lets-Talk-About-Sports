import React from "react"

function Card({ title, color, text }) {
  const style = {
    backgroundColor: `${color}`,
  }
  const width = {
    width: "100%",
  }

  return (
    <div className="justify-content-center" style={width}>
      <div className="card" style={style}>
        <div className="card-body">
          <div className="card-title justify-content-center row">
            <h3 style={{ color: "white" }}>{text}</h3>{" "}
          </div>
          <div className="card-text justify-content-center row">
            <h5 style={{ color: "white" }}> {title} </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
