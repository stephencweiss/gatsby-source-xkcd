"use-strict";
const { createNodeData } = require("./createNodeData");
const { fetchNodes } = require("./fetchNodes");


exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  pluginOptions
) => {
  const { createNode } = actions;

  // Fetch a response from the apiUrl
  return fetchNodes(pluginOptions).then(data => {
    let nodeData = createNodeData(data, createNodeId, createContentDigest);
    createNode(nodeData);
  });
};