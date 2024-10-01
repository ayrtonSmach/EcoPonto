export function errorInput(emailField, passwordField) {
    document.querySelector('.incorrect').classList.remove('hidden')
    document.querySelector('#box button').style.border = '2px solid red'

    emailField.style.border = '2px solid red'

    passwordField.style.border = '2px solid red'

}