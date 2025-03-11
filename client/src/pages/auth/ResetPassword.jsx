import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const [formData, setFormData] = useState({
        "email": "",
    })

    const { email } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email
        }

        dispatch(resetPassword(userData))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate("/")
            toast.success("A reset password email has been sent to you.")

        }
    }, [isError, isSuccess, message, navigate, dispatch])
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
                <h2 className="text-center text-2xl font-semibold text-white">
                    Enter your email
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300" htmlFor="email">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name='email'
                            className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            onChange={handleChange}
                            value={email}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        onClick={handleSubmit}
                    >
                        Send
                    </button>
                </form>
                <p className="text-center text-sm text-gray-400">
                    <p className="text-indigo-400 hover:underline">
                        <Link to='/login'>Go back to login</Link>
                    </p>
                </p>
            </div>
        </div>
    );
}

export default ResetPassword;