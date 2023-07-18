const email = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementById("signin");

button.addEventListener("click", () => {
    fetch("http://localhost:8080/user", {
        method: "GET",
    })
})
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