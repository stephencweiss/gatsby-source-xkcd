- [ ] Confirm the _name_ of the node created by the plugin
- [x] Confirm whether I can have multiple instances of this plugin in the `gatsby-config.js` file (update README accordingly)
    -- Found an alternative approach with queries. Using the [`gatsby-source-wikipedia`](https://github.com/gatsbyjs/gatsby/tree/817a6c14543c73ea8f56c9f93d401b03adb44e9d/packages/gatsby-source-wikipedia) plugin as guide.
- [x] Update the `How to query` section of the README
- [ ] Determine if I can move `gatsby-node.js` into `src/` (Currently in root while using `require.resolve` approach to testing local plugin - https://www.gatsbyjs.org/docs/creating-a-local-plugin/)

- [x] zero-config - Successfully query the latest comic
- [ ] specific comic - Successfully query the specified comic
- [ ] specific comics - Successfully query the specified comics
- [ ] random comic(s) - Successfully query the specified _number_ of comics.
