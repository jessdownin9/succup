import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBarLayout } from './pages/NavBarLayout';
import { Loading } from './pages/Loading';
import { Home } from './pages/Home';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Loading />} />
          <Route exact path='/home' element={<NavBarLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
