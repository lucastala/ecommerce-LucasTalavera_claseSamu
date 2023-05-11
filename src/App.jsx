import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';

function App() {
  return (
    <div>
       <NavBar></NavBar>
       <ItemListContainer greeting="Hola Mundo" />
    </div>
  );
}

export default App;
