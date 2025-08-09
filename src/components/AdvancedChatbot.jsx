import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, X, Send, Bot, User, Minimize2, Maximize2,
  Star, ThumbsUp, ThumbsDown, Copy, Download, Mic, MicOff,
  Globe, MapPin, Plane, Camera, FileText, Zap, Volume2, RotateCcw,
  Sparkles, Heart, Coffee, Navigation
} from 'lucide-react';
import './chatbot.css'; // Import your CSS file for styling
const AdvancedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "👋 Hello! I'm Xperio AI, your personal travel companion. I'm here to help you discover amazing experiences!\n\n✨ I can assist you with:\n🍜 Finding incredible local food spots\n🎭 Discovering cultural experiences\n🌍 Real-time translation assistance\n✈️ Planning your perfect trip\n\nWhat adventure are you planning today?"
        );
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickActions = [
    { 
      icon: <Coffee className="quick-icon-enhanced" />, 
      text: "Find Amazing Food", 
      action: "show me the best local food spots nearby",
      gradient: "from-orange-500 to-red-500"
    },
    { 
      icon: <Sparkles className="quick-icon-enhanced" />, 
      text: "Cultural Events", 
      action: "what cultural events are happening nearby",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: <Globe className="quick-icon-enhanced" />, 
      text: "Translate Text", 
      action: "help me translate something",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Navigation className="quick-icon-enhanced" />, 
      text: "Plan My Trip", 
      action: "help me plan an amazing trip",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const getAIResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('food') || lowerMessage.includes('restaurant') || lowerMessage.includes('eat')) {
      return {
        text: "🍽️ Fantastic! I've found some incredible food experiences for you:\n\n⭐ **Biryani Paradise** - Legendary Hyderabani biryani (4.9⭐)\n📍 15 min walk • ₹₹ • Authentic spices\n\n🌶️ **Street Chaat Heaven** - Best pani puri in the city (4.7⭐)\n📍 8 min walk • ₹ • Local favorite since 1985\n\n🍛 **Spice Garden** - Traditional thali experience (4.8⭐)\n📍 12 min walk • ₹₹ • Vegetarian paradise\n\nWould you like directions to any of these amazing places? 🗺️",
        suggestions: ["Get directions to Biryani Paradise", "Show more food options", "Filter by cuisine type", "Find dessert spots"]
      };
    }
    
    if (lowerMessage.includes('culture') || lowerMessage.includes('event') || lowerMessage.includes('festival')) {
      return {
        text: "🎭 Wonderful! Here are some amazing cultural experiences happening right now:\n\n🎪 **Diwali Grand Celebration** - Oct 24-26\n📍 City Center Square • Free entry\n🎨 Traditional dance, music & food stalls\n\n🎵 **Classical Music Night** - Tonight 7 PM\n📍 Heritage Arts Theater • ₹500\n🎼 Featuring renowned sitarist Pt. Sharma\n\n🖼️ **Local Artists Exhibition** - All week\n📍 Modern Art Gallery • ₹200\n🎨 Contemporary works by 25 local artists\n\nWhich cultural adventure interests you most? 🌟",
        suggestions: ["Book festival tickets", "Get event details", "Show more cultural events", "Find art workshops"]
      };
    }
    
    if (lowerMessage.includes('translate') || lowerMessage.includes('language')) {
      return {
        text: "🌍 I'm your multilingual travel buddy! Here's how I can break language barriers for you:\n\n🗣️ **Voice Translation**\nSpeak naturally, I'll translate instantly\n\n📱 **Camera Translation**\nPoint at signs, menus, or text - I'll translate it\n\n💬 **Real-time Chat**\nType in any language, get instant translations\n\n🌐 **100+ Languages Supported**\nFrom major languages to local dialects\n\nWhat would you like me to help translate? ✨",
        suggestions: ["Start voice translation", "Use camera translator", "Practice common phrases", "Learn local greetings"]
      };
    }
    
    if (lowerMessage.includes('trip') || lowerMessage.includes('plan') || lowerMessage.includes('travel')) {
      return {
        text: "✈️ Let's plan your dream adventure! I'll create a personalized itinerary just for you.\n\nTo get started, tell me:\n\n📍 **Where would you like to explore?**\n🗓️ **When are you traveling?**\n⏱️ **How many days will you be there?**\n💰 **What's your budget range?**\n❤️ **What interests you most?** (food, culture, nature, nightlife, etc.)\n\nOnce I know these details, I'll craft the perfect journey for you! 🌟",
        suggestions: ["Popular destinations near me", "Budget-friendly trips", "Weekend getaway ideas", "Adventure travel options"]
      };
    }
    
    if (lowerMessage.includes('premium') || lowerMessage.includes('upgrade')) {
      return {
        text: "👑 **Xperio Premium** - Unlock the full potential of your travels!\n\n✨ **What you'll get:**\n🗺️ Offline maps & guides for 500+ cities\n🎯 AI-powered personalized recommendations\n📞 24/7 priority support from travel experts\n🎫 Exclusive deals & early access to events\n🚫 Completely ad-free experience\n💎 Premium-only hidden gems & experiences\n\n🎁 **Special Offer: 7-day FREE trial**\nNo commitment, cancel anytime!\n\nReady to upgrade your travel game? 🚀",
        suggestions: ["Start free trial", "See all premium features", "Compare plans", "Contact support"]
      };
    }
    
    // Default enhanced response
    return {
      text: `I'd love to help you with "${message}"! 🤔\n\n🎯 **I specialize in:**\n🍜 **Food & Dining** - Hidden gems, local favorites, authentic experiences\n🎭 **Culture & Events** - Festivals, museums, traditions, local customs\n🌍 **Translation** - 100+ languages, voice, camera, offline support\n✈️ **Trip Planning** - Personalized itineraries, budget planning, insider tips\n👑 **Premium Features** - Exclusive access, offline content, priority support\n\nWhat adventure would you like to explore first? ✨`,
      suggestions: ["Find local food gems", "Discover cultural events", "Plan my next trip", "Explore premium features"]
    };
  };

  const addBotMessage = (text, suggestions = []) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'bot',
      text,
      suggestions,
      timestamp: new Date()
    }]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      text,
      timestamp: new Date()
    }]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue('');
    addUserMessage(userMessage);
    setIsTyping(true);
    setShowQuickActions(false);

    // Enhanced typing simulation with more realistic delay
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setIsTyping(false);
      addBotMessage(response.text, response.suggestions);
    }, 1800 + Math.random() * 1200);
  };

  const handleQuickAction = (action) => {
    setInputValue(action);
    setShowQuickActions(false);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startVoiceRecording = () => {
    setIsListening(true);
    // Enhanced voice recording simulation
    setTimeout(() => {
      setIsListening(false);
      setInputValue("Find me some incredible biryani places with authentic flavors");
    }, 2500);
  };

  const copyMessage = (text) => {
    navigator.clipboard.writeText(text.replace(/\*\*/g, '').replace(/\n/g, ' '));
  };

  const resetChat = () => {
    setMessages([]);
    setShowQuickActions(true);
    setTimeout(() => {
      addBotMessage(
        "👋 Chat reset! I'm ready to help you discover amazing travel experiences again.\n\nWhat would you like to explore? ✨"
      );
    }, 300);
  };

  return (
    <>
      {/* Enhanced Chat Trigger */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="chatbot-trigger-enhanced"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
          >
            <div className="trigger-glow"></div>
            <MessageCircle className="chat-trigger-icon-enhanced" />
            <span className="chat-pulse-enhanced"></span>
            <div className="chat-notification-enhanced">
              <Sparkles className="notification-icon" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Enhanced Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`chatbot-window-enhanced ${isMinimized ? 'minimized' : ''}`}
            initial={{ scale: 0, opacity: 0, originX: 1, originY: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {/* Enhanced Chat Header */}
            <div className="chat-header-enhanced">
              <div className="chat-header-info-enhanced">
                <div className="bot-avatar-enhanced">
                  <Bot className="bot-icon-enhanced" />
                  <span className="status-indicator-enhanced"></span>
                  <div className="avatar-glow"></div>
                </div>
                <div className="bot-info-enhanced">
                  <h3 className="bot-name-enhanced">Xperio AI Assistant</h3>
                  <p className="bot-status-enhanced">
                    <span className="status-dot"></span>
                    Online • Ready to help you explore
                  </p>
                </div>
              </div>
              <div className="chat-header-actions-enhanced">
                <motion.button
                  className="header-btn-enhanced reset-btn"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={resetChat}
                  title="Reset chat"
                >
                  <RotateCcw className="header-icon-enhanced" />
                </motion.button>
                <motion.button
                  className="header-btn-enhanced"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? <Maximize2 className="header-icon-enhanced" /> : <Minimize2 className="header-icon-enhanced" />}
                </motion.button>
                <motion.button
                  className="header-btn-enhanced close"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                >
                  <X className="header-icon-enhanced" />
                </motion.button>
              </div>
            </div>

            {/* Enhanced Chat Content */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  className="chat-content-enhanced"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="chat-messages-enhanced">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        className={`message-enhanced ${message.type}`}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {message.type === 'bot' && (
                          <div className="message-avatar-enhanced">
                            <Bot className="message-bot-icon-enhanced" />
                            <div className="avatar-pulse"></div>
                          </div>
                        )}
                        
                        <div className="message-content-enhanced">
                          <div className="message-bubble-enhanced">
                            <div className="message-text-enhanced">
                              {message.text.split('\n').map((line, index) => (
                                <div key={index} className="message-line">
                                  {line.includes('**') ? (
                                    <strong className="message-bold">{line.replace(/\*\*/g, '')}</strong>
                                  ) : (
                                    line
                                  )}
                                </div>
                              ))}
                            </div>
                            
                            {message.type === 'bot' && (
                              <div className="message-actions-enhanced">
                                <motion.button
                                  className="message-action-enhanced"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => copyMessage(message.text)}
                                  title="Copy message"
                                >
                                  <Copy className="action-icon-enhanced" />
                                </motion.button>
                                <motion.button
                                  className="message-action-enhanced"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  title="Read aloud"
                                >
                                  <Volume2 className="action-icon-enhanced" />
                                </motion.button>
                                <motion.button
                                  className="message-action-enhanced like"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  title="Helpful"
                                >
                                  <ThumbsUp className="action-icon-enhanced" />
                                </motion.button>
                              </div>
                            )}
                          </div>
                          
                          {/* Enhanced Suggestions */}
                          {message.suggestions && message.suggestions.length > 0 && (
                            <div className="message-suggestions-enhanced">
                              {message.suggestions.map((suggestion, index) => (
                                <motion.button
                                  key={index}
                                  className="suggestion-chip-enhanced"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                >
                                  <span className="suggestion-text">{suggestion}</span>
                                  <ArrowRight className="suggestion-arrow" />
                                </motion.button>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        {message.type === 'user' && (
                          <div className="message-avatar-enhanced user">
                            <User className="message-user-icon-enhanced" />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {/* Enhanced Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        className="message-enhanced bot typing"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="message-avatar-enhanced">
                          <Bot className="message-bot-icon-enhanced" />
                          <div className="avatar-pulse typing-pulse"></div>
                        </div>
                        <div className="message-content-enhanced">
                          <div className="typing-indicator-enhanced">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <span className="typing-text">Xperio AI is thinking...</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Enhanced Quick Actions */}
                    {showQuickActions && messages.length > 0 && (
                      <motion.div
                        className="quick-actions-enhanced"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="quick-actions-title-enhanced">
                          <Sparkles className="title-icon" />
                          Quick Actions
                        </h4>
                        <div className="quick-actions-grid-enhanced">
                          {quickActions.map((action, index) => (
                            <motion.button
                              key={index}
                              className={`quick-action-btn-enhanced bg-gradient-to-r ${action.gradient}`}
                              whileHover={{ scale: 1.05, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleQuickAction(action.action)}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="action-icon-wrapper">
                                {action.icon}
                              </div>
                              <span className="action-text">{action.text}</span>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Enhanced Chat Input */}
                  <div className="chat-input-container-enhanced">
                    <div className="chat-input-wrapper-enhanced">
                      <div className="input-actions-enhanced">
                        <motion.button
                          className="input-action-enhanced"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Take photo"
                        >
                          <Camera className="input-icon-enhanced" />
                        </motion.button>
                        <motion.button
                          className="input-action-enhanced"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Attach file"
                        >
                          <FileText className="input-icon-enhanced" />
                        </motion.button>
                      </div>
                      
                      <div className="input-main-enhanced">
                        <input
                          type="text"
                          placeholder="Ask me anything about travel..."
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={handleKeyPress}
                          className="chat-input-enhanced"
                        />
                        <div className="input-border-glow"></div>
                      </div>
                      
                      <div className="input-actions-enhanced">
                        <motion.button
                          className={`input-action-enhanced voice ${isListening ? 'listening' : ''}`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={startVoiceRecording}
                          title={isListening ? 'Listening...' : 'Voice input'}
                        >
                          {isListening ? (
                            <div className="listening-animation">
                              <MicOff className="input-icon-enhanced" />
                            </div>
                          ) : (
                            <Mic className="input-icon-enhanced" />
                          )}
                        </motion.button>
                        
                        <motion.button
                          className="send-btn-enhanced"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={handleSendMessage}
                          disabled={!inputValue.trim()}
                          title="Send message"
                        >
                          <Send className="send-icon-enhanced" />
                          <div className="send-btn-glow"></div>
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="chat-footer-enhanced">
                      <span className="footer-text">
                        <Heart className="footer-icon" />
                        Powered by Xperio AI • Your privacy is protected
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdvancedChatbot;
