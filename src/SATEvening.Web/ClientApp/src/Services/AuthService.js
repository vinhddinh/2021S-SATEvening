import WebService from './WebService';

export default class AuthService {
    static isSignedIn() {
        return !!window.localStorage.getItem("token");
    }

    async signIn(email, password) {
        const userDetails = await WebService.post("https://localhost:5001/api/account/login", { email, password });
        this.setToken(userDetails.token);
    }

    async register(registrationDetails) {
        const registrationUserDetails = await WebService.post("https://localhost:5001/api/account/register", registrationDetails);
        this.setToken(registrationUserDetails.token);
    }

    setToken(token) {
        window.localStorage.setItem("token", token);
    }
}