import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, MapPin, Clock, Star, Heart, ArrowRight, Utensils, 
  Coffee, Pizza, Sandwich, Camera, Share2, Globe, Eye, Phone,
  Bot, X, SendHorizontal, MessageCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfessionalNavbar from './ProfessionalNavbar';
import AdvancedChatbot from './AdvancedChatbot';
import Footer from './Footer';
import './food.css';

export function Food() {
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

    // Food discovery data with premium images[1][2][3]
    const foodFilters = [
        { id: 'all', label: 'All Cuisine', icon: '🍽️' },
        { id: 'street', label: 'Street Food', icon: '🌮' },
        { id: 'fine-dining', label: 'Fine Dining', icon: '🍾' },
        { id: 'local', label: 'Local Favorites', icon: '🏪' },
        { id: 'desserts', label: 'Desserts', icon: '🧁' },
        { id: 'vegan', label: 'Plant-Based', icon: '🥗' },
        { id: 'seafood', label: 'Seafood', icon: '🦞' },
        { id: 'bbq', label: 'BBQ & Grill', icon: '🔥' }
    ];

    const foodDiscoveries = [
        {
            id: 1,
            name: "Nonna's Secret Pasta",
            description: "Authentic Italian pasta made with 100-year-old family recipe. Hidden gem in Little Italy with handmade pasta daily.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80",
            category: 'fine-dining',
            rating: 4.9,
            distance: "0.8 km",
            priceRange: "$$-$$$",
            tags: ['Authentic', 'Handmade', 'Family Recipe'],
            location: "Little Italy District",
            specialty: "Truffle Carbonara"
        },
        {
            id: 2,
            name: "Street Taco Paradise",
            description: "Award-winning street tacos with locally sourced ingredients. Experience authentic Mexican flavors from this food truck legend.",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
            category: 'street',
            rating: 4.8,
            distance: "1.2 km",
            priceRange: "$",
            tags: ['Street Food', 'Authentic', 'Local Favorite'],
            location: "Food Truck Plaza",
            specialty: "Carnitas Tacos"
        },
        {
            id: 3,
            name: "Ocean's Bounty",
            description: "Fresh daily catch prepared by master sushi chefs. Premium seafood experience with sustainable sourcing practices.",
            image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=800&q=80",
            category: 'seafood',
            rating: 4.9,
            distance: "2.1 km",
            priceRange: "$$$-$$$$",
            tags: ['Fresh', 'Sustainable', 'Premium'],
            location: "Harbor District",
            specialty: "Omakase Sushi"
        },
        {
            id: 4,
            name: "Plant Power Bowl",
            description: "Revolutionary plant-based cuisine that redefines vegan dining. Innovative flavors using locally grown organic produce.",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
            category: 'vegan',
            rating: 4.7,
            distance: "0.9 km",
            priceRange: "$$",
            tags: ['Vegan', 'Organic', 'Innovative'],
            location: "Green Quarter",
            specialty: "Buddha Bowl Supreme"
        },
        {
            id: 5,
            name: "Sweet Dreams Patisserie",
            description: "French-inspired desserts crafted by award-winning pastry chefs. Artisanal sweets that are almost too beautiful to eat.",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
            category: 'desserts',
            rating: 4.8,
            distance: "1.5 km",
            priceRange: "$$",
            tags: ['Artisanal', 'French', 'Award-winning'],
            location: "Arts District",
            specialty: "Lavender Macarons"
        },
        {
            id: 6,
            name: "Smokehouse Legend",
            description: "Low and slow BBQ perfection with signature dry rubs and house-made sauces. Traditional smoking techniques meet modern flavors.",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            category: 'bbq',
            rating: 4.8,
            distance: "3.2 km",
            priceRange: "$$",
            tags: ['BBQ', 'Traditional', 'House-made'],
            location: "Industrial Quarter",
            specialty: "Smoked Brisket"
        },
        {
            id: 7,
            name: "Grandma's Kitchen",
            description: "Home-style comfort food that brings back childhood memories. Traditional recipes passed down through generations.",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            category: 'local',
            rating: 4.6,
            distance: "0.7 km",
            priceRange: "$-$$",
            tags: ['Comfort Food', 'Traditional', 'Family'],
            location: "Old Town",
            specialty: "Chicken & Dumplings"
        },
        {
            id: 8,
            name: "Spice Route Express",
            description: "Authentic Indian street food with bold spices and traditional cooking methods. Experience the flavors of Mumbai's streets.",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            category: 'street',
            rating: 4.7,
            distance: "1.8 km",
            priceRange: "$",
            tags: ['Indian', 'Spicy', 'Authentic'],
            location: "Spice Market",
            specialty: "Butter Chicken"
        }
    ];

    const filteredFood = foodDiscoveries.filter(food => {
        const matchesFilter = selectedFilter === 'all' || food.category === selectedFilter;
        const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            food.description.toLowerCase().includes(searchQuery.toLowerCase());
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
                                    <h4>Food Discovery AI</h4>
                                    <p>Finding perfect meals for you</p>
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
                                    <Utensils className="avatar-icon" />
                                </div>
                                <div className="message-content">
                                    <p>I'm your personal food discovery assistant! I can help you find:</p>
                                    <div className="quick-actions">
                                        <button className="quick-btn" onClick={() => setSelectedFilter('street')}>
                                            🌮 Street Food
                                        </button>
                                        <button className="quick-btn" onClick={() => setSelectedFilter('fine-dining')}>
                                            🍾 Fine Dining
                                        </button>
                                        <button className="quick-btn" onClick={() => setSelectedFilter('vegan')}>
                                            🥗 Plant-Based
                                        </button>
                                        <button className="quick-btn" onClick={() => setSelectedFilter('desserts')}>
                                            🧁 Desserts
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="chatbot-input">
                            <input 
                                type="text" 
                                placeholder="What food are you craving?"
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
                <Utensils className="chatbot-icon" />
                <motion.div 
                    className="notification-badge"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        transition: { duration: 2, repeat: Infinity }
                    }}
                >
                    3
                </motion.div>
                <div className="pulse-ring"></div>
            </motion.button>
        </motion.div>
    );

    return (
        <>
            <ProfessionalNavbar />
            
            <div className="food-page">
                {/* Enhanced Food Hero Section */}
                <motion.section 
                    className="food-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="food-hero-background"></div>
                    <div className="food-hero-overlay"></div>
                    
                    <motion.div 
                        className="food-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1 
                            className="food-hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Discover Amazing Food
                        </motion.h1>
                        <motion.p 
                            className="food-hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Explore authentic local cuisine, hidden gems, and culinary adventures powered by AI recommendations
                        </motion.p>

                        {/* Enhanced Search Bar */}
                        <motion.div 
                            className="food-search-container"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <input
                                type="text"
                                placeholder="Search for cuisine, restaurant, or dish..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="food-search-input"
                            />
                            <Search className="search-icon" />
                        </motion.div>

                        {/* Enhanced Filter Buttons */}
                        <motion.div 
                            className="food-filters"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                        >
                            {foodFilters.map((filter, index) => (
                                <motion.button
                                    key={filter.id}
                                    className={`food-filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
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

                {/* Enhanced Food Grid */}
                <motion.section 
                    className="food-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="food-grid">
                        {filteredFood.map((food, index) => (
                            <motion.div
                                key={food.id}
                                className="food-card"
                                variants={staggerItem}
                                whileHover={{ 
                                    y: -8, 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div 
                                    className="food-card-image"
                                    style={{
                                        backgroundImage: `url(${food.image})`,
                                        height: '250px'
                                    }}
                                >
                                    <motion.button
                                        className={`favorite-btn ${favorites.has(food.id) ? 'favorited' : ''}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(food.id);
                                        }}
                                    >
                                        <Heart className="heart-icon" />
                                    </motion.button>

                                    <div className="food-card-overlay">
                                        <div className="food-rating">
                                            <Star className="star-icon" />
                                            <span>{food.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-card-content">
                                    <div className="food-card-header">
                                        <h3 className="food-card-title">{food.name}</h3>
                                        <span className="food-card-specialty">{food.specialty}</span>
                                    </div>

                                    <p className="food-card-description">{food.description}</p>

                                    <div className="food-card-tags">
                                        {food.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="food-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="food-card-info">
                                        <div className="info-item">
                                            <MapPin className="food-icon" />
                                            <span>{food.distance}</span>
                                        </div>
                                        <div className="info-item">
                                            <Clock className="food-icon" />
                                            <span>{food.priceRange}</span>
                                        </div>
                                        <div className="info-item">
                                            <Globe className="food-icon" />
                                            <span>{food.location}</span>
                                        </div>
                                    </div>

                                    <div className="food-card-actions">
                                        <motion.button 
                                            className="action-btn primary-action"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Eye className="action-icon" />
                                            View Details
                                        </motion.button>
                                        <motion.button 
                                            className="action-btn secondary-action"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Phone className="action-icon" />
                                            Call Now
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* No Results Message */}
                {filteredFood.length === 0 && (
                    <motion.div 
                        className="no-results"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Utensils className="no-results-icon" />
                        <h3>No food discoveries found</h3>
                        <p>Try adjusting your filters or search terms to find amazing food experiences!</p>
                    </motion.div>
                )}
            </div>

            {/* Enhanced Chatbot Widget - Bottom Left */}
            <ChatbotWidget />

            <Footer />
        </>
    );
}
export default Food;