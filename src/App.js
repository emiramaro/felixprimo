import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Team from './components/Team';
import Profile from './components/Profile';
import Work from './components/Work';
import Contact from './components/Contact';
import SupportedBy from './components/SupportedBy';
import './App.css';

function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Team />
      <Work />
      <SupportedBy />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;