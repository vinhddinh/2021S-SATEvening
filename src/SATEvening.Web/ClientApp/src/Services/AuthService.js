export default class AuthService {
    signIn(username, password) {
        fetch("https://localhost:5001/api/account/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            this.setToken(data.token);
            console.log("Success", data);
        })
        .catch((error) => {
            console.error("Error", error);
        });
    }

    setToken(token) {
        window.localStorage.setItem("token", token);
    }
}