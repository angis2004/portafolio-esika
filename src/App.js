
import React from 'react';
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contacto from './components/Contacto';

const App = () => {
  return (
    <>

      <Home />
      {/* <SobreMi /> */}
      <Navbar />
      <Footer />
      {/* <Testimonials /> */}
      <Contacto />
 
    </>
  );
};

export default App;