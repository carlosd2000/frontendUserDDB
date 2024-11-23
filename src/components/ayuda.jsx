import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Ayuda.css";
import logo from "../img/logo.jpg";

function Ayuda() {
  const navigate = useNavigate();

  return (
    <div className="main-container"> {/* Añadido un div envolvente con clase "main-container" */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Ayuda - Nexus Gaming Store</title>
      <link rel="icon" href={logo} />
      <div className="contenedor3">
        <h1>Centro de Ayuda</h1>
        <div className="faq-section">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq">
            <h3>¿Cómo realizo un pedido?</h3>
            <p>Puedes realizar un pedido seleccionando los productos que desees y añadiéndolos a tu carrito de compras. Luego, sigue los pasos de pago.</p>
            <h3>¿Cuáles son los métodos de pago aceptados?</h3>
            <p>Aceptamos tarjetas de crédito, débito, y pagos a través de PayPal.</p>
            <h3>¿Cuánto tiempo tarda la entrega?</h3>
            <p>El tiempo de entrega varía según tu ubicación, pero usualmente entre 3 y 7 días hábiles.</p>
          </div>
        </div>
        <div className="contact-section">
          <h2>Contáctanos</h2>
          <form>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows={4} required />
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
        <div className="return-home">
          <button onClick={() => navigate('/')}>
            Volver a la página principal
          </button>
        </div>
      </div>
      <footer>
        <p>© 2024 Nexus Gaming Store. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Ayuda;
