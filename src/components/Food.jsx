import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, Star, MapPin, Clock, Play, Users, TrendingUp, Globe, Sparkles, Zap } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
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
      icon: <Play className="w-8 h-8 mx-auto mb-3 text-orange-500" />,
      title: "Watch Food Videos",
      subtitle: "Street food in action"
    },
    {
      icon: <Users className="w-8 h-8 mx-auto mb-3 text-orange-500" />,
      title: "Community Reviews",
      subtitle: "Real foodie experiences"
    },
    {
      icon: <TrendingUp className="w-8 h-8 mx-auto mb-3 text-orange-500" />,
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
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 text-gray-800 font-sans">
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
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 via-red-900/40 to-yellow-900/30"></div>
          <div className="relative z-10 text-center px-4">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Sparkles className="w-10 h-10 text-orange-400" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white drop-shadow-lg">
                Explore World Street Food
              </h1>
              <Zap className="w-10 h-10 text-yellow-400" />
            </motion.div>
            <motion.p 
              className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Discover trending vendors, authentic flavors, and foodie adventures from every corner of the globe.
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Header */}
        <motion.div 
          className="text-gray-900 shadow-lg transform-gpu transition-all duration-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center gap-4 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="text-5xl">🍜</span>
                <h1 className="text-6xl md:text-7xl font-display font-bold text-gray-900">
                  XperioFood
                </h1>
                <span className="text-5xl">🌮</span>
              </motion.div>
              <motion.p 
                className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Embark on a culinary adventure
                </span> across global street food scenes! From bustling Bangkok markets to vibrant Mexican plazas -{' '}
                <span className="font-bold text-orange-600">taste authentic flavors</span>,{' '}
                <span className="font-bold text-red-600">watch cooking videos</span>, and{' '}
                <span className="font-bold text-yellow-600">connect with food lovers worldwide</span> 🌍✨
              </motion.p>
              
              {/* Feature Cards */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-center">
                      <div className="p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {f.icon}
                      </div>
                      <div className="text-xl font-bold text-gray-900 mb-2">{f.title}</div>
                      <div className="text-orange-600 font-medium">{f.subtitle}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          className="relative text-gray-900 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 flex items-center min-h-[400px]">
            <div className="max-w-2xl">
              <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Taste the World's Flavors
              </h2>
              <p className="text-2xl mb-8 text-gray-700 font-body leading-relaxed">
                From Bangkok street vendors to Mexico City tacos, discover authentic flavors and hidden culinary gems.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Exploring
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-orange-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 relative group">
                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 transition-all duration-300 ${isSearching ? 'text-orange-500 animate-pulse' : ''}`} />
                <input
                  type="text"
                  placeholder="Search food vendors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg font-medium transition-all duration-300"
                />
                {isSearching && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-orange-500 border-t-transparent"></div>
                  </div>
                )}
              </div>
              
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 min-w-[180px] hover:border-orange-300 transition-all duration-300 text-lg font-medium"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select 
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 min-w-[180px] hover:border-orange-300 transition-all duration-300 text-lg font-medium"
              >
                {ratingOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              
              <motion.button 
                className="flex items-center gap-3 px-8 py-4 border-2 border-gray-200 rounded-2xl hover:border-orange-300 transition-all duration-300 text-lg font-medium bg-white/80 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-5 h-5" />
                More Filters
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-3xl p-8 text-center shadow-xl border border-emerald-200"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-display font-bold text-emerald-800 mb-3">6+</div>
              <div className="text-emerald-700 font-bold text-lg">Food Vendors</div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 text-center shadow-xl border border-blue-200"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-display font-bold text-blue-800 mb-3">6+</div>
              <div className="text-blue-700 font-bold text-lg">Cities Covered</div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 text-center shadow-xl border border-purple-200"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-display font-bold text-purple-800 mb-3">7000+</div>
              <div className="text-purple-700 font-bold text-lg">Reviews</div>
            </motion.div>
          </motion.div>

          {/* Vendor Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {vendors.map((vendor, index) => (
              <motion.div 
                key={vendor.id} 
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-200 overflow-hidden group hover:shadow-3xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -8 }}
                onMouseEnter={() => setHoveredCard(vendor.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-6xl">
                      {vendor.emoji}
                    </div>
                  </div>
                  <motion.button 
                    onClick={() => toggleFavorite(vendor.id)}
                    className={`absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg ${favorites.has(vendor.id) ? 'text-red-500' : 'text-gray-600 hover:text-red-400'} transition-all duration-300`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart 
                      className={`w-6 h-6 transition-all duration-300 ${
                        favorites.has(vendor.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600 hover:text-red-400'
                      }`} 
                    />
                  </motion.button>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 hover:text-orange-600 transition-colors duration-300">
                    {vendor.name}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-900 text-lg">{vendor.rating}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600 hover:text-gray-800 transition-colors font-medium">{vendor.reviews} reviews</span>
                  </div>
                  
                  <p className="text-gray-600 text-base mb-6 hover:text-gray-800 transition-colors duration-300 leading-relaxed font-body">
                    {vendor.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform cursor-pointer">
                        {vendor.cuisine}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span className="font-medium">{vendor.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.button 
                      className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-2xl text-gray-700 font-bold hover:border-orange-300 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                    <motion.button 
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Watch
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <motion.button 
              className="px-10 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Vendors
            </motion.button>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
}
