
let loginDiv = document.querySelector(".login-box");
let signLink = document.getElementById("sign-link");

let loginLink = document.getElementById("login-link");
let signUpDiv = document.querySelector(".signUp-box");


// Event listener for login link
loginLink.addEventListener('click', function () {
    signUpDiv.style.display = "none";
    loginDiv.style.display = "flex";
    title.innerHTML = "Login";
});


// Event listener for sign-up link
signLink.addEventListener('click', function () {
    signUpDiv.style.display = "flex";
    loginDiv.style.display = "none";
    title.innerHTML = "Sign Up";
});

