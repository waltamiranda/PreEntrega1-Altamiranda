
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola Amigue de Coder!"/>
      
    </div>
  );
}

export default App;
