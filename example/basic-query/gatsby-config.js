module.exports = {
  plugins: [
    {
      // If you want to test locally, uncomment this require.resolve()
      // resolve: require.resolve(`../../../gatsby-source-xkcd`),
      resolve: `gatsby-source-xkcd`,
      options: {
        comicIds: [327, 1768],
        comicQuantity: 3,
        latest: true,
      },
    },
  ],
}
