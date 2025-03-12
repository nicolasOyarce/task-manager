import { VscVerifiedFilled } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { activate, reset } from "../../features/auth/authSlice";
import { toast } from "react-hot-toast";
import Spinner from "../../components/Spinner";

const ActivatePage = () => {

    const { uid, token } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            uid,
            token
        }
        dispatch(activate(userData))
        toast.success("Your account has been activated! You can login now")
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate("/login")
        }

        dispatch(reset())

    }, [isError, isSuccess, navigate, dispatch, message])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
                {isLoading && <Spinner />}
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

export default ActivatePage;