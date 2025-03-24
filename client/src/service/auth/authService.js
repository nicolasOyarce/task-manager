import axios from "axios";

const BACKEND_DOMAIN = "http://localhost:8000/api/auth";

const REGISTER_URL = `${BACKEND_DOMAIN}/users/`;
const LOGIN_URL = `${BACKEND_DOMAIN}/jwt/create`;
const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/users/reset_password`;
const RESET_PASSWORD_CONFIRM_URL = `${BACKEND_DOMAIN}/users/reset_password_confirm/`;
const ACTIVATE_URL = `${BACKEND_DOMAIN}/users/activation/`;
const GET_USER_INFO = `${BACKEND_DOMAIN}/users/me/`;

const register = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };
    const response = await axios.post(REGISTER_URL, userData, config);
    return response.data;
};

const login = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };
    const response = await axios.post(LOGIN_URL, userData, config);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    return localStorage.removeItem("user");
};

const activate = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };
    const response = await axios.post(ACTIVATE_URL, userData, config);
    return response.data;
};

const resetPassword = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };
    const response = await axios.post(RESET_PASSWORD_URL, userData, config);
    return response.data;
};

const resetPasswordConfirm = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };
    const response = await axios.post(
        RESET_PASSWORD_CONFIRM_URL,
        userData,
        config
    );
    return response.data;
};

const getUserInfo = async (accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
    const response = await axios.get(GET_USER_INFO, config);
    return response.data;
};

const authService = {
    register,
    login,
    logout,
    activate,
    resetPassword,
    resetPasswordConfirm,
    getUserInfo,
};

export default authService;
