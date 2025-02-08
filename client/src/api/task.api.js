import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => taskApi.get('/');
export const createTask = (task) => taskApi.post('/', task);
export const deleteTask = (id) => taskApi.delete(`/${id}/`);
export const updateTask = (id) => taskApi.put(`/${id}/`);