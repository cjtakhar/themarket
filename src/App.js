import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

export default function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            < Route path="/" element={ < Dashboard /> } />
            < Route path="/settings" element={ < Settings /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
