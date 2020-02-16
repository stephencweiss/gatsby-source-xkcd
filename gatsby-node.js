"use-strict";
const queryString = require("query-string");
const {createNodeData} = require("./src/createNodeData");
const { fetchNodesFromQueries } = require("./src/fetchNodesFromQueries");
exports.onPreInit = () => {
  console.log("logging to console the start of gatsby-source-xkcd");
};

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  pluginOptions
) => {
  const { createNode } = actions;
  console.log(`start xkcd`);
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete pluginOptions.plugins;
  // Helper function that processes a photo to match Gatsby's node structure

  // Convert the options object into a query string
  const apiOptions = queryString.stringify(pluginOptions);
  // Join apiOptions with the Pixabay API URL
  console.log(
    `apiOptions -> `,
    JSON.stringify({ apiOptions, pluginOptions }, null, 4)
  );
  //   const apiUrl = `https://xkcd.com/${comicId ? `${comicId}/` : ``}info.0.json`
  const apiUrl = `https://xkcd.com/info.0.json`;
  // Gatsby expects sourceNodes to return a promise

  // Fetch a response from the apiUrl
  return fetchNodesFromQueries(pluginOptions.queries).then(data => {
    console.log(`data -> `, data);
    // Process the photo data to match the structure of a Gatsby node
    const nodeData = createNodeData(data, createNodeId, createContentDigest);
    // Use Gatsby's createNode helper to create a node from the node data
    createNode(nodeData);
  });
};
