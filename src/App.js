import './App.css';
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { loadingAnimation } from './loading/loadingAnimation';

function App() {
  const loader = useRef(null);

  useEffect(() => {
    if (loader.current) {
      loadingAnimation(loader.current);
    }
    setTimeout(() => {
      loader.current.style.display = 'none';
    }, 2950);
  }, []);
  
  return (
    <div className='app-container'>
      <div className='loader' ref={loader}>
        <shape></shape>
        <shape></shape>
        <shape></shape>
      </div>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
