/**
 * Constants file to store strings as variables.
 */

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const HTTP = {
    ENDPOINT: {
        MONOSYLLABLE: "rhymes/monosyllable",
        MULTISYLLABLE: "rhymes/multisyllable"
    },
    METHOD: {
        POST: "POST"
    }
};

export enum RHYME_TYPE_OPTIONS {
    MONOSYLLABLE = "Monosyllable",
    MULTISYLLABLE = "Multisyllable"
};
