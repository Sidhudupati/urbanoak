import React, { useState, useEffect } from 'react';

export default function Navbar({ onEnquire }) {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--nav-h)',
      zIndex: 1000,
      transition: 'all 0.4s var(--ease-smooth)',
      background: scrolled
        ? 'rgba(5,5,7,0.97)'
        : 'linear-gradient(to bottom, rgba(5,5,7,0.95), transparent)',
      borderBottom: scrolled ? '1px solid rgba(201,147,58,0.2)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
    }}>
      {/* Top micro-bar */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(to right, transparent, var(--gold), var(--gold-bright), var(--gold), transparent)',
        animation: 'pulse-glow 3s ease-in-out infinite',
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
      }}>

        {/* Left: Live clock */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--gold-dim)',
          letterSpacing: '0.15em',
          minWidth: '120px',
        }}>
          <span style={{ color: 'var(--gold)', marginRight: '4px' }}>◈</span>
          {time || '00:00:00'}
        </div>

        {/* Center: Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Geometric logo mark */}
            <div style={{
              width: '42px',
              height: '42px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Outer rotating border */}
              <div style={{
                position: 'absolute',
                inset: 0,
                border: '1px solid var(--gold-dim)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }} />
              {/* Inner hex fill */}
              <div style={{
                width: '30px',
                height: '30px',
                background: 'linear-gradient(135deg, var(--gold), #8B5E1A)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: '#000', fontWeight: '800', fontSize: '0.9rem', fontFamily: 'var(--font-serif)' }}>U</span>
              </div>
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: '700',
                letterSpacing: '0.35em',
                color: 'var(--cream)',
                lineHeight: 1,
              }}>
                URBAN<span style={{ color: 'var(--gold)' }}>OAK</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.5rem',
                color: 'var(--gold)',
                letterSpacing: '0.45em',
                marginTop: '2px',
              }}>
                ─── FINE FURNITURE ───
              </div>
            </div>
          </div>
        </div>

        {/* Right: Enquire CTA */}
        <div style={{ minWidth: '120px', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onEnquire}
            className="btn-primary corner-cut-sm"
            style={{
              padding: '0.6rem 1.6rem',
              background: 'linear-gradient(135deg, var(--gold), #A87830)',
              color: '#000',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              letterSpacing: '0.18em',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,147,58,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            ENQUIRE NOW
          </button>
        </div>
      </div>

      {/* Bottom scan line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: scrolled
          ? 'linear-gradient(to right, transparent, var(--gold-dim), transparent)'
          : 'transparent',
      }} />
    </nav>
  );
}