import React, { useState } from 'react';
import About from './components/about';
import AboutOrg from './components/about_org';
import Contact from './components/contactus';
import Explore from './components/explore';
import Navbar from './components/navbar';
import Footer from './components/footer';
import FAQ from './components/faq';

import './tailwind.css';

function App() {
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="flex-grow">
        <div className="relative">
          <About />
          <AboutOrg />
          <Explore />
        </div>
      </div>
     
      <div className="bg-white">
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
