import React from "react"
import Layout from "../components/layout"
import "../components/style.css"
import EPLTeams from "../components/SoccerPage/EPLTeams"

export default function Basketball() {
  return (
    <Layout>
      <div className="row justify-content-center">
        <h1 className="font24">Soccer</h1>
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          padding: 0,
          margin: "40px 0",
        }}
      >
        <EPLTeams />
      </div>
    </Layout>
  )
}
