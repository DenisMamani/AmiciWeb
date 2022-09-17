import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <div className="ordenarProducts">
     {/* <ItemListContainer/>  */}
    </div>
    <ItemDetailContainer/> 
    </>
  );
}

export default App;
