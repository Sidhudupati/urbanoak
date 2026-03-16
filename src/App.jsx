import React, { useState } from 'react';

import Cursor from './components/Cursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Categories from './components/Categories.jsx';
import Products from './components/Products.jsx';
import WhyUs from './components/WhyUs.jsx';
import Footer from './components/Footer.jsx';
import { EnquiryModal, ThankYouModal } from './components/Modals.jsx';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const openEnquiry = () => setShowEnquiry(true);
  const closeEnquiry = () => setShowEnquiry(false);
  const handleSuccess = () => setShowThankYou(true);

  return (
    <>
      <Cursor />
      <Navbar onEnquire={openEnquiry} />
      <main>
        <Hero onEnquire={openEnquiry} />
        <Categories active={activeCategory} onSelect={setActiveCategory} />
        <Products activeCategory={activeCategory} onEnquire={openEnquiry} />
        <WhyUs />
      </main>
      <Footer onEnquire={openEnquiry} />
      {showEnquiry && <EnquiryModal onClose={closeEnquiry} onSuccess={handleSuccess} />}
      {showThankYou && <ThankYouModal onClose={() => setShowThankYou(false)} />}
    </>
  );
}