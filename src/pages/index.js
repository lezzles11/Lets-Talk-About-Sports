import React from "react"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Image from "../components/image"
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
      <h1 style={style} className="font11">
        Let's talk about sports.
      </h1>{" "}
      <p>
        <table>
          <tr>
            <th>
              A quick nonsense way to talk about sports so that one can impress
              one's
            </th>
            <th>(fill in the blank)</th>
          </tr>{" "}
          <tr>
            <th></th>
            <th>(significant other, boss, client, etc.).</th>
          </tr>
        </table>
      </p>
    </Layout>
  )
}

export default IndexPage
