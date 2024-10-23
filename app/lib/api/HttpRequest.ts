import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants";

class HttpRequest {
    axios: AxiosInstance;

    constructor() {
        this.axios = axios;
    }

    /**
     * Creates a config object to pass into an axios request.
     *
     * @param method - e.g. GET, POST, PUT
     * @param endpoint  - e.g. /rhymes/multisyllable
     * @param data - what to pass into the request body
     * @returns config object to pass into axios
     */
    createConfig(
        method: string,
        endpoint: string,
        data: any
    ): AxiosRequestConfig {
        const config: AxiosRequestConfig = {
            method,
            url: BASE_URL + endpoint,
            headers: {
                "Content-Type": "application/json"
            }
        };

        if (data) {
            config.data = data;
        }

        return config;
    }

    /**
     * Makes an axios request using the passed in config object.
     *
     * @param config - config object from `createConfig` method
     * @returns response from request
     */
    async makeRequest(config: AxiosRequestConfig): Promise<any> {
        const response = await this.axios(config);
        return response;
    }
}

export default HttpRequest;
