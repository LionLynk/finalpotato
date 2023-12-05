import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/Navbar';
import Navbar from './componentes/Navbar';
import { BrowserRouter , Routes , Route, Link } from 'react-router-dom';
import Inicio from './secciones/Inicio';
import Proyectos from './secciones/Proyectos';
import Contacto from './secciones/Contacto';
import Habilidades from './secciones/Habilidades';
import Admin from './secciones/Admin';


function App() {
  return (
    <div className="App">
       <section className='titulo-inicio'>
        <center>
      <h1 className='texto-neon'>Leonardo Polanco G.</h1>
      </center>
      </section>
      <BrowserRouter>
      <div className='menu'>
       <center><Navbar /></center>
      </div>
      <div>
        <Routes>
          <Route path='/Inicio' element={<Inicio />}/>
          <Route path='/Proyectos' element={<Proyectos />}/>
          <Route path='/Contacto' element={<Contacto />}/>
          <Route path='/Habilidades' element={<Habilidades />}/>
          <Route path='/Admin' element={<Admin />}/>

        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
