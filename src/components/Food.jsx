import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, Star, MapPin, Clock, Play, Users, TrendingUp } from 'lucide-react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

export function Food() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [ratingFilter, setRatingFilter] = useState('Highest Rated');
  const [favorites, setFavorites] = useState(new Set());
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const features = [
    {
      icon: <Play className="w-6 h-6 mx-auto mb-2 text-orange-200" />,
      title: "Watch Food Videos",
      subtitle: "Street food in action"
    },
    {
      icon: <Users className="w-6 h-6 mx-auto mb-2 text-orange-200" />,
      title: "Community Reviews",
      subtitle: "Real foodie experiences"
    },
    {
      icon: <TrendingUp className="w-6 h-6 mx-auto mb-2 text-orange-200" />,
      title: "Trending Spots",
      subtitle: "Discover hidden gems"
    }
  ];
  // Trigger entrance animations on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Simulate search loading
  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 600);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const vendors = [
    {
      id: 1,
      name: "Osaka Octopus Balls",
      cuisine: "Japanese",
      rating: 4.9,
      reviews: 1164,
      description: "Crispy hot takoyaki octopus balls with a crispy exterior and creamy interior, topped with savory sauce and bonito flakes.",
      location: "Downtown Street, Osaka",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      emoji: "🐙",
      category: "Asian"
    },
    {
      id: 2,
      name: "El Fuego Tacos",
      cuisine: "Mexican",
      rating: 4.8,
      reviews: 1230,
      description: "Authentic Mexican street tacos with handmade tortillas and fresh salsa. A local favorite for late night cravings.",
      location: "Near Zocalo Square, Mexico City",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      emoji: "🌮",
      category: "Mexican"
    },
    {
      id: 3,
      name: "Green Grub",
      cuisine: "Vegan",
      rating: 4.7,
      reviews: 758,
      description: "Innovative plant-based burgers and loaded sweet potato fries. Delicious and sustainable street food options.",
      location: "Near Meatpacking Market, Berlin",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      emoji: "🥗",
      category: "Vegan"
    },
    {
      id: 4,
      name: "La Crêpe Enchantée",
      cuisine: "French",
      rating: 4.6,
      reviews: 1486,
      description: "Sweet and savory crêpes made to order, a true taste of Parisian street food culture and tradition.",
      location: "By the Eiffel Tower, Paris",
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      emoji: "🥞",
      category: "European"
    },
    {
      id: 5,
      name: "Bangkok Bites",
      cuisine: "Thai",
      rating: 4.5,
      reviews: 943,
      description: "Serving classic Pad Thai and spicy Tom Yum noodles from a bustling street cart. Fresh, spicy, and flavorful.",
      location: "Sukhumvit Soi 38, Bangkok",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      emoji: "🍜",
      category: "Asian"
    },
    {
      id: 6,
      name: "Fromage & Co",
      cuisine: "French",
      rating: 4.6,
      reviews: 1486,
      description: "Artisanal cheese platters and wine pairings in a cozy Parisian setting. Perfect for cheese lovers.",
      location: "Montmartre District, Paris",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      emoji: "🧀",
      category: "European"
    }
  ];

  const categories = ['All Categories', 'Asian', 'Mexican', 'Vegan', 'European', 'Indian', 'American'];
  const ratingOptions = ['Highest Rated', 'Most Reviews', 'Newest', 'Price: Low to High'];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-orange-50 text-gray-800 font-sans">
        {/* Banner Image Section */}
        <motion.div
          className="relative w-full h-48 sm:h-64 md:h-80 flex items-center justify-center mb-8 overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/pictures_homepage/food_banner.png"
            alt="Food Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 to-transparent"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2">Explore World Street Food</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">Discover trending vendors, authentic flavors, and foodie adventures from every corner of the globe.</p>
          </div>
        </motion.div>
        <style jsx>{`
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          /* Core Animation Keyframes */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 40px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translate3d(0, -40px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translate3d(-40px, 0, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translate3d(40px, 0, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale3d(0.9, 0.9, 1);
            }
            to {
              opacity: 1;
              transform: scale3d(1, 1, 1);
            }
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 60px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale3d(1, 1, 1);
            }
            50% {
              transform: scale3d(1.05, 1.05, 1);
            }
          }
          
          @keyframes heartBeat {
            0% {
              transform: scale3d(1, 1, 1);
            }
            14% {
              transform: scale3d(1.15, 1.15, 1);
            }
            28% {
              transform: scale3d(1, 1, 1);
            }
            42% {
              transform: scale3d(1.15, 1.15, 1);
            }
            70% {
              transform: scale3d(1, 1, 1);
            }
          }
          
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translate3d(0, 0, 0);
            }
            40%, 43% {
              transform: translate3d(0, -8px, 0);
            }
            70% {
              transform: translate3d(0, -4px, 0);
            }
            90% {
              transform: translate3d(0, -2px, 0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
          }
          
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 5px rgba(251, 146, 60, 0.5), 0 0 10px rgba(251, 146, 60, 0.3);
            }
            50% {
              box-shadow: 0 0 20px rgba(251, 146, 60, 0.8), 0 0 30px rgba(251, 146, 60, 0.5);
            }
          }

          /* Animation Classes */
          .animate-fadeInUp {
            animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          .animate-fadeInDown {
            animation: fadeInDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          .animate-fadeInLeft {
            animation: fadeInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          .animate-fadeInRight {
            animation: fadeInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          .animate-scaleIn {
            animation: scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          .animate-slideInUp {
            animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          .animate-pulse-custom {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          .animate-heartBeat {
            animation: heartBeat 0.6s ease-in-out;
          }
          
          .animate-bounce {
            animation: bounce 0.6s ease-in-out;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-spin {
            animation: spin 1s linear infinite;
          }

          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }

          /* Header Enhancement */
          .header-gradient {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 25%, #dc2626 50%, #b91c1c 75%, #991b1b 100%);
          }

          .feature-card {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            cursor: pointer;
          }

          .feature-card:hover {
            transform: translateY(-4px) scale3d(1.02, 1.02, 1);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }

          /* Image Hover Effects */
          .image-container {
            overflow: hidden;
            position: relative;
            border-radius: 0.75rem 0.75rem 0 0;
            background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
          }
          
          .vendor-image {
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: translateZ(0);
            backface-visibility: hidden;
          }
          
          .card-hover:hover .vendor-image {
            transform: scale3d(1.1, 1.1, 1);
          }
          
          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(251, 146, 60, 0.8), rgba(239, 68, 68, 0.8));
            opacity: 0;
            transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .card-hover:hover .image-overlay {
            opacity: 1;
          }
          
          .emoji-overlay {
            font-size: 3rem;
            transform: scale3d(0.8, 0.8, 1);
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .card-hover:hover .emoji-overlay {
            transform: scale3d(1.2, 1.2, 1);
          }

          /* Enhanced Card Hover Effects */
          .card-hover {
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
          
          .card-hover:hover {
            transform: translateY(-12px) scale3d(1.02, 1.02, 1);
            box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.15),
                        0 0 0 1px rgba(255, 255, 255, 0.05);
          }
          
          .button-hover {
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: translateZ(0);
          }
          
          .button-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(255,255,255,0.3), 
              transparent);
            transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            z-index: 1;
          }
          
          .button-hover:hover::before {
            left: 100%;
          }
          
          .button-hover:hover {
            transform: translateY(-2px) scale3d(1.05, 1.05, 1);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }
          
          .button-hover:active {
            transform: translateY(0) scale3d(0.98, 0.98, 1);
          }
          
          .search-focus {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: translateZ(0);
          }
          
          .search-focus:focus {
            transform: scale3d(1.02, 1.02, 1);
            box-shadow: 0 0 0 4px rgba(251, 146, 60, 0.15),
                        0 8px 25px rgba(0, 0, 0, 0.1);
          }
          
          .stat-card {
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: translateZ(0);
            cursor: pointer;
          }
          
          .stat-card:hover {
            transform: translateY(-8px) rotate3d(0, 0, 1, 2deg) scale3d(1.05, 1.05, 1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          
          .heart-button {
            transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .heart-button:hover {
            transform: scale3d(1.15, 1.15, 1);
          }
          
          .heart-active {
            animation: heartBeat 0.6s ease-in-out;
            color: #ef4444 !important;
            fill: #ef4444 !important;
          }

          /* Shimmer Effect */
          .shimmer {
            position: relative;
            overflow: hidden;
          }
          
          .shimmer::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(255, 255, 255, 0.4), 
              transparent);
            transform: translateX(-100%);
            animation: shimmer 2s infinite;
          }

          /* Delay Classes */
          .delay-100 { animation-delay: 0.1s; opacity: 0; }
          .delay-200 { animation-delay: 0.2s; opacity: 0; }
          .delay-300 { animation-delay: 0.3s; opacity: 0; }
          .delay-400 { animation-delay: 0.4s; opacity: 0; }
          .delay-500 { animation-delay: 0.5s; opacity: 0; }
          .delay-600 { animation-delay: 0.6s; opacity: 0; }
          .delay-700 { animation-delay: 0.7s; opacity: 0; }
          .delay-800 { animation-delay: 0.8s; opacity: 0; }

          /* Stagger Animation */
          .stagger-item:nth-child(1) { animation-delay: 0.1s; }
          .stagger-item:nth-child(2) { animation-delay: 0.2s; }
          .stagger-item:nth-child(3) { animation-delay: 0.3s; }
          .stagger-item:nth-child(4) { animation-delay: 0.4s; }
          .stagger-item:nth-child(5) { animation-delay: 0.5s; }
          .stagger-item:nth-child(6) { animation-delay: 0.6s; }

          /* Utility Classes */
          .transform-gpu {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
          
          .smooth-scroll {
            scroll-behavior: smooth;
          }
        `}</style>

        {/* Enhanced Header */}
        <div className={`text-gray-900 shadow-lg transform-gpu transition-all duration-700 ${isLoaded ? 'animate-fadeInDown' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-10">
            <div className={`inline-flex items-center gap-3 mb-4 transform-gpu transition-all duration-700
              ${isLoaded ? 'animate-scaleIn delay-100' : 'opacity-0'}`}>
              <span className="text-4xl">🍜</span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                XperioFood
              </h1>
              <span className="text-4xl">🌮</span>
            </div>
            <p className={`text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-6 mt-2 transform-gpu
              ${isLoaded ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
              <span className="font-bold">Embark on a culinary adventure</span> across global street food scenes!
              From bustling Bangkok markets to vibrant Mexican plazas -
              <span className="font-bold"> taste authentic flavors</span>,
              <span className="font-bold"> watch cooking videos</span>,
              and <span className="font-bold">connect with food lovers worldwide</span> 🌍✨
            </p>
            {/* Feature Cards */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 transform-gpu 
              ${isLoaded ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="feature-card border border-gray-300 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 group bg-white"
                  style={{ animationDelay: `${250 + i * 90}ms` }}
                >
                  <div>
                    {f.icon}
                  </div>
                  <div className="text-base font-semibold text-gray-900">{f.title}</div>
                  <div className="text-xs text-orange-600">{f.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



        {/* Hero Section */}
        <div className={`relative text-gray-900 transform-gpu ${isLoaded ? 'animate-fadeInLeft delay-300' : 'opacity-0'}`}>
    <div className="absolute inset-0 bg-white bg-opacity-80"></div>
    <div 
      className="relative max-w-7xl mx-auto px-4 py-16 flex items-center min-h-[400px]"
      style={{
        // You may keep or remove the pattern; here it's left as a subtle effect
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300"><defs><pattern id="food" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="3" fill="rgba(0,0,0,0.05)"/><circle cx="80" cy="60" r="2" fill="rgba(0,0,0,0.06)"/><circle cx="40" cy="80" r="2.5" fill="rgba(0,0,0,0.07)"/></pattern></defs><rect width="1200" height="300" fill="url(%23food)"/></svg>')`,
      }}
    >
      <div className="max-w-lg relative">
        <h2 className={`text-5xl font-bold mb-4 transform-gpu ${isLoaded ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
          Taste the World's Flavors
        </h2>
        <p className={`text-xl mb-6 text-gray-700 transform-gpu ${isLoaded ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}>
          From Bangkok street vendors to Mexico City tacos, discover authentic flavors and hidden culinary gems.
        </p>
        <button className={`bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transform-gpu ${isLoaded ? 'animate-scaleIn delay-600' : 'opacity-0'}`}>
          Start Exploring
        </button>
      </div>
    </div>
  </div>


        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className={`bg-white rounded-lg shadow-sm p-6 mb-8 transform-gpu ${isLoaded ? 'animate-slideInUp delay-300' : 'opacity-0'}`}>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 relative group">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-300 ${isSearching ? 'text-orange-500 animate-pulse-custom' : ''}`} />
                <input
                  type="text"
                  placeholder="Search food vendors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg search-focus focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-orange-500 border-t-transparent"></div>
                  </div>
                )}
              </div>
              
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 min-w-[150px] hover:border-orange-300 transition-all duration-300 button-hover"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select 
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 min-w-[150px] hover:border-orange-300 transition-all duration-300 button-hover"
              >
                {ratingOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg button-hover">
                <Filter className="w-4 h-4" />
                More Filters
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`bg-emerald-100 rounded-xl p-6 text-center stat-card transform-gpu stagger-item ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="text-3xl font-bold text-emerald-800 mb-2 animate-float">6+</div>
              <div className="text-emerald-700 font-medium">Food Vendors</div>
            </div>
            <div className={`bg-blue-100 rounded-xl p-6 text-center stat-card transform-gpu stagger-item ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="text-3xl font-bold text-blue-800 mb-2 animate-float" style={{ animationDelay: '0.5s' }}>6+</div>
              <div className="text-blue-700 font-medium">Cities Covered</div>
            </div>
            <div className={`bg-purple-100 rounded-xl p-6 text-center stat-card transform-gpu stagger-item ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="text-3xl font-bold text-purple-800 mb-2 animate-float" style={{ animationDelay: '1s' }}>7000+</div>
              <div className="text-purple-700 font-medium">Reviews</div>
            </div>
          </div>

          {/* Vendor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {vendors.map((vendor, index) => (
              <div 
                key={vendor.id} 
                className={`bg-white rounded-xl shadow-sm border border-gray-100 card-hover transform-gpu stagger-item overflow-hidden ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${0.1 * (index + 4)}s` }}
                onMouseEnter={() => setHoveredCard(vendor.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Section */}
                <div className="image-container h-48 relative">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="vendor-image w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="emoji-overlay">
                      {vendor.emoji}
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleFavorite(vendor.id)}
                    className={`absolute top-4 right-4 p-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full heart-button shadow-lg ${favorites.has(vendor.id) ? 'heart-active' : ''}`}
                  >
                    <Heart 
                      className={`w-5 h-5 transition-all duration-300 ${
                        favorites.has(vendor.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600 hover:text-red-400'
                      }`} 
                    />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-orange-600 transition-colors duration-300">
                    {vendor.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:animate-pulse transition-all duration-200" />
                      <span className="font-semibold text-gray-900">{vendor.rating}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600 hover:text-gray-800 transition-colors">{vendor.reviews} reviews</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 hover:text-gray-800 transition-colors duration-300">
                    {vendor.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium hover:bg-orange-100 hover:text-orange-700 transition-all duration-300 cursor-pointer button-hover">
                        {vendor.cuisine}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                      <MapPin className="w-4 h-4 hover:text-orange-500 transition-colors" />
                      <span>{vendor.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium button-hover">
                      View Details
                    </button>
                    <button className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg font-medium button-hover shimmer">
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className={`text-center transform-gpu ${isLoaded ? 'animate-fadeInUp delay-600' : 'opacity-0'}`}>
            <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium button-hover">
              Load More Vendors
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className={`bg-gray-900 text-white py-12 mt-16 transform-gpu ${isLoaded ? 'animate-fadeInUp delay-700' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className={`transform-gpu ${isLoaded ? 'animate-fadeInLeft delay-800' : 'opacity-0'}`}>
                <h3 className="text-xl font-bold mb-4">XperioFood</h3>
                <p className="text-gray-400">Discover authentic street food from around the world.</p>
              </div>
              <div className={`transform-gpu ${isLoaded ? 'animate-fadeInUp delay-800' : 'opacity-0'}`}>
                <h4 className="font-semibold mb-4">Explore</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Food Vendors</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Cities</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Cuisines</a></li>
                </ul>
              </div>
              <div className={`transform-gpu ${isLoaded ? 'animate-fadeInUp delay-800' : 'opacity-0'}`}>
                <h4 className="font-semibold mb-4">Community</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Reviews</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Photos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Videos</a></li>
                </ul>
              </div>
              <div className={`transform-gpu ${isLoaded ? 'animate-fadeInRight delay-800' : 'opacity-0'}`}>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
                </ul>
              </div>
            </div>
            <div className={`border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 transform-gpu ${isLoaded ? 'animate-fadeInUp delay-800' : 'opacity-0'}`}>
              <p>&copy; 2025 XperioFood. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
