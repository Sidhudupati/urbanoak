import React from 'react';
import { categories } from '../data/index.js';

export default function Categories({ active, onSelect }) {
  return (
    <section style={{
      padding: '5rem 2rem',
      background: 'var(--surface)',
      borderTop: '1px solid rgba(201,147,58,0.12)',
      borderBottom: '1px solid rgba(201,147,58,0.12)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(201,147,58,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,147,58,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '4rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--gold)',
                letterSpacing: '0.3em',
              }}>BROWSE BY CATEGORY</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '300',
              fontStyle: 'italic',
              color: 'var(--cream)',
              lineHeight: 1.1,
            }}>
              Explore Our <span style={{ color: 'var(--gold)', fontStyle: 'normal', fontWeight: 700 }}>Collections</span>
            </h2>
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--text-faint)',
            letterSpacing: '0.15em',
          }}>
            {categories.length - 1} CATEGORIES AVAILABLE
          </div>
        </div>

        {/* Category row — single scrollable row */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(201,147,58,0.3) transparent',
        }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                style={{
                  padding: '1.2rem 1rem',
                  minWidth: '110px',
                  flexShrink: 0,
                  background: isActive
                    ? 'linear-gradient(135deg, var(--gold) 0%, #8B5E1A 100%)'
                    : 'rgba(16,16,24,0.8)',
                  border: isActive
                    ? '1px solid var(--gold)'
                    : '1px solid rgba(201,147,58,0.15)',
                  cursor: 'none',
                  transition: 'all 0.35s var(--ease-smooth)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  clipPath: isActive
                    ? 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                    : 'none',
                  boxShadow: isActive ? '0 8px 30px rgba(201,147,58,0.25)' : 'none',
                  transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(201,147,58,0.4)';
                    e.currentTarget.style.background = 'rgba(201,147,58,0.06)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(201,147,58,0.15)';
                    e.currentTarget.style.background = 'rgba(16,16,24,0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {/* Icon wrapper */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: isActive ? '1px solid rgba(0,0,0,0.3)' : '1px solid rgba(201,147,58,0.2)',
                  background: isActive ? 'rgba(0,0,0,0.2)' : 'rgba(201,147,58,0.05)',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}>
                  <Icon size={18} color={isActive ? '#000' : 'var(--gold)'} strokeWidth={1.5} />
                </div>

                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  color: isActive ? '#000' : 'var(--cream)',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}>
                  {cat.name}
                </span>

                {isActive && (
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.5rem',
                    color: 'rgba(0,0,0,0.6)',
                    letterSpacing: '0.2em',
                  }}>
                    ▶ ACTIVE
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}