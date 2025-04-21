
import React from 'react';
import Header from '../components/Header/Header';
import AboutSection from '../components/AboutSection/AboutSection';
import TerapiaSection from '../components/TerapiaSection/TerapiaSection';
import PublicoAlvoSection from '../components/PublicoAlvoSection/PublicoAlvoSection';
import BlogSection from '../components/BlogSection/BlogSection';
import FAQ from '../components/FAQ/FAQ';
import AgendamentoContato from '../components/AgendamentoContato/AgendamentoContato';

import Footer from '../components/Footer/Footer';
import './HomePage.css';
import HeroSection from '../components/HeroSection/HeroSection';

const HomePage = () => {
  return (
    <>
     <div className='celular'><Header /></div> 
      <main>
        <HeroSection/>
        <AboutSection />
        <TerapiaSection />
        <PublicoAlvoSection />
        <BlogSection />
        <FAQ />
        <AgendamentoContato />
       
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
