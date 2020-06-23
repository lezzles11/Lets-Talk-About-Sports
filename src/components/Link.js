import React from "react"
import styled from "styled-components"
import GatsbyLink from "gatsby-link"

const InternalOrExternalLink = ({ to, children, ...props }) =>
  to.startsWith("http") || to.startsWith("www.") ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  )

export default styled(InternalOrExternalLink)`
  color: #5d93ff;

  &:hover {
    border-bottom: 1px solid #5d93ff;
  }
`
