import { boundedHash } from "./hashFn";
import { fetchComicsByIds, fetchLatest } from "./fetchComics";

const NOW = new Date();

export interface Options {
    latest?: boolean;
    comicIds?: Array<number>;
    comicQuantity?: number;
}

export type Comic = {
    num: number;
    alt?: string;
    day?: string;
    img?: string;
    link?: string;
    month?: string;
    news?: string;
    safe_title?: string;
    title?: string;
    transcript?: string;
    year?: string;
};

export interface Results {
    latest?: Comic;
    comicIds?: Array<Comic>;
    comicQuantity?: Array<Comic>;
}

export async function fetchNodes(options: Options): Promise<Results> {
    // zero-config
    if (!options) return { latest: await fetchLatest() };

    // handle queries
    let results:Results = {};

    if (options.comicIds) {

         (results.comicIds = await fetchComicsByIds(options.comicIds));
    }

    if (options.comicQuantity) {
        const comicIds = [] as Array<number>;
        const hashUpperBound = (await fetchLatest()).num; // avoid searching for a comic id that does not exist by creating an upper bound
        for (let i = 0; i < options.comicQuantity; i += 1) {
            const hashStr = String(i) + NOW;
            let comicId = boundedHash(hashStr, hashUpperBound, 1);
            comicIds.push(comicId);
        }
         (results.comicQuantity = await fetchComicsByIds(comicIds));
    }

    if (options.latest) {
        const latest = await fetchLatest();
         (results.latest = latest);
    }

    return results;
}
