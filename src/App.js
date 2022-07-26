import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page from './components/Page';
import Cart from './components/Cart';

function App() {

  return (

      <div className='Body'>
        <BrowserRouter>
          <NavBar/>
          <hr/>
          <Routes>
            <Route index element={<ItemListContainer/>}/>
            <Route path='/category/:name' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/page' element={<Page/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          
          
          {/* <ItemCount/> */}
          
        </BrowserRouter>
      </div>

  );
}

export default App;
