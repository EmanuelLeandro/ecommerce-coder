import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
    const onAdd = () => {console.log("hice click en onAdd")};
    const stock= 10;
    const initial = 2 ;
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer onAdd={onAdd} stock={stock} initial={initial}/>
    </div>
  );
}

export default App;