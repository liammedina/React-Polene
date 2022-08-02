import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page from './components/Page';
import Cart from './components/Cart';
import {useState} from "react";
import CartContext from './components/contexts/CartContext';


function App() {
  return (
      <div className='Body'>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <hr/>
          <Routes>
            <Route index element={<ItemListContainer/>}/>
            <Route path='/category/:name' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/page' element={<Page/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
        </CartContext> 
      </div>

  );
}

export default App;