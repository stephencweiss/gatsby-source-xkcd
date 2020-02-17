"use-strict";
const { createNodeData } = require("./createNodeData");
const { fetchNodesFromQueries } = require("./fetchNodesFromQueries");


exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  pluginOptions
) => {
  const { createNode } = actions;

  // Fetch a response from the apiUrl
  return fetchNodesFromQueries(pluginOptions.queries).then(data => {
    let nodeData = createNodeData(data, createNodeId, createContentDigest);
    createNode(nodeData);
  });
};