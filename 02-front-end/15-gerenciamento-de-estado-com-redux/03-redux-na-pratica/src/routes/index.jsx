import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Clients from '../pages/Clients';
import SignIn from '../pages/Register';
import NotFound from '../pages/NotFound';

const Path = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="clients" element={<Clients />} />
      <Route path="register" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Path;
