export const createNodeData = (data, createNodeId, createContentDigest) => {
  const nodeId = createNodeId(`xkcd-${data.id}`);
  const nodeContent = JSON.stringify(data);
  const nodeData = Object.assign({}, data, {
    id: nodeId,
    parent: null,
    children: [],
    internal: {
      type: `XKCD`,
      content: nodeContent,
      contentDigest: createContentDigest(data)
    }
  });
  return nodeData;
};
