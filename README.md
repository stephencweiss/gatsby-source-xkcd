# gatsby-source-xkcd

A Gatsby source plugin for sourcing data into a Gatsby application from xkcd.com.

The plugin creates `xkcd` nodes from comics retrieved from xkcd.com.

For more information on the XKCD API, see: https://xkcd.com/json.html

## Install

`npm install --save gatsby-source-xkcd`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    // "zero-config" will fetch the most recent xkcd comic
    `gatsby-source-xkcd`,

    // OR -- with configuration
    {
      resolve: `gatsby-source-xkcd`,
      options: {
        queries: [
          // retrieve comic(s) by specified id
          { comicIds: [12, 100] },
          // retrieve multiple comics - randomly selected at build time
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

The nodes created by this source plugin depend on the configuration provided in `gatsby-node`.

By default, this plugin will return the `latest` node.

If you provide specific configuration, you will have access to:

1. `latest`
2. `comicIds`
3. `comicQuantity`

Each node is the same shape, though `comicIds` and `comicQuantity` are arrays of objects while `latest` is always just one comic and therefore just an object.

```graphql
query MyQuery {
  allXkcd {
    nodes {
      id
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
```
