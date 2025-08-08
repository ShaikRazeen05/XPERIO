import React, { useState } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';
import {
  MdEmail,
  MdLanguage,
  MdHistory,
  MdBookmark,
  MdFeedback,
  MdSubscriptions,
  MdSupport,
} from 'react-icons/md';

import { FaGlobe } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2'; // not "hi", but "hi2"

import { motion } from 'framer-motion';

const bgImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'; // Soft travel/culture background

export default function Loginpage() {
  // Demo authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Demo login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      setUser({ name: username });
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Please enter both username and password.');
    }
  };

  // Demo social login
  const handleSocialLogin = (provider) => {
    setUser({ name: provider === 'google' ? 'Google User' : 'Apple User' });
    setIsLoggedIn(true);
    setError('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setUsername('');
    setPassword('');
    setError('');
  };

  if (isLoggedIn && user) {
    // --- Demo Data ---
    const demoBookmarks = [
      { id: 1, name: 'Taj Mahal', type: 'Place' },
      { id: 2, name: 'Pav Bhaji', type: 'Food' },
      { id: 3, name: 'Eiffel Tower', type: 'Place' },
    ];
    const demoHistory = [
      { id: 1, action: 'Visited', item: 'Kathak Dance', date: '2024-06-01' },
      { id: 2, action: 'Searched', item: 'Street Food Mumbai', date: '2024-05-30' },
      { id: 3, action: 'Viewed', item: 'Holi Festival', date: '2024-05-28' },
    ];
    const demoSubscription = { status: 'Premium', renewal: '2024-12-31' };

    // --- Dashboard UI ---
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('${bgImage}')`,
        }}
      >
        <div className="max-w-7xl mx-auto p-6">
          {/* Header */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <motion.h2 
                  className="text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Welcome back, {user.name}! 👋
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-600 font-body leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Here's what's happening with your Xperio account.
                </motion.p>
              </div>
              <motion.button 
                onClick={handleLogout} 
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            </div>
            
            {/* Stats Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div 
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 rounded-3xl shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 font-medium mb-2">Total Bookmarks</p>
                    <p className="text-4xl font-display font-bold">{demoBookmarks.length}</p>
                  </div>
                  <MdBookmark className="text-5xl text-purple-200" />
                </div>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 font-medium mb-2">Recent Activity</p>
                    <p className="text-4xl font-display font-bold">{demoHistory.length}</p>
                  </div>
                  <MdHistory className="text-5xl text-blue-200" />
                </div>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-3xl shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 font-medium mb-2">Subscription</p>
                    <p className="text-4xl font-display font-bold">{demoSubscription.status}</p>
                  </div>
                  <MdSubscriptions className="text-5xl text-green-200" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bookmarks Section */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-2xl">
                  <MdBookmark className="text-3xl text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-800">Your Bookmarks</h3>
                  <p className="text-gray-600 font-body">Saved places and experiences</p>
                </div>
              </div>
              <div className="space-y-4">
                {demoBookmarks.map(b => (
                  <motion.div 
                    key={b.id} 
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className={`w-4 h-4 rounded-full ${b.type === 'Place' ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-lg">{b.name}</p>
                      <p className="text-gray-500 font-body">{b.type}</p>
                    </div>
                    <button className="text-purple-600 hover:text-purple-800 font-bold">View</button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* History Section */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-2xl">
                  <MdHistory className="text-3xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-800">Recent Activity</h3>
                  <p className="text-gray-600 font-body">Your latest interactions</p>
                </div>
              </div>
              <div className="space-y-4">
                {demoHistory.map(h => (
                  <motion.div 
                    key={h.id} 
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className={`w-3 h-3 rounded-full ${h.action === 'Visited' ? 'bg-green-500' : h.action === 'Searched' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-lg">{h.item}</p>
                      <p className="text-gray-500 font-body">{h.action} • {h.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Subscription Section */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-2xl">
                  <MdSubscriptions className="text-3xl text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-800">Subscription</h3>
                  <p className="text-gray-600 font-body">Manage your plan</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-3xl border-2 border-green-200">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg px-6 py-2 rounded-full font-bold">{demoSubscription.status}</span>
                  <span className="text-lg text-gray-600 font-body">Renews {demoSubscription.renewal}</span>
                </div>
                <motion.button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Manage Subscription
                </motion.button>
              </div>
            </motion.div>

            {/* Support Section */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-4 rounded-2xl">
                  <MdSupport className="text-3xl text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-800">Help & Support</h3>
                  <p className="text-gray-600 font-body">We're here to help</p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-gray-600 font-body text-lg leading-relaxed">
                  Need help with your account or have questions about Xperio?
                </p>
                <motion.button 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MdSupport className="inline mr-3 text-xl" /> Contact Support
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // --- Login UI ---
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('${bgImage}')`,
      }}
    >
      <motion.div
        className="max-w-md w-full mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-display font-bold text-gray-800">Sign in to your account</h2>
            <Sparkles className="w-8 h-8 text-pink-500" />
          </div>
        </motion.div>
        
        <form onSubmit={handleLogin} className="mb-8">
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-3 text-lg">Username</label>
            <input
              type="text"
              className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-lg font-medium transition-all duration-300"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-3 text-lg">Password</label>
            <input
              type="password"
              className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-lg font-medium transition-all duration-300"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {error && <div className="text-red-500 mb-6 text-lg font-medium">{error}</div>}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-xl hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </form>
        
        <div className="flex items-center mb-8">
          <div className="flex-grow border-t-2 border-gray-200"></div>
          <span className="mx-4 text-gray-400 text-lg font-medium">or</span>
          <div className="flex-grow border-t-2 border-gray-200"></div>
        </div>
        
        <div className="flex flex-col gap-4">
          <motion.button
            className="flex items-center justify-center gap-4 border-2 border-gray-200 py-4 px-6 rounded-2xl hover:border-purple-300 text-gray-700 font-bold text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
            onClick={() => handleSocialLogin('google')}
            type="button"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGoogle className="text-2xl text-red-500" /> Continue with Google
          </motion.button>
          <motion.button
            className="flex items-center justify-center gap-4 border-2 border-gray-200 py-4 px-6 rounded-2xl hover:border-purple-300 text-gray-700 font-bold text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
            onClick={() => handleSocialLogin('apple')}
            type="button"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaApple className="text-2xl text-gray-800" /> Continue with Apple
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
