import React from "react"
export default function EachTeam({ url, name }) {
  const margin = {
    margin: "20px",
  }
  return (
    <div style={margin}>
      <div className="view overlay zoom">
        <img src={url} alt="zoom" />
        <div className="mask flex-center waves-effect waves-light">
          <p className="white-text font24">{name}</p>
        </div>
      </div>
    </div>
  )
}
