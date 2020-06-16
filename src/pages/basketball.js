import React from "react"
import Layout from "../components/layout"
import Team from "../components/Team"
import ThingsToKnow from "../components/ThingsToKnow"
import Highlights from "../components/Highlights"
import "../components/style.css"
import NBATeams from "../components/NBATeams"

function Form() {
  return (
    <div>
      <form>
        <input type="text" />
        <br />
        <button className="btn button">Search for Team</button>{" "}
      </form>
    </div>
  )
}
export default function Basketball() {
  return (
    <Layout>
      <h1>Basketball</h1>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          padding: 0,
          margin: "40px 0",
        }}
      >
        <NBATeams />
      </div>
    </Layout>
  )
}
