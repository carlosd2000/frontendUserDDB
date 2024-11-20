import './index.css';
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';
//import Login from './components/login';
//import Productos from './components/productos';
//import Ayuda from './components/ayuda';
//import Conocenos from './components/conocenos';
import AppRoutes from './routes/Routes';

//import '../img/logo.jpg';
function App() {
  return (
    <Router>
      <AppRoutes/>  
      
    </Router>
  );
}

export default App;