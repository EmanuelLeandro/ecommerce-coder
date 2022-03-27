import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'./imagenes/logo nike.png'} className="App-logo" alt="logo" />
        <NavBar />
        <a class="cta" href="#"><button>Contacto</button></a>

      </header>
    </div>
  );
}

export default App;
