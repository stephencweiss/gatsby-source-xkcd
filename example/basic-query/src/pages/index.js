import React from "react"
import { graphql } from "gatsby"

export default props => {
  const { comicIds, comicQuantity, latest } = props.data.allXkcd.nodes[0]

  return (
    <>
      <h1> The Latest XKCD Comic</h1>
      <div>
        {latest.num}: {latest.title}
      </div>
      <img alt={latest.alt} src={latest.img} />
      <hr />
      <h1> Two Specified XKCD Comics</h1>
      <ul>
        {comicIds.map(comic => (
          <li key={comic.num}>
            <div>
              {comic.num}: {comic.title}
            </div>
            <img alt={comic.alt} src={comic.img} />
          </li>
        ))}
      </ul>
      <hr />
      <h1> Three Random XKCD Comics</h1>
      <ul>
        {comicQuantity.map(comic => (
          <li key={comic.num}>
            <div>
              {comic.num}: {comic.title}
            </div>
            <img alt={comic.alt} src={comic.img} />
          </li>
        ))}
      </ul>
    </>
  )
}

export const pageQuer = graphql`
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
        comicIds {
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
        comicQuantity {
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
