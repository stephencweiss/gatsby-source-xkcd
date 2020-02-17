import React from "react"
import { graphql } from "gatsby"

export default props => {
  const { img, alt, title } = props.data.allXkcd.nodes[0].latest
  return (
    <>
      <h1> The Latest XKCD comic</h1>
      <div>{title}</div>
      <img alt={alt} src={img} />
    </>
  )
}

export const pageQuery = graphql`
  query getLatest {
    allXkcd {
      nodes {
        id
        latest {
          month
          num
          link
          year
          news
          safe_title
          transcript
          alt
          img
          title
          day
        }
      }
    }
  }
`
