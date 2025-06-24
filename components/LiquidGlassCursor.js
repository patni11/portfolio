import React, { useEffect, useRef } from 'react';

export default function LiquidGlassCursor() {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const isMoving = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    
    if (!cursor || !cursorInner) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving.current = true;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorInner.style.transform = 'scale(1)';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorInner.style.transform = 'scale(0.5)';
    };

    const animate = () => {
      // Smooth easing for cursor movement
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.transform = `translate3d(${cursorX - 25}px, ${cursorY - 25}px, 0)`;
      
      // Add slight rotation based on movement
      const deltaX = mouseX - cursorX;
      const deltaY = mouseY - cursorY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      cursorInner.style.transform = `rotate(${angle * 0.1}deg) scale(${isMoving.current ? 1.2 : 1})`;
      
      if (isMoving.current) {
        setTimeout(() => {
          isMoving.current = false;
        }, 100);
      }
      
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="liquid-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '50px',
          height: '50px',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          mixBlendMode: 'difference',
        }}
      >
        <div
          ref={cursorInnerRef}
          className="liquid-cursor-inner"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 0 20px rgba(255,255,255,0.2), inset 0 0 20px rgba(255,255,255,0.1)',
            transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            animation: 'liquidPulse 3s ease-in-out infinite',
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes liquidPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(255,255,255,0.2), inset 0 0 20px rgba(255,255,255,0.1);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(255,255,255,0.3), inset 0 0 30px rgba(255,255,255,0.15);
          }
        }
        
        body {
          cursor: none !important;
        }
        
        * {
          cursor: none !important;
        }
        
        .liquid-cursor {
          will-change: transform;
        }
        
        .liquid-cursor-inner {
          will-change: transform;
        }
      `}</style>
    </>
  );
} 