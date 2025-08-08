import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const items = [
  { label: 'Food', url: '/Food' },
  { label: 'Culture', url: '/Culture' },
  { label: 'Translator', url: '/Translator' },
  { label: 'Premium', url: '/Premium' },
];

const suggestions = [
  'Explore City',
  'Popular Destinations',
  'Food Near Me',
  'Cultural Events',
  'Street Food',
  'Travel Tips',
];

export default function Navbar() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    function handleEsc(e) {
      if (e.key === 'Escape') setShowSearch(false);
    }
    if (showSearch) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [showSearch]);

  // Focus input when dropdown opens
  useEffect(() => {
    if (showSearch && searchRef.current) {
      const input = searchRef.current.querySelector('input');
      if (input) input.focus();
    }
  }, [showSearch]);

  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 50,
      position: 'relative',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 60px',
        maxWidth: 1400,
        margin: '0 auto',
        position: 'relative',
      }}>
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img 
            src="pictures_homepage/xperio_logo.jpg"
            alt="Xperio Logo"
            className="w-10 h-10 rounded-lg object-cover transition-all duration-300"
          />
          <span className="font-display font-bold text-2xl text-gradient">Xperio</span>
        </Link>
        {/* Center: Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
        }}>
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.url}
              style={{
                color: '#374151',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
              }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  font: 'inherit',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            </Link>
          ))}
        </div>
        {/* Right: Search and Login */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          position: 'relative',
        }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#374151',
              fontSize: '16px',
              fontWeight: '500',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
            }}
            onClick={() => setShowSearch((v) => !v)}
            aria-label="Search"
          >
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            Search
          </button>
          {/* Search Dropdown */}
          {showSearch && (
            <div
              ref={searchRef}
              style={{
                position: 'absolute',
                top: '48px',
                right: 0,
                width: '320px',
                background: 'white',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                borderRadius: '12px',
                padding: '20px',
                zIndex: 100,
                minHeight: '120px',
              }}
            >
              <input
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="Search..."
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '16px',
                  marginBottom: '16px',
                  outline: 'none',
                }}
              />
              <div>
                {suggestions
                  .filter(s => s.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((s, i) => (
                    <div
                      key={s}
                      style={{
                        padding: '8px 0',
                        cursor: 'pointer',
                        color: '#374151',
                        fontWeight: 500,
                        borderBottom: i !== suggestions.length - 1 ? '1px solid #f3f4f6' : 'none',
                        transition: 'background 0.2s',
                      }}
                      onClick={() => {
                        setShowSearch(false);
                        setSearchValue('');
                        console.log('Suggestion clicked:', s);
                      }}
                      onMouseEnter={e => (e.target.style.background = '#f3f4f6')}
                      onMouseLeave={e => (e.target.style.background = 'transparent')}
                    >
                      {s}
                    </div>
                  ))}
                {suggestions.filter(s => s.toLowerCase().includes(searchValue.toLowerCase())).length === 0 && (
                  <div style={{ color: '#9ca3af', fontSize: '15px', padding: '8px 0' }}>No suggestions found.</div>
                )}
              </div>
            </div>
          )}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#374151',
              fontSize: '16px',
              fontWeight: '500',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
            }}
            onClick={() => navigate('/Loginpage')}
          >
            <svg
              style={{ width: '20px', height: '20px' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Login
          </button>
        </div>
      </div>
    </header>
  );
} 