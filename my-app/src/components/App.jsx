import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DrakModeProvider } from '../context/DarkModeContext';

import Navbar from "./Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';


const App = () => {
  return (
    <>
      <>
        <BrowserRouter>
          <DrakModeProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/product/:id' element={<ItemDetailContainer />} />
              <Route path='/category/:category' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </DrakModeProvider>
        </BrowserRouter>
      </>
    </>
  );
};

export default App;


