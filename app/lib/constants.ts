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

export enum RHYME_STYLE_OPTIONS {
    SELECT_A_RHYME_STYLE = "Select a Rhyme Style",
    MONOSYLLABLE = "Monosyllable",
    MULTISYLLABLE = "Multisyllable"
};
