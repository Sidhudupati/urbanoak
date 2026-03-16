import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/index.js';

export default function Hero({ onEnquire }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % heroSlides.length);
  }, []);

  const goBack = useCallback(() => {
    setCurrent(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '700px',
      marginTop: 'var(--nav-h)',
      overflow: 'hidden',
      background: 'var(--obsidian)',
    }}>

      {/* Slide backgrounds */}
      {heroSlides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          inset: 0,
          opacity: i === current ? 1 : 0,
          transition: 'opacity 1.4s var(--ease-smooth)',
          zIndex: i === current ? 1 : 0,
        }}>
          <img
            src={s.image}
            alt={s.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: i === current ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 8s var(--ease-expo)',
              filter: 'brightness(0.45)',
            }}
          />
        </div>
      ))}

      {/* Futuristic overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(5,5,7,0.92) 0%, rgba(5,5,7,0.5) 50%, rgba(5,5,7,0.2) 100%)',
        zIndex: 2,
      }} />

      {/* Scanline grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(201,147,58,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,147,58,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        zIndex: 3,
      }} />

      {/* Right panel: geometric accent */}
      <div style={{
        position: 'absolute',
        right: '6%',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
      }}>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '3px' : '1px',
              height: i === current ? '60px' : '24px',
              background: i === current ? 'var(--gold)' : 'var(--gold-dim)',
              border: 'none',
              cursor: 'none',
              transition: 'all 0.5s var(--ease-smooth)',
              boxShadow: i === current ? '0 0 12px var(--gold)' : 'none',
            }}
          />
        ))}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          color: 'var(--gold-dim)',
          writingMode: 'vertical-rl',
          letterSpacing: '0.2em',
          marginTop: '8px',
        }}>
          {String(current + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 4,
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(1.5rem, 5vw, 6rem)',
      }}>
        <div style={{ maxWidth: '820px' }}>

          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '2rem',
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all 0.8s var(--ease-smooth)',
          }}>
            <div style={{
              padding: '0.5rem 1.4rem',
              border: '1px solid var(--gold)',
              background: 'rgba(201,147,58,0.08)',
              backdropFilter: 'blur(8px)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--gold)',
                letterSpacing: '0.3em',
              }}>
                {slide.highlight}
              </span>
              {/* shimmer */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(201,147,58,0.15) 50%, transparent 100%)',
                transform: 'skewX(-20deg) translateX(-200%)',
                animation: 'shimmer 3s ease-in-out infinite',
              }} />
            </div>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3.5rem, 8vw, 8rem)',
            fontWeight: '300',
            lineHeight: 0.9,
            marginBottom: '2rem',
            letterSpacing: '-0.01em',
          }}>
            <span style={{ display: 'block', color: 'var(--cream)', fontStyle: 'italic' }}>
              {slide.title}
            </span>
            <span style={{
              display: 'block',
              color: 'transparent',
              WebkitTextStroke: '1px var(--gold)',
              fontStyle: 'normal',
              fontWeight: '700',
              letterSpacing: '0.05em',
            }}>
              {slide.titleAccent}
            </span>
          </h1>

          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '2rem',
          }}>
            <div style={{ width: '80px', height: '1px', background: 'linear-gradient(to right, var(--gold), transparent)' }} />
            <div style={{ width: '6px', height: '6px', background: 'var(--gold)', transform: 'rotate(45deg)' }} />
            <div style={{ width: '40px', height: '1px', background: 'var(--gold-dim)' }} />
          </div>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
            color: 'var(--cream-dim)',
            lineHeight: 1.7,
            maxWidth: '560px',
            marginBottom: '3rem',
            fontWeight: 300,
          }}>
            {slide.subtitle}
          </p>

          {/* CTA Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <button
              className="btn-primary corner-cut"
              onClick={onEnquire}
              style={{
                padding: '1.1rem 3rem',
                background: 'linear-gradient(135deg, var(--gold) 0%, #9B6F28 100%)',
                color: '#000',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                letterSpacing: '0.2em',
                boxShadow: '0 12px 40px rgba(201,147,58,0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(201,147,58,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(201,147,58,0.35)';
              }}
            >
              EXPLORE COLLECTION
              <ArrowRight size={16} />
            </button>

            {/* Stat pill */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              borderLeft: '2px solid var(--gold-dim)',
              paddingLeft: '1.2rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--gold)',
                lineHeight: 1,
              }}>
                {slide.stat.value}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.15em',
                marginTop: '4px',
              }}>
                {slide.stat.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav arrows */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: 'clamp(1.5rem, 5vw, 6rem)',
        zIndex: 6,
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}>
        {[goBack, next].map((fn, i) => (
          <button
            key={i}
            onClick={fn}
            style={{
              width: '48px',
              height: '48px',
              border: '1px solid var(--gold-dim)',
              background: 'rgba(5,5,7,0.7)',
              color: 'var(--gold)',
              cursor: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--gold)';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(5,5,7,0.7)';
              e.currentTarget.style.color = 'var(--gold)';
            }}
          >
            {i === 0 ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to top, var(--obsidian), transparent)',
        zIndex: 5,
        pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes shimmer {
          0% { transform: skewX(-20deg) translateX(-200%); }
          100% { transform: skewX(-20deg) translateX(400%); }
        }
      `}</style>
    </section>
  );
}