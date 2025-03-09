![TaskApp Banner](/build/static/taskAppBanner.png)
# 📌 Task Manager

Task Manager is a task management application designed to improve productivity through an intuitive interface and efficient functionalities. This project serves as a demonstration of my skills as a software developer, covering both backend and frontend development, along with testing and best practices.

## 🚀 Technologies Used

### Backend
- **Django Rest Framework** – REST API development.
- **Djoser & JWT** – Authentication and authorization handling.
- **TestCase** – Automated API testing.
- **Virtual Environments & .env** – Secure dependency and configuration management.

### Frontend
- **React** – User interface development.
- **Tailwind CSS** – Application styling.

## ⚙️ Installation and Setup

### 🔧 Requirements
Make sure you have installed:
- Python (version 3.13)
- Node.js (version 23.7)
- Pip and Virtualenv

### 🖥 Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv  
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure environment variables:
   - Create a `.env` file in the backend root directory and add the necessary configurations.
5. Apply migrations and run the server:
   ```bash
   python manage.py migrate  
   python manage.py runserver  
   ```

### 🖥 Frontend
1. Navigate to the frontend directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install  
   ```
3. Run the application:
   ```bash
   npm run dev  
   ```

## 🛠 Testing
To run backend tests, use:
```bash
python manage.py test  
```

## 📜 License
This project is licensed under the MIT License.
