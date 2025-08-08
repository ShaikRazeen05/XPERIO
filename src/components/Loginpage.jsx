import React, { useState } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { MdEmail, MdLanguage, MdHistory, MdBookmark, MdFeedback, MdSubscriptions, MdSupport } from 'react-icons/md';
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
        <div className="max-w-6xl mx-auto p-6">
          {/* Header */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Welcome back, {user.name}! 👋</h2>
                <p className="text-gray-600">Here's what's happening with your Xperio account.</p>
              </div>
              <motion.button 
                onClick={handleLogout} 
                className="px-6 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Total Bookmarks</p>
                    <p className="text-3xl font-bold">{demoBookmarks.length}</p>
                  </div>
                  <MdBookmark className="text-4xl text-purple-200" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Recent Activity</p>
                    <p className="text-3xl font-bold">{demoHistory.length}</p>
                  </div>
                  <MdHistory className="text-4xl text-blue-200" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Subscription</p>
                    <p className="text-3xl font-bold">{demoSubscription.status}</p>
                  </div>
                  <MdSubscriptions className="text-4xl text-green-200" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bookmarks Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <MdBookmark className="text-2xl text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Your Bookmarks</h3>
                  <p className="text-gray-600 text-sm">Saved places and experiences</p>
                </div>
              </div>
              <div className="space-y-3">
                {demoBookmarks.map(b => (
                  <div key={b.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className={`w-3 h-3 rounded-full ${b.type === 'Place' ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{b.name}</p>
                      <p className="text-sm text-gray-500">{b.type}</p>
                    </div>
                    <button className="text-purple-600 hover:text-purple-800">View</button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* History Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <MdHistory className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
                  <p className="text-gray-600 text-sm">Your latest interactions</p>
                </div>
              </div>
              <div className="space-y-3">
                {demoHistory.map(h => (
                  <div key={h.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className={`w-2 h-2 rounded-full ${h.action === 'Visited' ? 'bg-green-500' : h.action === 'Searched' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{h.item}</p>
                      <p className="text-sm text-gray-500">{h.action} • {h.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subscription Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-xl">
                  <MdSubscriptions className="text-2xl text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Subscription</h3>
                  <p className="text-gray-600 text-sm">Manage your plan</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-medium">{demoSubscription.status}</span>
                  <span className="text-sm text-gray-600">Renews {demoSubscription.renewal}</span>
                </div>
                <motion.button 
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Manage Subscription
                </motion.button>
              </div>
            </motion.div>

            {/* Support Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <MdSupport className="text-2xl text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Help & Support</h3>
                  <p className="text-gray-600 text-sm">We're here to help</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">Need help with your account or have questions about Xperio?</p>
                <motion.button 
                  className="w-full bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MdSupport className="inline mr-2" /> Contact Support
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
        className="max-w-md w-full mx-auto bg-white/90 rounded-xl shadow-2xl p-8 backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Sign in to your account</h2>
        <form onSubmit={handleLogin} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {error && <div className="text-red-500 mb-3 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors mb-2"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <div className="flex flex-col gap-3">
          <button
            className="flex items-center justify-center gap-2 border py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
            onClick={() => handleSocialLogin('google')}
            type="button"
          >
            <FaGoogle className="text-xl" /> Continue with Google
          </button>
          <button
            className="flex items-center justify-center gap-2 border py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
            onClick={() => handleSocialLogin('apple')}
            type="button"
          >
            <FaApple className="text-xl" /> Continue with Apple
          </button>
        </div>
      </motion.div>
    </div>
  );
}
