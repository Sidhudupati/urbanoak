import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer({ onEnquire }) {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--void)',
      borderTop: '1px solid rgba(201,147,58,0.15)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top gold bar */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(to right, transparent, var(--gold), var(--gold-bright), var(--gold), transparent)',
      }} />

      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(201,147,58,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(201,147,58,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      {/* CTA Banner */}
      <div style={{
        padding: '5rem 2rem',
        borderBottom: '1px solid rgba(201,147,58,0.1)',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '2rem',
        }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--gold)',
            letterSpacing: '0.3em',
          }}>BEGIN YOUR JOURNEY</span>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 5rem)',
          fontWeight: '300',
          fontStyle: 'italic',
          color: 'var(--cream)',
          marginBottom: '0.5rem',
          lineHeight: 1,
        }}>
          Ready to Transform
        </h2>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 5rem)',
          fontWeight: '700',
          color: 'transparent',
          WebkitTextStroke: '1px var(--gold)',
          marginBottom: '2rem',
          lineHeight: 1,
          letterSpacing: '0.05em',
        }}>
          Your Space?
        </h2>

        <button
          onClick={onEnquire}
          className="btn-primary corner-cut"
          style={{
            padding: '1.2rem 4rem',
            background: 'linear-gradient(135deg, var(--gold) 0%, #8B5E1A 100%)',
            color: '#000',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            letterSpacing: '0.2em',
            boxShadow: '0 12px 40px rgba(201,147,58,0.35)',
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
          GET FREE CONSULTATION
        </button>
      </div>

      {/* Main footer grid */}
      <div style={{
        padding: '4rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '3rem',
        position: 'relative',
      }}>

        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
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
                fontSize: '1.3rem',
                fontWeight: '700',
                letterSpacing: '0.3em',
                color: 'var(--cream)',
              }}>
                URBAN<span style={{ color: 'var(--gold)' }}>OAK</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.45rem',
                color: 'var(--gold)',
                letterSpacing: '0.3em',
              }}>FINE FURNITURE</div>
            </div>
          </div>

          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            color: 'var(--text-dim)',
            lineHeight: 1.7,
            marginBottom: '2rem',
            fontWeight: 300,
          }}>
            Crafting exceptional furniture where heritage meets modern elegance. Every piece tells a story of meticulous craftsmanship.
          </p>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" style={{
                width: '36px',
                height: '36px',
                border: '1px solid rgba(201,147,58,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-dim)',
                transition: 'all 0.3s',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.color = 'var(--gold)';
                e.currentTarget.style.background = 'rgba(201,147,58,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(201,147,58,0.2)';
                e.currentTarget.style.color = 'var(--text-dim)';
                e.currentTarget.style.background = 'transparent';
              }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.25em',
            color: 'var(--gold)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}>
            COLLECTIONS
          </h4>
          {['Luxury Sofas', 'Designer Chairs', 'Work Stations', 'Classic Cots', 'Mattresses', 'Curtains', 'Home Decors'].map((item, i) => (
            <div key={i} style={{
              padding: '0.5rem 0',
              borderBottom: '1px solid rgba(201,147,58,0.05)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              color: 'var(--text-dim)',
              cursor: 'none',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 300,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.paddingLeft = '8px'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.paddingLeft = '0'; }}
            >
              <span style={{ color: 'var(--gold-dim)', fontSize: '0.5rem' }}>▶</span>
              {item}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.25em',
            color: 'var(--gold)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}>
            CONTACT US
          </h4>

          {[
            { Icon: Phone, label: '+91 93987 20749', href: 'tel:+919398720749' },
            { Icon: Mail, label: 'urbanoak.info@gmail.com', href: 'mailto:urbanoak.info@gmail.com' },
            { Icon: MapPin, label: 'Hyderabad, Telangana, India', href: '#' },
          ].map(({ Icon, label, href }, i) => (
            <a key={i} href={href} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1.2rem',
              color: 'var(--text-dim)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
            >
              <div style={{
                width: '32px',
                height: '32px',
                border: '1px solid rgba(201,147,58,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))',
              }}>
                <Icon size={13} color="var(--gold)" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 300 }}>
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        padding: '1.5rem 2rem',
        borderTop: '1px solid rgba(201,147,58,0.1)',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          color: 'var(--text-faint)',
          letterSpacing: '0.15em',
        }}>
          © {year} URBANOAK FURNITURES — ALL RIGHTS RESERVED
        </span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Privacy Policy', 'Terms of Service'].map((t, i) => (
            <a key={i} href="#" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--text-faint)',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-faint)'}
            >
              {t}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}