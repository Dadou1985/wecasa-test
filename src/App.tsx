import React from 'react';
import { ProductContextProvider } from './context/productContext';
import Prestation from './components/prestation';
import Basket from './components/basket';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <ProductContextProvider>
        <Prestation />
        <Basket />
      </ProductContextProvider>
    </div>
  );
}

export default App;
