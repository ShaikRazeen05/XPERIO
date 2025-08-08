import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy } from 'react-icons/fa';
import { BookMarked, Volume2, Languages, ArrowRight, ArrowLeftRight, Globe, Sparkles, Zap } from 'lucide-react';
import { COLORS, ANIMATION } from './constants';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// ---[ Subcomponents ]---
// TranslationInput, TranslationList, PhrasebookCard, TipsSection, Footer

export default function Translator() {
  const [activeTab, setActiveTab] = useState('live');
  const [fromLang, setFromLang] = useState('English');
  const [toLang, setToLang] = useState('Spanish');
  const [text, setText] = useState('');
  const [translations, setTranslations] = useState([]);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const availableLanguages = ['English', 'Spanish', 'German', 'French', 'Japanese', 'Italian'];

  const handleTranslate = () => {
    if (!text.trim()) return;
    const newTranslation = {
      from: fromLang,
      to: toLang,
      original: text,
      // In a real app, you'd call an API here to get the actual translation
      result: `[${toLang}] ${text.split(' ').reverse().join(' ')}` // Simple mock translation
    };
    setTranslations([newTranslation, ...translations]);
    setText('');
  };

  const speakText = (textToSpeak, langCode) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      const langMap = {
        'English': 'en-US',
        'Spanish': 'es-ES',
        'French': 'fr-FR',
        'German': 'de-DE',
        'Japanese': 'ja-JP',
        'Italian': 'it-IT',
      };
      utterance.lang = langMap[langCode] || 'en-US';
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech not supported in this browser.");
    }
  };

  const copyText = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setShowCopyMessage(true);
        setTimeout(() => setShowCopyMessage(false), 2000);
      })
      .catch(err => console.error("Could not copy text: ", err));
  };

  const swapLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
  };

  const phrasebookData = [
    {
      category: 'Greetings',
      language: 'French',
      phrase: 'Bonjour',
      translation: 'Hello',
      example: "When meeting someone new, you can say 'Bonjour' to greet them.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      category: 'Dining',
      language: 'Spanish',
      phrase: 'La cuenta, por favor.',
      translation: 'The bill, please.',
      example: "After finishing your meal, ask the waiter 'La cuenta, por favor.'",
      icon: <Zap className="w-5 h-5" />
    },
    {
      category: 'Directions',
      language: 'Italian',
      phrase: "Dov'è il bagno?",
      translation: 'Where is the bathroom?',
      example: "If you are lost, ask a local 'Dov'è il bagno?'",
      icon: <Globe className="w-5 h-5" />
    },
    {
      category: 'Shopping',
      language: 'German',
      phrase: 'Wie viel kostet das?',
      translation: 'How much does this cost?',
      example: "When buying a souvenir, you might ask 'Wie much kostet das?'",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      category: 'Essentials',
      language: 'Japanese',
      phrase: 'すみません',
      translation: 'Excuse me',
      example: "If you need help, say 'すみません' to get someone's attention.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      category: 'Emergency',
      language: 'English',
      phrase: 'Help!',
      translation: 'Help!',
      example: "Shout 'Help!' in case of an emergency.",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 font-sans">
        {/* Banner Image Section */}
        <motion.div
          className="relative w-full h-48 sm:h-64 md:h-80 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
            alt="Translator Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/40 to-purple-900/20 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center px-4">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Globe className="w-12 h-12 text-blue-400" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white drop-shadow-lg">
                Break Language Barriers
              </h1>
              <Sparkles className="w-12 h-12 text-purple-400" />
            </motion.div>
            <motion.p 
              className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Instantly translate and communicate with confidence, wherever you are in the world.
            </motion.p>
          </div>
        </motion.div>

        {/* Main Translator Section */}
        <div id="translator-main-section" className="p-4 md:p-10 lg:p-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Xperio
              </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Translator
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-body leading-relaxed">
              Break down language barriers with instant translation and essential travel phrases.
              Communicate confidently wherever your journey takes you.
            </p>
          </motion.div>

          {/* Tab Buttons */}
          <motion.div
            className="flex justify-center mb-12 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              className={`px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all duration-300 ${
                activeTab === 'live' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105' 
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200'
              }`}
              onClick={() => setActiveTab('live')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Languages size={20} /> Live Translator
            </motion.button>
            <motion.button
              className={`px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all duration-300 ${
                activeTab === 'phrasebook' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl scale-105' 
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200'
              }`}
              onClick={() => setActiveTab('phrasebook')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookMarked size={20} /> Phrasebook
            </motion.button>
          </motion.div>

          {/* Tab Content - Uses AnimatePresence for smooth transitions between tabs */}
          <AnimatePresence mode="wait">
            {activeTab === 'live' && (
              <motion.div
                key="live-translator"
                className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Input Card */}
                <motion.div 
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-display font-bold flex items-center gap-3 mb-6 text-gray-800">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                      <Languages size={24} />
                    </div>
                    Translate
                  </h2>

                  <div className="flex justify-between items-center gap-3 mb-6">
                    <motion.select
                      className="flex-1 border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer text-gray-700 font-medium"
                      value={fromLang}
                      onChange={(e) => setFromLang(e.target.value)}
                      whileHover={{ scale: 1.02 }}
                    >
                      {availableLanguages.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                      ))}
                    </motion.select>
                    <motion.button
                      onClick={swapLanguages}
                      className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Swap languages"
                    >
                      <ArrowLeftRight size={20} />
                    </motion.button>
                    <motion.select
                      className="flex-1 border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all cursor-pointer text-gray-700 font-medium"
                      value={toLang}
                      onChange={(e) => setToLang(e.target.value)}
                      whileHover={{ scale: 1.02 }}
                    >
                      {availableLanguages.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                      ))}
                    </motion.select>
                  </div>

                  <motion.textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text here..."
                    className="w-full border-2 border-gray-200 bg-white/80 backdrop-blur-sm rounded-xl p-6 h-48 resize-none mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg text-gray-700 font-body"
                  />
                  <motion.button
                    onClick={handleTranslate}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl w-full font-bold text-xl shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowRight size={24} /> Translate Now
                  </motion.button>
                </motion.div>

                {/* Recent Translations Card */}
                <motion.div 
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-display font-bold mb-6 text-gray-800">Recent Translations</h2>
                  {translations.length === 0 ? (
                    <div className="text-center py-16">
                      <Globe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 font-body text-lg">Your recent translations will appear here.</p>
                    </div>
                  ) : (
                    <motion.ul className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {translations.map((t, idx) => (
                        <motion.li 
                          key={idx} 
                          className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border border-blue-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="flex-1">
                            <p className="text-sm font-bold text-blue-600 mb-2">From: {t.from} → To: {t.to}</p>
                            <p className="text-lg font-semibold text-gray-800 mb-2">{t.original}</p>
                            <p className="text-xl text-gray-700 font-bold">{t.result}</p>
                          </div>
                          <div className="flex gap-3 self-end sm:self-center">
                            <motion.button 
                              onClick={() => speakText(t.result, t.to)} 
                              whileHover={{ scale: 1.15 }} 
                              whileTap={{ scale: 0.9 }} 
                              className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
                              aria-label="Listen to translation"
                            >
                              <Volume2 size={20} />
                            </motion.button>
                            <motion.button 
                              onClick={() => copyText(t.result)} 
                              whileHover={{ scale: 1.15 }} 
                              whileTap={{ scale: 0.9 }} 
                              className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg"
                              aria-label="Copy translation"
                            >
                              <FaCopy size={20} />
                            </motion.button>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'phrasebook' && (
              <motion.div
                key="phrasebook"
                className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {phrasebookData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-6 flex flex-col border border-white/20 group hover:shadow-3xl transition-all duration-500"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.03, y: -8 }}
                  >
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                        {item.icon}
                      </div>
                      <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
            
                    {/* Language and Phrase */}
                    <div className="mb-4">
                      <p className="text-sm mb-2 text-gray-600 font-medium">{item.language}</p>
                      <p className="text-2xl font-bold text-gray-800 mb-2">{item.phrase}</p>
                      <p className="text-base text-gray-700">
                        English: <strong className="text-blue-600">{item.translation}</strong>
                      </p>
                    </div>
            
                    {/* Example box */}
                    <div className="text-sm italic p-4 rounded-xl border border-gray-200 flex-grow mb-4 bg-gradient-to-r from-blue-50 to-purple-50">
                      <p className="leading-relaxed">
                        <strong className="text-blue-600">Example</strong>: {item.example}
                      </p>
                    </div>
            
                    {/* Action buttons */}
                    <div className="flex gap-3 justify-end mt-auto">
                      <motion.button
                        onClick={() => speakText(item.phrase, item.language)}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-all shadow-lg"
                        aria-label="Listen to phrase"
                      >
                        <Volume2 size={20} />
                      </motion.button>
            
                      <motion.button
                        onClick={() => copyText(item.phrase)}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white transition-all shadow-lg"
                        aria-label="Copy phrase"
                      >
                        <FaCopy size={20} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Copy Success Message */}
          <AnimatePresence>
            {showCopyMessage && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full shadow-2xl text-lg font-bold z-50"
              >
                Copied to clipboard! ✨
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Translation Tips Section */}
        <section className="py-20 rounded-3xl mx-4 md:mx-12 my-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl">
          <motion.h2
            className="text-center text-4xl sm:text-5xl font-display font-bold mb-16 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Boost Your Communication
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row justify-around items-center gap-10 px-6 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {/* Tip Card 1 */}
            <motion.div
              className="flex flex-col items-center text-center max-w-xs p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-white rounded-full p-6 mb-6 bg-white/20 backdrop-blur-sm">
                <Languages className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white">
                Context Matters
              </h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                Provide context for better translations. Short, clear phrases work best for accuracy.
              </p>
            </motion.div>

            {/* Tip Card 2 */}
            <motion.div
              className="flex flex-col items-center text-center max-w-xs p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-white rounded-full p-6 mb-6 bg-white/20 backdrop-blur-sm">
                <Volume2 className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white">
                Practice Pronunciation
              </h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                Utilize the audio feature to learn correct pronunciation of translated phrases effectively.
              </p>
            </motion.div>

            {/* Tip Card 3 */}
            <motion.div
              className="flex flex-col items-center text-center max-w-xs p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-white rounded-full p-6 mb-6 bg-white/20 backdrop-blur-sm">
                <BookMarked className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white">
                Save for Later
              </h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                Bookmark useful translations and frequently used phrases for quick access during your travels.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}