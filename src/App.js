import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Buttom from './components/Buttom/Buttom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={'./imagenes/logo nike.png'} className="App-logo" alt="logo" />  
        <NavBar />
        <ItemListContainer greeting= 'Hola Coder'/>
        <Buttom />
      </header>
    </div>
  );
}

export default App;
