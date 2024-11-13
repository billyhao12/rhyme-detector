/**
 * Extends HttpRequest and contains a method that makes a call to the monosyllable endpoint.
 */

import HttpRequest from "./HttpRequest";
import { HTTP } from "../constants";

const { ENDPOINT, METHOD } = HTTP;

interface ILyricsInput {
    lyrics: string;
}

class Monosyllable extends HttpRequest {
    constructor() {
        super();
    }

    /**
     * Highlights monosyllable rhymes
     *
     * @param lyricsInput - request body with ILyricsInput interface
     * @returns - data from request or error object
     */
    async highlightMonosyllableRhymes(lyricsInput: ILyricsInput): Promise<any> {
        const config = this.createConfig(
            METHOD.POST,
            ENDPOINT.MONOSYLLABLE,
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

export default new Monosyllable();
