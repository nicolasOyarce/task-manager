import { TasksList } from "../../components/tasks/TasksList"
import { Navigation } from "../../components/nav/Navigation"

export function TasksPage() {
    return (
        <div>
            <Navigation />
            <TasksList></TasksList>
        </div>

    )
}
