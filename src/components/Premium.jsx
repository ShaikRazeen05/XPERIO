import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Crown } from 'lucide-react';
import Navbar from './Navbar';

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
    img: "/pictures_homepage/offline.jpg"
  },
  {
    title: "Exclusive Content",
    desc: "Access premium travel stories and insider guides not available to free users.",
    img: "/pictures_homepage/exclusive.png"
  },
  {
    title: "Advanced Translator",
    desc: "Real-time conversation translation and expanded phrasebook with audio.",
    img: "/pictures_homepage/ai.png"
  },
  {
    title: "Personal Assistant",
    desc: "AI-powered travel recommendations based on your preferences and history.",
    img: "/pictures_homepage/vas.png"
  }
];
export default function Premium() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 px-6 md:px-20 py-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          {/* Shine animation on the crown */}
          <motion.div
            className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-semibold text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
            >
              <Crown className="text-yellow-500" />
            </motion.span>
            XperioPremium
          </motion.div>
          <motion.p variants={fadeUp} custom={2} className="text-gray-500 mt-2 max-w-xl mx-auto">
            Unlock the full potential of your travel experience with premium features,
            exclusive content, and personalized recommendations.
          </motion.p>
          <motion.div
            className="flex justify-center items-center mt-8"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
              alt="Premium Banner"
              className="w-96 h-64 rounded-xl shadow-lg"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          </motion.div>
        </motion.div>

        {/* Premium Features */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
        >
          <h2 className="text-center text-2xl font-semibold mb-8">Premium Features</h2>
          <div className="container mx-auto py-12">
      <h2 className="text-4xl font-serif text-center mb-10" style={{ color: '#4A4A4A', fontFamily: 'YourSerifFont, serif' }}>Premium Features</h2> {/* Replace 'YourSerifFont' */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map(({ title, desc, img}, i) => (
          <motion.div
            key={title}
            className="flex rounded-lg shadow-lg overflow-hidden" // Make it a flex container
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 32px rgba(0,0,0,0.12)" }}
            style={{ minHeight: '180px' }} // Adjust height as needed
          >
            {/* Left Section: Icon and Text */}
            <div className="flex-1 p-6 flex flex-col justify-center" style={{ backgroundColor: '#F8F8F8' }}> {/* Light gray background for left */}
              
              <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>

            {/* Right Section: Background Image */}
            <div
              className="w-1/2 flex-none bg-cover bg-center" // Fixed width (half) for the image side
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Optional: Add an overlay div here for subtle gradient/darkening if needed */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={2}
        >
          <h2 className="text-center text-2xl font-semibold mb-8">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Monthly",
                price: "$9.99",
                features: ["All premium features", "Download support", "Cancel anytime"],
                button: "Choose Plan",
                highlighted: false,
              },
              {
                name: "Annual",
                price: "$79.99",
                features: ["Everything in Monthly", "60% savings", "Priority support", "Group trip discounts"],
                button: "Start Free Trial",
                highlighted: true,
              },
              {
                name: "Lifetime",
                price: "$199.99",
                features: ["All features unlocked", "One-time payment", "Lifetime updates"],
                button: "Choose Plan",
                highlighted: false,
              },
            ].map(({ name, price, features, button, highlighted }, i) => (
              <motion.div
                key={name}
                className={`rounded-xl p-6 border shadow-md flex flex-col justify-between ${highlighted ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} relative`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
                whileHover={!highlighted ? { scale: 1.04 } : {}}
              >
                <div className="relative">
                  {highlighted && (
                    <motion.div
                      className="absolute top-0 right-0 text-xs px-3 py-1 rounded-full bg-yellow-400 text-gray-900 font-semibold shadow-lg z-10"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      Most Popular
                    </motion.div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-3xl font-bold mb-4">{price}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  className={`px-4 py-2 rounded-lg font-semibold mt-auto ${
                    highlighted ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
                  }`}
                  whileHover={{ scale: 1.08 }}
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
          className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={3}
        >
          {[
            { value: '50K+', label: 'Premium Users' },
            { value: '4.9', label: 'User Rating' },
            { value: '1M+', label: 'Offline Downloads' },
            { value: '200+', label: 'Countries Covered' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-gray-50 p-4 rounded-lg shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={4}
        >
          <h2 className="text-center text-2xl font-semibold mb-8">What Premium Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Sarah Chen", "Mario Garcia", "Jessica Kim"].map((name, index) => (
              <motion.div
                key={name}
                className="bg-white border p-4 rounded-lg shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                whileHover={{ scale: 1.03, boxShadow: "0px 12px 32px rgba(0,0,0,0.12)" }}
              >
                <p className="text-sm text-gray-600 mb-4">
                  {index === 0
                    ? '“Upgraded for the offline maps – lifesaver in Bali! Loved the exclusive stories too.”'
                    : index === 1
                    ? '“The translator and itinerary AI helped me a lot in Japan. Totally worth it.”'
                    : '“Loved the assistant and discounts! Made my Europe trip so smooth.”'}
                </p>
                <p className="font-semibold">{name}</p>
                <p className="text-yellow-400">★★★★★</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow max-w-3xl mx-auto">
            <p className="font-semibold">Can I cancel my subscription anytime?</p>
            <p className="text-sm text-gray-600 mt-1">
              Yes, you can cancel your plan anytime via your dashboard. You’ll continue to have access to Premium features until the end of your billing period.
            </p>
          </div>
        </motion.div>
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
