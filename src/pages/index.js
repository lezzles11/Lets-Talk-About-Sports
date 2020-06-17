import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TestData from "../components/TestData"
function IndexPage() {
  const style = {
    fontSize: "5em",
  }
  return (
    <Layout>
      <SEO title="Home" />
      <br />
      <br />
      <br />
      <h1 style={style} className="font11">
        Let's talk about sports.
      </h1>{" "}
      <p>
        A quick nonsense way to talk about sports so that one can impress one's
        (fill in the blank)
      </p>
      <TestData />
    </Layout>
  )
}

export default IndexPage
