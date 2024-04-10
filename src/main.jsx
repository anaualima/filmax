import React from 'react';    
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Moovie from './pages/Moovie.jsx';
import Seacrh from './pages/Seacrh.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home/>}/>
        <Route path="moovie/:id" element={<Moovie/>}/>
        <Route path="seacrh/" element={<Seacrh/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
