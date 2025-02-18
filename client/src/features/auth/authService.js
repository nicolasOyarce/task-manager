import { axios } from "axios";

const BACKEND_DOMAIN = "http://localhost:8000/auth";

const REGISTER_URL = `${BACKEND_DOMAIN}/users`;
const LOGIN_URL = `${BACKEND_DOMAIN}/jwt/create`;
const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/users/reset_password`;
const RESET_PASSWORD_C0NFIRM_URL = `${BACKEND_DOMAIN}/users/reset_password_confirm/:uid/:token`;
const ACTIVATION_URL = `${BACKEND_DOMAIN}/activation/:iud/:token`;

const register = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }

    const response = await axios.post(REGISTER_URL, userData, config);

    return response.data;
}

const authService = {register};

export default authService;