
function Registrarse() {
    return (

        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registrarse - Nexus Gaming Store</title>
  <link rel="stylesheet" href="../css/registrarse.css" />{" "}
  {/* Vinculando el CSS de registrarse */}
  <link rel="icon" href="../img/logo.jpg" />
  <nav className="navbar">
    <div className="logo-container">
      <img
        src="../img/logo.jpg"
        alt="Nexus Gaming Store Logo"
        className="logo"
        onClick="window.location.href='../index.html'"
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
        onClick="window.location.href='login.html'"
        aria-label="Iniciar sesion"
      >
        INICIAR SESION
      </button>
      <div className="shopping-cart-icon" aria-label="Carrito de compras">
        <i className="fas fa-shopping-cart" />
      </div>
    </div>
  </nav>
  <div className="container">
    <h2>Registro de Usuario</h2>
    <form id="signupForm">
      <div className="input-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" required="" />
      </div>
      <div className="input-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" required="" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" required="" />
      </div>
      <div className="input-group">
        <button type="submit">Registrarse</button>
      </div>
    </form>
    {/* Botón para volver a la página de inicio */}
    <div className="back-to-home">
      <button
        className="homebtn"
        onClick="window.location.href='../index.html'"
      >
        Volver a Inicio
      </button>
    </div>
  </div>
</>



        
    );
};


export default Registrarse;