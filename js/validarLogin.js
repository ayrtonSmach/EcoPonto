import { errorInput } from "./errorInput.js";

export function validarLogin() {
    let emailField = document.getElementById('user')
    let passwordField = document.getElementById('password')

    console.log(emailField, passwordField)
    
    if(emailField.value === "admin" && passwordField.value === "admin") {
        window.location.href ='./../index.html'
    } else {
        errorInput(emailField, passwordField);
    }
}