import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Import ExternalLink icon
import { Heart, MapPin, Clock, Star, Send, Search, Filter, ExternalLink, Globe, Sparkles, Crown } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const cultureData = [
  {
    title: "Kathak Dance",
    description: "A classical dance form that tells stories through rhythmic foot movements and gestures.",
    location: "North India",
    time: "Cultural performances year-round",
    rating: 4.6,
    image: "./pictures_homepage/kathhak.jpg",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    title: "Holi Festival",
    description: "The vibrant festival of colors celebrated across India with joy and music.",
    location: "Pan India",
    time: "March (Full Moon day)",
    rating: 4.9,
    image: "./pictures_homepage/holi.png",
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "Rajasthani Puppetry",
    description: "An ancient form of storytelling using hand-crafted puppets.",
    location: "Rajasthan, India",
    time: "Often during local fairs and festivals",
    rating: 4.5,
    image: "./pictures_homepage/puppets.jpeg",
    icon: <Crown className="w-5 h-5" />
  },
  {
    title: "Bihu Festival",
    description: "Celebrate the harvest with dance, music, and joy in Assam.",
    location: "Assam, India",
    time: "Mid-April",
    rating: 4.8,
    image: "pictures_homepage/bihu.png",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    title: "Hornbill Festival",
    description: "Experience tribal culture, traditional music, and vibrant costumes.",
    location: "Nagaland, India",
    time: "December 1-10",
    rating: 4.9,
    image: "pictures_homepage/hornbill.png",
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "Pongal",
    description: "A four-day-long harvest festival of Tamil Nadu.",
    location: "Tamil Nadu, India",
    time: "Mid-January",
    rating: 4.7,
    image: "pictures_homepage/pongal.jpg",
    icon: <Crown className="w-5 h-5" />
  }
];

// ---[ Subcomponents for Culture Page ]---

// Header Section
function CultureHeader({ favorites }) {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.h1
        className="text-5xl lg:text-6xl font-display font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
          Xperio
        </span>
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Culture
        </span>
      </motion.h1>
      <motion.p
        className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Immerse yourself in rich cultural experiences. Discover historical sites, art galleries, museums, and hidden cultural gems around the world.
      </motion.p>
      <motion.div
        className="mt-6 flex items-center justify-center text-lg font-bold text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Heart className="w-6 h-6 text-red-500 mr-3" fill="currentColor" />
        You have {favorites.size} favorite cultural experiences!
      </motion.div>
    </motion.div>
  );
}

// ---[ Category Badge Helper ]---
function getCategory(title) {
  if (/dance/i.test(title)) return 'Dance';
  if (/festival/i.test(title)) return 'Festival';
  if (/puppet|craft/i.test(title)) return 'Craft';
  return 'Culture';
}

// ---[ Updated CultureCard with Category Badge and Modern UI ]---
function CultureCard({ item, isFavorited, onToggleFavorite, onViewDetails, onVisit }) {
  const category = getCategory(item.title);
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 flex flex-col border border-purple-200 group"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white">
            {item.icon}
          </div>
          <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
            {category}
          </span>
        </div>
        {/* Favorite Heart */}
        <motion.div
          onClick={e => { e.stopPropagation(); onToggleFavorite(item.title); }}
          whileTap={{ scale: 1.3 }}
          className="absolute top-4 right-4 cursor-pointer bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
        >
          <Heart
            className={isFavorited ? "text-red-500" : "text-gray-400"}
            fill={isFavorited ? "currentColor" : "none"}
            size={24}
          />
        </motion.div>
      </div>
      <div className="p-8 flex flex-col gap-4 flex-1">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">{item.title}</h2>
        <p className="text-gray-600 text-base mb-4 line-clamp-2 leading-relaxed font-body">{item.description}</p>
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-6">
          <span className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-4 py-2">
            <MapPin className="w-4 h-4 text-purple-500" /> {item.location}
          </span>
          <span className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-purple-500" /> {item.time}
          </span>
          <span className="flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" /> {item.rating}
          </span>
        </div>
        <div className="flex gap-4 mt-auto">
          <motion.button
            onClick={e => { e.stopPropagation(); onViewDetails(item); }}
            className="flex-1 px-6 py-3 bg-white text-purple-700 border-2 border-purple-300 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all text-base"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Details
          </motion.button>
          <motion.button
            onClick={e => { e.stopPropagation(); onVisit(item); }}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink size={18} /> Visit
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// Load More Button
function LoadMoreButton() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <motion.button
        className="px-10 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-300"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        Load More Cultural Experiences
      </motion.button>
    </motion.div>
  );
}

