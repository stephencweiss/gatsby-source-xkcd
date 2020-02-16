# gatsby-source-xkcd

A Gatsby source plugin for sourcing data into a Gatsby application from xkcd.com.

The plugin creates `xkcd` nodes from comics retrieved from xkcd.com.

## Install

`npm install --save gatsby-source-xkcd`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    // "zero-config" option pulls back only the most recent xkcd comic
    `gatsby-source-xkcd`,

    // OR -- with configuration
    {
      resolve: `gatsby-source-xkcd`,
      options: {
        queries: [
          // retreive a specific comic by the comic id
          { comicId: 12 },
          // retrieve multiple comics by id
          { comicIds: [12, 100] },
          // retrieve multiple comics - random selection
          { comicQuantity: 5 },
          // retrieve the latest comic
          { latest: true }
        ]
      }
    }
  ]
};
```

## How to query

You can query nodes created from XKCD like the following

```graphql
{
  allXkcd {
    nodes {
      id
      xkcd {
        alt
        day
        img
        id
        link
        month
        num
        news
        safe_title
        title
        transcript
        year
      }
    }
  }
}
```
