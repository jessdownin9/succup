import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBarLayout } from './pages/NavBarLayout';
import { Loading } from './pages/Loading';
import { Home } from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loading />} />
          <Route path='/' element={<NavBarLayout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
