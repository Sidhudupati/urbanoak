import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Search, Star, ArrowRight, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Send, Sofa, Armchair, Laptop, Bed, BedDouble, Blinds, Sparkles, Table, UtensilsCrossed } from 'lucide-react';

import emailjs from '@emailjs/browser';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [formData, setFormData] = useState({ name: '', furnitureType: '', budget: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection('next');
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);


  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const categories = [
    { id: 'all', name: 'All Collections', icon: Sparkles },
    { id: 'sofas', name: 'Luxury Sofas', icon: Sofa },
    { id: 'chairs', name: 'Designer Chairs', icon: Armchair },
    { id: 'workstations', name: 'Work Stations', icon: Laptop },
    { id: 'mattresses', name: 'Mattresses', icon: Bed },
    { id: 'cots', name: 'Classic Cots', icon: BedDouble },
    { id: 'curtains', name: 'Curtains', icon: Blinds },
    { id: 'decors', name: 'Home Decors', icon: Sparkles },
    { id: 'centertables', name: 'Center Tables', icon: Table },
    { id: 'diningtables', name: 'Dining Tables', icon: UtensilsCrossed }
  ];
  
  const products = [
    { id: 1, name: 'Imperial Chesterfield Sofa', category: 'sofas', rating: 5.0, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800', desc: 'Handcrafted Italian leather with oak frame', tag: 'Bestseller' },
    { id: 2, name: 'Windsor Executive Chair', category: 'chairs', rating: 4.9, image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800', desc: 'Ergonomic with premium upholstery', tag: 'Exclusive' },
    { id: 3, name: 'Manhattan Work Station', category: 'workstations', rating: 4.8, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800', desc: 'Modern design with integrated storage', tag: 'New' },
    { id: 4, name: 'Royal Memory Foam Mattress', category: 'mattresses', rating: 5.0, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800', desc: 'Temperature controlled comfort', tag: 'Premium' },
    { id: 5, name: 'Heritage Oak Cot', category: 'cots', rating: 4.9, image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800', desc: 'Solid oak with hand-carved details', tag: 'Handcrafted' },
    { id: 6, name: 'Venetian Silk Curtains', category: 'curtains', rating: 4.7, image: 'https://images.unsplash.com/photo-1574438634447-5ce8a05d1fd0?w=800', desc: 'Pure silk with golden accents', tag: 'Luxury' },
    { id: 7, name: 'Art Deco Wall Collection', category: 'decors', rating: 4.8, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800', desc: 'Gold leaf and bronze finishes', tag: 'Exclusive' },
    { id: 8, name: 'Carrara Marble Center Table', category: 'centertables', rating: 5.0, image: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?w=800', desc: 'Italian marble with brass inlay', tag: 'Signature' },
    { id: 9, name: 'Victorian Dining Table', category: 'diningtables', rating: 4.9, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800', desc: 'Seats 12, solid walnut wood', tag: 'Premium' },
  ];

  const heroSlides = [
    { 
      title: 'Timeless Elegance', 
      subtitle: 'Handcrafted Luxury Furniture for Your Dream Home', 
      image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1600&q=80',
      highlight: 'NEW COLLECTION 2026'
    },
    { 
      title: 'Classic Sophistication', 
      subtitle: 'Where Premium Craftsmanship Meets Modern Design', 
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80',
      highlight: 'BEST SELLERS'
    },
    { 
      title: 'Heritage & Style', 
      subtitle: 'Curated Collections That Define Luxury Living', 
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80',
      highlight: 'SINCE 2015'
    }
  ];

  const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  const handleSlideChange = (index) => {
    setSlideDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  };

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    name: formData.name,
    furnitureType: formData.furnitureType,
    budget: formData.budget,
    to_email: "urbanoak.info@gmail.com",
  };

  

  // ✅ Immediately show Thank You
  setShowEnquiry(false);
  setShowThankYou(true);

  // ✅ Clear form
  setFormData({ name: "", furnitureType: "", budget: "" });

  // ✅ Send email in background (non-blocking)
  emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAIL_PUBLIC_KEY
  )
  .then(() => {
    console.log("Email sent successfully");
  })
  .catch((error) => {
    console.error("Email failed:", error);
  });
  };

  return (
    <div style={{ background: '#000', color: '#FEF3C7', minHeight: '100vh' }}>
      
      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(0,0,0,0.98)', borderBottom: '1px solid rgba(217,119,6,0.2)', zIndex: 50, padding: isMobile ? '1rem' : '1rem 2rem', backdropFilter: 'blur(10px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '50px', height: '50px', background: 'linear-gradient(to bottom right, #D97706, #92400E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>U</div>
            <div>
              <div style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>URBANOAK</div>
              <div style={{ fontSize: '0.6rem', color: '#B45309', letterSpacing: '0.2em' }}>FINE FURNITURE</div>
            </div>
          </div>
          <button onClick={() => setShowEnquiry(true)} style={{ padding: '0.75rem 2rem', background: 'linear-gradient(to right, #D97706, #D97706)', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '0.9rem', letterSpacing: '0.1em', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(217,119,6,0.3)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>ENQUIRE</button>
        </div>
      </nav>

      {/* Hero with Advanced Animation */}
      <div style={{ position: 'relative', height: '100vh', marginTop: '80px', overflow: 'hidden' }}>
        {heroSlides.map((slide, idx) => {
          const isActive = currentSlide === idx;
          const isPrev = (currentSlide - 1 + heroSlides.length) % heroSlides.length === idx;
          const isNext = (currentSlide + 1) % heroSlides.length === idx;
          
          return (
            <div 
              key={idx} 
              style={{ 
                position: 'absolute', 
                inset: 0,
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1)' : (slideDirection === 'next' && isNext ? 'scale(1.2)' : 'scale(0.9)'),
                transition: 'all 1.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
                zIndex: isActive ? 2 : 1
              }}
            >
              {/* Animated Gradient Overlay */}
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: `linear-gradient(${isActive ? '120deg' : '90deg'}, rgba(0,0,0,0.95) 0%, rgba(217,119,6,0.3) 40%, transparent 100%)`,
                zIndex: 10,
                transition: 'all 2s ease'
              }}></div>
              
              {/* Image with Ken Burns Effect */}
              <img 
                src={slide.image} 
                alt={slide.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 8s ease-out',
                  filter: isActive ? 'brightness(1)' : 'brightness(0.7)'
                }} 
              />
              
              {/* Floating Particles Effect */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 11, pointerEvents: 'none' }}>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: '4px',
                      height: '4px',
                      background: 'rgba(217,119,6,0.6)',
                      borderRadius: '50%',
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 10}%`,
                      animation: isActive ? `float ${3 + i}s ease-in-out infinite` : 'none',
                      opacity: isActive ? 0.6 : 0
                    }}
                  />
                ))}
              </div>
              
              {/* Content */}
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: 20, 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0 4rem' 
              }}>
                <div style={{ 
                  maxWidth: '900px',
                  transform: isActive ? 'translateX(0)' : 'translateX(-100px)',
                  opacity: isActive ? 1 : 0,
                  transition: 'all 1s ease-out 0.3s'
                }}>
                  {/* Highlight Badge */}
                  <div style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    background: 'rgba(217,119,6,0.9)',
                    color: '#000',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.2em',
                    marginBottom: '2rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(217,119,6,1)',
                    transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isActive ? 1 : 0,
                    transition: 'all 0.8s ease-out 0.5s'
                  }}>
                    {slide.highlight}
                  </div>
                  
                  <div style={{ 
                    width: '100px', 
                    height: '2px', 
                    background: 'linear-gradient(to right, #D97706, transparent)', 
                    marginBottom: '2rem',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 1s ease-out 0.7s'
                  }}></div>
                  
                  <h1 style={{ 
                    fontSize: isMobile ? '2.2rem' : '5rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    textShadow: '2px 2px 20px rgba(0,0,0,0.5)',
                    transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isActive ? 1 : 0,
                    transition: 'all 1s ease-out 0.9s'
                  }}>
                    {slide.title}
                  </h1>
                  
                  <p style={{ 
                    fontSize: isMobile ? '1rem' : '1.5rem', 
                    color: 'rgba(254,243,199,0.9)', 
                    marginBottom: '3rem',
                    lineHeight: '1.6',
                    maxWidth: '700px',
                    textShadow: '1px 1px 10px rgba(0,0,0,0.5)',
                    transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isActive ? 1 : 0,
                    transition: 'all 1s ease-out 1.1s'
                  }}>
                    {slide.subtitle}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isActive ? 1 : 0,
                    transition: 'all 1s ease-out 1.3s'
                  }}>
                    <button 
                      onClick={() => setShowEnquiry(true)} 
                      style={{ 
                        padding: '1.25rem 3rem', 
                        background: 'linear-gradient(135deg, #D97706, #B45309)', 
                        color: '#000', 
                        fontWeight: 'bold', 
                        border: 'none', 
                        cursor: 'pointer', 
                        fontSize: '1rem',
                        letterSpacing: '0.1em',
                        boxShadow: '0 10px 30px rgba(217,119,6,0.4)',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(217,119,6,0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(217,119,6,0.4)';
                      }}
                    >
                      EXPLORE COLLECTION
                      <ArrowRight size={20} style={{ display: 'inline', marginLeft: '10px' }} />
                    </button>
                    
                   
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Advanced Navigation Dots */}
        <div style={{ 
          position: 'absolute', 
          bottom: '60px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          display: 'flex', 
          gap: '1rem', 
          zIndex: 30,
          background: 'rgba(0,0,0,0.5)',
          padding: '1rem 2rem',
          borderRadius: '50px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(217,119,6,0.3)'
        }}>
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSlideChange(idx)}
              style={{ 
                height: '12px',
                width: currentSlide === idx ? '60px' : '12px',
                background: currentSlide === idx ? 'linear-gradient(to right, #D97706, #B45309)' : 'rgba(217,119,6,0.3)',
                border: currentSlide === idx ? '2px solid #D97706' : '2px solid rgba(217,119,6,0.5)',
                cursor: 'pointer',
                transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
                borderRadius: '10px',
                boxShadow: currentSlide === idx ? '0 0 20px rgba(217,119,6,0.6)' : 'none'
              }}
            />
          ))}
        </div>

        {/* Slide Counter */}
        
      </div>

      {/* Categories Grid */}
      <div style={{ padding: isMobile ? '2rem 1rem' : '4rem 2rem', background: 'linear-gradient(to bottom, #000, #0a0a0a)', borderTop: '1px solid rgba(217,119,6,0.2)', borderBottom: '1px solid rgba(217,119,6,0.2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '60px', height: '1px', background: '#D97706' }}></div>
              <span style={{ color: '#D97706', fontSize: '0.875rem', letterSpacing: '0.2em', fontWeight: 'bold' }}>BROWSE BY CATEGORY</span>
              <div style={{ width: '60px', height: '1px', background: '#D97706' }}></div>
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Explore Our Collections</h2>
            <p style={{ color: 'rgba(254,243,199,0.5)', fontSize: '1.1rem' }}>Discover the perfect piece for every room</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile? 'repeat(2, 1fr)': 
            'repeat(auto-fit, minmax(100px, 1fr))', 
            gap: '1.5rem' }}>
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '1.2rem 1rem',
                    background: activeCategory === cat.id ? 'linear-gradient(135deg, #D97706 0%, #B45309 100%)' : 'linear-gradient(135deg, rgba(217,119,6,0.1) 0%, rgba(0,0,0,0.5) 100%)',
                    border: activeCategory === cat.id ? '2px solid #D97706' : '2px solid rgba(217,119,6,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    transform: activeCategory === cat.id ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: activeCategory === cat.id ? '0 10px 30px rgba(217,119,6,0.3)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== cat.id) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = 'rgba(217,119,6,0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== cat.id) {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.borderColor = 'rgba(217,119,6,0.2)';
                    }
                  }}
                >
                  <div style={{
                    width: '30px',
                    height: '30px',
                    background: activeCategory === cat.id ? 'rgba(0,0,0,0.3)' : 'rgba(217,119,6,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: activeCategory === cat.id ? '2px solid rgba(0,0,0,0.5)' : '2px solid rgba(217,119,6,0.3)',
                    transition: 'all 0.3s'
                  }}>
                    <IconComponent size={20} color={activeCategory === cat.id ? '#000' : '#D97706'} strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      color: activeCategory === cat.id ? '#000' : '#FEF3C7',
                      letterSpacing: '0.05em',
                      marginBottom: '0.25rem'
                    }}>
                      {cat.name}
                    </div>
                    {activeCategory === cat.id && (
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'rgba(0,0,0,0.7)',
                        fontWeight: '600'
                      }}>
                        SELECTED
                      </div>
                    )}
                  </div>
                  {activeCategory === cat.id && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      width: '8px',
                      height: '8px',
                      background: '#000',
                      borderRadius: '50%'
                    }}></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products */}
      <div style={{ padding: isMobile ? '2rem 1rem' : '4rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Featured Collection</h2>
          <p style={{ color: 'rgba(254,243,199,0.5)', fontSize: '1.1rem' }}>Superior craftsmanship and timeless design</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ background: '#0a0a0a', border: '1px solid rgba(217,119,6,0.2)', overflow: 'hidden', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 1 }}></div>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button onClick={() => setFavorites(prev => prev.includes(product.id) ? prev.filter(f => f !== product.id) : [...prev, product.id])} style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.5rem', background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(217,119,6,0.3)', cursor: 'pointer', zIndex: 2 }}>
                  <Heart size={20} fill={favorites.includes(product.id) ? '#D97706' : 'none'} color={favorites.includes(product.id) ? '#D97706' : 'rgba(254,243,199,0.6)'} />
                </button>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.5rem 1rem', background: 'linear-gradient(to right, #D97706, #B45309)', color: '#000', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', zIndex: 2 }}>
                  {product.tag}
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#D97706', letterSpacing: '0.1em' }}>{product.category.toUpperCase()}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Star size={16} fill="#D97706" color="#D97706" />
                    <span style={{ fontSize: '0.875rem', color: 'rgba(254,243,199,0.6)' }}>{product.rating}</span>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{product.name}</h3>
                <p style={{ color: 'rgba(254,243,199,0.5)', fontSize: '0.875rem', marginBottom: '1rem' }}>{product.desc}</p>
                <button onClick={() => setShowEnquiry(true)} style={{ width: '100%', padding: '0.75rem', background: 'transparent', border: '2px solid rgba(217,119,6,0.5)', color: '#FEF3C7', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(to right, #D97706, #D97706)'; e.currentTarget.style.color = '#000'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FEF3C7'; }}>REQUEST DETAILS</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={{ padding: isMobile ? '2rem 1rem' : '4rem 2rem', background: '#0a0a0a', borderTop: '1px solid rgba(217,119,6,0.2)', borderBottom: '1px solid rgba(217,119,6,0.2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '60px', height: '1px', background: '#D97706' }}></div>
              <span style={{ color: '#D97706', fontSize: '0.875rem', letterSpacing: '0.2em', fontWeight: 'bold' }}>EXCELLENCE IN EVERY DETAIL</span>
              <div style={{ width: '60px', height: '1px', background: '#D97706' }}></div>
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Why Choose Urban Oak Furniture?</h2>
            <p style={{ color: 'rgba(254,243,199,0.5)', fontSize: '1.1rem' }}>Discover what makes us the preferred choice</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { icon: '🪵', title: 'Premium Materials', desc: 'High-quality solid wood, durable boards, and superior hardware for long-lasting performance' },
              { icon: '🛠️', title: 'Custom-Made Furniture', desc: 'Designed to fit your space perfectly — choose size, finish, fabric, and style' },
              { icon: '🎨', title: 'Timeless Designs', desc: 'Clean lines, elegant finishes, and designs that age beautifully with your home' },
              { icon: '🚚', title: 'Ready to Ship', desc: 'Select from ready furniture or place a custom order based on your needs' },
              { icon: '💬', title: 'Free Consultation', desc: 'Expert guidance to help you select the right furniture for your space and budget' },
              { icon: '🛡️', title: 'Warranty Assured', desc: 'Reliable craftsmanship backed by warranty and dedicated after-sales support' }
            ].map((f, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '2.5rem 2rem', border: '1px solid rgba(217,119,6,0.2)', background: 'rgba(0,0,0,0.5)', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(217,119,6,0.5)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(217,119,6,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#FEF3C7' }}>{f.title}</h3>
                <p style={{ color: 'rgba(254,243,199,0.6)', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '3rem 2rem', borderTop: '1px solid rgba(217,119,6,0.2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>URBANOAK</div>
            <p style={{ color: 'rgba(254,243,199,0.5)' }}>Crafting exceptional furniture</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Contact</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Phone size={16} color="#D97706" />
              <span style={{ color: 'rgba(254,243,199,0.5)' }}>+91 93987 20749</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} color="#D97706" />
              <span style={{ color: 'rgba(254,243,199,0.5)' }}>urbanoak.info@gmail.com</span>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(217,119,6,0.2)', color: 'rgba(254,243,199,0.4)' }}>
          © 2026 URBANOAK Furnitures. All Rights Reserved.
        </div>
      </footer>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: '#0a0a0a', border: '1px solid rgba(217,119,6,0.3)', padding: '2rem', maxWidth: '500px', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Enquiry Form</h3>
              <button onClick={() => setShowEnquiry(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                <X size={24} color="rgba(254,243,199,0.6)" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'rgba(254,243,199,0.7)' }}>NAME</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(217,119,6,0.3)', color: '#FEF3C7' }} placeholder="Your name" />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'rgba(254,243,199,0.7)' }}>FURNITURE TYPE</label>
                <select required value={formData.furnitureType} onChange={(e) => setFormData({...formData, furnitureType: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(217,119,6,0.3)', color: '#FEF3C7' }}>
                  <option value="">Select type</option>
                  <option value="Sofas">Luxury Sofas</option>
                  <option value="Chairs">Designer Chairs</option>
                  <option value="Work Stations">Work Stations</option>
                  <option value="Mattresses">Premium Mattresses</option>
                  <option value="Cots">Classic Cots</option>
                  <option value="Curtains">Elegant Curtains</option>
                  <option value="Decors">Home Decors</option>
                  <option value="Center Tables">Center Tables</option>
                  <option value="Dining Tables">Dining Tables</option>
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'rgba(254,243,199,0.7)' }}>BUDGET</label>
                <input type="text" required value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(217,119,6,0.3)', color: '#FEF3C7' }} placeholder="Your budget" />
              </div>
              <button type="submit" style={{ width: '100%', padding: '1rem', background: 'linear-gradient(to right, #D97706, #D97706)', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '0.875rem', letterSpacing: '0.1em' }}>SUBMIT ENQUIRY</button>
            </form>
          </div>
        </div>
      )}

      {showThankYou && (
  <div style={{
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
    <div style={{
      background: "#0a0a0a",
      border: "1px solid rgba(217,119,6,0.5)",
      padding: "3rem",
      textAlign: "center",
      maxWidth: "500px"
    }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Thank You!
      </h2>
      <p style={{ color: "rgba(254,243,199,0.7)", marginBottom: "2rem" }}>
        Our design consultant will contact you within 24 hours.
      </p>
      <button
        onClick={() => setShowThankYou(false)}
        style={{
          padding: "0.75rem 2rem",
          background: "#D97706",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        CLOSE
      </button>
    </div>
  </div>
)}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
