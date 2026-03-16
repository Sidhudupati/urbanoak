import React, { useState } from 'react';
import { Heart, Star, ArrowUpRight } from 'lucide-react';
import { products } from '../data/index.js';

function ProductCard({ product, onEnquire }) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface-2)',
        border: '1px solid rgba(201,147,58,0.15)',
        overflow: 'hidden',
        transition: 'all 0.4s var(--ease-smooth)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: hovered ? '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(201,147,58,0.1)' : '0 4px 20px rgba(0,0,0,0.3)',
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
        position: 'relative',
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40px',
        height: '40px',
        zIndex: 5,
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderLeft: '40px solid transparent',
          borderTop: '40px solid var(--gold)',
          opacity: 0.7,
        }} />
      </div>

      {/* Image */}
      <div style={{
        position: 'relative',
        height: '280px',
        overflow: 'hidden',
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.7s var(--ease-expo)',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            filter: 'brightness(0.85)',
          }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(5,5,7,1) 0%, rgba(5,5,7,0.4) 40%, transparent 100%)',
        }} />

        {/* Scan line on hover */}
        {hovered && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(201,147,58,0.05) 50%, transparent 100%)',
            animation: 'scan-line 2s linear infinite',
          }} />
        )}

        {/* Tag badge */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          padding: '0.35rem 0.9rem',
          background: 'linear-gradient(135deg, var(--gold), #8B5E1A)',
          color: '#000',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.55rem',
          fontWeight: '700',
          letterSpacing: '0.2em',
          clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
          zIndex: 2,
        }}>
          {product.tag}
        </div>

        {/* Like button */}
        <button
          onClick={e => { e.stopPropagation(); setLiked(!liked); }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '38px',
            height: '38px',
            background: 'rgba(5,5,7,0.8)',
            border: '1px solid rgba(201,147,58,0.3)',
            cursor: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            zIndex: 3,
            transition: 'all 0.3s',
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
          }}
        >
          <Heart
            size={16}
            fill={liked ? 'var(--gold)' : 'none'}
            color={liked ? 'var(--gold)' : 'var(--cream-dim)'}
            strokeWidth={1.5}
          />
        </button>

        {/* Category chip at bottom of image */}
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.55rem',
          color: 'var(--gold)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          zIndex: 2,
        }}>
          ◈ {product.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        {/* Rating */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.75rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating) ? 'var(--gold)' : 'none'}
                color={i < Math.floor(product.rating) ? 'var(--gold)' : 'var(--text-faint)'}
                strokeWidth={1}
              />
            ))}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)', marginLeft: '4px' }}>
              {product.rating}
            </span>
          </div>

          {/* ID badge */}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            color: 'var(--text-faint)',
            letterSpacing: '0.1em',
          }}>
            #{String(product.id).padStart(3, '0')}
          </span>
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.35rem',
          fontWeight: '600',
          color: 'var(--cream)',
          marginBottom: '0.5rem',
          lineHeight: 1.2,
          letterSpacing: '0.01em',
        }}>
          {product.name}
        </h3>

        {/* Desc */}
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.85rem',
          color: 'var(--text-dim)',
          marginBottom: '1.5rem',
          lineHeight: 1.6,
          fontWeight: 300,
        }}>
          {product.desc}
        </p>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(to right, var(--gold-dim), transparent)',
          marginBottom: '1.25rem',
        }} />

        {/* CTA */}
        <button
          onClick={onEnquire}
          style={{
            width: '100%',
            padding: '0.85rem',
            background: 'transparent',
            border: '1px solid rgba(201,147,58,0.4)',
            color: 'var(--cream)',
            cursor: 'none',
            fontFamily: 'var(--font-display)',
            fontSize: '0.72rem',
            fontWeight: '700',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            transition: 'all 0.3s var(--ease-smooth)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, var(--gold) 0%, #8B5E1A 100%)';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.borderColor = 'var(--gold)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--cream)';
            e.currentTarget.style.borderColor = 'rgba(201,147,58,0.4)';
          }}
        >
          REQUEST DETAILS
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default function Products({ activeCategory, onEnquire }) {
  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'var(--obsidian)',
      position: 'relative',
    }}>
      {/* Subtle noise/dot pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(201,147,58,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
            <div style={{ width: '60px', height: '1px', background: 'var(--gold)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--gold)',
              letterSpacing: '0.3em',
            }}>FEATURED COLLECTION</span>
            <div style={{ width: '60px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '300',
            fontStyle: 'italic',
            color: 'var(--cream)',
          }}>
            Superior <span style={{ color: 'var(--gold)', fontStyle: 'normal', fontWeight: 700 }}>Craftsmanship</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            color: 'var(--text-dim)',
            marginTop: '1rem',
            fontWeight: 300,
          }}>
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''} in this collection
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} onEnquire={onEnquire} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '6rem 2rem',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-display)',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.3 }}>◈</div>
            <p>No products in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}