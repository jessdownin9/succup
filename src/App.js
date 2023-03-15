import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBarLayout } from './pages/NavBarLayout';
import { Loading } from './pages/Loading';
import { Home } from './pages/Home/Home';
import { Shop } from './pages/Shop/Shop';
import { Contact } from './pages/Contact/Contact';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Purchase } from './pages/Purchase/Purchase';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Routes>
          <Route path='/' element={<Loading />} />
          <Route path='/' element={<NavBarLayout />} >
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/purchase' element={<Purchase />} />
          </Route>
          </Routes>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
