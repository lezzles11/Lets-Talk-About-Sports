/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "./style.css"
import Navbar from "./Navbar"

function Footer() {
  const stickToBottom = {
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
  }
  return (
    <footer style={stickToBottom}>
      <div className="row">
        <div className="col-9"></div>
        <div className="col-3">
          {" "}
          <br />
          <p style={{ padding: "1px", color: "white" }}>
            {" "}
            &nbsp;&nbsp;&nbsp;{" "}
            <span className=" orange darken-3 container">
              built during the corona
            </span>
            <br />
            {` `}&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {` `}
            <span className="blue accent-4 container">
              <a style={{ color: "white" }} href="https://www.lesleycheung.com">
                built by lezzles{" "}
              </a>
            </span>
            <br />
            {` `}&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="pink accent-4 container">
              built with{" "}
              <a style={{ color: "white" }} href="https://www.gatsbyjs.org">
                Javascript
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid">
      <Navbar websiteName={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
