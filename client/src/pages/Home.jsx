export function Home() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="shadow-md py-4 px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Task Manager</h1>
                <button className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Iniciar sesión
                </button>
            </header>

            {/* Hero Section */}
            <section className="text-center py-20 bg-blue-950 text-white">
                <h2 className="text-4xl font-bold mb-4">Organiza tus tareas fácilmente</h2>
                <p className="text-lg mb-6">Administra tus pendientes y aumenta tu productividad.</p>
                <button className="bg-white text-blue-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
                    Comenzar ahora
                </button>
            </section>

            <section className="py-16 px-8">
                <h3 className="text-3xl font-semibold text-center mb-8">Características principales</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md  text-black">
                        <h4 className="text-xl font-bold mb-2">Gestión de Tareas</h4>
                        <p>Organiza, edita y completa tus tareas fácilmente.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md  text-black">
                        <h4 className="text-xl font-bold mb-2">Colaboración</h4>
                        <p>Comparte tus listas con amigos o compañeros de trabajo.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-black">
                        <h4 className="text-xl font-bold mb-2">Notificaciones</h4>
                        <p>Recibe recordatorios para no olvidar ninguna tarea importante.</p>
                    </div>
                </div>
            </section>

            <footer className="text-center py-6 bg-gray-800 text-white">
                <p>&copy; 2025 Task Manager. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}