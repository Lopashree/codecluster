const email = document.getElementById("email");
const uname = document.getElementById("name");
const pass = document.getElementById("password");
const button = document.getElementById("signup");

button.addEventListener("click", () => {
    const dataobj = {
        email: email.value,
        name: uname.value,
        password: pass.value,
    };
    fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataobj),
        })
        .then((res) => res.json())
        .then((data) => {
            alert("Account created successfully!");
            window.location.href = "./signup.html";
        });
});
let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = form.email.value;
    let password = form.password.value;

    let user = userData.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        alert("Login successful");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password");
    }
});