import React, { useState, useEffect } from 'react';
import { FaGoogle, FaApple, FaGlobe } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { MdEmail, MdLock, MdHistory, MdBookmark, MdSubscriptions, MdSupport } from 'react-icons/md';
import { motion } from 'framer-motion';

const LoginPage = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    });

    useEffect(() => {
        // Set body classes
        document.body.classList.add('login-mode');
        document.body.classList.remove('dashboard-mode');
        
        // Check existing session
        checkExistingSession();
        
        return () => {
            document.body.classList.remove('login-mode');
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
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
        
        if (!formData.username.trim()) {
            newErrors.username = 'Username or email is required';
        } else if (!isValidEmail(formData.username) && formData.username.length < 3) {
            newErrors.username = 'Please enter a valid email or username (min 3 characters)';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (isLoading) return;
        
        if (!validateForm()) return;
        
        const { username, password, rememberMe } = formData;
        
        setIsLoading(true);
        
        try {
            const result = await authenticateUser(username, password);
            
            if (result.success) {
                setCurrentUser(result.user);
                
                if (rememberMe) {
                    saveUserSession(result.user);
                }
                
                showToast('Login successful! Welcome back!', 'success');
                
            } else {
                handleAuthError(result.error);
            }
            
        } catch (error) {
            console.error('Login error:', error);
            showToast('Network error. Please check your connection and try again.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const authenticateUser = async (username, password) => {
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        const validUsers = {
            'admin@example.com': { 
                password: 'admin123', 
                name: 'Admin User',
                avatar: 'default-user',
                role: 'admin'
            },
            'user@example.com': { 
                password: 'user123', 
                name: 'Regular User',
                avatar: 'google-user',
                role: 'user'
            },
            'demo@example.com': { 
                password: 'demo123', 
                name: 'Demo User',
                avatar: 'apple-user',
                role: 'demo'
            }
        };

        const user = validUsers[username.toLowerCase()];
        
        if (user && user.password === password) {
            return {
                success: true,
                user: {
                    email: username,
                    name: user.name,
                    avatar: user.avatar,
                    role: user.role,
                    loginTime: new Date().toISOString(),
                    sessionId: generateSessionId()
                }
            };
        } else {
            return {
                success: false,
                error: validUsers[username.toLowerCase()] ? 'invalid_credentials' : 'user_not_found'
            };
        }
    };

    const handleAuthError = (errorType) => {
        switch (errorType) {
            case 'invalid_credentials':
                setErrors({
                    username: 'Invalid credentials',
                    password: 'Invalid credentials'
                });
                showToast('Invalid username or password. Please try again.', 'error');
                break;
            case 'user_not_found':
                setErrors({ username: 'User not found' });
                showToast('No account found with this username/email.', 'error');
                break;
            default:
                showToast('Login failed. Please check your credentials and try again.', 'error');
        }
    };

    const handleSocialLogin = (provider) => {
        console.log(`${provider} login initiated`);
        showToast(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login coming soon!`, 'info');
        
        if (provider === 'google') {
            setTimeout(() => {
                const mockUser = {
                    email: 'user@gmail.com',
                    name: 'Google User',
                    avatar: 'google-user',
                    role: 'user',
                    loginTime: new Date().toISOString(),
                    sessionId: generateSessionId()
                };
                setCurrentUser(mockUser);
            }, 1000);
        }
    };

    const handleLogout = () => {
        setCurrentUser(null);
        setFormData({ username: '', password: '', rememberMe: false });
        setErrors({});
        localStorage.removeItem('userSession');
        
        document.body.classList.add('login-mode');
        document.body.classList.remove('dashboard-mode');
        
        showToast('Logged out successfully', 'success');
    };

    const saveUserSession = (user) => {
        try {
            const sessionData = {
                user: user,
                timestamp: Date.now(),
                rememberMe: true,
                sessionId: user.sessionId
            };
            localStorage.setItem('userSession', JSON.stringify(sessionData));
        } catch (error) {
            console.error('Failed to save user session:', error);
        }
    };

    const checkExistingSession = () => {
        try {
            const sessionData = localStorage.getItem('userSession');
            if (!sessionData) return;

            const session = JSON.parse(sessionData);
            const oneWeek = 7 * 24 * 60 * 60 * 1000;
            
            if (session.rememberMe && session.timestamp && (Date.now() - session.timestamp < oneWeek)) {
                setCurrentUser(session.user);
            } else {
                localStorage.removeItem('userSession');
            }
        } catch (error) {
            console.error('Session validation error:', error);
            localStorage.removeItem('userSession');
        }
    };

    const showToast = (message, type = 'info') => {
        if (type === 'error') {
            alert(`❌ ${message}`);
        } else if (type === 'success') {
            alert(`✅ ${message}`);
        } else {
            alert(`ℹ️ ${message}`);
        }
    };

    const generateSessionId = () => {
        return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    };

    const getInitials = (name) => {
        if (!name) return '?';
        return name.split(' ')
            .filter(n => n.length > 0)
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    // Dashboard Component
    const Dashboard = ({ user, onLogout }) => (
        <div className="dashboard-container">
            <div className="dashboard-background">
                <div className="dashboard-content">
                    <div className="dashboard-header-card">
                        <div className="dashboard-header">
                            <div className="user-welcome">
                                <div className={`user-avatar ${user.avatar}`} data-initials={getInitials(user.name)}></div>
                                <div className="welcome-text">
                                    <h1 className="welcome-title">Welcome back, {user.name.split(' ')[0]}!</h1>
                                    <p className="welcome-subtitle">Ready to explore your dashboard</p>
                                </div>
                            </div>
                            <button className="logout-btn" onClick={onLogout}>
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card stat-purple">
                            <div className="stat-content">
                                <div className="stat-text">
                                    <div className="stat-label">Total Bookmarks</div>
                                    <div className="stat-value">1,234</div>
                                </div>
                                <div className="stat-icon">👥</div>
                            </div>
                        </div>
                        <div className="stat-card stat-blue">
                            <div className="stat-content">
                                <div className="stat-text">
                                    <div className="stat-label">Active Sessions</div>
                                    <div className="stat-value">89</div>
                                </div>
                                <div className="stat-icon">📊</div>
                            </div>
                        </div>
                        <div className="stat-card stat-green">
                            <div className="stat-content">
                                <div className="stat-text">
                                    <div className="stat-label">Revenue</div>
                                    <div className="stat-value">$12.4K</div>
                                </div>
                                <div className="stat-icon">💰</div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-grid">
                        {/* Recent Activity Card */}
                        <div className="dashboard-card">
                            <div className="card-header">
                                <div className="card-icon purple">📈</div>
                                <div className="card-title-section">
                                    <h3 className="card-title">Recent Activity</h3>
                                    <p className="card-subtitle">Latest updates and changes</p>
                                </div>
                            </div>
                            <div className="card-list">
                                <div className="list-item">
                                    <div className="list-emoji">✅</div>
                                    <div className="list-indicator blue"></div>
                                    <div className="list-content">
                                        <div className="list-title">Profile Updated</div>
                                        <div className="list-meta">2 hours ago</div>
                                    </div>
                                    <button className="list-action" onClick={() => showToast('View clicked! Feature coming soon.', 'info')}>View</button>
                                </div>
                                <div className="list-item">
                                    <div className="list-emoji">📧</div>
                                    <div className="list-indicator green"></div>
                                    <div className="list-content">
                                        <div className="list-title">Email Sent</div>
                                        <div className="list-meta">5 hours ago</div>
                                    </div>
                                    <button className="list-action" onClick={() => showToast('View clicked! Feature coming soon.', 'info')}>View</button>
                                </div>
                                <div className="list-item">
                                    <div className="list-emoji">🔐</div>
                                    <div className="list-indicator orange"></div>
                                    <div className="list-content">
                                        <div className="list-title">Security Update</div>
                                        <div className="list-meta">1 day ago</div>
                                    </div>
                                    <button className="list-action" onClick={() => showToast('View clicked! Feature coming soon.', 'info')}>View</button>
                                </div>
                            </div>
                        </div>

                        {/* Subscription Card */}
                        <div className="dashboard-card">
                            <div className="card-header">
                                <div className="card-icon green">💎</div>
                                <div className="card-title-section">
                                    <h3 className="card-title">Subscription</h3>
                                    <p className="card-subtitle">Manage your plan and billing</p>
                                </div>
                            </div>
                            <div className="subscription-content">
                                <div className="subscription-info">
                                    <span className="subscription-badge">Pro Plan</span>
                                    <span className="subscription-renewal">Renews March 15, 2025</span>
                                </div>
                                <button className="subscription-btn" onClick={() => showToast('Manage Subscription clicked! Feature coming soon.', 'info')}>
                                    <span className="btn-icon">⚡</span>
                                    <span>Upgrade Plan</span>
                                </button>
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="dashboard-card">
                            <div className="card-header">
                                <div className="card-icon orange">🎧</div>
                                <div className="card-title-section">
                                    <h3 className="card-title">Help & Support</h3>
                                    <p className="card-subtitle">We're here to help</p>
                                </div>
                            </div>
                            <div className="support-content">
                                <p className="support-text">
                                    Need help with your account or have questions about Xperio?
                                </p>
                                <button className="support-btn" onClick={() => showToast('Contact Support clicked! Feature coming soon.', 'info')}>
                                    <MdSupport className="btn-icon" />
                                    <span>Contact Support</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Render dashboard if user is logged in
    if (currentUser) {
        document.body.classList.add('dashboard-mode');
        document.body.classList.remove('login-mode');
        return <Dashboard user={currentUser} onLogout={handleLogout} />;
    }

    // Login Form
    return (
        <>
            {/* Background */}
            <div className="login-background"></div>
            
            {/* Main wrapper */}
            <div className={`login-page-wrapper ${Object.keys(errors).length > 0 ? 'has-errors' : ''}`}>
                <div className={`login-content-container ${Object.keys(errors).length > 0 ? 'has-errors' : ''}`}>
                    <motion.div
                        className={`login-form-wrapper ${Object.keys(errors).length > 0 ? 'has-errors' : ''}`}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Brand Header */}
                        <div className="login-brand-header">
                            <div className={`brand-icon-container ${Object.keys(errors).length > 0 ? 'has-errors' : ''}`}>
                                <FaGlobe className="brand-icon globe" />
                                <HiSparkles className="brand-icon sparkles" />
                            </div>
                            <h1 className={`brand-title ${Object.keys(errors).length > 0 ? 'has-errors' : ''}`}>
                                Welcome to Xperio
                            </h1>
                            <p className={`brand-subtitle ${Object.keys(errors).length > 0 ? 'has-errors' : ''}`}>
                                Sign in to explore cultures worldwide
                            </p>
                        </div>

                        {/* Form Container */}
                        <form onSubmit={handleLogin} className="login-form-container">
                            {/* Input Fields Section */}
                            <div className="input-fields-section">
                                {/* Username Field */}
                                <div className="form-field">
                                    <label className={`field-label ${errors.username ? 'error' : ''}`}>
                                        <MdEmail className="label-icon" />
                                        Username or Email
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        className={`form-input ${errors.username ? 'error' : ''}`}
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        placeholder="Enter your username or email"
                                        autoComplete="username"
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="form-field">
                                    <label className={`field-label ${errors.password ? 'error' : ''}`}>
                                        <MdLock className="label-icon" />
                                        Password
                                    </label>
                                    <div className="password-container">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            className={`form-input ${errors.password ? 'error' : ''}`}
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Enter your password"
                                            autoComplete="current-password"
                                        />
                                        <button
                                            type="button"
                                            className={`password-toggle-btn ${errors.password ? 'error' : ''}`}
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? '👁️' : '🙈'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Form Options */}
                            <div className="form-options-section">
                                <label className="remember-me-checkbox">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleInputChange}
                                    />
                                    <div className="custom-checkbox"></div>
                                    Remember me
                                </label>
                                <a href="#" className="forgot-password-link" onClick={(e) => {
                                    e.preventDefault();
                                    showToast('Password reset coming soon!', 'info');
                                }}>
                                    Forgot password?
                                </a>
                            </div>

                            {/* Login Button */}
                            <button 
                                type="submit" 
                                className={`primary-login-btn ${Object.keys(errors).length > 0 ? 'error-state' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="loading-content">
                                        <div className="loading-spinner"></div>
                                        <span>Signing in...</span>
                                    </div>
                                ) : (
                                    'Sign In'
                                )}
                            </button>

                            {/* Divider */}
                            <div className="divider-section">
                                <div className="divider-line"></div>
                                <span className="divider-text">or</span>
                                <div className="divider-line"></div>
                            </div>

                            {/* Social Login */}
                            <div className="social-login-section">
                                <button
                                    type="button"
                                    className="social-login-btn google-btn"
                                    onClick={() => handleSocialLogin('google')}
                                >
                                    <FaGoogle className="social-icon" />
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="social-login-btn apple-btn"
                                    onClick={() => handleSocialLogin('apple')}
                                >
                                    <FaApple className="social-icon" />
                                    Apple
                                </button>
                            </div>

                            {/* Footer */}
                            <div className="login-footer-section">
                                <p className="footer-text">
                                    Don't have an account?
                                    <button 
                                        type="button"
                                        className="signup-link-btn"
                                        onClick={() => showToast('Signup page coming soon!', 'info')}
                                    >
                                        Sign up here
                                    </button>
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
