export default class AuthService {
    signIn(email, password) {
        fetch("https://localhost:5001/api/account/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
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