import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetPasswordConfirm } from '../../service/auth/authSlice'
import { toast } from 'react-hot-toast'

const NewPasswordPage = () =>{

    const { uid, token } = useParams()
    const [formData, setFormData] = useState({
        'new_password': '',
        're_new_password': ''
    })

    const { new_password, re_new_password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

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
            uid,
            token,
            new_password,
            re_new_password
        }

        dispatch(resetPasswordConfirm(userData))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate("/")
            toast.success("Your password was reset successfully.")

        }
    }, [isError, isSuccess, message, navigate, dispatch])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
                <h2 className="text-center text-2xl font-semibold text-white">
                    Reset your password
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="flex justify-between text-sm font-medium text-gray-300" htmlFor="password">
                            New Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            name='new_password'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="flex justify-between text-sm font-medium text-gray-300" htmlFor="password">
                            Confirm New Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            name='re_new_password'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        onClick={handleSubmit}
                    >
                        Reset
                    </button>
                </form>
                <p className="text-center text-sm text-gray-400">
                    <a href="#" className="text-indigo-400 hover:underline">
                        Don&apos;t have an account?
                    </a>
                </p>
            </div>
        </div>
    );
}

export default NewPasswordPage;