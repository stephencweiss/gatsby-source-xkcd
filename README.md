# gatsby-source-xkcd

A Gatsby source plugin for sourcing data into a Gatsby application from xkcd.com.

The plugin creates `xkcd` nodes from comics retrieved from xkcd.com.

For more information on the XKCD API, see: https://xkcd.com/json.html

## Install

`npm install --save gatsby-source-xkcd`

## How to use

Setting up the `gatsby-source-xkcd` plugin requires only a minor change to your `gatsb-config.js` file.

You have two options:

1. Zero Config
2. With Options

### The Zero-Config Approach

The zero-config will fetch the most recent xkcd comic.

```javascript:title="gatsby-config.js"
module.exports = {
  plugins: [
    `gatsby-source-xkcd`
    //...
  ]
};
```

### With Options

Configuring the plugin with options can be done with any combination and order of the following options in your `gatsby-config.js`:

```javascript:title="gatsby-config.js"
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-xkcd`,
      options: {
        // retrieve comic(s) by specified id
        comicIds: [12, 100],
        // retrieve multiple comics - randomly selected at build time
        comicQuantity: 5,
        // retrieve the latest comic
        latest: true
      }
    }
  ]
};
```

## How to query

Once added to the `gatsby-config.js` file, XKCD comics will be available via GraphQL.

The nodes created by this source plugin depend on the configuration provided in `gatsby-config.js`.

By default, this plugin will return the `latest` node.

If you provide specific options, you will have access to:

1. `latest`
2. `comicIds`
3. `comicQuantity`

Each node is the same shape, though `comicIds` and `comicQuantity` are arrays of objects while `latest` is always just one comic and therefore just an object.

```graphql
query QueryXkcd {
  allXkcd {
    nodes {
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

## Examples

We have full Gatsby app examples for both the zero config approach and using basic queries.

You can find these in the `example` directory:

1. [Zero-Config](./example/zero-config/README.md)
1. [Basic Query](./example/basic-query/README.md)

## Questions? Suggestions? Contributions?

Yes please! Ask away. Create an issue if you find a bug. Open a PR if you think this can be improved!

We'll be adding some templates soon to make this simple!

In the mean time, if you'd like to pull down this repository to play around please do!

If you want to see how your changes work with one of example apps, modify the `gatsby-config.js` in there to use a [local plugin](https://www.gatsbyjs.org/docs/creating-a-local-plugin/#using-requireresolve-and-a-filepath)

For example:

```diff:title="./example/basic-query/gatsby-config.js
module.exports = {
  plugins: [
    {
+        resolve: require.resolve(`../../../gatsby-source-xkcd`),
-        resolve: `gatsby-source-xkcd`,
    },
  ],
}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/stephencweiss"><img src="https://avatars3.githubusercontent.com/u/39878535?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Stephen Weiss</b></sub></a><br /><a href="https://github.com/stephencweiss/gatsby-source-xkcd/commits?author=stephencweiss" title="Code">💻</a><a href="https://github.com/stephencweiss/gatsby-source-xkcd/commits?author=stephencweiss" title="Example">💡</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org/) specification. Contributions of any kind are welcome!
