// import API from 'api';
import nft from "./data/nft";
import accounts from "./data/accounts";
import collections from "./data/collections";
import trendingSearches from "./data/trendingSearches";

/**
 * Global search handler.
 *
 * @param searchQuery string
 * @returns object
 */
export async function getGlobalSearchResult(searchQuery: string) {
    let isEmpty = false;

    let data = {};

    if (searchQuery != "") {
        data = isEmpty
            ? {
                  trending_searches: trendingSearches,
              }
            : {
                  nft: nft,
                  accounts: accounts,
                  collections: collections,
              };
    } else {
        isEmpty = false;
    }

    return {
        data,
        isEmpty,
    };

    // try {
    //     const response = await API.post('/api/search', payload);
    //     return response;
    // } catch (error) {}
}
