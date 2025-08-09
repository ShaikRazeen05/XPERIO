import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, MapPin, Clock, Star, Heart, ArrowRight, Languages, 
  Camera, Share2, Globe, Eye, Phone, Calendar, Users, Award, Volume2,
  Bot, X, SendHorizontal, MessageCircle, Sparkles, Mic, MicOff, Copy,
  ArrowRightLeft, Headphones, BookOpen, Download, Upload
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfessionalNavbar from './ProfessionalNavbar';
import AdvancedChatbot from './AdvancedChatbot';
import Footer from './Footer';
import './translator.css';

export function Translator() {
    const navigate = useNavigate();
    const [selectedFromLang, setSelectedFromLang] = useState('en');
    const [selectedToLang, setSelectedToLang] = useState('es');
    const [translationMode, setTranslationMode] = useState('text');
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [favorites, setFavorites] = useState(new Set());
    const [chatbotOpen, setChatbotOpen] = useState(false);
    const [recentTranslations, setRecentTranslations] = useState([]);

    const handleNavigation = (url) => {
        navigate(url);
    };

    // Popular languages with flags[1][2][5]
    const popularLanguages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Spanish', flag: '🇪🇸' },
        { code: 'fr', name: 'French', flag: '🇫🇷' },
        { code: 'de', name: 'German', flag: '🇩🇪' },
        { code: 'it', name: 'Italian', flag: '🇮🇹' },
        { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
        { code: 'ru', name: 'Russian', flag: '🇷🇺' },
        { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
        { code: 'ko', name: 'Korean', flag: '🇰🇷' },
        { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
        { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
        { code: 'hi', name: 'Hindi', flag: '🇮🇳' }
    ];

    // Translation modes[1][5][8]
    const translationModes = [
        { id: 'text', label: 'Text Translation', icon: <Languages className="mode-icon" />, description: 'Type or paste text to translate' },
        { id: 'voice', label: 'Voice Translation', icon: <Mic className="mode-icon" />, description: 'Speak and get instant translation' },
        { id: 'camera', label: 'Camera Translation', icon: <Camera className="mode-icon" />, description: 'Translate text from images' },
        { id: 'conversation', label: 'Conversation Mode', icon: <Users className="mode-icon" />, description: 'Real-time bilingual chat' }
    ];

    // Premium features showcase[1][5][6]
    const translatorFeatures = [
        {
            id: 1,
            name: "Real-Time Voice Translation",
            description: "Speak naturally and get instant translation with voice recognition powered by advanced AI. Perfect for conversations and meetings.",
            image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80",
            icon: <Mic className="feature-icon" />,
            benefits: ['Voice recognition', 'Natural speech', 'Real-time results']
        },
        {
            id: 2,
            name: "Camera Translation",
            description: "Point your camera at any text - signs, menus, documents - and get instant translations overlaid on your screen in augmented reality.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            icon: <Camera className="feature-icon" />,
            benefits: ['AR overlay', 'Text recognition', 'Instant translation']
        },
        {
            id: 3,
            name: "Document Translation",
            description: "Upload and translate entire documents while preserving formatting. Support for PDF, Word, PowerPoint, and more file types.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
            icon: <Upload className="feature-icon" />,
            benefits: ['Format preserved', 'Multiple file types', 'Bulk processing']
        },
        {
            id: 4,
            name: "Offline Translation",
            description: "Download language packs and translate without internet connection. Perfect for travel and areas with poor connectivity.",
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
            icon: <Download className="feature-icon" />,
            benefits: ['No internet needed', 'Travel ready', 'Fast processing']
        }
    ];

    // Recent translations example data
    const sampleTranslations = [
        { from: 'Hello, how are you?', to: 'Hola, ¿cómo estás?', fromLang: 'en', toLang: 'es' },
        { from: 'Where is the restaurant?', to: 'Où est le restaurant?', fromLang: 'en', toLang: 'fr' },
        { from: 'Thank you very much', to: 'Vielen Dank', fromLang: 'en', toLang: 'de' }
    ];

    const handleTranslate = () => {
        // Simple demo translation
        if (inputText.trim()) {
            const newTranslation = {
                from: inputText,
                to: `[Translated] ${inputText}`,
                fromLang: selectedFromLang,
                toLang: selectedToLang
            };
            setTranslatedText(newTranslation.to);
            setRecentTranslations(prev => [newTranslation, ...prev.slice(0, 4)]);
        }
    };

    const swapLanguages = () => {
        setSelectedFromLang(selectedToLang);
        setSelectedToLang(selectedFromLang);
        setInputText(translatedText);
        setTranslatedText(inputText);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

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
                                    <h4>Translation AI</h4>
                                    <p>Your multilingual assistant</p>
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
                                    <Languages className="avatar-icon" />
                                </div>
                                <div className="message-content">
                                    <p>I can help you with translations in 100+ languages! What would you like to translate today?</p>
                                    <div className="quick-actions">
                                        <button className="quick-btn" onClick={() => setTranslationMode('text')}>
                                            💬 Text Translation
                                        </button>
                                        <button className="quick-btn" onClick={() => setTranslationMode('voice')}>
                                            🎤 Voice Translation
                                        </button>
                                        <button className="quick-btn" onClick={() => setTranslationMode('camera')}>
                                            📷 Camera Translate
                                        </button>
                                        <button className="quick-btn" onClick={() => setTranslationMode('conversation')}>
                                            👥 Conversation
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="chatbot-input">
                            <input 
                                type="text" 
                                placeholder="Ask about translation features..."
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
                <Languages className="chatbot-icon" />
                <motion.div 
                    className="notification-badge"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        transition: { duration: 2, repeat: Infinity }
                    }}
                >
                    AI
                </motion.div>
                <div className="pulse-ring"></div>
            </motion.button>
        </motion.div>
    );

    return (
        <>
            <ProfessionalNavbar />
            
            <div className="translator-page">
                {/* Enhanced Translator Hero Section */}
                <motion.section 
                    className="translator-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="translator-hero-background"></div>
                    <div className="translator-hero-overlay"></div>
                    
                    <motion.div 
                        className="translator-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1 
                            className="translator-hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Break Language Barriers
                        </motion.h1>
                        <motion.p 
                            className="translator-hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Experience the world's most advanced AI-powered translation service. 
                            Translate text, voice, and images in real-time across 100+ languages with perfect accuracy.
                        </motion.p>

                        {/* Translation Mode Selector */}
                        <motion.div 
                            className="translation-modes"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            variants={staggerContainer}
                        >
                            {translationModes.map((mode, index) => (
                                <motion.button
                                    key={mode.id}
                                    className={`translation-mode-btn ${translationMode === mode.id ? 'active' : ''}`}
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setTranslationMode(mode.id)}
                                >
                                    {mode.icon}
                                    <div className="mode-content">
                                        <span className="mode-label">{mode.label}</span>
                                        <span className="mode-description">{mode.description}</span>
                                    </div>
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Enhanced Translation Interface */}
                <motion.section 
                    className="translation-interface"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="translation-container">
                        <div className="translation-card">
                            {/* Language Selectors */}
                            <div className="language-selectors">
                                <div className="language-selector">
                                    <select 
                                        value={selectedFromLang}
                                        onChange={(e) => setSelectedFromLang(e.target.value)}
                                        className="language-select"
                                    >
                                        {popularLanguages.map(lang => (
                                            <option key={lang.code} value={lang.code}>
                                                {lang.flag} {lang.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <motion.button 
                                    className="swap-languages-btn"
                                    whileHover={{ scale: 1.1, rotate: 180 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={swapLanguages}
                                >
                                    <ArrowRightLeft className="swap-icon" />
                                </motion.button>

                                <div className="language-selector">
                                    <select 
                                        value={selectedToLang}
                                        onChange={(e) => setSelectedToLang(e.target.value)}
                                        className="language-select"
                                    >
                                        {popularLanguages.map(lang => (
                                            <option key={lang.code} value={lang.code}>
                                                {lang.flag} {lang.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Translation Areas */}
                            <div className="translation-areas">
                                <div className="input-area">
                                    <div className="area-header">
                                        <span className="area-title">Enter text to translate</span>
                                        <div className="area-controls">
                                            <motion.button 
                                                className={`control-btn ${isRecording ? 'recording' : ''}`}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => setIsRecording(!isRecording)}
                                            >
                                                {isRecording ? <MicOff /> : <Mic />}
                                            </motion.button>
                                            <motion.button 
                                                className="control-btn"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Camera />
                                            </motion.button>
                                        </div>
                                    </div>
                                    <textarea
                                        className="translation-input"
                                        placeholder="Type your text here..."
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        rows={4}
                                    />
                                </div>

                                <div className="output-area">
                                    <div className="area-header">
                                        <span className="area-title">Translation</span>
                                        <div className="area-controls">
                                            <motion.button 
                                                className="control-btn"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => copyToClipboard(translatedText)}
                                            >
                                                <Copy />
                                            </motion.button>
                                            <motion.button 
                                                className="control-btn"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Volume2 />
                                            </motion.button>
                                            <motion.button 
                                                className="control-btn"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Share2 />
                                            </motion.button>
                                        </div>
                                    </div>
                                    <div className="translation-output">
                                        {translatedText || 'Translation will appear here...'}
                                    </div>
                                </div>
                            </div>

                            {/* Translate Button */}
                            <motion.button 
                                className="translate-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleTranslate}
                                disabled={!inputText.trim()}
                            >
                                <Languages className="translate-icon" />
                                Translate Now
                            </motion.button>
                        </div>
                    </div>
                </motion.section>

                {/* Translator Features Showcase */}
                <motion.section 
                    className="translator-features-section"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="translator-features-container">
                        <motion.div 
                            className="section-header"
                            variants={staggerItem}
                        >
                            <h2 className="section-title">Advanced Translation Features</h2>
                            <p className="section-subtitle">
                                Powered by cutting-edge AI technology for the most accurate translations
                            </p>
                        </motion.div>

                        <div className="translator-features-grid">
                            {translatorFeatures.map((feature, index) => (
                                <motion.div
                                    key={feature.id}
                                    className="translator-feature-card"
                                    variants={staggerItem}
                                    whileHover={{ 
                                        y: -10, 
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div 
                                        className="translator-feature-image"
                                        style={{
                                            backgroundImage: `url(${feature.image})`
                                        }}
                                    >
                                        <div className="translator-feature-overlay">
                                            <div className="translator-feature-icon">
                                                {feature.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="translator-feature-content">
                                        <h3 className="translator-feature-title">{feature.name}</h3>
                                        <p className="translator-feature-description">{feature.description}</p>
                                        
                                        <div className="translator-feature-benefits">
                                            {feature.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="translator-benefit-item">
                                                    <Sparkles className="benefit-check" />
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

                {/* Recent Translations */}
                {recentTranslations.length > 0 && (
                    <motion.section 
                        className="recent-translations-section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="recent-translations-container">
                            <h3 className="recent-title">Recent Translations</h3>
                            <div className="recent-translations-list">
                                {recentTranslations.map((translation, index) => (
                                    <motion.div 
                                        key={index}
                                        className="recent-translation-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="translation-pair">
                                            <div className="original-text">{translation.from}</div>
                                            <ArrowRight className="translation-arrow" />
                                            <div className="translated-text">{translation.to}</div>
                                        </div>
                                        <div className="translation-langs">
                                            {popularLanguages.find(l => l.code === translation.fromLang)?.flag} → {popularLanguages.find(l => l.code === translation.toLang)?.flag}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}
            </div>

            {/* Enhanced Chatbot Widget - Bottom Left */}
            <ChatbotWidget />

            <Footer />
        </>
    );
}
export default Translator;