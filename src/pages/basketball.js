import React from "react"
import Layout from "../components/layout"
import Team from "../components/Team"
import ThingsToKnow from "../components/ThingsToKnow"
import Highlights from "../components/Highlights"
import "../components/style.css"

export default function Basketball() {
  return (
    <Layout>
      <h1>Basketball</h1>
      <div className="row">
        <div className="col">
          <Highlights />
        </div>
        <div className="col">
          <Team />
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col">
          <ThingsToKnow />{" "}
        </div>
      </div>
    </Layout>
  )
}
