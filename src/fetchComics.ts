import axios from "axios";
import {Comic} from './fetchNodes'

const apiBase = "https://xkcd.com/";


export async function fetchLatest():Promise<Comic> {
  return await axios({ url: `${apiBase}info.0.json` }).then(res => res.data);
}

export async function fetchComicsByIds(comicIds:Array<number> = []): Promise<Array<Comic>> {
  return await Promise.all(
    comicIds.map(async comicId => {
      if (!comicId) return;
      return await axios({ url: `${apiBase}${comicId}/info.0.json` }).then(
        res => res.data
      );
    })
  );
}
