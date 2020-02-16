const axios = require("axios");

/**
 * Pattern for searching:
 * const apiUrl = `https://xkcd.com/${comicId ? `${comicId}/` : ``}info.0.json`
 */
const apiBase = "https://xkcd.com/";

/**
 *
 * @param {*} queries - an array of queries, can be null
 * TODO - Add better documentation on shape and allowed queries
 */
async function fetchNodesFromQueries(queries) {
  if (!queries) {
    // zeroConfig
    console.log(`zeroConfig`);
    return axios({ url: `${apiBase}info.0.json` })
      .then(res => res.data)
      .finally(() => console.log(`xkcd finished`));
  }
  if (queries && !Array.isArray(queries)) {
    throw new Error(
      `Expect queries to be an array. See README for handled queries`
    );
  }
  if (queries.length === 0) {
    throw new Error(
      `If queries present, expect at least one query. See README for handled queries`
    );
  }
  await console.log(`awaited! --> `, JSON.stringify(queries, null, 4));
}

exports.fetchNodesFromQueries = fetchNodesFromQueries;
