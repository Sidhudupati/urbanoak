import React, { useState, useEffect } from 'react';
import { X, Send, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

const furnitureTypes = [
  'Luxury Sofas', 'Designer Chairs', 'Work Stations',
  'Premium Mattresses', 'Classic Cots', 'Elegant Curtains',
  'Home Decors', 'Center Tables', 'Dining Tables',
];

export function ThankYouModal({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.92)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--gold)',
        padding: '4rem 3rem',
        maxWidth: '480px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
        boxShadow: '0 0 80px rgba(201,147,58,0.2)',
      }}>
        {/* Glow ring */}
        <div style={{
          width: '80px',
          height: '80px',
          margin: '0 auto 2rem',
          border: '1px solid var(--gold)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse-glow 2s ease-in-out infinite',
          position: 'relative',
        }}>
          <div style={{
            width: '54px',
            height: '54px',
            background: 'linear-gradient(135deg, var(--gold), #8B5E1A)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '1.5rem' }}>✓</span>
          </div>
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          color: 'var(--gold)',
          letterSpacing: '0.3em',
          marginBottom: '1rem',
        }}>
          ENQUIRY RECEIVED
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '2.5rem',
          fontWeight: '300',
          fontStyle: 'italic',
          color: 'var(--cream)',
          marginBottom: '1rem',
          lineHeight: 1.1,
        }}>
          Thank You!
        </h2>

        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.95rem',
          color: 'var(--text-dim)',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          fontWeight: 300,
        }}>
          Our design consultant will reach out within <strong style={{ color: 'var(--gold)' }}>24 hours</strong> to discuss your requirements.
        </p>

        <button
          onClick={onClose}
          style={{
            padding: '0.85rem 3rem',
            background: 'linear-gradient(135deg, var(--gold), #8B5E1A)',
            color: '#000',
            border: 'none',
            cursor: 'none',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
          }}
        >
          CLOSE
        </button>

        {/* Auto-close hint */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.55rem',
          color: 'var(--text-faint)',
          letterSpacing: '0.1em',
          marginTop: '1.5rem',
        }}>
          AUTO-CLOSING IN 5 SECONDS
        </p>
      </div>
    </div>
  );
}

export function EnquiryModal({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({ name: '', furnitureType: '', budget: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const templateParams = {
      name: formData.name,
      furnitureType: formData.furnitureType,
      budget: formData.budget,
      to_email: 'urbanoak.info@gmail.com',
    };

    onClose();
    onSuccess();

    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    ).catch(console.error);
  };

  const fieldStyle = (name) => ({
    width: '100%',
    padding: '1rem 1.2rem',
    background: focusedField === name ? 'rgba(201,147,58,0.05)' : 'rgba(5,5,7,0.8)',
    border: `1px solid ${focusedField === name ? 'var(--gold)' : 'rgba(201,147,58,0.2)'}`,
    color: 'var(--cream)',
    fontFamily: 'var(--font-display)',
    fontSize: '0.9rem',
    fontWeight: 300,
    outline: 'none',
    transition: 'all 0.2s',
    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
  });

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.58rem',
    letterSpacing: '0.2em',
    color: 'var(--gold)',
    marginBottom: '0.5rem',
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.92)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backdropFilter: 'blur(12px)',
    }}
    onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: 'var(--surface)',
        border: '1px solid rgba(201,147,58,0.3)',
        padding: '3rem',
        maxWidth: '520px',
        width: '100%',
        position: 'relative',
        clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
        boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 60px rgba(201,147,58,0.1)',
      }}>
        {/* Corner decoration */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderLeft: '48px solid transparent',
          borderTop: '48px solid var(--gold)',
          opacity: 0.5,
        }} />

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'transparent',
            border: '1px solid rgba(201,147,58,0.2)',
            color: 'var(--text-dim)',
            cursor: 'none',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            transition: 'all 0.2s',
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,147,58,0.2)'; e.currentTarget.style.color = 'var(--text-dim)'; }}
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.58rem',
            color: 'var(--gold)',
            letterSpacing: '0.3em',
            marginBottom: '0.75rem',
          }}>
            ◈ ENQUIRY FORM
          </div>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.2rem',
            fontWeight: '300',
            fontStyle: 'italic',
            color: 'var(--cream)',
            lineHeight: 1.1,
          }}>
            Start Your <span style={{ color: 'var(--gold)', fontStyle: 'normal', fontWeight: '700' }}>Journey</span>
          </h3>
          <div style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(to right, var(--gold), transparent)',
            marginTop: '1rem',
          }} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>FULL NAME</label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              style={fieldStyle('name')}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>FURNITURE TYPE</label>
            <div style={{ position: 'relative' }}>
              <select
                required
                value={formData.furnitureType}
                onChange={e => setFormData({ ...formData, furnitureType: e.target.value })}
                onFocus={() => setFocusedField('type')}
                onBlur={() => setFocusedField(null)}
                style={{ ...fieldStyle('type'), appearance: 'none', cursor: 'none' }}
              >
                <option value="">Select furniture type</option>
                {furnitureTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <ChevronDown size={14} color="var(--gold)" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            </div>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <label style={labelStyle}>BUDGET RANGE</label>
            <input
              type="text"
              required
              placeholder="e.g. ₹50,000 – ₹1,00,000"
              value={formData.budget}
              onChange={e => setFormData({ ...formData, budget: e.target.value })}
              onFocus={() => setFocusedField('budget')}
              onBlur={() => setFocusedField(null)}
              style={fieldStyle('budget')}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: '100%',
              padding: '1.1rem',
              background: 'linear-gradient(135deg, var(--gold) 0%, #8B5E1A 100%)',
              color: '#000',
              border: 'none',
              cursor: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              transition: 'all 0.3s',
              opacity: submitting ? 0.7 : 1,
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(201,147,58,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {submitting ? 'SENDING…' : 'SUBMIT ENQUIRY'}
            <Send size={15} />
          </button>
        </form>

        {/* Privacy note */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.55rem',
          color: 'var(--text-faint)',
          letterSpacing: '0.1em',
          textAlign: 'center',
          marginTop: '1.5rem',
        }}>
          YOUR DATA IS SECURE — WE NEVER SHARE IT
        </p>
      </div>
    </div>
  );
}