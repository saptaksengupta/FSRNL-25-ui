const BASE_URL = 'http://localhost:8081';

export const getLoginApiUrl = () => {
    return `${BASE_URL}/auth/signin`;
}

export const getSignUpApiUrl = () => {
    return `${BASE_URL}/auth/signup`;
}
