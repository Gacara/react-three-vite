import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import FakeFetch from './views/FakeFetch/FakeFetch';

function App() {

  return (
    <div className="App">
      <nav>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/fetch">Fake call</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/fetch" Component={FakeFetch} />
      </Routes>
    </div>
  );
}

export default App;
