import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Star, MapPin, Play, Users, TrendingUp, ArrowRight, Heart, Crown } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

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
            role: "Travel Blogger",
            rating: 5
        },
        {
            name: "Rahul Mehra",
            message: "The cultural insights and easy translations helped me navigate new cities with confidence.",
            role: "Business Traveler",
            rating: 5
        },
        {
            name: "Lara Thomas",
            message: "Loved discovering hidden street food gems. Highly recommended!",
            role: "Food Enthusiast",
            rating: 5
        },
        {
            name: "Rai M.",
            message: "Xperio made my trip to Hyderabad unforgettable. I discovered hidden food spots that even locals didn't know about. The translator feature was a life-saver!",
            role: "Founder of ArtisanMarket",
            rating: 5
        },
        {
            name: "Mike P.",
            message: "I never thought a web app could make exploring my own city so exciting. Xperio's cultural insights and clean interface are game changers.",
            role: "GreenFuture Foundation",
            rating: 5
        },
        {
            name: "Sadiya",
            message: "From street food recommendations to immersive cultural clips, Xperio nails it. The premium content is worth every rupee!",
            role: "Employee NovaTech",
            rating: 5
        },
        {
            name: "Sara L.",
            message: "The app's cultural modules are stunning. I learned about local traditions before even arriving. It made my experience richer.",
            role: "Influencer",
            rating: 5
        },
        {
            name: "Jack",
            message: "The live translator helped me interact with vendors during my trip. That feature alone makes Xperio a must-have!",
            role: "Teacher",
            rating: 5
        },
        {
            name: "Raj.",
            message: "The Xperio dashboard felt like my personal travel assistant. I found local mosques, food stalls, and historical sites in seconds.",
            role: "Travel influencer",
            rating: 5
        }
    ];

    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left: Text Content */}
                        <motion.div 
                            className="flex-1 max-w-2xl"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Small Badge */}
                            <motion.div 
                                className="flex items-center mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg gap-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                                    <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                    Discover Local Food Culture
                                </span>
                            </motion.div>
                            
                            <motion.h1 
                                className="text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-tight mb-8 text-gray-900"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Taste the{' '}
                                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                                    World
                                </span>{' '}
                                Like a{' '}
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                                    Local
                                </span>
                            </motion.h1>
                            
                            <motion.p 
                                className="text-xl lg:text-2xl text-gray-700 mb-12 leading-relaxed font-body"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Discover authentic street food, cultural experiences, and hidden gems in any city. Your complete companion for culinary adventures.
                            </motion.p>
                            
                            <motion.div 
                                className="flex flex-col sm:flex-row gap-6 mb-12"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.0 }}
                            >
                                <motion.button 
                                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Exploring
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                
                                <motion.button 
                                    className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-bold text-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl"
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Play className="w-6 h-6" />
                                    Watch Demo
                                </motion.button>
                            </motion.div>
                            
                            <motion.div 
                                className="flex flex-col sm:flex-row items-center gap-8 text-lg text-gray-600"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                <span className="flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                                    <MapPin className="w-6 h-6 text-orange-500" />
                                    Available in 200+ cities
                                </span>
                                <span className="flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                                    4.9/5 (10k+ reviews)
                                </span>
                            </motion.div>
                        </motion.div>
                        
                        {/* Right: Travel Image Container */}
                        <motion.div 
                            className="flex-1 flex justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                                <img 
                                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80" 
                                    alt="World Travel and Exploration" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            {/* Your Complete Travel Companion Section */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <motion.div 
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.button 
                            className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-2 border-gray-300 rounded-full px-6 py-3 text-lg font-semibold mb-8 hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            Explore All Modules
                        </motion.button>
                        
                        <h2 className="text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 leading-tight">
                            Your Complete Travel Companion
                        </h2>
                        
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-body">
                            Six powerful modules designed to enhance every aspect of your cultural food journey
                        </p>
                    </motion.div>
                    
                    {/* Module Cards */}
                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Card 1: Xperio Food */}
                        <motion.div 
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 group"
                            whileHover={{ scale: 1.02, y: -10 }}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src="/pictures_homepage/biryani.jpg" 
                                    alt="Delicious biryani and local cuisine" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Icon Overlay */}
                                <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                    Xperio Food
                                </h3>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-body">
                                    Discover the best street food and restaurants with interactive maps, reviews, and directions.
                                </p>
                                
                                {/* Feature Tags */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {['Interactive Maps', 'User Reviews', 'Photo Uploads'].map((tag, index) => (
                                        <span key={tag} className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform cursor-pointer">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Action Button */}
                                <motion.button 
                                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Explore Xperio Food
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>
                        
                        {/* Card 2: Xperio Culture */}
                        <motion.div 
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 group"
                            whileHover={{ scale: 1.02, y: -10 }}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src="/pictures_homepage/culture.png" 
                                    alt="Cultural landmarks and traditional culture" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Icon Overlay */}
                                <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                    Xperio Culture
                                </h3>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-body">
                                    Explore local places, cultural events, and historical landmarks with expert travel tips.
                                </p>
                                
                                {/* Feature Tags */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {['Cultural Events', 'Historical Sites', 'Travel Tips'].map((tag, index) => (
                                        <span key={tag} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform cursor-pointer">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Action Button */}
                                <motion.button 
                                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Explore Xperio Culture
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>
                        
                        {/* Card 3: Xperio Translator */}
                        <motion.div 
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 group"
                            whileHover={{ scale: 1.02, y: -10 }}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src="/pictures_homepage/translator.jpg" 
                                    alt="AI translation and language technology" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Icon Overlay */}
                                <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                    Xperio Translator
                                </h3>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-body">
                                    AI-powered translation for text, speech, and menus to break language barriers.
                                </p>
                                
                                {/* Feature Tags */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {['Text Translation', 'Speech-to-Text', 'Menu Scanner'].map((tag, index) => (
                                        <span key={tag} className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform cursor-pointer">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Action Button */}
                                <motion.button 
                                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Explore Xperio Translator
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>
                        
                        {/* Card 4: Xperio Premium */}
                        <motion.div 
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 group relative"
                            whileHover={{ scale: 1.02, y: -10 }}
                        >
                            {/* Premium Badge */}
                            <div className="absolute top-6 right-6 z-10">
                                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                                    <Crown className="w-4 h-4" />
                                    Premium
                                </div>
                            </div>
                            
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src="/pictures_homepage/premium.png" 
                                    alt="Premium features and exclusive content" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Icon Overlay */}
                                <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <Crown className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                    Xperio Premium
                                </h3>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-body">
                                    Unlock exclusive content, offline access, and premium features for the ultimate travel experience.
                                </p>
                                
                                {/* Feature Tags */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {['Exclusive Content', 'Offline Access', 'Premium Support'].map((tag, index) => (
                                        <span key={tag} className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform cursor-pointer">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Action Button */}
                                <motion.button 
                                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Explore Xperio Premium
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Testimonials Section */}
            <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-gray-900">
                            What Our Users Say
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                            From exploring local gems to global adventures, 2000+ happy clients and still counting.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                            >
                                <div className="flex mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 font-body leading-relaxed text-lg italic">
                                    "{testimonial.message}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-heading font-bold text-gray-900">{testimonial.name}</p>
                                        <p className="text-gray-600 font-body">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

                        <Footer />
        </>
    );
}