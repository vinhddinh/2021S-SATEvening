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
            console.log("Success", data);
        })
        .catch((error) => {
            console.error("Error", error);
        });
    }
}