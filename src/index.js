import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLayout from './common/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import Home from './pages/Home';
import BookTicket from './pages/BookTicket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppLayout>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/bookTicket" element={<BookTicket/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </AppLayout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
