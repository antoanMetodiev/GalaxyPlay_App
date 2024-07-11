
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const strongPasswordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;


const phoneRegex = /^(\+?359|0)?(87|88|89|98|87)\d{7}$/;


const usernameRegex = /^(?=.*[a-zA-Z].*[a-zA-Z])\w{3,}$/;


// This is validation functions:
function email(email) {
    return emailRegex.test(email);
}

function password(password) {
    return strongPasswordRegex.test(password);
}

function phoneNumber(phone) {
    return phoneRegex.test(phone);
}

function username(username) {
    return usernameRegex.test(username);
}

export { email, password, phoneNumber, username };