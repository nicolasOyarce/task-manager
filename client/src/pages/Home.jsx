import { Link } from 'react-router-dom';
import { NavigationHome } from '../components/nav/NavigationHome';
import { Footer } from '../components/nav/Footer';

export function Home() {
    return (
        <div className="min-h-screen">

            <NavigationHome />

            <section className="text-center py-20 bg-indigo-500 text-white">
                <h2 className="text-4xl font-bold mb-4">Organize your tasks easily</h2>
                <p className="text-lg mb-6">Manage your pending tasks and increase your productivity.</p>
                <button className="bg-white text-blue-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
                    <Link to={'/register'}>Get Started</Link>
                </button>
            </section>

            <section className="py-16 px-8">
                <h3 className="text-3xl font-semibold text-center mb-8">Main features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-400 p-6 rounded-lg shadow-md text-black">
                        <h4 className="text-xl font-bold mb-2">Gestión de Tareas</h4>
                        <p>Organiza, edita y completa tus tareas fácilmente.</p>
                    </div>
                    <div className="bg-gray-400 p-6 rounded-lg shadow-md  text-black">
                        <h4 className="text-xl font-bold mb-2">Colaboración</h4>
                        <p>Comparte tus listas con amigos o compañeros de trabajo.</p>
                    </div>
                    <div className="bg-gray-400 p-6 rounded-lg shadow-md text-black">
                        <h4 className="text-xl font-bold mb-2">Notificaciones</h4>
                        <p>Recibe recordatorios para no olvidar ninguna tarea importante.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}