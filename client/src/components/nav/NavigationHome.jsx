import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";

export function NavigationHome() {
    return (
        <div className="shadow-md py-4 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Task Manager</h1>
            <div className="space-x-4 ">
                <button className="px-3 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition flex items-center">
                    <Link to={'/login'} className="mr-2">Sign In</Link>
                    <IoPerson />
                </button>
            </div>
        </div>
    )
}