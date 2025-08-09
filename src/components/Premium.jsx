import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, MapPin, Clock, Star, Heart, ArrowRight, Crown, 
  Camera, Share2, Globe, Eye, Phone, Calendar, Users, Award,
  Bot, X, SendHorizontal, MessageCircle, Sparkles, Zap, Check,
  Shield, Headphones, Wifi, Plane, Car, Hotel, CreditCard
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfessionalNavbar from './ProfessionalNavbar';
import AdvancedChatbot from './AdvancedChatbot';
import Footer from './Footer';
import './premium.css';

export function Premium() {
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState('annual');
    const [favorites, setFavorites] = useState(new Set());
    const [chatbotOpen, setChatbotOpen] = useState(false);

    const handleNavigation = (url) => {
        navigate(url);
    };

    const toggleFavorite = (id) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(id)) {
                newFavorites.delete(id);
            } else {
                newFavorites.add(id);
            }
            return newFavorites;
        });
    };

    // Premium plans data
    const pricingPlans = [
        {
            id: 'monthly',
            name: 'Premium Monthly',
            price: '$19.99',
            period: '/month',
            description: 'Perfect for short-term travelers',
            features: [
                'Unlimited AI recommendations',
                'Offline access to all features',
                'Premium customer support',
                'Advanced filters & search',
                'Real-time translation',
                'Priority booking'
            ],
            badge: null,
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'annual',
            name: 'Premium Annual',
            price: '$149.99',
            period: '/year',
            originalPrice: '$239.88',
            description: 'Best value for frequent travelers',
            features: [
                'Everything in Monthly',
                'Personal travel concierge',
                'Exclusive travel deals',
                'VIP airport lounge access',
                'Travel insurance included',
                'Priority customer support',
                '24/7 emergency assistance',
                'Personalized itinerary planning'
            ],
            badge: 'Most Popular',
            gradient: 'from-yellow-500 to-orange-500'
        },
        {
            id: 'lifetime',
            name: 'Premium Lifetime',
            price: '$499.99',
            period: 'one-time',
            description: 'Ultimate travel companion forever',
            features: [
                'Everything in Annual',
                'Lifetime updates & features',
                'Dedicated account manager',
                'Private group access',
                'Early access to new features',
                'Exclusive member events',
                'Custom travel photography',
                'Luxury travel partnerships'
            ],
            badge: 'Best Value',
            gradient: 'from-purple-500 to-pink-500'
        }
    ];

    // Premium features showcase
    const premiumFeatures = [
        {
            id: 1,
            name: "AI-Powered Travel Concierge",
            description: "Get personalized recommendations from our advanced AI that learns your preferences and suggests perfect experiences.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
            icon: <Bot className="feature-icon" />,
            benefits: ['24/7 availability', 'Personalized suggestions', 'Real-time assistance']
        },
        {
            id: 2,
            name: "Exclusive VIP Access",
            description: "Skip the lines and enjoy priority access to premium lounges, restaurants, and exclusive events worldwide.",
            image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80",
            icon: <Crown className="feature-icon" />,
            benefits: ['Airport lounge access', 'Priority reservations', 'VIP treatment']
        },
        {
            id: 3,
            name: "Luxury Travel Insurance",
            description: "Comprehensive travel insurance covering medical, trip cancellation, and luxury item protection worldwide.",
            image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80",
            icon: <Shield className="feature-icon" />,
            benefits: ['Medical coverage', 'Trip protection', 'Emergency assistance']
        },
        {
            id: 4,
            name: "Private Jet & Yacht Bookings",
            description: "Access exclusive private transportation options including jets, yachts, and luxury car services.",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
            icon: <Plane className="feature-icon" />,
            benefits: ['Private jet access', 'Luxury yacht charters', 'Premium car services']
        }
    ];

    // Premium benefits
    const premiumBenefits = [
        {
            icon: <Zap className="benefit-icon" />,
            title: "Lightning Fast Support",
            description: "Get instant help from our premium support team available 24/7"
        },
        {
            icon: <Globe className="benefit-icon" />,
            title: "Global Coverage",
            description: "Access premium features and services in over 195 countries worldwide"
        },
        {
            icon: <Shield className="benefit-icon" />,
            title: "Travel Protection",
            description: "Comprehensive insurance and emergency assistance wherever you go"
        },
        {
            icon: <Crown className="benefit-icon" />,
            title: "VIP Treatment",
            description: "Enjoy exclusive perks and priority access to the best experiences"
        },
        {
            icon: <Headphones className="benefit-icon" />,
            title: "Personal Concierge",
            description: "Dedicated travel expert to plan and enhance your journey"
        },
        {
            icon: <Wifi className="benefit-icon" />,
            title: "Offline Access",
            description: "Use all premium features even without internet connection"
        }
    ];

    // Animation variants
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
                                    <h4>Premium Concierge</h4>
                                    <p>Your personal travel expert</p>
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
                                    <Crown className="avatar-icon" />
                                </div>
                                <div className="message-content">
                                    <p>Welcome to Premium! I'm your dedicated travel concierge. How can I enhance your journey today?</p>
                                    <div className="quick-actions">
                                        <button className="quick-btn">
                                            ✈️ Book Private Jet
                                        </button>
                                        <button className="quick-btn">
                                            🏨 Luxury Hotels
                                        </button>
                                        <button className="quick-btn">
                                            🍾 VIP Experiences
                                        </button>
                                        <button className="quick-btn">
                                            📞 Emergency Support
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="chatbot-input">
                            <input 
                                type="text" 
                                placeholder="Ask about premium features..."
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
                <Crown className="chatbot-icon" />
                <motion.div 
                    className="notification-badge"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        transition: { duration: 2, repeat: Infinity }
                    }}
                >
                    VIP
                </motion.div>
                <div className="pulse-ring"></div>
            </motion.button>
        </motion.div>
    );

    return (
        <>
            <ProfessionalNavbar />
            
            <div className="premium-page">
                {/* Enhanced Premium Hero Section */}
                <motion.section 
                    className="premium-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="premium-hero-background"></div>
                    <div className="premium-hero-overlay"></div>
                    
                    <motion.div 
                        className="premium-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div 
                            className="premium-badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Crown className="badge-icon" />
                            <span>Unlock Premium Experience</span>
                            <Sparkles className="badge-sparkle" />
                        </motion.div>

                        <motion.h1 
                            className="premium-hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Travel Like Royalty
                        </motion.h1>
                        <motion.p 
                            className="premium-hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            Experience the world's most exclusive destinations with VIP access, personal concierge service, 
                            and luxury amenities that transform your journey into an unforgettable adventure.
                        </motion.p>

                        <motion.div 
                            className="premium-hero-actions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                        >
                            <motion.button 
                                className="cta-primary premium-cta"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Crown className="cta-icon" />
                                <span>Start Premium Trial</span>
                            </motion.button>
                            
                            <motion.button 
                                className="cta-secondary premium-cta"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Eye className="cta-icon" />
                                <span>Explore Features</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Premium Features Showcase */}
                <motion.section 
                    className="premium-features-section"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="premium-features-container">
                        <motion.div 
                            className="section-header"
                            variants={staggerItem}
                        >
                            <h2 className="section-title">Exclusive Premium Features</h2>
                            <p className="section-subtitle">
                                Discover luxury travel features designed for the discerning traveler
                            </p>
                        </motion.div>

                        <div className="premium-features-grid">
                            {premiumFeatures.map((feature, index) => (
                                <motion.div
                                    key={feature.id}
                                    className="premium-feature-card"
                                    variants={staggerItem}
                                    whileHover={{ 
                                        y: -10, 
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div 
                                        className="premium-feature-image"
                                        style={{
                                            backgroundImage: `url(${feature.image})`
                                        }}
                                    >
                                        <div className="premium-feature-overlay">
                                            <div className="premium-feature-icon">
                                                {feature.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="premium-feature-content">
                                        <h3 className="premium-feature-title">{feature.name}</h3>
                                        <p className="premium-feature-description">{feature.description}</p>
                                        
                                        <div className="premium-feature-benefits">
                                            {feature.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="premium-benefit-item">
                                                    <Check className="benefit-check" />
                                                    <span>{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Premium Benefits Section */}
                <motion.section 
                    className="premium-benefits-section"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="premium-benefits-container">
                        <motion.div 
                            className="section-header"
                            variants={staggerItem}
                        >
                            <h2 className="section-title">Why Choose Premium?</h2>
                            <p className="section-subtitle">
                                Premium membership unlocks a world of exclusive benefits and VIP treatment
                            </p>
                        </motion.div>

                        <div className="premium-benefits-grid">
                            {premiumBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="premium-benefit-card"
                                    variants={staggerItem}
                                    whileHover={{ 
                                        y: -5, 
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="premium-benefit-icon-wrapper">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="premium-benefit-title">{benefit.title}</h3>
                                    <p className="premium-benefit-description">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Premium Pricing Section */}
                <motion.section 
                    className="premium-pricing-section"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="premium-pricing-container">
                        <motion.div 
                            className="section-header"
                            variants={staggerItem}
                        >
                            <h2 className="section-title">Choose Your Premium Plan</h2>
                            <p className="section-subtitle">
                                Select the perfect plan for your travel lifestyle and unlock exclusive benefits
                            </p>
                        </motion.div>

                        <div className="premium-pricing-grid">
                            {pricingPlans.map((plan, index) => (
                                <motion.div
                                    key={plan.id}
                                    className={`premium-pricing-card ${plan.badge ? 'featured' : ''}`}
                                    variants={staggerItem}
                                    whileHover={{ 
                                        y: -10, 
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {plan.badge && (
                                        <div className="premium-pricing-badge">
                                            {plan.badge}
                                        </div>
                                    )}

                                    <div className="premium-pricing-header">
                                        <h3 className="premium-pricing-name">{plan.name}</h3>
                                        <div className="premium-pricing-price">
                                            <span className="price-amount">{plan.price}</span>
                                            <span className="price-period">{plan.period}</span>
                                        </div>
                                        {plan.originalPrice && (
                                            <div className="premium-pricing-original">
                                                <span className="original-price">{plan.originalPrice}</span>
                                                <span className="savings">Save 37%</span>
                                            </div>
                                        )}
                                        <p className="premium-pricing-description">{plan.description}</p>
                                    </div>

                                    <div className="premium-pricing-features">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="premium-pricing-feature">
                                                <Check className="feature-check" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.button 
                                        className={`premium-pricing-button ${plan.badge ? 'featured-button' : ''}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Crown className="button-icon" />
                                        Get {plan.name}
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Enhanced Chatbot Widget - Bottom Left */}
            <ChatbotWidget />

            <Footer />
        </>
    );
}
export default Premium;