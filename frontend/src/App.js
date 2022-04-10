import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponenteValores from './components/ComponenteValores';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/test" element={<ComponenteValores />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
