import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom';
import { Login } from './components/login/Login';
import { Layout } from './components/layout/Layout';
import { EventPage } from './pages/Event';
import { Home } from './pages/Home';
import { LoginForm } from './pages/login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Layout title='Viðburðasíðan'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<EventPage />} />
          <Route path="/login" element={<LoginForm/>} /> 
        </Routes>
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </BrowserRouter>
    </Layout>
    
  );
    

}

export default App;