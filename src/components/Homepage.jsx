import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
export function Homepage() {
    const items = [
        { label: "Food", url: "/Food" },
        { label: "Culture", url: "/Culture" },
        { label: "Translator", url: "/Translator" },
        { label: "Premium", url: "/Premium" }
      ];
      const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);
    const testimonials = [
        {
            name: "Ananya Sharma",
            message: "Xperio made my trip unforgettable! I experienced festivals like a true local.",
        },
        {
            name: "Rahul Mehra",
            message: "The cultural insights and easy translations helped me navigate new cities with confidence.",
        },
        {
            name: "Lara Thomas",
            message: "Loved discovering hidden street food gems. Highly recommended!",
        },
        {
            name: "Rai M.",
            message: "Xperio made my trip to Hyderabad unforgettable. I discovered hidden food spots that even locals didn't know about. The translator feature was a life-saver!",
        },
        {
            name: "Mike P.",
            message: "I never thought a web app could make exploring my own city so exciting. Xperio's cultural insights and clean interface are game changers.",
        },
        {
            name: "Sadiya",
            message: "From street food recommendations to immersive cultural clips, Xperio nails it. The premium content is worth every rupee!",
        },
        {
            name: "Sara L.",
            message: "The app's cultural modules are stunning. I learned about local traditions before even arriving. It made my experience richer.",
        },
        {
            name: "Jack",
            message: "The live translator helped me interact with vendors during my trip. That feature alone makes Xperio a must-have!",
        },
        {
            name: "Raj.",
            message: "The Xperio dashboard felt like my personal travel assistant. I found local mosques, food stalls, and historical sites in seconds.",
        }
    ];

    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                maxWidth: 1400, 
                margin: '0 auto', 
                padding: '80px 60px', 
                position: 'relative',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s ease-out 0.4s'
            }}>
                {/* Left: Text Content */}
                <div style={{ 
                    flex: 1, 
                    maxWidth: 600,
                    animation: isLoaded ? 'slideInLeft 1s ease-out 0.6s both' : 'none'
                }}>
                    {/* Small Badge */}
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '24px',
                        animation: isLoaded ? 'bounceIn 0.8s ease-out 0.8s both' : 'none'
                    }}>
                        <span style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            background: '#e6f4fa', 
                            color: '#1e90ff', 
                            borderRadius: '20px', 
                            padding: '8px 16px', 
                            fontWeight: '600', 
                            fontSize: '14px',
                            gap: '8px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.boxShadow = '0 4px 12px rgba(30, 144, 255, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = 'none';
                        }}
                        >
                            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" />
                            </svg>
                            Discover Local Food Culture
                        </span>
                    </div>
                    
                    <h1 style={{ 
                        fontSize: '64px', 
                        fontWeight: '900', 
                        lineHeight: 1.1, 
                        marginBottom: '24px', 
                        color: '#1a202c',
                        animation: isLoaded ? 'fadeInUp 1s ease-out 1s both' : 'none'
                    }}>
                        Taste the <span style={{ 
                            color: '#ff6b35',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.textShadow = '0 0 20px rgba(255, 107, 53, 0.5)'}
                        onMouseLeave={(e) => e.target.style.textShadow = 'none'}
                        >World</span> Like a <span style={{ 
                            color: '#a259ff',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.textShadow = '0 0 20px rgba(162, 89, 255, 0.5)'}
                        onMouseLeave={(e) => e.target.style.textShadow = 'none'}
                        >Local</span>
                    </h1>
                    <p style={{ 
                        fontSize: '20px', 
                        color: '#6b7280', 
                        marginBottom: '40px', 
                        lineHeight: 1.6,
                        animation: isLoaded ? 'fadeInUp 1s ease-out 1.2s both' : 'none'
                    }}>
                        Discover authentic street food, cultural experiences, and hidden gems in any city. Your complete companion for culinary adventures.
                    </p>
                    <div style={{ 
                        display: 'flex', 
                        gap: '16px', 
                        marginBottom: '40px',
                        animation: isLoaded ? 'fadeInUp 1s ease-out 1.4s both' : 'none'
                    }}>
                        <button style={{ 
                            background: '#ff6b35', 
                            color: 'white', 
                            fontWeight: '700', 
                            fontSize: '18px', 
                            border: 'none', 
                            borderRadius: '8px', 
                            padding: '16px 32px', 
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px) scale(1.02)';
                            e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.3)';
                        }}
                        >
                            Start Exploring
                            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        <button style={{ 
                            background: 'white', 
                            color: '#374151', 
                            fontWeight: '700', 
                            fontSize: '18px', 
                            border: '2px solid #374151', 
                            borderRadius: '8px', 
                            padding: '16px 32px', 
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px) scale(1.02)';
                            e.target.style.background = '#374151';
                            e.target.style.color = 'white';
                            e.target.style.boxShadow = '0 8px 25px rgba(55, 65, 81, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.background = 'white';
                            e.target.style.color = '#374151';
                            e.target.style.boxShadow = 'none';
                        }}
                        >
                            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            Watch Demo
                        </button>
                    </div>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '24px', 
                        fontSize: '16px', 
                        color: '#6b7280',
                        animation: isLoaded ? 'fadeInUp 1s ease-out 1.6s both' : 'none'
                    }}>
                        <span style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '6px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            <svg style={{ width: '18px', height: '18px', color: '#ff6b35' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m10.614-10.614L13.414 3.1a1.998 1.998 0 00-2.828 0L6.343 6.343m10.614 10.614L17.657 16.657M6.343 6.343L4.92 4.92" />
                            </svg>
                            Available in 200+ cities
                        </span>
                        <span style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '6px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            <svg style={{ width: '18px', height: '18px', color: '#FFD700' }} fill="currentColor" viewBox="0 0 24 24">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            4.9/5 (10k+ reviews)
                        </span>
                    </div>
                </div>
                
                {/* Right: Travel Image Container */}
                <div style={{ 
                    flex: 1, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    position: 'relative',
                    animation: isLoaded ? 'slideInRight 1s ease-out 0.8s both' : 'none'
                }}>
                    {/* Main Travel Image Container */}
                    <div style={{ 
                        position: 'relative', 
                        width: '420px', 
                        height: '420px', 
                        borderRadius: '32px', 
                        overflow: 'hidden', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.02)';
                        e.target.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                    }}
                    >
                        {/* Travel Image - Fills the entire container */}
                        <img 
                            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80" 
                            alt="World Travel and Exploration" 
                            style={{ 
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'all 0.3s ease'
                            }}
                        />
                       
                    </div>
                </div>
            </div>
            
            {/* Your Complete Travel Companion Section */}
            <div style={{ 
                background: 'white', 
                padding: '100px 60px',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s ease-out 1.2s'
            }}>
                <div style={{ maxWidth: 1400, margin: '0 auto' }}>
                    {/* Section Header */}
                    <div style={{ 
                        textAlign: 'center', 
                        marginBottom: '80px',
                        animation: isLoaded ? 'slideInFromTop 1.2s ease-out 1.4s both' : 'none'
                    }}>
                        <button style={{
                            background: '#f3f4f6',
                            color: '#374151',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '8px 16px',
                            fontSize: '14px',
                            fontWeight: '500',
                            marginBottom: '24px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#e5e7eb';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = '#f3f4f6';
                            e.target.style.transform = 'translateY(0)';
                        }}
                        >
                            Explore All Modules
                        </button>
                        <h2 style={{ 
                            fontSize: '48px', 
                            fontWeight: '900', 
                            color: '#1a202c', 
                            marginBottom: '16px',
                            lineHeight: 1.2
                        }}>
                            Your Complete Travel Companion
                        </h2>
                        <p style={{ 
                            fontSize: '18px', 
                            color: '#6b7280', 
                            maxWidth: 600, 
                            margin: '0 auto',
                            lineHeight: 1.6
                        }}>
                            Six powerful modules designed to enhance every aspect of your cultural food journey
                        </p>
                    </div>
                    
                    {/* Module Cards */}
                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',  // exactly 2 cards per row
                        gap: '32px',
                        animation: isLoaded ? 'fadeInScale 1s ease-out 1.6s both' : 'none'
                    }}>
                        {/* Card 1: Xperio Food */}
                        <div style={{ 
                            background: 'white', 
                            borderRadius: '16px', 
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            animation: isLoaded ? 'cardSlideIn 1s ease-out 1.8s both' : 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-8px)';
                            e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                        }}
                        >
                            {/* Image */}
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                <img 
                                    src="/pictures_homepage/biryani.jpg" 
                                    alt="Delicious biryani and local cuisine" 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover',
                                        transition: 'all 0.4s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.filter = 'brightness(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.filter = 'brightness(1)';
                                    }}
                                />
                                {/* Icon Overlay */}
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '16px', 
                                    left: '16px', 
                                    background: '#ff6b35', 
                                    borderRadius: '8px', 
                                    padding: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    animation: isLoaded ? 'iconBounce 2s ease-out 2.5s both' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.1)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.boxShadow = 'none';
                                }}
                                >
                                    <svg style={{ width: '16px', height: '16px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div style={{ padding: '24px' }}>
                                <h3 style={{ 
                                    fontSize: '24px', 
                                    fontWeight: '700', 
                                    color: '#1a202c', 
                                    marginBottom: '12px' 
                                }}>
                                    Xperio Food
                                </h3>
                                <p style={{ 
                                    fontSize: '16px', 
                                    color: '#6b7280', 
                                    marginBottom: '20px', 
                                    lineHeight: 1.6 
                                }}>
                                    Discover the best street food and restaurants with interactive maps, reviews, and directions.
                                </p>
                                
                                {/* Feature Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                                    {['Interactive Maps', 'User Reviews', 'Photo Uploads'].map((tag, index) => (
                                        <span key={tag} style={{
                                            background: '#f3f4f6',
                                            color: '#374151',
                                            fontSize: '12px',
                                            padding: '4px 8px',
                                            borderRadius: '12px',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = '#e5e7eb';
                                            e.target.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = '#f3f4f6';
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '20px' }}>+1 more</p>
                                
                                {/* Action Button */}
                                <button style={{
                                    width: '100%',
                                    background: '#1a202c',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '12px 16px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#374151';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = '#1a202c';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                                >
                                    Explore Xperio Food
                                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        {/* Card 2: Xperio Culture */}
                        <div style={{ 
                            background: 'white', 
                            borderRadius: '16px', 
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            animation: isLoaded ? 'cardSlideIn 1s ease-out 2s both' : 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-8px)';
                            e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
                        }}
                        >
                            {/* Image */}
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                <img 
                                    src="/pictures_homepage/culture.png" 
                                    alt="Cultural landmarks and traditional culture" 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover',
                                        transition: 'all 0.4s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.filter = 'brightness(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.filter = 'brightness(1)';
                                    }}
                                />
                                {/* Icon Overlay */}
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '16px', 
                                    left: '16px', 
                                    background: '#ec4899', 
                                    borderRadius: '8px', 
                                    padding: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    animation: isLoaded ? 'iconBounce 2s ease-out 2.7s both' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.1)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(236, 72, 153, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.boxShadow = 'none';
                                }}
                                >
                                    <svg style={{ width: '16px', height: '16px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div style={{ padding: '24px' }}>
                                <h3 style={{ 
                                    fontSize: '24px', 
                                    fontWeight: '700', 
                                    color: '#1a202c', 
                                    marginBottom: '12px' 
                                }}>
                                    Xperio Culture
                                </h3>
                                <p style={{ 
                                    fontSize: '16px', 
                                    color: '#6b7280', 
                                    marginBottom: '20px', 
                                    lineHeight: 1.6 
                                }}>
                                    Explore local places, cultural events, and historical landmarks with expert travel tips.
                                </p>
                                
                                {/* Feature Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                                    {['Cultural Events', 'Historical Sites', 'Travel Tips'].map((tag, index) => (
                                        <span key={tag} style={{
                                            background: '#f3f4f6',
                                            color: '#374151',
                                            fontSize: '12px',
                                            padding: '4px 8px',
                                            borderRadius: '12px',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = '#e5e7eb';
                                            e.target.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = '#f3f4f6';
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '20px' }}>+1 more</p>
                                
                                {/* Action Button */}
                                <button style={{
                                    width: '100%',
                                    background: '#1a202c',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '12px 16px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#374151';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = '#1a202c';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                                >
                                    Explore Xperio Culture
                                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        
                        {/* Card 3:Xperio Translator */}
                        <div style={{ 
                            background: 'white', 
                            borderRadius: '16px', 
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            animation: isLoaded ? 'cardSlideIn 1s ease-out 2.2s both' : 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-8px)';
                            e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                        }}
                        >
                            {/* Image */}
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                <img 
                                    src="/pictures_homepage/translator.jpg" 
                                    alt="AI translation and language technology" 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover',
                                        transition: 'all 0.4s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.filter = 'brightness(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.filter = 'brightness(1)';
                                    }}
                                />
                                {/* Icon Overlay */}
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '16px', 
                                    left: '16px', 
                                    background: '#3b82f6', 
                                    borderRadius: '8px', 
                                    padding: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    animation: isLoaded ? 'iconBounce 2s ease-out 2.9s both' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.1)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.boxShadow = 'none';
                                }}
                                >
                                    <svg style={{ width: '16px', height: '16px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.83-6.99l2.53 2.52c.39.39.39 1.02 0 1.41zM4.27 3L3 4.27l6.01 6.01L9.01 9.01 4.27 3zM19.73 21L21 19.73l-6.01-6.01L15.99 15.99 19.73 21z"/>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div style={{ padding: '24px' }}>
                                <h3 style={{ 
                                    fontSize: '24px', 
                                    fontWeight: '700', 
                                    color: '#1a202c', 
                                    marginBottom: '12px' 
                                }}>
                                    Xperio Translator
                                </h3>
                                <p style={{ 
                                    fontSize: '16px', 
                                    color: '#6b7280', 
                                    marginBottom: '20px', 
                                    lineHeight: 1.6 
                                }}>
                                    AI-powered translation for text, speech, and menus to break language barriers.
                                </p>
                                
                                {/* Feature Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                                    {['Text Translation', 'Speech-to-Text', 'Menu Scanner'].map((tag, index) => (
                                        <span key={tag} style={{
                                            background: '#f3f4f6',
                                            color: '#374151',
                                            fontSize: '12px',
                                            padding: '4px 8px',
                                            borderRadius: '12px',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = '#e5e7eb';
                                            e.target.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = '#f3f4f6';
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '20px' }}>+1 more</p>
                                
                                {/* Action Button */}
                                <button style={{
                                    width: '100%',
                                    background: '#1a202c',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '12px 16px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#374151';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = '#1a202c';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                                >
                                    Explore Xperio Translator
                                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div style={{ 
                            background: 'white', 
                            borderRadius: '16px', 
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            animation: isLoaded ? 'cardSlideIn 1s ease-out 2s both' : 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-8px)';
                            e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
                        }}
                        >
                            {/* Image */}
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                <img 
                                    src="/pictures_homepage/premium.png" 
                                    alt="Cultural landmarks and traditional culture" 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover',
                                        transition: 'all 0.4s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.filter = 'brightness(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.filter = 'brightness(1)';
                                    }}
                                />
                                {/* Icon Overlay */}
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '16px', 
                                    left: '16px', 
                                    background: '#ec4899', 
                                    borderRadius: '8px', 
                                    padding: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    animation: isLoaded ? 'iconBounce 2s ease-out 2.7s both' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.1)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(236, 72, 153, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.boxShadow = 'none';
                                }}
                                >
                                    <svg style={{ width: '16px', height: '16px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div style={{ padding: '24px' }}>
                                <h3 style={{ 
                                    fontSize: '24px', 
                                    fontWeight: '700', 
                                    color: '#1a202c', 
                                    marginBottom: '12px' 
                                }}>
                                    Xperio Premium
                                </h3>
                                <p style={{ 
                                    fontSize: '16px', 
                                    color: '#6b7280', 
                                    marginBottom: '20px', 
                                    lineHeight: 1.6 
                                }}>
                                    Explore local places, cultural events, and historical landmarks with expert travel tips.
                                </p>
                                
                                {/* Feature Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                                    {['Cultural Events', 'Historical Sites', 'Travel Tips'].map((tag, index) => (
                                        <span key={tag} style={{
                                            background: '#f3f4f6',
                                            color: '#374151',
                                            fontSize: '12px',
                                            padding: '4px 8px',
                                            borderRadius: '12px',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = '#e5e7eb';
                                            e.target.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = '#f3f4f6';
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '20px' }}>+1 more</p>
                                
                                {/* Action Button */}
                                <button style={{
                                    width: '100%',
                                    background: '#1a202c',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '12px 16px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#374151';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = '#1a202c';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                                >
                                    Explore Xperio Culture
                                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>


                    </div>
                    <section className="bg-white py-16 px-4 text-center">
  <h2 className="text-3xl font-bold mb-2 text-gray-900">Social proof? Here.</h2>
  <p className="mb-10 text-blue-600 font-medium">
    From exploring local gems to global adventures, 2000+ happy clients and still counting.
  </p>

  <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className={`bg-blue-50 border border-blue-100 rounded-xl shadow-md p-6 w-80 transition-all duration-300 transform hover:scale-105 hover:rotate-0 ${
          index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
        }`}
      >
        <p className="text-gray-800 mb-6">"{testimonial.message}"</p>
        <div className="flex items-center gap-3">
          <img
            src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${30 + index}.jpg`}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
            <p className="text-xs text-gray-500">
              {testimonial.name === "Rai M." && "Founder of ArtisanMarket"}
              {testimonial.name === "Mike P." && "GreenFuture Foundation"}
              {testimonial.name === "Sadiya" && "Employee NovaTech"}
              {testimonial.name === "Sara L." && "Influencer"}
              {testimonial.name === "Jack" && "Teacher"}
              {testimonial.name === "Raj." && "Travel influencer"}
              {!["Rai M.", "Mike P.", "Sadiya", "Sara L.", "Jack", "Raj."].includes(testimonial.name) &&
                "Happy Client"}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

                </div>
            </div>
            
            
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                @keyframes fadeInLeft {
                    from {
                        transform: translateX(-50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes fadeInRight {
                    from {
                        transform: translateX(50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        transform: translateY(30px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideInLeft {
                    from {
                        transform: translateX(-100px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideInRight {
                    from {
                        transform: translateX(100px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideInUp {
                    from {
                        transform: translateY(50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                @keyframes bounceIn {
                    0% {
                        transform: scale(0.3);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.05);
                    }
                    70% {
                        transform: scale(0.9);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes slideInFromTop {
                    0% {
                        transform: translateY(-60px) scale(0.9);
                        opacity: 0;
                    }
                    50% {
                        transform: translateY(-20px) scale(0.95);
                        opacity: 0.7;
                    }
                    100% {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                }
                
                @keyframes fadeInScale {
                    0% {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(0.95);
                        opacity: 0.5;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                
                @keyframes cardSlideIn {
                    0% {
                        transform: translateY(80px) rotateX(15deg) scale(0.8);
                        opacity: 0;
                        filter: blur(4px);
                    }
                    30% {
                        transform: translateY(40px) rotateX(8deg) scale(0.9);
                        opacity: 0.3;
                        filter: blur(2px);
                    }
                    60% {
                        transform: translateY(10px) rotateX(3deg) scale(0.95);
                        opacity: 0.7;
                        filter: blur(1px);
                    }
                    100% {
                        transform: translateY(0) rotateX(0deg) scale(1);
                        opacity: 1;
                        filter: blur(0px);
                    }
                }
                
                @keyframes iconBounce {
                    0% {
                        transform: scale(0) rotate(180deg);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.2) rotate(90deg);
                        opacity: 0.8;
                    }
                    70% {
                        transform: scale(0.9) rotate(45deg);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }
                
                @keyframes imageZoom {
                    0% {
                        transform: scale(1.1);
                    }
                    50% {
                        transform: scale(1.15);
                    }
                    100% {
                        transform: scale(1.1);
                    }
                }
            `}</style>
                <footer className="bg-gray-900 text-white py-12 mt-16 transform-gpu animate-fadeInUp delay-700">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="transform-gpu animate-fadeInLeft delay-800">
        <h3 className="text-xl font-bold mb-4">XperioFood</h3>
        <p className="text-gray-400">Discover authentic street food from around the world.</p>
      </div>
      <div className="transform-gpu animate-fadeInUp delay-800">
        <h4 className="font-semibold mb-4">Explore</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors duration-300">Travel agents</a></li>
          <li><a href="#" className="hover:text-white transition-colors duration-300">Cities</a></li>
          <li><a href="#" className="hover:text-white transition-colors duration-300">Culture</a></li>
        </ul>
      </div>
      <div className="transform-gpu animate-fadeInUp delay-800">
        <h4 className="font-semibold mb-4">Community</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors duration-300">Reviews</a></li>
          <li><a href="#" className="hover:text-white transition-colors duration-300">Photos</a></li>
          <li><a href="#" className="hover:text-white transition-colors duration-300">Videos</a></li>
        </ul>
      </div>
      <div className="transform-gpu animate-fadeInRight delay-800">
        <h4 className="font-semibold mb-4">Support</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 transform-gpu animate-fadeInUp delay-800">
      <p>&copy; 2025 Xperio. All rights reserved.</p>
    </div>
  </div>
</footer>
        </>
    );
}