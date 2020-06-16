import React from "react"
import Layout from "../components/layout"
import Team from "../components/Team"
import ThingsToKnow from "../components/ThingsToKnow"
import Highlights from "../components/Highlights"
import "../components/style.css"

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
      <Form />
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
