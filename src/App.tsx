import React from 'react';
import { ProductContextProvider } from './context/productContext';
import Header from './components/header';
import Prestation from './components/prestation';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <ProductContextProvider>
        <Prestation />
      </ProductContextProvider>
    </div>
  );
}

export default App;
