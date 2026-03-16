import React, { useState } from 'react';
import { features } from '../data/index.js';

export default function WhyUs() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <section style={{
      padding: '7rem 2rem',
      background: 'var(--surface)',
      borderTop: '1px solid rgba(201,147,58,0.1)',
      borderBottom: '1px solid rgba(201,147,58,0.1)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent: diagonal lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(201,147,58,0.02) 0px, rgba(201,147,58,0.02) 1px, transparent 1px, transparent 60px)',
        pointerEvents: 'none',
      }} />

      {/* Large decorative text */}
      <div style={{
        position: 'absolute',
        right: '-2rem',
        top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        fontFamily: 'var(--font-serif)',
        fontSize: '10rem',
        fontWeight: '700',
        color: 'rgba(201,147,58,0.03)',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        letterSpacing: '0.1em',
      }}>
        CRAFTSMANSHIP
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>

        {/* Section header */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--gold)',
              letterSpacing: '0.3em',
            }}>EXCELLENCE IN EVERY DETAIL</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '300',
              fontStyle: 'italic',
              color: 'var(--cream)',
              maxWidth: '600px',
              lineHeight: 1.15,
            }}>
              Why Choose <span style={{ color: 'var(--gold)', fontStyle: 'normal', fontWeight: '700', display: 'block' }}>Urban Oak Furniture?</span>
            </h2>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '3rem' }}>
              {[
                { value: '10K+', label: 'Happy Clients' },
                { value: '500+', label: 'Bespoke Pieces' },
                { value: '9+', label: 'Years Crafting' },
              ].map((s, i) => (
                <div key={i} style={{
                  textAlign: 'right',
                  borderRight: i < 2 ? '1px solid rgba(201,147,58,0.2)' : 'none',
                  paddingRight: i < 2 ? '3rem' : '0',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.2rem',
                    fontWeight: '700',
                    color: 'var(--gold)',
                    lineHeight: 1,
                  }}>{s.value}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.15em',
                    marginTop: '4px',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {features.map((f, i) => {
            const isActive = activeFeature === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setActiveFeature(i)}
                onMouseLeave={() => setActiveFeature(null)}
                style={{
                  padding: '2.5rem 2rem',
                  border: isActive ? '1px solid var(--gold)' : '1px solid rgba(201,147,58,0.15)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(201,147,58,0.08), rgba(5,5,7,0.9))'
                    : 'rgba(5,5,7,0.6)',
                  transition: 'all 0.35s var(--ease-smooth)',
                  transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isActive ? '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(201,147,58,0.1)' : 'none',
                  backdropFilter: 'blur(10px)',
                  clipPath: isActive
                    ? 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                    : 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                {/* Number */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.55rem',
                  color: isActive ? 'var(--gold)' : 'var(--text-faint)',
                  letterSpacing: '0.15em',
                  transition: 'color 0.3s',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div style={{
                  fontSize: '2.8rem',
                  marginBottom: '1.5rem',
                  filter: isActive ? 'drop-shadow(0 0 12px rgba(201,147,58,0.4))' : 'none',
                  transition: 'filter 0.3s',
                  lineHeight: 1,
                }}>
                  {f.icon}
                </div>

                {/* Gold line */}
                <div style={{
                  width: isActive ? '60px' : '30px',
                  height: '2px',
                  background: 'var(--gold)',
                  marginBottom: '1.2rem',
                  transition: 'width 0.3s var(--ease-smooth)',
                }} />

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: isActive ? 'var(--cream)' : 'var(--cream)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.02em',
                }}>
                  {f.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  color: 'var(--text-dim)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}