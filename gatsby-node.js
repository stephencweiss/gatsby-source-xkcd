"use-strict";
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

  // Fetch a response from the apiUrl
  return fetchNodesFromQueries(pluginOptions.queries).then(data => {
    let nodeData =  createNodeData(data, createNodeId, createContentDigest);
    createNode(nodeData);
  });
};
