import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, Bell, User, ChevronDown, Globe, 
  LogIn, UserPlus, Settings, LogOut, Crown, Heart
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

export function ProfessionalNavbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [signupForm, setSignupForm] = useState({ 
        name: '', 
        email: '', 
        password: '', 
        confirmPassword: '' 
    });

    // Check if user is logged in on component mount
    useEffect(() => {
        const userData = localStorage.getItem('xperio_user');
        if (userData) {
            setUser(JSON.parse(userData));
            setIsLoggedIn(true);
        }
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple validation
        if (loginForm.email && loginForm.password) {
            const userData = {
                name: loginForm.email.split('@')[0],
                email: loginForm.email,
                avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80`
            };
            localStorage.setItem('xperio_user', JSON.stringify(userData));
            setUser(userData);
            setIsLoggedIn(true);
            setIsLoginModalOpen(false);
            setLoginForm({ email: '', password: '' });
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // Simple validation
        if (signupForm.name && signupForm.email && signupForm.password && 
            signupForm.password === signupForm.confirmPassword) {
            const userData = {
                name: signupForm.name,
                email: signupForm.email,
                avatar: `https://images.unsplash.com/photo-1494790108755-2616b612b977?auto=format&fit=crop&w=100&q=80`
            };
            localStorage.setItem('xperio_user', JSON.stringify(userData));
            setUser(userData);
            setIsLoggedIn(true);
            setIsSignupModalOpen(false);
            setSignupForm({ name: '', email: '', password: '', confirmPassword: '' });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('xperio_user');
        setUser(null);
        setIsLoggedIn(false);
        setIsUserMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Food', path: '/food' },
        { name: 'Culture', path: '/culture' },
        { name: 'Translator', path: '/translator' },
        { name: 'Premium', path: '/premium' }
    ];

    // Animation variants
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: -50 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.8, y: -50 }
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };

    // Login Modal Component
    const LoginModal = () => (
        <AnimatePresence>
            {isLoginModalOpen && (
                <motion.div 
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsLoginModalOpen(false)}
                >
                    <motion.div 
                        className="modal-content login-modal"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h2>Welcome Back</h2>
                            <button 
                                className="modal-close"
                                onClick={() => setIsLoginModalOpen(false)}
                            >
                                <X />
                            </button>
                        </div>

                        <form onSubmit={handleLogin} className="login-form">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={loginForm.email}
                                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={loginForm.password}
                                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                                    required
                                />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className="forgot-password">Forgot password?</a>
                            </div>

                            <motion.button 
                                type="submit"
                                className="submit-btn login-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <LogIn className="btn-icon" />
                                Sign In
                            </motion.button>
                        </form>

                        <div className="modal-footer">
                            <p>Don't have an account? 
                                <button 
                                    className="link-btn"
                                    onClick={() => {
                                        setIsLoginModalOpen(false);
                                        setIsSignupModalOpen(true);
                                    }}
                                >
                                    Sign up
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    // Signup Modal Component
    const SignupModal = () => (
        <AnimatePresence>
            {isSignupModalOpen && (
                <motion.div 
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSignupModalOpen(false)}
                >
                    <motion.div 
                        className="modal-content signup-modal"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h2>Join Xperio</h2>
                            <button 
                                className="modal-close"
                                onClick={() => setIsSignupModalOpen(false)}
                            >
                                <X />
                            </button>
                        </div>

                        <form onSubmit={handleSignup} className="signup-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={signupForm.name}
                                    onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={signupForm.email}
                                    onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    value={signupForm.password}
                                    onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={signupForm.confirmPassword}
                                    onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                                    required
                                />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input type="checkbox" required />
                                    <span>I agree to the Terms of Service and Privacy Policy</span>
                                </label>
                            </div>

                            <motion.button 
                                type="submit"
                                className="submit-btn signup-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <UserPlus className="btn-icon" />
                                Create Account
                            </motion.button>
                        </form>

                        <div className="modal-footer">
                            <p>Already have an account? 
                                <button 
                                    className="link-btn"
                                    onClick={() => {
                                        setIsSignupModalOpen(false);
                                        setIsLoginModalOpen(true);
                                    }}
                                >
                                    Sign in
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <nav className="professional-navbar">
                <div className="navbar-container">
                    {/* Logo */}
                    <motion.div 
                        className="navbar-logo"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleNavigation('/')}
                    >
                        <Globe className="logo-icon" />
                        <span className="logo-text">Xperio</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="navbar-links desktop-only">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.name}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => handleNavigation(link.path)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Desktop Auth Section */}
                    <div className="navbar-auth desktop-only">
                        <motion.button 
                            className="search-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Search />
                        </motion.button>

                        <motion.button 
                            className="notification-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Bell />
                            <span className="notification-badge">3</span>
                        </motion.button>

                        {isLoggedIn ? (
                            <div className="user-menu-container">
                                <motion.button 
                                    className="user-menu-trigger"
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={user.avatar} alt="Avatar" className="user-avatar" />
                                    <span className="user-name">{user.name}</span>
                                    <ChevronDown className={`chevron ${isUserMenuOpen ? 'open' : ''}`} />
                                </motion.button>

                                <AnimatePresence>
                                    {isUserMenuOpen && (
                                        <motion.div 
                                            className="user-dropdown"
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                        >
                                            <div className="dropdown-header">
                                                <img src={user.avatar} alt="Avatar" />
                                                <div>
                                                    <div className="dropdown-name">{user.name}</div>
                                                    <div className="dropdown-email">{user.email}</div>
                                                </div>
                                            </div>

                                            <div className="dropdown-menu">
                                                <button className="dropdown-item" onClick={() => handleNavigation('/premium')}>
                                                    <Crown className="dropdown-icon" />
                                                    Upgrade to Premium
                                                </button>
                                                <button className="dropdown-item">
                                                    <User className="dropdown-icon" />
                                                    Profile
                                                </button>
                                                <button className="dropdown-item">
                                                    <Heart className="dropdown-icon" />
                                                    Favorites
                                                </button>
                                                <button className="dropdown-item">
                                                    <Settings className="dropdown-icon" />
                                                    Settings
                                                </button>
                                                <div className="dropdown-divider"></div>
                                                <button className="dropdown-item logout" onClick={handleLogout}>
                                                    <LogOut className="dropdown-icon" />
                                                    Sign Out
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="auth-buttons">
                                <motion.button 
                                    className="login-btn-nav"
                                    onClick={() => setIsLoginModalOpen(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <LogIn className="btn-icon" />
                                    Login
                                </motion.button>
                                <motion.button 
                                    className="signup-btn-nav"
                                    onClick={() => setIsSignupModalOpen(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <UserPlus className="btn-icon" />
                                    Sign Up
                                </motion.button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button 
                        className="mobile-menu-btn mobile-only"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            <div className="mobile-menu-content">
                                {navLinks.map((link) => (
                                    <motion.button
                                        key={link.name}
                                        className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                        onClick={() => handleNavigation(link.path)}
                                        whileHover={{ x: 10 }}
                                    >
                                        {link.name}
                                    </motion.button>
                                ))}

                                <div className="mobile-auth-section">
                                    {isLoggedIn ? (
                                        <div className="mobile-user-info">
                                            <img src={user.avatar} alt="Avatar" />
                                            <span>{user.name}</span>
                                            <button onClick={handleLogout} className="mobile-logout-btn">
                                                <LogOut />
                                                Logout
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="mobile-auth-buttons">
                                            <button 
                                                className="mobile-login-btn"
                                                onClick={() => {
                                                    setIsLoginModalOpen(true);
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                <LogIn />
                                                Login
                                            </button>
                                            <button 
                                                className="mobile-signup-btn"
                                                onClick={() => {
                                                    setIsSignupModalOpen(true);
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                <UserPlus />
                                                Sign Up
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Modals */}
            <LoginModal />
            <SignupModal />
        </>
    );
}

export default ProfessionalNavbar;
