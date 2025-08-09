import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Star, MapPin, Play, Users, TrendingUp, ArrowRight, Heart, Crown, Plane,
  Zap, Award, Camera, MessageCircle, Search, Bell, User, Menu, X, ChevronDown,
  Utensils, Palette, Languages, Sparkles, Bot, SendHorizontal, Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfessionalNavbar from './ProfessionalNavbar';
import AdvancedChatbot from './AdvancedChatbot';
import Footer from './Footer';
import './homepage.css';

export function Homepage() {
    const navigate = useNavigate();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [statsVisible, setStatsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    const [chatbotOpen, setChatbotOpen] = useState(false);

    const handleNavigation = (url) => {
        navigate(url);
    };

    // Counter animation hook
    const useCountUp = (end, duration = 2000) => {
        const [count, setCount] = useState(0);
        
        useEffect(() => {
            if (!statsVisible) return;
            
            let startTime;
            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                setCount(Math.floor(progress * end));
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            requestAnimationFrame(animate);
        }, [end, duration, statsVisible]);
        
        return count;
    };

    const userCount = useCountUp(250000);
    const cityCount = useCountUp(500);
    const reviewCount = useCountUp(50000);

    // Enhanced testimonials with premium profile images[2]
    const testimonials = [
        {
            name: "Sarah Chen",
            message: "Xperio transformed my solo travel experience in Southeast Asia. The AI recommendations were absolutely perfect!",
            role: "Digital Nomad",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?auto=format&fit=crop&w=150&q=80",
            location: "Bangkok, Thailand",
            date: "2 days ago"
        },
        {
            name: "Marcus Rodriguez",
            role: "Food Blogger",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
            message: "Found the most incredible street food spots I never would have discovered. This app is a game-changer!",
            rating: 5,
            location: "Mumbai, India",
            date: "5 days ago"
        },
        {
            name: "Emily Johnson",
            role: "Travel Photographer",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
            message: "The cultural insights helped me capture authentic moments that tell real stories. Absolutely brilliant!",
            rating: 5,
            location: "Kyoto, Japan",
            date: "1 week ago"
        },
        {
            name: "Ahmed Hassan",
            role: "Business Traveler",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
            message: "The AI translator saved my business meetings in Shanghai. Accurate translations in real-time!",
            rating: 5,
            location: "Shanghai, China",
            date: "3 days ago"
        }
    ];

    // Enhanced feature grid with premium travel images[2][22][25]
    const features = [
        {
            id: 'food',
            title: 'Food Discovery',
            icon: <Utensils className="feature-icon-main" />,
            description: 'Discover authentic local cuisine with AI-powered recommendations from hidden gems to street food delights',
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80",
            gradient: 'from-orange-500 to-red-500',
            delay: 0.1
        },
        {
            id: 'culture',
            title: 'Cultural Experiences',
            icon: <Palette className="feature-icon-main" />,
            description: 'Immerse in local traditions, festivals, and cultural events with expert guidance and insights',
            image: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?auto=format&fit=crop&w=800&q=80",
            gradient: 'from-purple-500 to-pink-500',
            delay: 0.2
        },
        {
            id: 'translator',
            title: 'AI Translator',
            icon: <Languages className="feature-icon-main" />,
            description: 'Break language barriers with real-time AI translation in 100+ languages worldwide',
            image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80",
            gradient: 'from-blue-500 to-cyan-500',
            delay: 0.3
        },
        {
            id: 'premium',
            title: 'Premium Features',
            icon: <Crown className="feature-icon-main" />,
            description: 'Unlock exclusive features, offline access, and premium travel experiences worldwide',
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
            gradient: 'from-yellow-500 to-orange-500',
            delay: 0.4
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 2) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Floating animation variants
    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const staggerItem = {
        hidden: { opacity: 0, y: 50 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Enhanced Chatbot Component
    const ChatbotWidget = () => (
        <motion.div 
            className="chatbot-widget"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <AnimatePresence>
                {chatbotOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="chatbot-header">
                            <div className="chatbot-info">
                                <div className="bot-avatar">
                                    <Bot className="bot-icon" />
                                    <div className="status-indicator"></div>
                                </div>
                                <div>
                                    <h4>Xperio Assistant</h4>
                                    <p>Online • Ready to help</p>
                                </div>
                            </div>
                            <button 
                                className="close-chatbot"
                                onClick={() => setChatbotOpen(false)}
                            >
                                <X className="close-icon" />
                            </button>
                        </div>

                        <div className="chatbot-messages">
                            <motion.div 
                                className="message bot-message"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="message-avatar">
                                    <Bot className="avatar-icon" />
                                </div>
                                <div className="message-content">
                                    <p>Hi! I'm your Xperio travel assistant. How can I help you explore the world today?</p>
                                    <div className="quick-actions">
                                        <button className="quick-btn" onClick={() => handleNavigation('/food')}>
                                            🍽️ Find Food
                                        </button>
                                        <button className="quick-btn" onClick={() => handleNavigation('/culture')}>
                                            🎭 Explore Culture
                                        </button>
                                        <button className="quick-btn" onClick={() => handleNavigation('/translator')}>
                                            🌐 Translate
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="chatbot-input">
                            <input 
                                type="text" 
                                placeholder="Type your message..."
                                className="chat-input-field"
                            />
                            <button className="send-btn">
                                <SendHorizontal className="send-icon" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="chatbot-trigger"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setChatbotOpen(!chatbotOpen)}
                animate={{ 
                    y: [0, -10, 0],
                    transition: { duration: 2, repeat: Infinity }
                }}
            >
                <Bot className="chatbot-icon" />
                <motion.div 
                    className="notification-badge"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        transition: { duration: 2, repeat: Infinity }
                    }}
                >
                    1
                </motion.div>
                <div className="pulse-ring"></div>
            </motion.button>
        </motion.div>
    );

    return (
        <>
            <ProfessionalNavbar />
            
            <div className="homepage-container">
                {/* Enhanced Hero Section with Premium Travel Background[25] */}
                <section className="hero-section">
                    <div className="hero-background">
                        <div className="hero-image" style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80)'
                        }} />
                        <div className="hero-overlay"></div>
                        <div className="hero-particles"></div>
                        <div className="floating-elements">
                            <motion.div className="floating-orb orb-1" variants={floatingVariants} animate="animate" />
                            <motion.div className="floating-orb orb-2" variants={floatingVariants} animate="animate" />
                            <motion.div className="floating-orb orb-3" variants={floatingVariants} animate="animate" />
                        </div>
                    </div>

                    <div className="hero-content">
                        <div className="hero-container">
                            <motion.div 
                                className="hero-text"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <motion.div 
                                    className="hero-badge"
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Globe className="badge-icon" />
                                    <span>Powered by Advanced AI</span>
                                    <motion.div 
                                        className="badge-sparkle"
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    >
                                        ✨
                                    </motion.div>
                                </motion.div>
                                
                                <motion.h1 
                                    className="hero-title"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    Discover the World
                                    <motion.span 
                                        className="title-gradient"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 1.2 }}
                                    >
                                        Like Never Before
                                    </motion.span>
                                </motion.h1>
                                
                                <motion.p 
                                    className="hero-subtitle"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    Experience authentic travel with AI-powered recommendations, real-time translation, 
                                    and insider knowledge from local experts across 500+ destinations worldwide.
                                </motion.p>
                                
                                <motion.div 
                                    className="hero-actions"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.0 }}
                                >
                                    <motion.button 
                                        className="cta-primary"
                                        whileHover={{ 
                                            scale: 1.05, 
                                            y: -3,
                                            boxShadow: "0 20px 40px rgba(102, 126, 234, 0.6)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleNavigation('/food')}
                                    >
                                        <span>Start Your Journey</span>
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowRight className="cta-icon" />
                                        </motion.div>
                                    </motion.button>
                                    
                                    <motion.button 
                                        className="cta-secondary"
                                        whileHover={{ 
                                            scale: 1.05, 
                                            y: -3,
                                            backgroundColor: "rgba(255, 255, 255, 0.2)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleNavigation('/premium')}
                                    >
                                        <Play className="cta-icon" />
                                        <span>Watch Demo</span>
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                            
                            <motion.div 
                                className="hero-visual"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <motion.div 
                                    className="hero-device"
                                    whileHover={{ 
                                        rotateY: 15,
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                    animate={{
                                        y: [0, -10, 0],
                                        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                >
                                    <div 
                                        className="device-screen"
                                        style={{
                                            backgroundImage: 'url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80)'
                                        }}
                                    />
                                    <div className="device-frame"></div>
                                    <div className="device-glow"></div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Enhanced Features Grid Section with Curated Images[44][45][46] */}
                <section className="features-grid-section">
                    <div className="features-container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div 
                                className="section-badge"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Sparkles className="badge-icon" />
                                <span>Explore Features</span>
                            </motion.div>
                            <h2 className="section-title">Everything You Need for Perfect Travel</h2>
                            <p className="section-subtitle">
                                Four powerful modules designed to transform your travel experience
                            </p>
                        </motion.div>

                        <motion.div 
                            className="features-grid-2x2"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.id}
                                    className={`feature-card-main bg-gradient-to-br ${feature.gradient}`}
                                    variants={staggerItem}
                                    whileHover={{ 
                                        y: -15, 
                                        scale: 1.02,
                                        rotateY: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleNavigation(`/${feature.id}`)}
                                    onHoverStart={() => setActiveFeature(index)}
                                >
                                    <div className="feature-image-main">
                                        <motion.img 
                                            src={feature.image} 
                                            alt={feature.title}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                        <div className="feature-overlay-main"></div>
                                        <motion.div 
                                            className="feature-icon-wrapper"
                                            whileHover={{ 
                                                scale: 1.2,
                                                rotate: 360,
                                                transition: { duration: 0.6 }
                                            }}
                                        >
                                            {feature.icon}
                                        </motion.div>
                                        <motion.div
                                            className="feature-shine"
                                            initial={{ x: -100, opacity: 0 }}
                                            whileHover={{ 
                                                x: 300, 
                                                opacity: [0, 1, 0],
                                                transition: { duration: 0.6 }
                                            }}
                                        />
                                    </div>
                                    <div className="feature-content-main">
                                        <h3 className="feature-title-main">{feature.title}</h3>
                                        <p className="feature-description-main">{feature.description}</p>
                                        <motion.div
                                            className="feature-arrow"
                                            whileHover={{ x: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ArrowRight className="arrow-icon" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced Stats Section */}
                <motion.section
                    className="stats-section"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    onViewportEnter={() => setStatsVisible(true)}
                    viewport={{ once: true }}
                >
                    <div className="stats-container">
                        <motion.div 
                            className="stats-grid"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="stat-card"
                                variants={staggerItem}
                                whileHover={{ 
                                    y: -10, 
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div 
                                    className="stat-icon"
                                    whileHover={{ 
                                        rotate: 360,
                                        transition: { duration: 0.6 }
                                    }}
                                >
                                    <Users className="icon" />
                                </motion.div>
                                <motion.div 
                                    className="stat-number"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {userCount.toLocaleString()}+
                                </motion.div>
                                <div className="stat-label">Happy Travelers</div>
                            </motion.div>

                            <motion.div
                                className="stat-card"
                                variants={staggerItem}
                                whileHover={{ 
                                    y: -10, 
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div 
                                    className="stat-icon"
                                    whileHover={{ 
                                        rotate: 360,
                                        transition: { duration: 0.6 }
                                    }}
                                >
                                    <MapPin className="icon" />
                                </motion.div>
                                <motion.div 
                                    className="stat-number"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {cityCount}+
                                </motion.div>
                                <div className="stat-label">Cities Covered</div>
                            </motion.div>

                            <motion.div
                                className="stat-card"
                                variants={staggerItem}
                                whileHover={{ 
                                    y: -10, 
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div 
                                    className="stat-icon"
                                    whileHover={{ 
                                        rotate: 360,
                                        transition: { duration: 0.6 }
                                    }}
                                >
                                    <Star className="icon" />
                                </motion.div>
                                <motion.div 
                                    className="stat-number"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {reviewCount.toLocaleString()}+
                                </motion.div>
                                <div className="stat-label">5-Star Reviews</div>
                            </motion.div>

                            <motion.div
                                className="stat-card"
                                variants={staggerItem}
                                whileHover={{ 
                                    y: -10, 
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div 
                                    className="stat-icon"
                                    whileHover={{ 
                                        rotate: 360,
                                        transition: { duration: 0.6 }
                                    }}
                                >
                                    <Award className="icon" />
                                </motion.div>
                                <motion.div 
                                    className="stat-number"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    99.9%
                                </motion.div>
                                <div className="stat-label">Uptime</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Enhanced Testimonials Section */}
                <section className="testimonials-section">
                    <div className="testimonials-container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title">Loved by Travelers Worldwide</h2>
                            <p className="section-subtitle">
                                Join thousands of happy travelers who trust Xperio for their adventures
                            </p>
                        </motion.div>

                        <div className="testimonials-grid">
                            <AnimatePresence mode="wait">
                                {testimonials.slice(currentTestimonial, currentTestimonial + 2).map((testimonial, index) => (
                                    <motion.div
                                        key={`${currentTestimonial}-${index}`}
                                        className="testimonial-card"
                                        initial={{ opacity: 0, y: 50, rotateX: -15 }}
                                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                        exit={{ opacity: 0, y: -50, rotateX: 15 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ 
                                            y: -10, 
                                            scale: 1.02,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <div className="testimonial-content">
                                            <div className="testimonial-header">
                                                <motion.div 
                                                    className="testimonial-stars"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.5 + i * 0.1 }}
                                                        >
                                                            <Star className="star-testimonial" />
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                                <div className="testimonial-date">{testimonial.date}</div>
                                            </div>
                                            <motion.blockquote 
                                                className="testimonial-text"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                "{testimonial.message}"
                                            </motion.blockquote>
                                            <motion.div 
                                                className="testimonial-author"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                <motion.img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="author-avatar"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                                <div className="author-info">
                                                    <div className="author-name">{testimonial.name}</div>
                                                    <div className="author-role">{testimonial.role}</div>
                                                    <div className="author-location">
                                                        <MapPin className="location-icon" />
                                                        <span>{testimonial.location}</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* Enhanced CTA Section */}
                <section className="cta-section">
                    <div className="cta-container">
                        <motion.div
                            className="cta-content"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div 
                                className="cta-badge"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Plane className="badge-icon" />
                                <span>Ready for Your Next Adventure?</span>
                            </motion.div>
                            <h2 className="cta-title">Start Your Journey Today</h2>
                            <p className="cta-subtitle">
                                Join over 250,000 travelers who trust Xperio to make their adventures unforgettable
                            </p>
                            <motion.div 
                                className="cta-actions"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className="cta-primary large"
                                    variants={staggerItem}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        y: -3,
                                        boxShadow: "0 20px 40px rgba(102, 126, 234, 0.6)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleNavigation('/signup')}
                                >
                                    <span>Get Started Free</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight className="cta-icon" />
                                    </motion.div>
                                </motion.button>
                                <motion.button
                                    className="cta-secondary large"
                                    variants={staggerItem}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        y: -3,
                                        backgroundColor: "rgba(255, 255, 255, 0.2)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleNavigation('/premium')}
                                >
                                    <Crown className="cta-icon" />
                                    <span>Try Premium</span>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Enhanced Chatbot Widget - Bottom Left */}
            <ChatbotWidget />

            <Footer />
        </>
    );
}
