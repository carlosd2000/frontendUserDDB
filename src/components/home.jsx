import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
              <nav className="navbar">
                <div className="logo-container">
                  <img src="img/logo.jpg" alt="Nexus Gaming Store Logo" className="logo" />
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
                  {/* Uso de Link para navegación interna */}
                  <Link to="/login" className="login-button" aria-label="Iniciar sesión">
                    INICIAR SESIÓN
                  </Link>
                  <div className="shopping-cart-icon" aria-label="Carrito de compras">
                    <i className="fas fa-shopping-cart" />
                  </div>
                </div>
              </nav>
              <div className="contenedor1">
                <div className="botones">
                  <Link to="/productos" className="button" aria-label="Productos">
                  PRODUCTOS
                  </Link>
                  <Link to="/ayuda" className="button" aria-label="Ayuda">
                  AYUDA
                  </Link>
                  <Link to="/conocenos" className="button" aria-label="Conocenos">
                  CONOCENOS
                  </Link>
                </div>
              </div>
              {/* Inicio del Carrusel */}
              <div className="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="img/carrucel/carrucel1" alt="MSI MAG Infinite S3" />
                  </div>
                  <div className="carousel-item">
                    <img src="img/carrucel/carrucel3.jpg" alt="Acer Nitro N50-650" />
                  </div>
                  <div className="carousel-item">
                    <img src="img/carrucel/carrucel2" alt="NITROPC Pack Bronze" />
                  </div>
                  <div className="carousel-item">
                    <img src="img/carrucel/carrucel4.webp" alt="Razer Enki X" />
                  </div>
                </div>
                <div className="carousel-control-prev" onClick={() => console.log('Previous slide')}>
                  ❮
                </div>
                <div className="carousel-control-next" onClick={() => console.log('Next slide')}>
                  ❯
                </div>
              </div>
              {/* Fin del Carrusel */}
              <footer>
                <div className="footer-container">
                  <div className="contact-info">
                    <h3>CONTACTANOS</h3>
                    <p>
                      <i className="fas fa-map-marker-alt" /> Calle 15 # 77 - 30 Local B218
                      (Centro comercial UNICO)
                    </p>
                    <p>
                      <i className="fab fa-whatsapp" /> 301 485 2573
                    </p>
                  </div>
                  <div className="horarios-info">
                    <h3>HORARIOS</h3>
                    <p>
                      <i className="fas fa-clock" /> LUN - SAB: 9:00 AM - 7:00 PM
                    </p>
                    <p>
                      <i className="fas fa-clock" /> DOM: 10:00 AM - 3:00 PM
                    </p>
                  </div>
                  <div className="social-media">
                    <h3>SÍGUENOS</h3>
                    <div className="social-links">
                      <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="https://www.tiktok.com" target="_blank" aria-label="TikTok">
                        <i className="fab fa-tiktok" />
                      </a>
                      <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="whatsapp-button">
                    <a
                      href="https://www.whatsapp.com/"
                      target="_blank"
                      className="whatsapp-button"
                    >
                      ¿Cómo puedo ayudarte?
                    </a>
                  </div>
                  <div className="footer-bottom">
                    <p>Nexus Gaming Store © 2024. Todos los derechos reservados.</p>
                  </div>
                </div>
              </footer>
            </>
  );
};

export default Home;
