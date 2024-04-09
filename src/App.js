// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Projects from './pages/Projects';
import Featured from'./pages/Featured';

import './styles.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<Featured/>} />
          <Route path="/featured" element={<Featured />} />
          <Route exact path='/projects' element={<Projects/>} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
