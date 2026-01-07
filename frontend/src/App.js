import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignatureDishes from './components/SignatureDishes';
import CakesGallery from './components/CakesGallery';
import OurStory from './components/OurStory';
import Atmosphere from './components/Atmosphere';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SignatureDishes />
      <CakesGallery />
      <OurStory />
      <Atmosphere />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
