import HttpError from "../Errors/HttpError";

export default class WebService {
    static async post(url, data) {
        const response = await fetch(`${url}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new HttpError(response);
        }

        return response.json();
    }
}