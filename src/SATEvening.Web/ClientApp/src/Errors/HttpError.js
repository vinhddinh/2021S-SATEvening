export default class HttpError extends Error {
    constructor(response) {
        super(`${response.url} returned status ${response.status}`);
        this.name = "HttpError";
        this.response = response;
        this.status = response.status;
    }
}