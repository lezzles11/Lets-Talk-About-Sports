import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function TestData() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log("HI!")
  console.log()
  return <div>{data.site.siteMetadata.title}</div>
}
