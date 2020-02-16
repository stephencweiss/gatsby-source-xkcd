const { boundedHash } = require("./hashFn");
const { fetchComicsByIds, fetchLatest } = require("./fetchComics");

const NOW = new Date();
/**
 *
 * @param {*} queries - an array of queries, can be null
 */
async function fetchNodesFromQueries(queries) {
  // zero-config
  if (!queries) return { latest: await fetchLatest() };

  // malformed queries
  if (queries && !Array.isArray(queries)) {
    throw new Error(
      `If query option is configured, it is expected to be an array of queries.\nSee plugin README for more details`
    );
  } else if (queries.length === 0) {
    throw new Error(
      `If query option is configured, at least one query should be present.\nSee plugin README for more details`
    );
  }

  // handle queries
  let results = {};
  await Promise.all(
    queries.map(async query => {
      if (query.comicIds) {
        return (results.comicIds = await fetchComicsByIds(query.comicIds));
      }

      if (query.comicQuantity) {
        const comicIds = [];
        const hashUpperBound = fetchLatest().num; // avoid searching for a comic id that does not exist by creating an upper bound
        for (let i = 0; i < query.comicQuantity; i += 1) {
          const hashStr = i + NOW;
          let comicId = boundedHash(hashStr, hashUpperBound, 1);
          comicIds.push(comicId);
        }
        return (results.comicQuantity = await fetchComicsByIds(comicIds));
      }

      if (query.latest) {
        const latest = await fetchLatest();
        return (results.latest = latest);
      }
    })
  );

  return results;
}

exports.fetchNodesFromQueries = fetchNodesFromQueries;
