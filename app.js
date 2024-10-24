const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#passwordConfirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    const usernameLowercase = username.value.toLowerCase();
    if (username.value === usernameLowercase && username.value.length >= 5 && username.value.length <= 10) {
        username.parentElement.classList = "success";
        username.nextElementSibling.innerText = "Valid username.";
    } else {
        isValid = false;
        username.parentElement.classList = "error";
        username.nextElementSibling.innerText = "Le username doit contenir entre 5 et 10 caractères minuscules.";
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(email.value)) {
        email.parentElement.classList = "success";
        email.nextElementSibling.textContent = 'Valid email.';
    } else {
        isValid = false;
        email.parentElement.classList = "error";
        email.nextElementSibling.textContent = 'Invalid email address.';
    }

    if (password.value.length >= 8 && password.value.length <= 15) {
        password.parentElement.classList = "success";
        password.nextElementSibling.innerText = "Valid password.";
    } else {
        isValid = false;
        password.parentElement.classList = "error";
        password.nextElementSibling.innerText = "Le password doit contenir entre 8 et 15 caractères.";
    }

    if (passwordConfirmation.value === password.value && passwordConfirmation.value.length >= 8 && passwordConfirmation.value.length <= 15) {
        passwordConfirmation.parentElement.classList = "success";
        passwordConfirmation.nextElementSibling.innerText = "Valid confirmation password.";
    } else {
        isValid = false;
        passwordConfirmation.parentElement.classList = "error";
        passwordConfirmation.nextElementSibling.innerText = "Les passwords doivent être identiques.";
    }

    if (isValid) {
        console.log("Form submitted successfully!");
        console.log(`The username is : ${username.value}`);
        console.log(`The email is : ${email.value}`);
        console.log(`The password is : ${password.value}`);
    }
})