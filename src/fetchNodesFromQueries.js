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

  let results;
  if (!queries) {
    // zeroConfig
    results = await axios({ url: `${apiBase}info.0.json` })
      .then(res => res.data)
      .finally(() => console.log(`xkcd finished`));
  } else if (queries && !Array.isArray(queries)) {
    throw new Error(
      `Expect queries to be an array. See README for handled queries`
    );
  } else if (queries.length === 0) {
    throw new Error(
      `If queries present, expect at least one query. See README for handled queries`
    );
  } else {

    results = await Promise.all(
      queries.map(async query => {
        // Specify Comic Id(s)
        if (query.comicIds) {
          return await Promise.all(
            query.comicIds.map(
              async comicId =>
                await axios({ url: `${apiBase}${comicId}/info.0.json` }).then(
                  res => res.data
                )
            )
          );
        }

        // Specify Latest
        if (query.latest) {
          return await axios({ url: `${apiBase}info.0.json` }).then(
            res => res.data
          );
        }
      })
    );
  }
  /**
   * TODO: Figure out a _better_ solution to this
   * By flattening and then passing into an object, we're able to have multiple results, but it creates an extra level on the node creation that seems unnecessary
   */
  const flattenedResults = [results].flat(Infinity)
  return {xkcd: flattenedResults};
}

exports.fetchNodesFromQueries = fetchNodesFromQueries;
