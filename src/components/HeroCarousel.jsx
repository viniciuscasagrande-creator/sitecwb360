import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/attractions';

export default function HeroCarousel({ onSelectAttraction }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div style={{ maxWidth: '1280px', margin: '24px auto 0', padding: '0 20px' }}>
      <div style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        minHeight: '380px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
        backgroundColor: '#0f172a'
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.8s ease-in-out',
          filter: 'brightness(0.65)'
        }} />

        {/* Gradient Overlay for Text Clarity */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 60%, rgba(15, 23, 42, 0.1) 100%)'
        }} />

        {/* Content Box */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          padding: '48px 40px',
          maxWidth: '680px',
          color: '#ffffff'
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            fontSize: '11px',
            fontWeight: '800',
            letterSpacing: '1px',
            padding: '4px 12px',
            borderRadius: '6px',
            marginBottom: '16px',
            textTransform: 'uppercase',
            boxShadow: '0 2px 8px rgba(37,99,235,0.4)'
          }}>
            {slide.badge}
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '36px',
            fontWeight: '800',
            lineHeight: '1.25',
            marginBottom: '16px',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '16px',
            color: '#cbd5e1',
            marginBottom: '28px',
            lineHeight: '1.6',
            maxWidth: '560px'
          }}>
            {slide.subtitle}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(4px)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.3)',
            cursor: 'pointer',
            zIndex: 20,
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(4px)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.3)',
            cursor: 'pointer',
            zIndex: 20,
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'}
        >
          <ChevronRight size={24} />
        </button>

        {/* Pagination Dots */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '32px',
          display: 'flex',
          gap: '8px',
          zIndex: 20
        }}>
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: idx === currentSlide ? '24px' : '10px',
                height: '10px',
                borderRadius: '9999px',
                backgroundColor: idx === currentSlide ? '#ffffff' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
