import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 mt-20 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Xperio
              </h3>
            </div>
            <p className="text-gray-400 font-body leading-relaxed mb-6">
              Discover authentic experiences from around the world with our comprehensive travel platform. 
              From street food to cultural gems, we connect you with the heart of every destination.
            </p>
            <div className="flex items-center gap-4">
              <motion.button
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="w-5 h-5" />
              </motion.button>
              <span className="text-gray-400 font-body">Follow us for travel inspiration</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-lg text-white">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Travel Destinations
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1 h-1 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Street Food Guide
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1 h-1 bg-pink-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Cultural Experiences
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1 h-1 bg-indigo-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Language Translator
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Premium Features
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-lg text-white">Community</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1 h-1 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Travel Reviews
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1 h-1 bg-orange-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Photo Gallery
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1 h-1 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Travel Videos
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1 h-1 bg-teal-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Travel Blog
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Travel Forums
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-lg text-white">Support & Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  help@xperio.com
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4 text-green-400" />
                  +1 (555) 123-4567
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 font-body flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-4 h-4 text-red-400" />
                  Global Support
                </motion.a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-bold text-white mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-body text-center md:text-left">
              &copy; 2025 Xperio. All rights reserved. Made with ❤️ for travelers worldwide.
            </p>
            <div className="flex gap-6 text-gray-400">
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors duration-300 font-body"
                whileHover={{ scale: 1.1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors duration-300 font-body"
                whileHover={{ scale: 1.1 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors duration-300 font-body"
                whileHover={{ scale: 1.1 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
