import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (

      <div className='Body'>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer titulo="Hola!"/>}/>
            <Route path='/category/:id' element={<ItemListContainer titulo="Hola!"/>}/>
            <Route path='/detail' element={<ItemDetailContainer/>}/>
           
          </Routes>
          
          
          {/* <ItemCount/> */}
          <hr/>
        </BrowserRouter>
      </div>

  );
}

export default App;
