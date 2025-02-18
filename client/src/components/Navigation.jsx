import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <div className='flex justify-between py-5'>
            <Link to="/tasks">
                <h1 className='font-bold text-3xl mb-4'>Task App</h1>
            </Link>
            <button className="px-3 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition">
                <Link to={'/login'}>Login</Link>
            </button>
            <button className="px-3 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition">
                <Link to={'/register'}>Register</Link>
            </button>
            <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                <Link to="/task-create">Create Task +</Link>
            </button>
        </div>
    )
}