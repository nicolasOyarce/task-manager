export function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
                <div className="flex justify-center">
                    <span className="text-3xl text-indigo-400 font-bold">Tasks App</span>
                </div>
                <h2 className="text-center text-2xl font-semibold text-white">
                    Sign in to your account
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300" htmlFor="email">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                            className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>
                    <a href="#" className="text-indigo-400 hover:underline text-sm flex justify-end">
                        Forgot password?
                    </a>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Sign in
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