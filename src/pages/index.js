import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
      <h1 style={style} className="font24 ">
        Let's talk about sports.
      </h1>{" "}
      <p className="font24">
        A quick nonsense way to talk about sports so that one can impress one's
        (fill in the blank)
      </p>
      <a
        href="https://www.theschooloflife.com/thebookoflife/the-joys-of-sport/"
        target="_blank"
      >
        <button className="font24 btn btn-outline-dark waves-effect">
          The joys of sport
        </button>
      </a>
    </Layout>
  )
}

// #TODO: Update and switch the fill int he blank so it swipes up automatically
export default IndexPage
