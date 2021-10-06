import WebService from './WebService';

export default class AuthService {
    static isSignedIn() {
        return !!window.localStorage.getItem("token");
    }

    async signIn(username, password) {
        const userDetails = await WebService.post("https://localhost:5001/api/account/login", { username, password });
        this.setToken(userDetails.token);
    }

    setToken(token) {
        window.localStorage.setItem("token", token);
    }
}