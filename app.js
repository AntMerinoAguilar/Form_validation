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
        username.classList.add("success-input");
        username.classList.remove("error-input");
        username.nextElementSibling.classList.add("success");
        username.nextElementSibling.classList.remove("error");
        username.nextElementSibling.innerText = "Valid username.";
    } else {
        isValid = false;
        username.classList.add("error-input");
        username.classList.remove("success-input");
        username.nextElementSibling.classList.add("error");
        username.nextElementSibling.classList.remove("success");
        username.nextElementSibling.innerText = "Le username doit contenir entre 5 et 10 caractères minuscules.";
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(email.value)) {
        email.classList.add("success-input");
        email.classList.remove("error-input");
        email.nextElementSibling.classList.add("success");
        email.nextElementSibling.classList.remove('error');
        email.nextElementSibling.textContent = 'Valid email.';
    } else {
        isValid = false;
        email.classList.add("error-input");
        email.classList.remove("success-input");
        email.nextElementSibling.classList.add('error');
        email.nextElementSibling.classList.remove('success');
        email.nextElementSibling.textContent = 'Invalid email address.';
    }

    if (password.value.length >= 8 && password.value.length <= 15) {
        password.classList.add("success-input");
        password.classList.remove("error-input");
        password.nextElementSibling.classList.add("success");
        password.nextElementSibling.classList.remove("error");
        password.nextElementSibling.innerText = "Valid password.";
    } else {
        isValid = false;
        password.classList.add("error-input");
        password.classList.remove("success-input");
        password.nextElementSibling.classList.add("error");
        password.nextElementSibling.classList.remove("success");
        password.nextElementSibling.innerText = "Le password doit contenir entre 8 et 15 caractères.";
    }

    if (passwordConfirmation.value === password.value && passwordConfirmation.value.length >= 8 && passwordConfirmation.value.length <= 15) {
        passwordConfirmation.classList.add("success-input");
        passwordConfirmation.classList.remove("error-input");
        passwordConfirmation.nextElementSibling.classList.add("success");
        passwordConfirmation.nextElementSibling.classList.remove("error");
        passwordConfirmation.nextElementSibling.innerText = "Valid confirmation password.";
    } else {
        isValid = false;
        passwordConfirmation.classList.add("error-input");
        passwordConfirmation.classList.remove("success-input");
        passwordConfirmation.nextElementSibling.classList.add("error");
        passwordConfirmation.nextElementSibling.classList.remove("success");
        passwordConfirmation.nextElementSibling.innerText = "Les passwords doivent être identiques.";
    }

    if (isValid) {
        console.log("Form submitted successfully!");
        console.log(`The username is : ${username.value}`);
        console.log(`The email is : ${email.value}`);
        console.log(`The password is : ${password.value}`);
    }
})