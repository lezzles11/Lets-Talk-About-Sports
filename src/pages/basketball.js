import React from "react"
import Layout from "../components/layout"
import "../components/style.css"
import NBATeams from "../components/BasketballPage/NBATeams"

export default function Basketball() {
  return (
    <Layout>
      <div className="row justify-content-center">
        <h1 className="font24">Basketball</h1>
      </div>
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
