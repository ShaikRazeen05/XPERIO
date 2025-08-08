import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Crown, Star, Zap, Shield, Globe } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, type: 'spring', stiffness: 70 }
  })
};

const features = [
  {
    title: "Offline Access",
    desc: "Download maps, guides, and eBooks for offline use during your travels.",
    img: "/pictures_homepage/offline.jpg",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Exclusive Content",
    desc: "Access premium travel stories and insider guides not available to free users.",
    img: "/pictures_homepage/exclusive.png",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Advanced Translator",
    desc: "Real-time conversation translation and expanded phrasebook with audio.",
    img: "/pictures_homepage/ai.png",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Personal Assistant",
    desc: "AI-powered travel recommendations based on your preferences and history.",
    img: "/pictures_homepage/vas.png",
    icon: <Shield className="w-6 h-6" />
  }
];

export default function Premium() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 px-6 md:px-20 py-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          {/* Enhanced crown animation */}
          <motion.div
            className="flex items-center justify-center gap-4 text-4xl md:text-6xl font-display font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
              className="text-amber-500 drop-shadow-lg"
            >
              <Crown className="w-12 h-12 md:w-16 md:h-16" />
            </motion.span>
            <span className="font-accent text-5xl md:text-7xl bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Xperio
            </span>
            <span className="font-display text-4xl md:text-6xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Premium
            </span>
          </motion.div>
          
          <motion.p 
            variants={fadeUp} 
            custom={2} 
            className="text-gray-700 mt-6 max-w-3xl mx-auto font-body text-xl leading-relaxed font-medium"
          >
            Unlock the full potential of your travel experience with premium features,
            exclusive content, and personalized recommendations that transform every journey.
          </motion.p>
          
          <motion.div
            className="flex justify-center items-center mt-12"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <img
                src=""
                alt="Premium Banner"
                className="w-full max-w-4xl h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Premium Features */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
        >
          <h2 className="text-center text-4xl md:text-5xl font-display font-bold mb-12">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Premium Features
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map(({ title, desc, img, icon }, i) => (
              <motion.div
                key={title}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex h-64">
                  {/* Left Section: Content */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white">
                        {icon}
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-gray-800">{title}</h3>
                    </div>
                    <p className="text-gray-600 font-body leading-relaxed text-lg">{desc}</p>
                  </div>

                  {/* Right Section: Image */}
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={2}
        >
          <h2 className="text-center text-4xl md:text-5xl font-display font-bold mb-12">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Monthly",
                price: "$9.99",
                period: "per month",
                features: ["All premium features", "Download support", "Cancel anytime", "Email support"],
                button: "Choose Plan",
                highlighted: false,
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Annual",
                price: "$79.99",
                period: "per year",
                features: ["Everything in Monthly", "60% savings", "Priority support", "Group trip discounts", "Exclusive events"],
                button: "Start Free Trial",
                highlighted: true,
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Lifetime",
                price: "$199.99",
                period: "one-time",
                features: ["All features unlocked", "One-time payment", "Lifetime updates", "VIP support", "Custom features"],
                button: "Choose Plan",
                highlighted: false,
                color: "from-amber-500 to-orange-500"
              },
            ].map(({ name, price, period, features, button, highlighted, color }, i) => (
              <motion.div
                key={name}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-500 ${
                  highlighted 
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white border-purple-500 shadow-2xl scale-105' 
                    : 'bg-white/90 backdrop-blur-sm text-gray-800 border-gray-200 hover:border-gray-300 shadow-xl'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
                whileHover={{ scale: highlighted ? 1.05 : 1.03, y: -5 }}
              >
                {highlighted && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Most Popular
                  </motion.div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-4">{name}</h3>
                  <div className="mb-2">
                    <span className={`text-5xl font-display font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                      {price}
                    </span>
                  </div>
                  <p className="text-gray-500 font-body">{period}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${highlighted ? 'text-green-400' : 'text-green-500'}`} />
                      <span className="font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                    highlighted 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                      : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800'
                  } shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  {button}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={3}
        >
          {[
            { value: '50K+', label: 'Premium Users', icon: '👥' },
            { value: '4.9', label: 'User Rating', icon: '⭐' },
            { value: '1M+', label: 'Offline Downloads', icon: '📱' },
            { value: '200+', label: 'Countries Covered', icon: '🌍' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 text-center group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-display font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-body font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={4}
        >
          <h2 className="text-center text-4xl md:text-5xl font-display font-bold mb-12">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              What Premium Users Say
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "Travel Blogger",
                content: '"Upgraded for the offline maps – lifesaver in Bali! Loved the exclusive stories too."',
                rating: 5
              },
              {
                name: "Mario Garcia",
                role: "Business Traveler",
                content: '"The translator and itinerary AI helped me a lot in Japan. Totally worth it."',
                rating: 5
              },
              {
                name: "Jessica Kim",
                role: "Adventure Seeker",
                content: '"Loved the assistant and discounts! Made my Europe trip so smooth."',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 group hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 font-body leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-heading font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 font-body">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-4xl md:text-5xl font-display font-bold mb-12">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
            <h3 className="font-heading font-bold text-xl text-gray-800 mb-4">
              Can I cancel my subscription anytime?
            </h3>
            <p className="text-gray-600 font-body leading-relaxed text-lg">
              Yes, you can cancel your plan anytime via your dashboard. You'll continue to have access to Premium features until the end of your billing period.
            </p>
          </div>
        </motion.div>

        {/* Enhanced Footer */}
        <Footer />
      </div>
    </>
  );
}
