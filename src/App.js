// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Modelling from './Modelling';
import Paintings from './Paintings';
import Events from './Events';
import Spacer from './Spacer';

import './styles.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route path="/3d" element={<Modelling />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
