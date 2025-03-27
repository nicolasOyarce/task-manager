import { Link } from 'react-router-dom';
import { useRegister } from '../../hooks/useRegister';
import { Spinner } from "../../components/Spinner";

const RegisterPage = () => {

    const { formData, handleChange, handleSubmit, isLoading } = useRegister();
    const { first_name, last_name, email, password, re_password } = formData;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
                {isLoading && <Spinner />}
                <div className="flex justify-center">
                    <Link to={"/home"} > <span className="text-3xl text-indigo-400 font-bold">Tasks App</span></Link>
                </div>
                <h2 className="text-center text-2xl font-semibold text-white">
                    Create an account 
                </h2>
                <form className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-300" htmlFor="first_name">
                                First Name
                            </label>
                            <input
                                id="first_name"
                                type="text"
                                name='first_name'
                                className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                onChange={handleChange}
                                value={first_name}
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-300" htmlFor="last_name">
                                Last Name
                            </label>
                            <input
                                id="last_name"
                                type="text"
                                name='last_name'
                                className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                onChange={handleChange}
                                value={last_name}
                                required
                            />
                        </div>
                    </div>
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
                    <div>
                        <label className="flex justify-between text-sm font-medium text-gray-300" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name='password'
                            className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            onChange={handleChange}
                            value={password}
                            required
                        />
                    </div>
                    <div>
                        <label className="flex justify-between text-sm font-medium text-gray-300" htmlFor="password">
                            Confirm Password
                        </label>
                        <input
                            id="re_password"
                            type="password"
                            name='re_password'
                            className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            onChange={handleChange}
                            value={re_password}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        onClick={handleSubmit}
                    >
                        Register
                    </button>
                </form>
                <div className="text-center text-sm text-gray-400">
                    <p className="text-indigo-400 hover:underline">
                        <Link to={'/login'}>Already have an account?</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage