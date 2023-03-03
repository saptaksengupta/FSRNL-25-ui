// const BASE_URL = 'http://localhost:8081';
const BASE_URL = 'https://intense-forest-09492.herokuapp.com';

export const getLoginApiUrl = () => {
    return `${BASE_URL}/auth/signin`;
}

export const getSignUpApiUrl = () => {
    return `${BASE_URL}/auth/signup`;
}

export const getCreateBlogApiUrl = () => {
    return `${BASE_URL}/blogs`;
}

export const getBlogsApiUrl = () => {
    return `${BASE_URL}/blogs`;
}