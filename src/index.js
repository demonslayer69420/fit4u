import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Comp/Layout'; 
import Home from './Comp/home';
import Services from './Comp/services';
import Login from './Comp/login';
import Signup from './Comp/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Layout/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/services' element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
);

