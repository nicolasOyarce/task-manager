import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export function TaskCard({ task }) {

    const navigate = useNavigate()

    return (
        <div 
            className="bg-zinc-800 p-3 hover:bg-zinc-600 hover:cursor-pointer"
            onClick={() => {
                navigate(`/tasks/${task.id}`)
            }}
        >
            <h2 className="font-bold uppercase">{ task.title }</h2>
            <p className="text-slate-400">{ task.description }</p>
        </div>
    );
}

TaskCard.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
}; 