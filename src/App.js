import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mt-4">
        <About />
        <Team />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
