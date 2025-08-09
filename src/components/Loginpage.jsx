import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Lock, Eye, EyeOff, ArrowRight, Star, Globe, Shield, 
  CircleCheck, CircleAlert
} from 'lucide-react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './loginpage.css'; // Import your CSS file for styling
const Loginpage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 2000);
  };

  const socialLogins = [
    { name: 'Google', icon: <Google className="social-icon" />, color: 'from-red-500 to-orange-500' },
    { name: 'Facebook', icon: <Facebook className="social-icon" />, color: 'from-blue-600 to-blue-700' },
    { name: 'Twitter', icon: <Twitter className="social-icon" />, color: 'from-blue-400 to-blue-500' }
  ];

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="login-bg-image" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=80)'
        }} />
        <div className="login-overlay" />
        <div className="login-particles" />
      </div>

      <div className="login-container">
        <div className="login-content">
          {/* Left Side - Branding */}
          <motion.div
            className="login-branding"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="brand-logo">
              <div className="logo-icon">
                <Plane className="logo-plane" />
              </div>
              <h1 className="brand-title">Xperio</h1>
            </div>
            
            <h2 className="brand-headline">
              Discover the World with AI-Powered Travel
            </h2>
            
            <p className="brand-description">
              Join over 250,000 travelers who trust Xperio to unlock authentic experiences, 
              discover hidden gems, and create unforgettable memories.
            </p>

            <div className="brand-features">
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <span>AI-Powered Recommendations</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <span>Real-time Translation</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <span>Cultural Insights</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <span>Local Food Discovery</span>
              </div>
            </div>

            <div className="brand-testimonial">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-filled" />
                ))}
              </div>
              <p>"Xperio completely transformed my travel experience!"</p>
              <span>- Sarah Chen, Digital Nomad</span>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="login-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-wrapper">
              <div className="form-header">
                <h3 className="form-title">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h3>
                <p className="form-subtitle">
                  {isLogin 
                    ? 'Sign in to continue your travel journey' 
                    : 'Start your adventure with Xperio today'
                  }
                </p>
              </div>

              {/* Social Loginpage Buttons */}
              <div className="social-login">
                {socialLogins.map((social, index) => (
                  <motion.button
                    key={social.name}
                    className={`social-btn bg-gradient-to-r ${social.color}`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {social.icon}
                    <span>{isLogin ? 'Sign in' : 'Sign up'} with {social.name}</span>
                  </motion.button>
                ))}
              </div>

              <div className="divider">
                <span>or</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="login-form">
                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      className="input-group"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="input-wrapper">
                        <User className="input-icon" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`form-input ${errors.name ? 'error' : ''}`}
                        />
                      </div>
                      {errors.name && (
                        <div className="error-message">
                          <AlertCircle className="error-icon" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="input-group">
                  <div className="input-wrapper">
                    <Mail className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                    />
                  </div>
                  {errors.email && (
                    <div className="error-message">
                      <AlertCircle className="error-icon" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div className="input-group">
                  <div className="input-wrapper">
                    <Lock className="input-icon" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`form-input ${errors.password ? 'error' : ''}`}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="error-message">
                      <AlertCircle className="error-icon" />
                      <span>{errors.password}</span>
                    </div>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      className="input-group"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="input-wrapper">
                        <Lock className="input-icon" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                        />
                      </div>
                      {errors.confirmPassword && (
                        <div className="error-message">
                          <AlertCircle className="error-icon" />
                          <span>{errors.confirmPassword}</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {isLogin && (
                  <div className="form-options">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Remember me
                    </label>
                    <button type="button" className="forgot-password">
                      Forgot Password?
                    </button>
                  </div>
                )}

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="loading-spinner" />
                  ) : (
                    <>
                      <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                      <ArrowRight className="submit-icon" />
                    </>
                  )}
                </motion.button>

                <div className="form-switch">
                  <span>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                  </span>
                  <button
                    type="button"
                    className="switch-btn"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
