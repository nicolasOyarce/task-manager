import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../service/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const useRegister = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, email, password, re_password } = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, isSuccess, isError, message } = useSelector( (state) => state.auth);

    const handleChange = (e) => {
        setFormData( (prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password !== re_password) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                first_name,
                last_name,
                email,
                password,
                re_password
            }
            dispatch(register(userData));
        }
    }

    useEffect( () => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate("/login");
            toast.success('An activation link has been sent to your email');
        }
        dispatch(reset());
    }, [isError, isSuccess, user, navigate, dispatch, message]);

    return { formData, handleChange, handleSubmit, isLoading };
};
