

export const checkPhoneNumber = (number) => {
    const regex = /^\d{9}$/;
    return regex.test(number);
};
export const checkEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
export const checkZipCode = (code) => {
    const regex = /^\d{2}-\d{3}$/;
    return regex.test(code);
};
export const checkHomeNumber = (number) => {
    const regex = /^[a-zA-Z0-9\s]+$/;
    return regex.test(number);
};
export const isString = (s) => {
    const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
    return regex.test(s);
};

export const checkAmount = (amount) => {
    const regex = /^[0-9]+([,.][0-9]+)?$/;
    return regex.test(amount);
};

export const isAccountNumberValid = (inputString) => {
    const stringWithoutWhitespace = inputString.replace(/\s/g, '');
    if (stringWithoutWhitespace.length !== 26) {
        return false;
    }
    for (let i = 0; i < stringWithoutWhitespace.length; i++) {
        if (!/\d/.test(stringWithoutWhitespace[i])) {
            return false;
        }
    }
    return true;
}


