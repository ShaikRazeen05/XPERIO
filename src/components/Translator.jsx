import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy } from 'react-icons/fa';
import { BookMarked, Volume2, Languages, ArrowRight, ArrowLeftRight } from 'lucide-react';
import { COLORS, ANIMATION } from './constants';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

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
      example: "When meeting someone new, you can say 'Bonjour' to greet them."
    },
    {
      category: 'Dining',
      language: 'Spanish',
      phrase: 'La cuenta, por favor.',
      translation: 'The bill, please.',
      example: "After finishing your meal, ask the waiter 'La cuenta, por favor.'"
    },
    {
      category: 'Directions',
      language: 'Italian',
      phrase: "Dov'è il bagno?",
      translation: 'Where is the bathroom?',
      example: "If you are lost, ask a local 'Dov'è il bagno?'"
    },
    {
      category: 'Shopping',
      language: 'German',
      phrase: 'Wie viel kostet das?',
      translation: 'How much does this cost?',
      example: "When buying a souvenir, you might ask 'Wie much kostet das?'"
    },
    {
      category: 'Essentials',
      language: 'Japanese',
      phrase: 'すみません',
      translation: 'Excuse me',
      example: "If you need help, say 'すみません' to get someone's attention."
    },
    {
      category: 'Emergency',
      language: 'English',
      phrase: 'Help!',
      translation: 'Help!',
      example: "Shout 'Help!' in case of an emergency."
    }
  ];

  return (
    <>
      <Navbar />
      <div className={`min-h-screen bg-[${COLORS.lightBg}] text-gray-800 font-sans`}>
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/40 to-black/10 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">Break Language Barriers</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">Instantly translate and communicate with confidence, wherever you are in the world.</p>
          </div>
        </motion.div>
        {/* Main Translator Section */}
        <div id="translator-main-section" className="p-4 md:p-10 lg:p-12">
          <motion.h1
            className={`text-4xl md:text-5xl font-extrabold text-center mb-4`} // Removed text-[${darkBg}]
            style={{ color: COLORS.darkBg }} // Applied color via inline style
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            XperioTranslator
          </motion.h1>
          <motion.p
            className={`text-center text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[${COLORS.darkText}]`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Break down language barriers with instant translation and essential travel phrases.
            Communicate confidently wherever your journey takes you.
          </motion.p>
          

          {/* Tab Buttons */}
          <motion.div
            className="flex justify-center mb-8 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              className={`px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-colors duration-200 ${activeTab === 'live' ? `bg-[${COLORS.darkBg}] text-white shadow-md` : `bg-[${COLORS.lightBg}] text-[${COLORS.darkText}] hover:bg-gray-200`}`}
              onClick={() => setActiveTab('live')}
              variants={ANIMATION.tabButtonVariants}
              initial="rest"
              animate={activeTab === 'live' ? 'active' : 'rest'}
              whileHover="hover"
              whileTap="active"
            >
              <Languages size={18} /> Live Translator
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-colors duration-200 ${activeTab === 'phrasebook' ? `bg-[${COLORS.darkBg}] text-white shadow-md` : `bg-[${COLORS.lightBg}] text-[${COLORS.darkText}] hover:bg-gray-200`}`}
              onClick={() => setActiveTab('phrasebook')}
              variants={ANIMATION.tabButtonVariants}
              initial="rest"
              animate={activeTab === 'phrasebook' ? 'active' : 'rest'}
              whileHover="hover"
              whileTap="active"
            >
              <BookMarked size={18} /> Phrasebook
            </motion.button>
          </motion.div>

          {/* Tab Content - Uses AnimatePresence for smooth transitions between tabs */}
          <AnimatePresence mode="wait">
            {activeTab === 'live' && (
              <motion.div
                key="live-translator"
                className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Input Card */}
                <motion.div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100" variants={ANIMATION.itemVariants}>
                  <h2 className={`text-2xl font-bold flex items-center gap-3 mb-5`} style={{ color: COLORS.darkBg }}> {/* Applied color via inline style */}
                    <Languages /> Translate
                  </h2>

                  <div className="flex justify-between items-center gap-2 mb-4">
                    <motion.select
                      className={`flex-1 border border-gray-300 bg-gray-50 px-4 py-2 rounded-lg focus:ring-[${COLORS.darkBg}] focus:border-[${COLORS.darkBg}] transition-colors cursor-pointer text-[${COLORS.darkText}]`}
                      value={fromLang}
                      onChange={(e) => setFromLang(e.target.value)}
                      variants={ANIMATION.itemVariants}
                    >
                      {availableLanguages.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                      ))}
                    </motion.select>
                    <motion.button
                      onClick={swapLanguages}
                      className={`p-2 rounded-full bg-[${COLORS.lightBg}] text-[${COLORS.darkText}] hover:bg-gray-200 transition-colors shadow-sm`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Swap languages"
                    >
                      <ArrowLeftRight size={20} />
                    </motion.button>
                    <motion.select
                      className={`flex-1 border border-gray-300 bg-gray-50 px-4 py-2 rounded-lg focus:ring-[${COLORS.darkBg}] focus:border-[${COLORS.darkBg}] transition-colors cursor-pointer text-[${COLORS.darkText}]`}
                      value={toLang}
                      onChange={(e) => setToLang(e.target.value)}
                      variants={ANIMATION.itemVariants}
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
                    className={`w-full border border-gray-300 bg-gray-50 rounded-lg p-4 h-40 resize-none mb-5 focus:outline-none focus:ring-2 focus:ring-[${COLORS.darkBg}] transition-all text-lg text-[${COLORS.darkText}]`}
                    variants={ANIMATION.itemVariants}
                  ></motion.textarea>
                  <motion.button
                    onClick={handleTranslate}
                    className={`bg-[${COLORS.darkBg}] text-white px-6 py-3 rounded-xl w-full font-semibold shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-lg`}
                    variants={ANIMATION.itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowRight size={20} /> Translate Now
                  </motion.button>
                </motion.div>

                {/* Recent Translations Card */}
                <motion.div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100" variants={ANIMATION.itemVariants}>
                  <h2 className={`text-2xl font-bold mb-5`} style={{ color: COLORS.darkBg }}>Recent Translations</h2> {/* Applied color via inline style */}
                  {translations.length === 0 ? (
                    <p className={`text-[${COLORS.darkText}] text-center py-10`}>Your recent translations will appear here.</p>
                  ) : (
                    <motion.ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar" variants={ANIMATION.containerVariants}>
                      {translations.map((t, idx) => (
                        <motion.li key={idx} className={`bg-[${COLORS.lightBg}] p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3`} variants={ANIMATION.itemVariants}>
                          <div className="flex-1">
                            <p className={`text-sm font-medium text-[${COLORS.darkText}] mb-1`}>From: {t.from} → To: {t.to}</p>
                            <p className={`text-base font-semibold`} style={{ color: COLORS.darkBg }}>{t.original}</p> {/* Applied color via inline style */}
                            <p className={`text-lg text-[${COLORS.darkText}] font-bold`}>{t.result}</p>
                          </div>
                          <div className="flex gap-2 self-end sm:self-center">
                            <motion.button onClick={() => speakText(t.result, t.to)} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} className={`p-2 rounded-full bg-[${COLORS.darkBg}] text-white hover:bg-gray-800 transition-colors shadow-md`} aria-label="Listen to translation">
                              <Volume2 size={20} />
                            </motion.button>
                            <motion.button onClick={() => copyText(t.result)} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} className={`p-2 rounded-full bg-[${COLORS.darkBg}] text-white hover:bg-gray-800 transition-colors shadow-md`} aria-label="Copy translation">
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
              variants={ANIMATION.containerVariants}
            >
              {phrasebookData.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white shadow-xl rounded-2xl p-6 flex flex-col border border-gray-100"
                  variants={ANIMATION.itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Tag */}
                  <span
                    className="bg-gray-100 text-xs px-3 py-1 rounded-full self-start font-semibold mb-3"
                    style={{ color: COLORS.darkText }}
                  >
                    {item.category}
                  </span>
            
                  {/* Language and Phrase */}
                  <div className="mb-4">
                    <p className="text-sm mb-1" style={{ color: COLORS.darkText }}>
                      {item.language}
                    </p>
                    <p className="text-xl font-extrabold" style={{ color: COLORS.darkBg }}>
                      {item.phrase}
                    </p>
                    <p className="text-base" style={{ color: COLORS.darkText }}>
                      English: <strong>{item.translation}</strong>
                    </p>
                  </div>
            
                  {/* Example box */}
                  <div
                    className="text-sm italic p-3 rounded-lg border border-gray-200 flex-grow mb-4"
                    style={{
                      backgroundColor: COLORS.lightBg,
                      color: COLORS.darkText,
                    }}
                  >
                    <p className="leading-relaxed">
                      <strong>Example</strong>: {item.example}
                    </p>
                  </div>
            
                  {/* Action buttons */}
                  <div className="flex gap-3 justify-end mt-auto">
                    <motion.button
                      onClick={() => speakText(item.phrase, item.language)}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full text-white transition-colors shadow-md"
                      style={{ backgroundColor: COLORS.darkBg }}
                      aria-label="Listen to phrase"
                    >
                      <Volume2 size={20} />
                    </motion.button>
            
                    <motion.button
                      onClick={() => copyText(item.phrase)}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full text-white transition-colors shadow-md"
                      style={{ backgroundColor: COLORS.darkBg }}
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
                className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold z-50"
              >
                Copied to clipboard!
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Translation Tips Section */}
        <section
    className="py-16 rounded-xl mx-4 md:mx-12 my-12 shadow-2xl"
    style={{ backgroundColor: COLORS.tipsSectionBg }}
  >
    <motion.h2
      className="text-center text-3xl sm:text-4xl font-extrabold mb-12 drop-shadow-md"
      style={{ color: COLORS.darkBg }}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      Boost Your Communication
    </motion.h2>

    <motion.div
      className="flex flex-col md:flex-row justify-around items-center gap-10 px-6 max-w-6xl mx-auto"
      variants={ANIMATION.containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Tip Card 1 */}
      <motion.div
        className="flex flex-col items-center text-center max-w-xs p-6 bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        variants={ANIMATION.itemVariants}
      >
        <div
          className="text-white rounded-full p-4 mb-4 shadow-md"
          style={{ backgroundColor: COLORS.darkBg }}
        >
          <Languages className="w-8 h-8" />
        </div>
        <h3 className="font-bold text-xl mb-2" style={{ color: COLORS.darkBg }}>
          Context Matters
        </h3>
        <p className="text-base leading-relaxed" style={{ color: COLORS.darkText }}>
          Provide context for better translations. Short, clear phrases work best for accuracy.
        </p>
      </motion.div>

      {/* Tip Card 2 */}
      <motion.div
        className="flex flex-col items-center text-center max-w-xs p-6 bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        variants={ANIMATION.itemVariants}
      >
        <div
          className="text-white rounded-full p-4 mb-4 shadow-md"
          style={{ backgroundColor: COLORS.darkBg }}
        >
          <Volume2 className="w-8 h-8" />
        </div>
        <h3 className="font-bold text-xl mb-2" style={{ color: COLORS.darkBg }}>
          Practice Pronunciation
        </h3>
        <p className="text-base leading-relaxed" style={{ color: COLORS.darkText }}>
          Utilize the audio feature to learn correct pronunciation of translated phrases effectively.
        </p>
      </motion.div>

      {/* Tip Card 3 */}
      <motion.div
        className="flex flex-col items-center text-center max-w-xs p-6 bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        variants={ANIMATION.itemVariants}
      >
        <div
          className="text-white rounded-full p-4 mb-4 shadow-md"
          style={{ backgroundColor: COLORS.darkBg }}
        >
          <BookMarked className="w-8 h-8" />
        </div>
        <h3 className="font-bold text-xl mb-2" style={{ color: COLORS.darkBg }}>
          Save for Later
        </h3>
        <p className="text-base leading-relaxed" style={{ color: COLORS.darkText }}>
          Bookmark useful translations and frequently used phrases for quick access during your travels.
        </p>
      </motion.div>
    </motion.div>
  </section>
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
    </div>
    </>
  );
}