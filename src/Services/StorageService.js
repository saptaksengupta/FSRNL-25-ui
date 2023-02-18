export const setUserToken  = (token) => {
    if (token) {
        localStorage.setItem('token', token);
    }
}
export const getUserToken = () => {
    return localStorage.getItem('token');
}

export const setUserData = (user) => {
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export const getUserData = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const isLoggedIn = () => {
    return getUserToken() ? true : false;
}