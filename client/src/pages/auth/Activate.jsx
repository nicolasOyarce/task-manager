import { VscVerifiedFilled } from "react-icons/vsc";

export function Activate() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
                <div>
                    <VscVerifiedFilled className="w-20 h-20 mx-auto" />
                </div>
                <h1 className="text-center text-3xl font-semibold text-white">
                    Activate Account
                </h1>
                <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        onClick={handleSubmit}
                    >
                        Activate
                    </button>
            </div>
        </div>
    );
}