const axios = require("axios");
const apiBase = "https://xkcd.com/";
async function fetchLatest() {
  return await axios({ url: `${apiBase}info.0.json` }).then(res => res.data);
}

async function fetchComicsByIds(comicIds = []) {
  return await Promise.all(
    comicIds.map(async comicId => {
      if (!comicId) return;
      return await axios({ url: `${apiBase}${comicId}/info.0.json` }).then(
        res => res.data
      );
    })
  );
}

exports.fetchLatest = fetchLatest;
exports.fetchComicsByIds = fetchComicsByIds;
