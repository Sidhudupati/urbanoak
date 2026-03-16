import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX - 5 + 'px';
        dotRef.current.style.top = mouseY - 5 + 'px';
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = ringX - 18 + 'px';
        ringRef.current.style.top = ringY - 18 + 'px';
      }
      rafId = requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(3)';
      if (ringRef.current) { ringRef.current.style.transform = 'scale(1.5)'; ringRef.current.style.borderColor = 'var(--gold)'; }
    };

    const onMouseLeaveInteractive = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(1)';
      if (ringRef.current) { ringRef.current.style.transform = 'scale(1)'; ringRef.current.style.borderColor = 'rgba(201,147,58,0.4)'; }
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    // Attach to all interactive elements
    const setInteractiveListeners = () => {
      document.querySelectorAll('button, a, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
    setInteractiveListeners();
    const observer = new MutationObserver(setInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  // Hide on mobile
  if (window.matchMedia('(hover: none)').matches) return null;

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}