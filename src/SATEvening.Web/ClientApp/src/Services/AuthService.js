import WebService from './WebService';

export default class AuthService {
    static isSignedIn() {
        return !!window.localStorage.getItem("token");
    }

    async signIn(email, password) {
        const userDetails = await WebService.post("https://localhost:5001/api/account/login", { email, password });
        this.setUserId(userDetails.userID);
        this.setToken(userDetails.token);
    }

    async register(registrationDetails) {
        const registrationUserDetails = await WebService.post("https://localhost:5001/api/account/register", registrationDetails);
        this.setToken(registrationUserDetails.token);
    }

    setUserId(Id) {
        window.localStorage.setItem("userId", Id)
    }

    setToken(token) {
        window.localStorage.setItem("token", token);
    }
}