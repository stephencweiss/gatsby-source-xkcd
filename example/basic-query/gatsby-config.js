module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-xkcd`,
      options: {
        queries: [
          { comicIds: [327, 1768] },
          { comicQuantity: 3 },
          { latest: true },
        ],
      },
    },
  ],
}
