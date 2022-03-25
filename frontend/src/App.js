import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
