import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBarLayout } from './pages/NavBarLayout';
import { Loading } from './pages/Loading';
import { Home } from './pages/Home/Home';
import { Shop } from './pages/Shop/Shop';
import { Contact } from './pages/Contact/Contact';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <div className='app'>
      <ShoppingCartProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Loading />} />
              <Route path='/' element={<NavBarLayout />} >
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/contact' element={<Contact />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
