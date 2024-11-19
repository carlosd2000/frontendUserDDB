import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/conocenos.css';
import logo from '../img/logo.jpg';
import equipo from '../img/Equipo.jpg'; // Importar la imagen correctamente

function Conocenos() {
  const navigate = useNavigate();

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Nexus Gaming Store</title>
      <link rel="stylesheet" href="../css/conocenos.css" />
      <link rel="icon" href={logo} />
      <nav className="navbar">
        <div className="logo-container">
          <img
            src={logo}
            alt="Nexus Gaming Store Logo"
            className="logo"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="search-container">
          <div className="search-bar">
            <input
              type="text"
              id="search-bar"
              placeholder="Buscar..."
              aria-label="Buscar"
            />
            <button aria-label="Buscar">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
        <div className="right-icons">
          <button
            className="login-button"
            onClick={() => navigate('/login')}
            aria-label="Iniciar sesión"
          >
            INICIAR SESIÓN
          </button>
        </div>
      </nav>
      <section className="quienes-somos">
        <div className="container">
          <h1>Quiénes Somos</h1>
          <div className="content">
            <div className="text">
              <h2>Nosotros</h2>
              <p>
                En Nexus Gaming, somos un equipo en constante crecimiento y
                aprendizaje. Cada uno de nosotros comparte una pasión por la
                tecnología, lo que nos ha impulsado a crear esta plataforma.
                Queremos demostrar nuestras capacidades y, con dedicación y
                esfuerzo, hemos desarrollado esta tienda online que ofrece productos
                de alta calidad a todos los gamers y entusiastas de la tecnología.
              </p>
              <h2>Objetivos</h2>
              <p>
                Nuestro objetivo no solo es vender productos, sino ofrecer una
                experiencia de compra accesible y moderna.
              </p>
              <ul>
                <li>
                  Implementación de opciones para un inicio de sesión en múltiples
                  plataformas y un proceso de registro sencillo para hacer que el
                  acceso sea rápido y sin complicaciones.
                </li>
                <li>
                  Creación de un buscador avanzado, diseñado para facilitar la
                  búsqueda de tus productos favoritos de una forma más eficiente.
                </li>
                <li>
                  Contamos con un asistente virtual que te acompañará durante tu
                  visita, asegurándose de que tengas una experiencia fluida y
                  satisfactoria.
                </li>
                <li>
                  Nuestro carrito de compras es fácil de usar, permitiéndote
                  gestionar tus productos con agilidad, y ofrecemos múltiples
                  métodos de pago seguros para tu comodidad.
                </li>
                <li>
                  Ofrecemos la opción de redirigirte a WhatsApp, donde uno de
                  nuestros asesores estará disponible para brindarte asistencia
                  personalizada en tiempo real.
                </li>
              </ul>
              <p>
                Este proyecto refleja el compromiso de un equipo decidido a
                aprender, mejorar y darlo todo en este lindo proceso.
              </p>
            </div>
            <div className="image">
              <img src={equipo} alt="Equipo Nexus" /> {/* Usar la imagen importada */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Conocenos;
