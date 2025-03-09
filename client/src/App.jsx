import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TasksPage } from './pages/tasks/TasksPage'
import { TaskFormPage } from './pages/tasks/TaskFormPage'
import { Toaster } from 'react-hot-toast'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { NewPassword } from './pages/auth/NewPassword'
import { ResetPassword } from './pages/auth/ResetPassword'
import { Activate } from './pages/auth/Activate'
import { NotFoundPage } from './pages/NotFoundPage'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>

          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Navigate to="/home" />} />
          
          <Route path='/login' element={<LoginPage  />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/reset_password' element={<ResetPassword />} />
          <Route path='/password/reset/confirm/:uid/:token' element={<NewPassword />} /> 
          <Route path='/activate/:uid/:token' element={<Activate />} />

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