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

## Questions? Suggestions? Contributions?

Yes please! Ask away. Create an issue if you find a bug. Open a PR if you think this can be improved!

I'll be adding some templates soon to make this simple!

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/stephencweiss"><img src="https://avatars3.githubusercontent.com/u/39878535?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Stephen Weiss</b></sub></a><br /><a href="https://github.com/formatjs/formatjs/commits?author=pyrocat101" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
This project follows the [all-contributors](https://allcontributors.org/) specification. Contributions of any kind are welcome!