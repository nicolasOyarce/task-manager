import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../../features/auth/authSlice'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoPerson } from 'react-icons/io5'

export function Navigation() {

        const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

    return (
        <div className="shadow-md py-4 px-6 flex justify-between items-center">
            <NavLink to="/tasks">
                <h1 className="text-2xl font-bold text-white">Task Manager</h1>
            </NavLink>
            <div className="space-x-4 ">
                {user ?
                        <>
                            <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                                <NavLink to="/task-create">Create Task</NavLink>
                            </button>
                            <NavLink className='nav-childs' to="/" onClick={handleLogout}>Logout</NavLink>
                        </>
                        :
                        <>
                            <button className="px-3 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition flex items-center">
                                <NavLink to={'/login'} className="mr-2">Sign In</NavLink>
                                <IoPerson />
                            </button>
                        </>
                    }
            </div>
        </div>
    )
}