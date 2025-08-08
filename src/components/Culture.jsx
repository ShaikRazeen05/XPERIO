import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Import ExternalLink icon
import { Heart, MapPin, Clock, Star, Send, Search, Filter, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';

const cultureData = [
  {
    title: "Kathak Dance",
    description: "A classical dance form that tells stories through rhythmic foot movements and gestures.",
    location: "North India",
    time: "Cultural performances year-round",
    rating: 4.6,
    image: "./pictures_homepage/kathhak.jpg"
  },
  {
    title: "Holi Festival",
    description: "The vibrant festival of colors celebrated across India with joy and music.",
    location: "Pan India",
    time: "March (Full Moon day)",
    rating: 4.9,
    image: "./pictures_homepage/holi.png"
  },
  {
    title: "Rajasthani Puppetry",
    description: "An ancient form of storytelling using hand-crafted puppets.",
    location: "Rajasthan, India",
    time: "Often during local fairs and festivals",
    rating: 4.5,
    image: "./pictures_homepage/puppets.jpeg"
  },
  {
    title: "Bihu Festival",
    description: "Celebrate the harvest with dance, music, and joy in Assam.",
    location: "Assam, India",
    time: "Mid-April",
    rating: 4.8,
    image: "pictures_homepage/bihu.png"
  },
  {
    title: "Hornbill Festival",
    description: "Experience tribal culture, traditional music, and vibrant costumes.",
    location: "Nagaland, India",
    time: "December 1-10",
    rating: 4.9,
    image: "pictures_homepage/hornbill.png"
  },
  {
    title: "Pongal",
    description: "A four-day-long harvest festival of Tamil Nadu.",
    location: "Tamil Nadu, India",
    time: "Mid-January",
    rating: 4.7,
    image: "pictures_homepage/pongal.jpg"
  }
];

// ---[ Subcomponents for Culture Page ]---

// Header Section
function CultureHeader({ favorites }) {
  return (
    <div className="text-center mb-10">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-black">Xperio</span>
        <span className="text-gray-800">Culture</span>
      </motion.h1>
      <motion.p
        className="text-md sm:text-lg text-gray-700 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Immerse yourself in rich cultural experiences. Discover historical sites, art galleries, museums, and hidden cultural gems around the world.
      </motion.p>
      <motion.div
        className="mt-4 flex items-center justify-center text-lg font-semibold text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Heart className="w-5 h-5 text-red-500 mr-2" fill="currentColor" />
        You have {favorites.size} favorite cultural experiences!
      </motion.div>
    </div>
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
      className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer flex flex-col border border-gray-100 group"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-60 object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-purple-200 text-purple-800 text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
          {category}
        </span>
        {/* Favorite Heart */}
        <motion.div
          onClick={e => { e.stopPropagation(); onToggleFavorite(item.title); }}
          whileTap={{ scale: 1.3 }}
          className="absolute top-3 right-3 cursor-pointer bg-white/80 rounded-full p-2 shadow-md"
        >
          <Heart
            className={isFavorited ? "text-red-500" : "text-gray-400"}
            fill={isFavorited ? "currentColor" : "none"}
            size={22}
          />
        </motion.div>
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h2 className="text-xl font-bold text-gray-900 mb-1 truncate">{item.title}</h2>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-1">
          <span className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1"><MapPin className="w-4 h-4" /> {item.location}</span>
          <span className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1"><Clock className="w-4 h-4" /> {item.time}</span>
          <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 rounded-full px-2 py-1"><Star className="w-4 h-4 text-yellow-400" /> {item.rating}</span>
        </div>
        <div className="flex gap-3 mt-4">
          <motion.button
            onClick={e => { e.stopPropagation(); onViewDetails(item); }}
            className="flex-1 px-4 py-2 bg-white text-purple-700 border-2 border-purple-200 rounded-full font-semibold shadow-sm hover:bg-purple-50 transition-all text-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View Details
          </motion.button>
          <motion.button
            onClick={e => { e.stopPropagation(); onVisit(item); }}
            className="flex-1 px-4 py-2 bg-purple-700 text-white rounded-full font-semibold shadow-sm hover:bg-purple-800 transition-all flex items-center justify-center gap-2 text-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink size={16} /> Visit
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
      className="text-center transform-gpu"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <motion.button
        className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium button-hover"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Load More Vendors
      </motion.button>
    </motion.div>
  );
}

// Footer Section (already animated in original)

// ---[ Updated Hero Banner with Gradient Overlay and Blur ]---
function CultureHeroBanner({ onStartJourney }) {
  return (
    <motion.div
      className="max-w-6xl mx-auto mb-16"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="./pictures_homepage/culture_banner.png"
          alt="Cultural Heritage"
          className="w-full h-[300px] sm:h-[400px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/40 to-black/10 flex flex-col justify-center px-6 sm:px-10 py-8 backdrop-blur-sm">
          <motion.h2
            className="text-white text-3xl sm:text-5xl font-extrabold mb-3 drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Explore Cultural Heritage
          </motion.h2>
          <motion.p
            className="text-gray-200 text-lg sm:text-xl max-w-xl drop-shadow"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            From ancient temples to modern art galleries, discover the stories and traditions that shape our world.
          </motion.p>
          <motion.button
            onClick={onStartJourney}
            className="mt-6 px-7 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transition-all w-fit text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.07 }}
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
      className="flex flex-wrap gap-4 justify-center mb-10"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      <motion.div
        className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-72 bg-white shadow-sm"
        variants={filterItemVariants}
      >
        <Search className="h-4 w-4 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search attractions..."
          className="outline-none w-full text-sm bg-transparent"
        />
      </motion.div>
      <motion.select
        className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-purple-200"
        variants={filterItemVariants}
      >
        <option>All Categories</option>
        <option>Dance</option>
        <option>Festival</option>
        <option>Craft</option>
      </motion.select>
      <motion.select
        className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-purple-200"
        variants={filterItemVariants}
      >
        <option>Name A-Z</option>
        <option>Name Z-A</option>
        <option>Newest</option>
      </motion.select>
      <motion.button
        className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 bg-white text-sm text-gray-700 hover:bg-purple-50 shadow-sm"
        variants={filterItemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <Filter className="h-4 w-4" />
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
      <section id="culture-section" className="mt-10 px-4 md:px-8">
        <motion.div
          className="bg-[#f9f6f1] min-h-screen py-12 px-4 sm:px-8"
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
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
      {/* Footer (already animated) */}
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