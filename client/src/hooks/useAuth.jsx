import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset, getUserInfo } from "../service/auth/authSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) toast.error(message);
        if (isSuccess || user) navigate("/tasks");
        dispatch(reset());
        dispatch(getUserInfo());
    }, [isError, isSuccess, user, navigate, dispatch, message]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return { email, password, isLoading, handleChange, handleSubmit };
};

export default useAuth;
