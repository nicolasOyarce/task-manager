import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset, getUserInfo } from "../../features/auth/authSlice";
import { toast } from "react-hot-toast";

const LoginPage = () => {

  const [formData, setFormData] = useState({
        "email": "",
        "password": "",
    })

    const { email, password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

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
            email,
            password,
        }
        dispatch(login(userData))
    }


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate("/dashboard")
        }

        dispatch(reset())
        dispatch(getUserInfo())

    }, [isError, isSuccess, user, navigate, dispatch])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
        <div className="flex justify-center">
          <Link to={"/home"} className="text-3xl text-indigo-400 font-bold">
            Tasks App
          </Link>
        </div>
        <h2 className="text-center text-2xl font-semibold text-white">
          Sign in your account
        </h2>
        <form className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="flex justify-between text-sm font-medium text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <p className="text-indigo-400 hover:underline text-sm flex justify-end">
            <Link to={"/reset_password"}>Forgot password?</Link>
          </p>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-400">
          <p className="text-indigo-400 hover:underline">
            <Link to={"/register"}>Don&apos;t have an account?</Link>
          </p>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;