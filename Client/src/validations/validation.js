export const validations = (inputs) => {

    const errors = {}
    const RegexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const atLeastOneNumberRegex = /.*[0-9].*/

    const ValidEmail = (
        RegexEmail.test(inputs.email) &&
        inputs.email.length <= 35
    )
    if(!ValidEmail) {
        errors['email'] = "Debes ingresar un email valido";
    }

    const ValidPassword = (
        atLeastOneNumberRegex.test(inputs.password) &&
        inputs.password.length >= 6 &&
        inputs.password.length <= 10
    )
    if(!ValidPassword) {
        errors['password'] = "Debes ingresar una contraseña valida";
    }

    return errors
}
