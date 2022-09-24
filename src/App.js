import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartContext from './components/CartContext';
function App() {
  return (
    <CartContext>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
    </CartContext>
  );
}

export default App;
