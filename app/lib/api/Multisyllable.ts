/**
 * Extends HttpRequest and contains a method that makes a call to the multisyllable endpoint.
 */

import HttpRequest from "./HttpRequest";
import { HTTP } from "../constants";

const { ENDPOINT, METHOD } = HTTP;

interface ILyricsInput {
    lyrics: string;
}

class Multisyllable extends HttpRequest {
    constructor() {
        super();
    }

    /**
     * Highlights multisyllable rhymes
     *
     * @param lyricsInput - request body with ILyricsInput interface
     * @returns - data from request or error object
     */
    async highlightMultisyllableRhymes(
        lyricsInput: ILyricsInput
    ): Promise<any> {
        const config = this.createConfig(
            METHOD.POST,
            ENDPOINT.MULTISYLLABLE,
            lyricsInput
        );
        try {
            const response = await this.makeRequest(config);
            return response?.data;
        } catch (err) {
            console.error(err);
            return err;
        }
    }
}

export default new Multisyllable();
