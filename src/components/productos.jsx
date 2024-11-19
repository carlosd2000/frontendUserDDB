import '../css/productos.css';
import Msi from '../img/imagenes de productos/computador1.jpg';
import '../img/imagenes de productos/acernitron50650.jpg';
import '../img/imagenes de productos/Cascos Gaming con Micrófono Rotatorio.jpg';
import '../img/imagenes de productos/Corsair Ironclaw RGB.jpg';
import '../img/imagenes de productos/Corsair T3 Rush.png';
import '../img/imagenes de productos/cyberpunk 2077.jpg';
import '../img/imagenes de productos/Drift DR275 PRO.png';
import '../img/imagenes de productos/elden ring.jpg';
import '../img/imagenes de productos/GOW.jpg';
import '../img/imagenes de productos/haloinfinite.jpg';
import '../img/imagenes de productos/Logitech G203 LIGHTSYNC.png';
import '../img/imagenes de productos/Nintendo swift.jpg';
import '../img/imagenes de productos/NITROPC Pack Bronze.jpg';
import '../img/imagenes de productos/producto No1.png';
import '../img/imagenes de productos/PS 5.jpg';
import '../img/imagenes de productos/Razer Deathadder V3.jpg';
import '../img/imagenes de productos/Razer Enki X.jpg';
import '../img/imagenes de productos/Tatybo Cascos Gaming.jpg';
import '../img/imagenes de productos/the legends of zelda breath of the wild.jpg';
import '../img/imagenes de productos/TR Playstation 50.jpg';
import '../img/imagenes de productos/TR Steam 200.jpg';
import '../img/imagenes de productos/TR XBOX 100.jpg';
import '../img/imagenes de productos/Trust Gaming GXT 415 Zirox.jpg';
import '../img/imagenes de productos/XBOX SERIE X.jpg';
function Productos (){
    return(
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Productos - Nexus Gaming Store</title>
  <link rel="stylesheet" href="../css/productos.css" />
  <link rel="stylesheet" href="../css/carrito.css" />
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
    <div className="search-container" />
    <div className="search-bar">
      <input
        type="text"
        id="search-bar"
        placeholder="Buscar..."
        aria-label="Buscar"
      />
      <button onClick="buscarProducto()" aria-label="Buscar">
        <i className="fas fa-search" />
      </button>
    </div>
    <div className="right-icons">
      <button
        className="login-button"
        onClick="window.location.href='login.html'"
        aria-label="Iniciar sesión"
      >
        INICIAR SESIÓN
      </button>
      <div className="shopping-cart-icon" aria-label="Carrito de compras">
        <i className="fas fa-shopping-cart" />
      </div>
    </div>
  </nav>
  <main>
    <div className="content-wrapper">
      <aside className="categories">
        <h2>Categorías</h2>
        <ul id="box-search">
          <li>
            <button className="category-button" data-category="todos">
              <i className="fas fa-search" />
              Todos
            </button>
          </li>
          <li>
            <button className="category-button" data-category="computadores">
              <i className="fas fa-search" />
              Computadores
            </button>
          </li>
          <li>
            <button className="category-button" data-category="sillas">
              <i className="fas fa-search" />
              Sillas
            </button>
          </li>
          <li>
            <button className="category-button" data-category="diademas">
              <i className="fas fa-search" />
              Diademas
            </button>
          </li>
          <li>
            <button className="category-button" data-category="mouse">
              <i className="fas fa-search" />
              Mouse
            </button>
          </li>
          <li>
            <button className="category-button" data-category="consolas">
              <i className="fas fa-search" />
              Consolas
            </button>
          </li>
          <li>
            <button className="category-button" data-category="tarjetas">
              <i className="fas fa-search" />
              Tarjetas de Regalo
            </button>
          </li>
          <li>
            <button className="category-button" data-category="juegos">
              <i className="fas fa-search" />
              Juegos
            </button>
          </li>
        </ul>
      </aside>
      <section className="product-section">
        <h1>Lista de Productos</h1>
        <div className="product-list" id="product-list">
          {/* Computadores */}
          <div className="product-card computadores">
            <img
              src={Msi}
              alt="MSI MAG Infinite S3"
            />
            <h2>MSI MAG Infinite S3</h2>
            <p>
              Procesador: Intel® Core™ i5-14400F, RAM: 32GB, Almacenamiento: 1TB
              SSD, Tarjeta gráfica: GeForce RTX™ 4060
            </p>
            <p>Precio: $1,149.00</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card computadores">
            <img
              src="../img/imagenes de productos/acernitron50650.jpg"
              alt="Acer Nitro N50-650"
            />
            <h2>Acer Nitro N50-650</h2>
            <p>
              Procesador: Intel® Core™ i5-13400F, RAM: 16GB, Almacenamiento: 1TB
              SSD, Tarjeta gráfica: GeForce RTX™ 3050
            </p>
            <p>Precio: $849.00</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card computadores">
            <img
              src="../img/imagenes de productos/NITROPC Pack Bronze.jpg"
              alt="NITROPC Pack Bronze"
            />
            <h2>NITROPC Pack Bronze</h2>
            <p>
              Procesador: AMD Ryzen 5 4650G, RAM: 16GB, Almacenamiento: 1TB SSD,
              Tarjeta gráfica: Radeon™ Onboard Graphics
            </p>
            <p>Precio: $609.00</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          {/* Sillas */}
          <div className="product-card sillas">
            <img
              src="../img/imagenes de productos/Drift DR275 PRO.png"
              alt="Drift DR275 PRO"
            />
            <h2>Drift DR275 PRO</h2>
            <p>Reposabrazos: 4D, Peso: 19 kg, Función de bloqueo: Sí</p>
            <p>Precio: $229.00</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card sillas">
            <img
              src="../img/imagenes de productos/Corsair T3 Rush.PNG"
              alt="Corsair T3 Rush"
            />
            <h2>Corsair T3 Rush</h2>
            <p>
              Reposacabezas: 4D, Carga máxima: 120 kg, Almohadilla incluida: Sí
            </p>
            <p>Precio: $329.00</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card sillas">
            <img
              src="../img/imagenes de productos/Razer Enki X.jpg"
              alt="Razer Enki X"
            />
            <h2>Razer Enki X</h2>
            <p>
              Reposabrazos: 2D, Carga máxima: 136 kg, Material: Cuero sintético
            </p>
            <p>Precio: $299.00</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          {/* Diademas */}
          <div className="product-card diademas">
            <img
              src="../img/imagenes de productos/Tatybo Cascos Gaming.jpg"
              alt="Tatybo Cascos Gaming"
            />
            <h2>Tatybo Cascos Gaming</h2>
            <p>
              Micrófono: Reducción de ruido, Almohadillas: De proteína,
              Compatibilidad: PS4, PS5, Xbox, PC
            </p>
            <p>Precio: $15.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card diademas">
            <img
              src="../img/imagenes de productos/Cascos Gaming con Micrófono Rotatorio.jpg"
              alt="Cascos Gaming con Micrófono Rotatorio"
            />
            <h2>Cascos Gaming con Micrófono Rotatorio</h2>
            <p>
              Luz: RGB, Orejeras: Ligeras y cómodas, Compatibilidad: PS4, PS5,
              Xbox, PC
            </p>
            <p>Precio: $22.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card diademas">
            <img
              src="../img/imagenes de productos/Trust Gaming GXT 415 Zirox.jpg"
              alt="Trust Gaming GXT 415 Zirox"
            />
            <h2>Trust Gaming GXT 415 Zirox</h2>
            <p>Drivers: 50 mm, Micrófono: Plegable, Conexión: 3.5 mm</p>
            <p>Precio: $19.98</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          {/* Mouse */}
          <div className="product-card mouse">
            <img
              src="../img/imagenes de productos/Logitech G203 LIGHTSYNC.Png"
              alt="Logitech G203 LIGHTSYNC"
            />
            <h2>Logitech G203 LIGHTSYNC</h2>
            <p>
              Iluminación: RGB personalizable, Botones: 6 programables, DPI:
              Hasta 8,000
            </p>
            <p>Precio: $29.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card mouse">
            <img
              src="../img/imagenes de productos/Razer Deathadder V3.jpg"
              alt="Razer Deathadder V3"
            />
            <h2>Razer Deathadder V3</h2>
            <p>
              Sensores: Razer de tercera generación, Diseño: Ergonómico, DPI:
              Alta precisión
            </p>
            <p>Precio: $69.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card mouse">
            <img
              src="../img/imagenes de productos/Corsair Ironclaw RGB.jpg"
              alt="Corsair Ironclaw RGB"
            />
            <h2>Corsair Ironclaw RGB</h2>
            <p>
              Iluminación: RGB, Diseño: Para manos grandes, DPI: Alta precisión
            </p>
            <p>Precio: $59.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          {/* Consolas */}
          <div className="product-card consolas">
            <img
              src="../img/imagenes de productos/PS 5.jpg"
              alt="PlayStation 5 Pro"
            />
            <h2>PlayStation 5 Pro</h2>
            <p>Almacenamiento: 2TB, Resolución: 4K y trazado de rayos</p>
            <p>Precio: $799.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card consolas">
            <img
              src="../img/imagenes de productos/Nintendo swift.jpg"
              alt="Nintendo Switch OLED"
            />
            <h2>Nintendo Switch OLED</h2>
            <p>
              Pantalla: 7 pulgadas, Almacenamiento: 64GB, Modo: Portátil y Dock
            </p>
            <p>Precio: $349.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card consolas">
            <img
              src="../img/imagenes de productos/XBOX SERIE X.jpg"
              alt="Xbox Series X"
            />
            <h2>Xbox Series X</h2>
            <p>Almacenamiento: 1TB, Resolución: 4K, Soporte: Xbox Game Pass</p>
            <p>Precio: $499.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          {/* Tarjetas de Regalo */}
          <div className="product-card tarjetas">
            <img
              src="../img/imagenes de productos/TR Playstation 50.jpg"
              alt="Tarjeta de Regalo $50"
            />
            <h2>Tarjeta de Regalo $50</h2>
            <p>Usada en cualquier compra en Nexus Gaming Store</p>
            <p>Precio: $50.00</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card tarjetas">
            <img
              src="../img/imagenes de productos/TR XBOX 100.jpg"
              alt="Tarjeta de Regalo $100"
            />
            <h2>Tarjeta de Regalo $100</h2>
            <p>Usada en cualquier compra en Nexus Gaming Store</p>
            <p>Precio: $100.00</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card tarjetas">
            <img
              src="../img/imagenes de productos/TR Steam 200.jpg"
              alt="Tarjeta de Regalo $200"
            />
            <h2>Tarjeta de Regalo $200</h2>
            <p>Usada en cualquier compra en Nexus Gaming Store</p>
            <p>Precio: $200.00</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          {/* Juegos */}
          <div className="product-card juegos">
            <img
              src="../img/imagenes de productos/the legends of zelda breath of the wild.jpg"
              alt="The Legend of Zelda: Tears of the Kingdom"
            />
            <h2>The Legend of Zelda: Tears of the Kingdom</h2>
            <p>
              Plataforma: Nintendo Switch, Aventura y acción, Calificación:
              10/10
            </p>
            <p>Precio: $59.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card juegos">
            <img
              src="../img/imagenes de productos/GOW.jpg"
              alt="God of War Ragnarök"
            />
            <h2>God of War Ragnarök</h2>
            <p>
              Plataforma: PlayStation 5, Aventura y acción, Calificación: 9.5/10
            </p>
            <p>Precio: $69.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
          <div className="product-card juegos">
            <img
              src="../img/imagenes de productos/haloinfinite.jpg"
              alt="Halo Infinite"
            />
            <h2>Halo Infinite</h2>
            <p>
              Plataforma: Xbox, Shooter en primera persona, Calificación: 8.5/10
            </p>
            <p>Precio: $59.99</p>
            <button className="boton-item">Añadir al carrito</button>
          </div>
        </div>
      </section>
    </div>
  </main>
  {/* Carrito de Compras */}
  <div className="carrito" id="carrito">
    <div className="header-carrito">
      <h2>Tu Carrito</h2>
    </div>
    <div className="carrito-items"></div>
    <div className="carrito-total">
      <div className="fila">
        <strong>Tu Total</strong>
        <span className="carrito-precio-total">$120.000,00</span>
      </div>
      <button className="btn-pagar">
        Pagar <i className="fa-solid fa-bag-shopping" />{" "}
      </button>
    </div>
  </div>
  <footer>
    <p>© 2024 Nexus Gaming Store. Todos los derechos reservados.</p>
  </footer>
</>

    );
}

export default Productos;