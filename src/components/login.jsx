import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/login.css";
import logo from "../img/logo.jpg";
import fondoNo1 from "../img/backgrounds/fondoNo1.jpg";
import fondoNo2 from "../img/backgrounds/fondoNo2.jpg";
import fondoNo3 from "../img/backgrounds/fondoNo3.jpg";
import fondoNo4 from "../img/backgrounds/fondoNo4.jpg";
import fondoNo5 from "../img/backgrounds/fondoNo5.jpg";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    function mostrarImagenAleatoria() {
      const numeroAleatorio = Math.random() * 100;
      let imagen;

      if (numeroAleatorio <= 20) {
        imagen = fondoNo1;
      } else if (numeroAleatorio <= 50) {
        imagen = fondoNo2;
      } else if (numeroAleatorio <= 60) {
        imagen = fondoNo3;
      } else if (numeroAleatorio <= 85) {
        imagen = fondoNo4;
      } else {
        imagen = fondoNo5;
      }

      document.documentElement.style.setProperty('--background-image', `url(${imagen})`);
    }

    mostrarImagenAleatoria();
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Iniciar Sesión - Nexus Gaming Store</title>
      <link rel="stylesheet" href="../css/login.css" />
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
            <input type="text" placeholder="Buscar..." aria-label="Buscar" />
            <button aria-label="Buscar">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
        <div className="right-icons">
          <button
            className="login-button"
            onClick={() => navigate('/registrarse')}
            aria-label="Registrarse"
          >
            REGISTRARSE
          </button>
          <div className="shopping-cart-icon" aria-label="Carrito de compras">
            <i className="fas fa-shopping-cart" />
          </div>
        </div>
      </nav>

      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form id="loginForm">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="loginbtn">
            Iniciar sesión
          </button>
        </form>
        <div className="signup">
          <p>
            ¿No tienes una cuenta? <a href="/registrarse">Regístrate</a>.
          </p>
          <button
            aria-label="Iniciar sesión con Facebook"
            onClick={() => window.location.href='https://www.facebook.com'}
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            aria-label="Iniciar sesión con Gmail"
            onClick={() => window.location.href='https://mail.google.com'}
          >
            <i className="fab fa-google" />
          </button>
          <button
            aria-label="Iniciar sesión con Twitter"
            onClick={() => window.location.href='https://www.twitter.com'}
          >
            <i className="fab fa-twitter" />
          </button>
          <button
            aria-label="Iniciar sesión con Instagram"
            onClick={() => window.location.href='https://www.instagram.com'}
          >
            <i className="fab fa-instagram" />
          </button>
          <button
            aria-label="Iniciar sesión con GitHub"
            onClick={() => window.location.href='https://www.github.com'}
          >
            <i className="fab fa-github" />
          </button>
        </div>
        <div className="back-to-home">
          <button
            className="homebtn"
            onClick={() => navigate('/')}
          >
            Volver a Inicio
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