// ---[ Updated Hero Banner with Gradient Overlay and Blur ]---
function CultureHeroBanner({ onStartJourney }) {
  return (
    <motion.div
      className="max-w-7xl mx-auto mb-20"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="./pictures_homepage/culture_banner.png"
          alt="Cultural Heritage"
          className="w-full h-[400px] sm:h-[500px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/40 to-pink-900/20 flex flex-col justify-center px-8 sm:px-12 py-12 backdrop-blur-sm">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Globe className="w-12 h-12 text-purple-400" />
            <h2 className="text-white text-4xl sm:text-6xl font-display font-bold drop-shadow-lg">
              Explore Cultural Heritage
            </h2>
            <Sparkles className="w-12 h-12 text-pink-400" />
          </motion.div>
          <motion.p
            className="text-gray-200 text-xl sm:text-2xl max-w-3xl mx-auto drop-shadow leading-relaxed font-body"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            From ancient temples to modern art galleries, discover the stories and traditions that shape our world.
          </motion.p>
          <motion.button
            onClick={onStartJourney}
            className="mt-8 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all w-fit text-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.07, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Cultural Journey
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ---[ Updated Filter Bar with Modern UI ]---
function CultureFilterBar() {
  const filterItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  return (
    <motion.div
      className="flex flex-wrap gap-6 justify-center mb-16"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      <motion.div
        className="flex items-center border-2 border-gray-200 rounded-2xl px-6 py-4 w-80 bg-white/90 backdrop-blur-sm shadow-lg"
        variants={filterItemVariants}
      >
        <Search className="h-5 w-5 text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search attractions..."
          className="outline-none w-full text-lg bg-transparent font-medium"
        />
      </motion.div>
      <motion.select
        className="border-2 border-gray-200 rounded-2xl px-6 py-4 bg-white/90 backdrop-blur-sm text-lg text-gray-700 shadow-lg focus:ring-2 focus:ring-purple-200 font-medium"
        variants={filterItemVariants}
      >
        <option>All Categories</option>
        <option>Dance</option>
        <option>Festival</option>
        <option>Craft</option>
      </motion.select>
      <motion.select
        className="border-2 border-gray-200 rounded-2xl px-6 py-4 bg-white/90 backdrop-blur-sm text-lg text-gray-700 shadow-lg focus:ring-2 focus:ring-purple-200 font-medium"
        variants={filterItemVariants}
      >
        <option>Name A-Z</option>
        <option>Name Z-A</option>
        <option>Newest</option>
      </motion.select>
      <motion.button
        className="flex items-center gap-3 border-2 border-gray-200 rounded-2xl px-8 py-4 bg-white/90 backdrop-blur-sm text-lg text-gray-700 hover:border-purple-300 shadow-lg font-medium"
        variants={filterItemVariants}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        <Filter className="h-5 w-5" />
        More Filters
      </motion.button>
    </motion.div>
  );
}

// ---[ Main Culture Component ]---
export function Culture() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(new Set());

  const handleStartJourney = () => {
    const section = document.getElementById('culture-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFavorite = (title) => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(title)) {
        newFavorites.delete(title);
      } else {
        newFavorites.add(title);
      }
      return newFavorites;
    });
  };

  // Placeholder functions for button clicks
  const handleViewDetails = (item) => {
    console.log(`Viewing details for: ${item.title}`);
  };
  const handleVisit = (item) => {
    console.log(`Visiting: ${item.title}`);
  };

  return (
    <>
      <Navbar />
      {/* Culture Section */}
      <section id="culture-section" className="mt-10 px-6 md:px-8">
        <motion.div
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-screen py-16 px-6 sm:px-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header */}
          <CultureHeader favorites={favorites} />
          {/* Hero Banner */}
          <CultureHeroBanner onStartJourney={handleStartJourney} />
          {/* Filter Bar */}
          <CultureFilterBar />
          {/* Culture Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {cultureData.map((item, idx) => (
              <CultureCard
                key={idx}
                item={item}
                isFavorited={favorites.has(item.title)}
                onToggleFavorite={toggleFavorite}
                onViewDetails={handleViewDetails}
                onVisit={handleVisit}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* Load More Button */}
      <LoadMoreButton />
      <Footer />
    </>
  );
}