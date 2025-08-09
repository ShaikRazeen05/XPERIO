import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, MapPin, Clock, Star, Heart, ArrowRight, Palette, 
  Camera, Share2, Globe, Eye, Phone, Calendar, Users, Award,
  Bot, X, SendHorizontal, MessageCircle, Music, Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfessionalNavbar from './ProfessionalNavbar';
import AdvancedChatbot from './AdvancedChatbot';
import Footer from './Footer';
import './culture.css';

export function Culture() {
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
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

    // Culture discovery data with premium images
    const cultureFilters = [
        { id: 'all', label: 'All Experiences', icon: '🎭' },
        { id: 'festivals', label: 'Festivals', icon: '🎊' },
        { id: 'art', label: 'Art & Museums', icon: '🖼️' },
        { id: 'traditions', label: 'Traditions', icon: '🏛️' },
        { id: 'music', label: 'Music & Dance', icon: '🎵' },
        { id: 'heritage', label: 'Heritage Sites', icon: '🏺' },
        { id: 'workshops', label: 'Workshops', icon: '✋' },
        { id: 'spiritual', label: 'Spiritual', icon: '🕯️' }
    ];

    const cultureExperiences = [
        {
            id: 1,
            name: "Rajasthan Folk Dance Festival",
            description: "Experience the vibrant colors and rhythmic beats of traditional Rajasthani folk dances. Witness Ghoomar, Kalbeliya, and other mesmerizing performances.",
            image: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?auto=format&fit=crop&w=800&q=80",
            category: 'festivals',
            rating: 4.9,
            distance: "2.1 km",
            duration: "3-4 hours",
            tags: ['Traditional', 'Dance', 'Colorful'],
            location: "Jaipur, Rajasthan",
            specialty: "Ghoomar Dance"
        },
        {
            id: 2,
            name: "Japanese Tea Ceremony Workshop",
            description: "Learn the ancient art of Japanese tea ceremony in an authentic setting. Master the precise movements and understand the philosophy behind this meditative practice.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
            category: 'workshops',
            rating: 4.8,
            distance: "1.8 km",
            duration: "2 hours",
            tags: ['Zen', 'Traditional', 'Meditation'],
            location: "Kyoto Tea House",
            specialty: "Matcha Ceremony"
        },
        {
            id: 3,
            name: "Ancient Greek Theater Experience",
            description: "Watch classic Greek tragedies performed in an authentic ancient amphitheater. Experience drama the way it was meant to be experienced 2,500 years ago.",
            image: "https://images.unsplash.com/photo-1555407945-ac1d7002b6bc?auto=format&fit=crop&w=800&q=80",
            category: 'art',
            rating: 4.9,
            distance: "3.5 km",
            duration: "2.5 hours",
            tags: ['Ancient', 'Theater', 'Historic'],
            location: "Athens, Greece",
            specialty: "Greek Tragedy"
        },
        {
            id: 4,
            name: "Balinese Hindu Temple Ceremony",
            description: "Participate in authentic Balinese Hindu rituals and ceremonies. Learn about ancient traditions and spiritual practices in stunning temple settings.",
            image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80",
            category: 'spiritual',
            rating: 4.7,
            distance: "1.2 km",
            duration: "4 hours",
            tags: ['Spiritual', 'Hindu', 'Sacred'],
            location: "Ubud, Bali",
            specialty: "Temple Blessing"
        },
        {
            id: 5,
            name: "Moroccan Artisan Workshop",
            description: "Learn traditional Moroccan crafts from master artisans. Create beautiful pottery, weave textiles, and work with intricate metalwork designs.",
            image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?auto=format&fit=crop&w=800&q=80",
            category: 'workshops',
            rating: 4.8,
            distance: "2.3 km",
            duration: "5 hours",
            tags: ['Crafts', 'Artisan', 'Hands-on'],
            location: "Fez, Morocco",
            specialty: "Pottery Making"
        },
        {
            id: 6,
            name: "Aboriginal Dreamtime Stories",
            description: "Listen to ancient Aboriginal dreamtime stories under the stars. Learn about the world's oldest continuous culture through oral traditions.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
            category: 'traditions',
            rating: 4.9,
            distance: "4.1 km",
            duration: "3 hours",
            tags: ['Indigenous', 'Stories', 'Ancient'],
            location: "Uluru, Australia",
            specialty: "Dreamtime Tales"
        },
        {
            id: 7,
            name: "Flamenco Guitar & Dance Class",
            description: "Immerse yourself in the passionate world of flamenco. Learn the basic steps of this UNESCO World Heritage art form from master dancers.",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
            category: 'music',
            rating: 4.7,
            distance: "1.9 km",
            duration: "2 hours",
            tags: ['Flamenco', 'Dance', 'UNESCO'],
            location: "Seville, Spain",
            specialty: "Flamenco Dance"
        },
        {
            id: 8,
            name: "Buddhist Monastery Stay",
            description: "Experience monastic life in a traditional Buddhist monastery. Participate in meditation sessions, chanting, and learn about Buddhist philosophy.",
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
            category: 'spiritual',
            rating: 4.8,
            distance: "5.2 km",
            duration: "Full Day",
            tags: ['Buddhist', 'Meditation', 'Monastery'],
            location: "Dharamshala, India",
            specialty: "Meditation Retreat"
        }
    ];

    const filteredCulture = cultureExperiences.filter(experience => {
        const matchesFilter = selectedFilter === 'all' || experience.category === selectedFilter;
        const matchesSearch = experience.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            experience.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

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
                                    <h4>Culture Guide AI</h4>
                                    <p>Explore world cultures with me</p>
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
                                    <Palette className="avatar-icon" />
                                </div>
                                <div className="message-content">
                                    <p>Welcome to cultural discovery! I can help you find authentic experiences:</p>
                                    <div className="quick-actions">
                                        <button className="quick-btn" onClick={() => setSelectedFilter('festivals')}>
                                            🎊 Festivals
                                        </button>
                                        <button className="quick-btn" onClick={() => setSelectedFilter('art')}>
                                            🖼️ Art & Museums
                                        </button>
                                        <button className="quick-btn" onClick={() => setSelectedFilter('music')}>
                                            🎵 Music & Dance
                                        </button>
                                        <button className="quick-btn" onClick={() => setSelectedFilter('spiritual')}>
                                            🕯️ Spiritual
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="chatbot-input">
                            <input 
                                type="text" 
                                placeholder="What cultural experience interests you?"
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
                <Palette className="chatbot-icon" />
                <motion.div 
                    className="notification-badge"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        transition: { duration: 2, repeat: Infinity }
                    }}
                >
                    2
                </motion.div>
                <div className="pulse-ring"></div>
            </motion.button>
        </motion.div>
    );

    return (
        <>
            <ProfessionalNavbar />
            
            <div className="culture-page">
                {/* Enhanced Culture Hero Section */}
                <motion.section 
                    className="culture-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="culture-hero-background"></div>
                    <div className="culture-hero-overlay"></div>
                    
                    <motion.div 
                        className="culture-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1 
                            className="culture-hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Immerse in World Cultures
                        </motion.h1>
                        <motion.p 
                            className="culture-hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Discover authentic cultural experiences, traditional arts, spiritual practices, and heritage sites. 
                            Connect with local communities and understand diverse traditions around the world.
                        </motion.p>

                        {/* Enhanced Search Bar */}
                        <motion.div 
                            className="culture-search-container"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <input
                                type="text"
                                placeholder="Search for cultural experiences, traditions, or festivals..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="culture-search-input"
                            />
                            <Search className="search-icon" />
                        </motion.div>

                        {/* Enhanced Filter Buttons */}
                        <motion.div 
                            className="culture-filters"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                        >
                            {cultureFilters.map((filter, index) => (
                                <motion.button
                                    key={filter.id}
                                    className={`culture-filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedFilter(filter.id)}
                                >
                                    <span className="filter-emoji">{filter.icon}</span>
                                    {filter.label}
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Enhanced Culture Grid */}
                <motion.section 
                    className="culture-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="culture-grid">
                        {filteredCulture.map((experience, index) => (
                            <motion.div
                                key={experience.id}
                                className="culture-card"
                                variants={staggerItem}
                                whileHover={{ 
                                    y: -8, 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div 
                                    className="culture-card-image"
                                    style={{
                                        backgroundImage: `url(${experience.image})`,
                                        height: '280px'
                                    }}
                                >
                                    <motion.button
                                        className={`favorite-btn ${favorites.has(experience.id) ? 'favorited' : ''}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(experience.id);
                                        }}
                                    >
                                        <Heart className="heart-icon" />
                                    </motion.button>

                                    <div className="culture-card-overlay">
                                        <div className="culture-rating">
                                            <Star className="star-icon" />
                                            <span>{experience.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="culture-card-content">
                                    <div className="culture-card-header">
                                        <h3 className="culture-card-title">{experience.name}</h3>
                                        <span className="culture-card-specialty">{experience.specialty}</span>
                                    </div>

                                    <p className="culture-card-description">{experience.description}</p>

                                    <div className="culture-card-tags">
                                        {experience.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="culture-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="culture-card-info">
                                        <div className="info-item">
                                            <MapPin className="culture-icon" />
                                            <span>{experience.distance}</span>
                                        </div>
                                        <div className="info-item">
                                            <Clock className="culture-icon" />
                                            <span>{experience.duration}</span>
                                        </div>
                                        <div className="info-item">
                                            <Globe className="culture-icon" />
                                            <span>{experience.location}</span>
                                        </div>
                                    </div>

                                    <div className="culture-card-actions">
                                        <motion.button 
                                            className="action-btn primary-action"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Eye className="action-icon" />
                                            Experience Now
                                        </motion.button>
                                        <motion.button 
                                            className="action-btn secondary-action"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Calendar className="action-icon" />
                                            Book Tour
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* No Results Message */}
                {filteredCulture.length === 0 && (
                    <motion.div 
                        className="no-results"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Palette className="no-results-icon" />
                        <h3>No cultural experiences found</h3>
                        <p>Try adjusting your filters or search terms to discover amazing cultural adventures!</p>
                    </motion.div>
                )}
            </div>

            {/* Enhanced Chatbot Widget - Bottom Left */}
            <ChatbotWidget />

            <Footer />
        </>
    );
}
export default Culture;