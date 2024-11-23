import { Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import Productos from '../components/productos';
import Ayuda from '../components/ayuda';
import Conocenos from '../components/conocenos';
import Home from '../components/home'; // Crearemos este componente para la página de inicio
import Registrarse from '../components/registrarse';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/ayuda" element={<Ayuda />} />
      <Route path="/conocenos" element={<Conocenos />} />
      <Route path="/" element={<Home />} /> {/* Página de inicio */}
      <Route path="/registrarse" element={<Registrarse />} />
    </Routes>
  );
};

export default AppRoutes;