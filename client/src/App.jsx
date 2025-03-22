import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TasksPage } from './pages/tasks/TasksPage'
import { TaskFormPage } from './pages/tasks/TaskFormPage'
import { Toaster } from 'react-hot-toast'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import NewPasswordPage from './pages/auth/NewPasswordPage'
import ResetPasswordPage from './pages/auth/ResetPasswordPage'
import ActivatePage from './pages/auth/ActivatePage'
import { NotFoundPage } from './pages/NotFoundPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>

          <Route path='/home' element={<HomePage />} />
          <Route path='/' element={<Navigate to="/home" />} />
          
          <Route path='/login' element={<LoginPage  />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/reset_password' element={<ResetPasswordPage />} />
          <Route path='/password/reset/confirm/:uid/:token' element={<NewPasswordPage />} /> 
          <Route path='/activation</:uid/:token' element={<ActivatePage />} />

          <Route path='/tasks' element={<TasksPage />} />
          <Route path='/task-create' element={<TaskFormPage />} />
          <Route path='/tasks/:id' element={<TaskFormPage />} />

          <Route path='*' element={<NotFoundPage />} />

        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App