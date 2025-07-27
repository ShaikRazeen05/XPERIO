import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react'; // Assuming Heart is used for favorites
import { Star, MapPin, Clock } from 'lucide-react';
// Basic implementation of StarBorder component to resolve import error
// This component wraps its children and applies some styling,
// mimicking the original usage with 'as' prop for flexibility.
const StarBorder = ({ children, as: Component = 'div', color = 'gray', speed = '1s', ...props }) => {
    // Tailwind classes for styling based on props
    const baseClasses = "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800";
    const spanClasses = "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";

    return (
        <Component className={baseClasses} {...props}>
            <span className={spanClasses}>
                {children}
            </span>
        </Component>
    );
};


export function Homepage() {
    const [userIcon, setUserIcon] = useState("pictures_homepage/user1.png");
    const [active, setActive] = useState('signup');
    const [showForm, setShowForm] = useState(false);
    const [showTranslator, setShowTranslator] = useState(false);
    const [showPremium, setShowPremium] = useState(false);
    const [showFood, setShowFood] = useState(false); // Added missing state for Food modal
    const [showCulture, setShowCulture] = useState(false); // Added missing state for Culture modal

    const [loggedIn, setLoggedIn] = useState(JSON.parse(sessionStorage.getItem("loggedIn") || "false"));

    const favourites = {
        "Hyderabadi Biryani": false,
        "Vada Pav": false,
        "Delhi Chaat": false,
        "Masala Dosa": false, // Added Masala Dosa to favorites
        "Rogan Josh": false, // Added Rogan Josh to favorites
        "Kathakali Dance": false,
        "Rajasthani Puppetry": false,
        "Durga Puja": false,
        "Bhangra Dance": false,
        "Pongal / Sankranti": false,
        "Garba Dance": false
    };
    const [fav, setFav] = useState(() => {
        const stored = sessionStorage.getItem("fav");
        return stored ? JSON.parse(stored) : favourites;
    });

    function handleExploreClick() {
        // Scroll to the categories section
        const exploreSection = document.getElementById("xperio-categories");
        if (exploreSection) {
            exploreSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    // New function to scroll to dashboard
    function handleDashboardClick() {
        const dashboardSection = document.getElementById("user-dashboard");
        if (dashboardSection) {
            dashboardSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    function handleLogin() {
        console.log(loggedIn);
        sessionStorage.setItem("loggedIn", JSON.stringify(true));
        setLoggedIn(true);
        setShowForm(false);
    }

    function handleLogout() {
        sessionStorage.removeItem("loggedIn");
        setShowForm(false);
        setLoggedIn(false);
    }

    function handleFav(name) {
        setFav((prev) => ({
            ...prev,
            [name]: !prev[name]
        }));
    }

    const testimonials = [
        {
            name: "Ananya Sharma",
            message: "Xperio made my trip unforgettable! I experienced festivals like a true local.",
        },
        {
            name: "Rahul Mehra",
            message: "The cultural insights and easy translations helped me navigate new cities with confidence.",
        },
        {
            name: "Lara Thomas",
            message: "Loved discovering hidden street food gems. Highly recommended!",
        },
        {
            name: "Rai M.",
            message: "Xperio made my trip to Hyderabad unforgettable. I discovered hidden food spots that even locals didn't know about. The translator feature was a life-saver!",
        },
        {
            name: "Mike P.",
            message: "I never thought a web app could make exploring my own city so exciting. Xperio's cultural insights and clean interface are game changers.",
        },
        {
            name: "Sadiya",
            message: "From street food recommendations to immersive cultural clips, Xperio nails it. The premium content is worth every rupee!",
        },
        {
            name: "Sara L.",
            message: "The app’s cultural modules are stunning. I learned about local traditions before even arriving. It made my experience richer.",
        },
        {
            name: "Jack",
            message: "The live translator helped me interact with vendors during my trip. That feature alone makes Xperio a must-have!",
        },
        {
            name: "Raj.",
            message: "The Xperio dashboard felt like my personal travel assistant. I found local mosques, food stalls, and historical sites in seconds.",
        }
    ];
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const [email, setEmail] = useState('');
    const [signedUp, setSignedUp] = useState(false);
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        sessionStorage.setItem("fav", JSON.stringify(fav));
    }, [fav]);

    function showPrevious() {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    function showNext() {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }

    const handleNewsletterSignup = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            setEmailError('Email is required.');
            setSignedUp(false);
            return;
        }

        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            setSignedUp(false);
            return;
        }

        setSignedUp(true);
        setEmailError('');
        setEmail('');
        setTimeout(() => setSignedUp(false), 4000);
    };

    // Background image for the hero section - using a more visible placeholder
    const heroBackgroundImage = 'https://placehold.co/1920x1080/4A4A4A/FFFFFF?text=YOUR+BACKGROUND+IMAGE';

    return (
        // Outermost div now holds the background image and the main overlay
        
        <div
            className="min-h-screen relative font-inter"
            style={{
                backgroundImage: `url(${heroBackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >import ImageTrail from './ImageTrail;'

            {/* Full-screen overlay directly on top of the background image */}
            {/* This layer provides the overall dimming effect over the background image */}
            <div
                className="absolute inset-0 z-0" // z-0 to be behind the main content box
                style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4), rgba(0,0,0,0.7))', // Stronger gradient for visibility
                }}
            ></div>

            {/* Main content container (the bordered box from Tourism example, now the hero section) */}
            {/* This box is positioned relative to the viewport and sits on top of the full-screen overlay */}
            <div className="relative z-10 w-full min-h-screen bg-black bg-opacity-40 rounded-none shadow-none overflow-hidden border-none flex flex-col p-6 sm:p-10">
                {/* Inner Overlay for the content box (subtle effect within the box itself) */}
                {/* This is for the subtle gradient *inside* the main content box */}
                <div
                    className="absolute inset-0 z-0" // z-0 relative to its parent (the main content box)
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.05), rgba(0,0,0,0.2))',
                    }}
                ></div>

                {/* Header Section - Integrated from both designs */}
                {/* This header is now part of the full-page hero section */}
                <header className="relative z-10 flex justify-between items-center mb-16">
                    {/* Xperio Logo */}
                    <div className="text-white text-3xl font-bold tracking-wider">
                        Xperio
                    </div>

                    {/* Navigation and Buttons */}
                    <nav className="flex items-center space-x-4 text-white text-lg font-medium">
                        {/* Tourism links (optional, can be removed if not needed) */}
                        <a href="#" className="hover:text-gray-300 transition-colors hidden sm:block">HOME</a>
                        <a href="#" className="hover:text-gray-300 transition-colors hidden sm:block">VIDEO</a>
                        <a href="#" className="hover:text-gray-300 transition-colors hidden sm:block">PRODUCT</a>
                        <a href="#" className="hover:text-gray-300 transition-colors hidden sm:block">COMPANY</a>

                        {/* Xperio Buttons */}
                        <StarBorder as="button" color="cyan" speed="2s" onClick={(e) => { e.stopPropagation(); setShowTranslator(true); }}>
                            Translator
                        </StarBorder>
                        <StarBorder as="button" color="sky" speed="2s" onClick={(e) => { e.stopPropagation(); setShowPremium(true); }}>
                            Premium
                        </StarBorder>
                        <StarBorder as="button" color="cyan" speed="2s" onClick={(e) => { e.stopPropagation(); setShowFood(true); }}>
                            Food
                        </StarBorder>
                        <StarBorder as="button" color="cyan" speed="2s" onClick={(e) => { e.stopPropagation(); setShowCulture(true); }}>
                            Culture
                        </StarBorder>
                        {/* New Dashboard link - visible only when logged in */}
                        {loggedIn && (
                            <StarBorder as="button" color="green" speed="2s" onClick={(e) => { e.stopPropagation(); handleDashboardClick(); }}>
                                Dashboard
                            </StarBorder>
                        )}
                    </nav>

                    {/* User Icon */}
                    <div className="relative z-[1000] ml-4">
                        <img
                            src={userIcon}
                            onMouseOver={() => setUserIcon("pictures_homepage/user.png")}
                            onMouseOut={() => setUserIcon("pictures_homepage/user1.png")}
                            onClick={(e) => { e.stopPropagation(); setShowForm(true); console.log(loggedIn); }}
                            alt="User Icon"
                            className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer hover:scale-110 transition-transform"
                        />
                    </div>
                </header>

                {/* Main Content - Centered Text (DAYTIME SKY) */}
                <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-widest leading-none"
                        style={{
                            textShadow: '0 0 15px rgba(0,0,0,0.5)',
                            background: 'linear-gradient(to right, #E0E0E0, #A0A0A0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                       Xperio
                    </h1>
                    <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-widest leading-none -mt-4"
                        style={{
                            textShadow: '0 0 15px rgba(0,0,0,0.5)',
                            background: 'linear-gradient(to right, #E0E0E0, #A0A0A0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        – Taste culture. Explore stories.
                    </h1>
                    <button
                        onClick={handleExploreClick}
                        className="mt-8 inline-block px-8 py-4 bg-black bg-opacity-60 text-white font-bold rounded-full hover:bg-black hover:bg-opacity-80 transition-all duration-300 shadow-lg animate-bounce-slow"
                    >
                        Explore Xperio
                    </button>
                </main>

                {/* Vertical Dots/Lines on Left */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-10">
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                    <div className="w-px h-16 bg-white opacity-50 mx-auto"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                </div>

                {/* Vertical Dots/Lines and "04 06" on Right */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-end space-y-4 z-10">
                    <div className="text-white text-xl font-light opacity-80">04</div>
                    <div className="text-white text-xl font-light opacity-80">06</div>
                    <div className="w-px h-16 bg-white opacity-50 mx-auto"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                </div>
            </div>

            {/* All other sections of your original Homepage component */}
            {/* This div needs to be outside the hero section to scroll independently */}
            <div className="relative z-20 bg-gray-900 text-white">
                {/* Dashboard Section - Visible only when logged in */}
                {loggedIn && (
                    <section id="user-dashboard" className="bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 my-12 mx-auto max-w-[1400px] transform transition-transform duration-500 hover:scale-[1.01]">
                        <h2 className="text-4xl font-extrabold mb-6 text-white text-center">Your Xperio Dashboard</h2>
                        <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                            Welcome back! Here's a quick overview of your personalized Xperio experience.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Dashboard Card 1: Favorites Summary */}
                            <div className="bg-gray-700 rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
                                <Heart className="h-12 w-12 text-red-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">My Favorites</h3>
                                <p className="text-gray-300">You have {Object.values(fav).filter(f => f).length} favorite places saved!</p>
                                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
                                    View Favorites
                                </button>
                            </div>

                            {/* Dashboard Card 2: Upcoming Trips (Dummy) */}
                            <div className="bg-gray-700 rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m10.614-10.614L13.414 3.1a1.998 1.998 0 00-2.828 0L6.343 6.343m10.614 10.614L17.657 16.657M6.343 6.343L6.343 6.343m0 0L3.1 9.586a1.998 1.998 0 000 2.828l4.243 4.243m-4.243-4.243L3.1 9.586m0 0L6.343 6.343m0 0l4.243 4.243m-4.243-4.243L6.343 6.343m0 0L9.586 3.1a1.998 1.998 0 012.828 0L16.657 6.343m-4.243 4.243L12 12m0 0l4.243 4.243m-4.243-4.243L12 12m0 0L9.586 15.414a1.998 1.998 0 00-2.828 0L3.1 19.657" />
                                </svg>
                                <h3 className="text-xl font-bold text-white mb-2">Upcoming Trips</h3>
                                <p className="text-gray-300">No upcoming trips planned yet. Start exploring!</p>
                                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
                                    Plan a Trip
                                </button>
                            </div>

                            {/* Dashboard Card 3: Profile Settings */}
                            <div className="bg-gray-700 rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.942 3.333.999 2.401 2.401a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.942 1.543-.999 3.333-2.401 2.401a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.942-3.333-.999-2.401-2.401a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.942-1.543.999-3.333 2.401-2.401a1.724 1.724 0 002.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h3 className="text-xl font-bold text-white mb-2">Profile Settings</h3>
                                <p className="text-gray-300">Manage your account details and preferences.</p>
                                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </section>
                )}

                {/* Featured Sections */}
                <div id="xperio-categories" className="p-8 space-y-20">
                    <section className="bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden transform transition-transform duration-500 hover:scale-[1.01]">
                        <h2 className="text-4xl font-extrabold mb-4 text-white text-center">Xperio Food Delights</h2>
                        <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl mx-auto">
                            Savor the authentic tastes of India's diverse street food scene.
                        </p>

                        {/* Horizontal Scrollable Cards */}
                        <div
                            className="flex gap-8 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing py-4 px-2 -mx-2 custom-scrollbar"
                            onMouseDown={(e) => {
                                const container = e.currentTarget;
                                let startX = e.pageX - container.offsetLeft;
                                let scrollLeft = container.scrollLeft;

                                const onMouseMove = (ev) => {
                                    const x = ev.pageX - container.offsetLeft;
                                    const walk = (x - startX) * 1.5;
                                    container.scrollLeft = scrollLeft - walk;
                                };
                                const onMouseUp = () => {
                                    container.removeEventListener("mousemove", onMouseMove);
                                    container.removeEventListener("mouseup", onMouseUp);
                                };
                                container.addEventListener("mousemove", onMouseMove);
                                container.addEventListener("mouseup", onMouseUp);
                            }}
                        >
                            {/* Food Card 1 */}
                            <div className="bg-gray-700 rounded-[2.5rem] p-6 w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                    <img src="pictures_homepage/biryani.jpg" alt="Hyderabadi Biryani" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2 mb-1">
                                        Hyderabadi Biryani
                                        <Heart
                                            className={`h-6 w-6 cursor-pointer ${fav['Hyderabadi Biryani'] ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={() => handleFav('Hyderabadi Biryani')}
                                        />
                          
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-2">Hyderabad, Telangana</p>
                                    <div className="flex items-center justify-between space-x-6 text-white text-sm">
  {/* Rating */}
  <div className="flex items-center space-x-1">
    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
    <span>4.9</span>
  </div>

  {/* Distance */}
  <div className="flex items-center space-x-1">
    <MapPin className="w-4 h-4 text-white" />
    <span>0.8 km</span>
  </div>

  {/* Status */}
  <div className="flex items-center space-x-1">
    <Clock className="w-4 h-4 text-white" />
    <span>Open</span>
  </div>
</div>

                                </div>
                            </div>
                            {/* Food Card 2 */}
                            <div className="bg-gray-700 rounded-[2.5rem] p-6 w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                    <img src="pictures_homepage/vadapav.jpg" alt="Vada Pav" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2 mb-1">
                                        Mumbai Vada Pav
                                        <Heart
                                            className={`h-6 w-6 cursor-pointer ${fav['Vada Pav'] ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={() => handleFav('Vada Pav')}
                                        />
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-2">Mumbai, Maharashtra</p>
                                    <div className="flex items-center justify-between space-x-6 text-white text-sm">
  {/* Rating */}
  <div className="flex items-center space-x-1">
    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
    <span>4.9</span>
  </div>

  {/* Distance */}
  <div className="flex items-center space-x-1">
    <MapPin className="w-4 h-4 text-white" />
    <span>0.8 km</span>
  </div>

  {/* Status */}
  <div className="flex items-center space-x-1">
    <Clock className="w-4 h-4 text-white" />
    <span>Open</span>
  </div>
</div>

                                </div>
                            </div>

                            {/* Food Card 3 */}
                            <div className="bg-gray-700 rounded-[2.5rem] p-6 w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                    <img src="pictures_homepage/chat.jpg" alt="Delhi Chaat" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2 mb-1">
                                        Delhi Street Chaat
                                        <Heart
                                            className={`h-6 w-6 cursor-pointer ${fav['Delhi Chaat'] ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={() => handleFav('Delhi Chaat')}
                                        />
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-2">Delhi, NCR</p>
                                    <div className="flex items-center justify-between space-x-6 text-white text-sm">
  {/* Rating */}
  <div className="flex items-center space-x-1">
    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
    <span>4.9</span>
  </div>

  {/* Distance */}
  <div className="flex items-center space-x-1">
    <MapPin className="w-4 h-4 text-white" />
    <span>0.8 km</span>
  </div>

  {/* Status */}
  <div className="flex items-center space-x-1">
    <Clock className="w-4 h-4 text-white" />
    <span>Open</span>
  </div>
</div>

                                </div>
                            </div>

                            {/* Food Card 4 */}
                            <div className="bg-gray-700 rounded-[2.5rem] p-6 w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                    <img src="pictures_homepage/dosa.jpg" alt="Masala Dosa" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2 mb-1">
                                        Masala Dosa
                                        <Heart
                                            className={`h-6 w-6 cursor-pointer ${fav['Masala Dosa'] ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={() => handleFav('Masala Dosa')}
                                        />
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-2">Bengaluru, Karnataka</p>
                                    <div className="flex items-center justify-between space-x-6 text-white text-sm">
  {/* Rating */}
  <div className="flex items-center space-x-1">
    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
    <span>4.9</span>
  </div>

  {/* Distance */}
  <div className="flex items-center space-x-1">
    <MapPin className="w-4 h-4 text-white" />
    <span>0.8 km</span>
  </div>

  {/* Status */}
  <div className="flex items-center space-x-1">
    <Clock className="w-4 h-4 text-white" />
    <span>Open</span>
  </div>
</div>

                                </div>
                            </div>

                            {/* Food Card 5 */}
                            <div className="bg-gray-700 rounded-[2.5rem] p-6 w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                    <img src="pictures_homepage/rogan.png" alt="Rogan Josh" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2 mb-1">
                                        Kashmiri Rogan Josh
                                        <Heart
                                            className={`h-6 w-6 cursor-pointer ${fav['Rogan Josh'] ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={() => handleFav('Rogan Josh')}
                                        />
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-2">Kashmir, J&K</p>
                                    <div className="flex items-center justify-between space-x-6 text-white text-sm">
  {/* Rating */}
  <div className="flex items-center space-x-1">
    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
    <span>4.9</span>
  </div>

  {/* Distance */}
  <div className="flex items-center space-x-1">
    <MapPin className="w-4 h-4 text-white" />
    <span>0.8 km</span>
  </div>

  {/* Status */}
  <div className="flex items-center space-x-1">
    <Clock className="w-4 h-4 text-white" />
    <span>Open</span>
  </div>
</div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transform transition-transform duration-500 hover:scale-[1.01]">
                        <h2 className="text-4xl font-extrabold mb-4 text-white text-center">
                            Xperio Cultural Immersion
                        </h2>
                        <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl mx-auto">
                            Dive deep into the vibrant traditions and captivating performances of India.
                        </p>

                        {/* Horizontal Scrollable Cards - Now styled like Food Delights */}
                        <div
                            className="flex gap-8 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing py-4 px-2 -mx-2 custom-scrollbar"
                            onMouseDown={(e) => {
                                const container = e.currentTarget;
                                let startX = e.pageX - container.offsetLeft;
                                let scrollLeft = container.scrollLeft;

                                const onMouseMove = (ev) => {
                                    const x = ev.pageX - container.offsetLeft;
                                    const walk = (x - startX) * 1.5;
                                    container.scrollLeft = scrollLeft - walk;
                                };
                                const onMouseUp = () => {
                                    container.removeEventListener("mousemove", onMouseMove);
                                    container.removeEventListener("mouseup", onMouseUp);
                                };
                                container.addEventListener("mousemove", onMouseMove);
                                container.addEventListener("mouseup", onMouseUp);
                            }}
                        >
                            {/* CULTURE CARD TEMPLATE */}
                            {[
                                {
                                    title: "Kathakali Dance",
                                    location: "Kerala",
                                    description: "Traditional Classical Art",
                                    image: "pictures_homepage/kathhak.jpg",
                                },
                                {
                                    title: "Rajasthani Puppetry",
                                    location: "Rajasthan",
                                    description: "Folk Performing Art",
                                    image: "pictures_homepage/puppets.jpeg",
                                },
                                {
                                    title: "Durga Puja",
                                    location: "West Bengal",
                                    description: "Festival & Ritual",
                                    image: "pictures_homepage/puja.jpg",
                                },
                                {
                                    title: "Bhangra Dance",
                                    location: "Punjab",
                                    description: "Folk Dance",
                                    image: "pictures_homepage/bhangra.jpg",
                                },
                                {
                                    title: "Pongal / Sankranti",
                                    location: "Tamil Nadu / Telangana",
                                    description: "Harvest Festival",
                                    image: "pictures_homepage/pongal.jpg",
                                },
                                {
                                    title: "Garba Dance",
                                    location: "Gujarat",
                                    description: "Folk Festival Dance",
                                    image: "pictures_homepage/garba.jpeg",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-gray-700 p-6 rounded-[2.5rem] w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2 mb-1">
                                            {item.title}
                                            <Heart
                                                className={`h-6 w-6 cursor-pointer ${
                                                    fav[item.title]
                                                        ? "fill-red-500 text-red-500"
                                                        : "text-gray-400 hover:text-red-500"
                                                }`}
                                                onClick={() => handleFav(item.title)}
                                            />
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-2">{item.location}</p>
                                        <p className="mt-3 font-bold text-indigo-400 text-md">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Translator Section */}
                {showTranslator && (
                    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-[999] flex items-center justify-center">
                        <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
                            <button
                                onClick={() => setShowTranslator(false)}
                                className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-red-500 font-bold"
                            >
                                &times;
                            </button>

                            <h2 className="text-3xl font-bold text-gray-800 mb-6">XperioTranslator</h2>

                            {/* Voice Input */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-3 text-gray-700">🎤 Voice Input</h3>
                                <button
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex items-center gap-3"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M12 1v10m0 0a4 4 0 01-4-4V7a4 4 0 018 0v.5a4 4 0 01-4 4zM5 15h14m-7 0v6" />
                                    </svg>
                                    Start Voice Input
                                </button>
                                <p className="text-sm text-gray-500 mt-2">Microphone permission may be required.</p>
                            </div>

                            {/* Text Input to Language Translate */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-700">🌐 Text to Language</h3>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    placeholder="Enter text to translate..."
                                    rows="4"
                                ></textarea>

                                <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
                                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                        <option>Hindi</option>
                                        <option>Telugu</option>
                                        <option>Tamil</option>
                                        <option>Kannada</option>
                                        <option>Malayalam</option>
                                        <option>French</option>
                                        <option>German</option>
                                        <option>Japanese</option>
                                        <option>Spanish</option>
                                    </select>

                                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg shadow transition duration-300">
                                        Translate
                                    </button>
                                </div>

                                {/* Output */}
                                <div className="mt-4">
                                    <label className="block text-gray-600 mb-1">Translated Text</label>
                                    <div className="border border-gray-200 p-3 rounded-lg bg-gray-50 min-h-[60px] text-gray-800">
                                        {/* Translated text will appear here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showPremium && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
                        <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg p-8 relative overflow-y-auto max-h-[90vh]">
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
                                onClick={() => setShowPremium(false)}
                            >
                                ✕
                            </button>

                            {/* Premium Content */}
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">Xperio Premium</h2>
                            <p className="text-gray-600 mb-6">Unlock offline maps, travel guides, early access to events, and more.</p>

                            <ul className="grid gap-3 mb-6">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-yellow-500">✔</span> Offline access (maps, videos, guides)
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-yellow-500">✔</span> Priority support and early event bookings
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-yellow-500">✔</span> Hand-picked experiences & city tips
                                </li>
                            </ul>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                <div className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-300 bg-yellow-50">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Monthly Plan</h3>
                                    <p className="text-gray-600 mb-4">Great for short trips and flexible travelers.</p>
                                    <p className="text-2xl font-bold text-yellow-600">₹199 / month</p>
                                    <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition duration-300">
                                        Subscribe Now
                                    </button>
                                </div>

                                <div className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-300 bg-yellow-100">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Annual Plan</h3>
                                    <p className="text-gray-600 mb-4">Perfect for frequent explorers and adventure lovers.</p>
                                    <p className="text-2xl font-bold text-yellow-600">₹1799 / year</p>
                                    <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition duration-300">
                                        Get Premium
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

          <section className="bg-gray-800 py-16 px-4 text-center">
  <h2 className="text-3xl font-bold mb-2 text-white">Social proof? Here.</h2>
  <p className="text-gray-300 mb-10">
    From exploring local gems to global adventures, 2000+ happy clients and still counting.
  </p>

  <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
    {/* Testimonial Cards with animation */}
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className={`bg-gray-700 rounded-lg shadow-md p-6 w-80 transition-all duration-300 transform hover:scale-105 hover:rotate-0 ${
          index % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[2deg]'
        }`}
      >
        <p className="text-gray-200 mb-6">"{testimonial.message}"</p>
        <div className="flex items-center gap-3">
          <img
            src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${30 + index}.jpg`}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="font-semibold text-sm text-white">{testimonial.name}</p>
            <p className="text-xs text-gray-400">
              {testimonial.name === "Rai M." && "Founder of ArtisanMarket"}
              {testimonial.name === "Mike P." && "GreenFuture Foundation"}
              {testimonial.name === "Sadiya" && "Employee NovaTech"}
              {testimonial.name === "Sara L." && "Influencer"}
              {testimonial.name === "Jack" && "Teacher"}
              {testimonial.name === "Raj." && "Travel influencer"}
              {!["Rai M.", "Mike P.", "Sadiya", "Sara L.", "Jack", "Raj."].includes(testimonial.name) &&
                "Happy Client"}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

                {/* Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-10 rounded-2xl my-12 mx-auto max-w-[1400px] shadow-md">
                    <div className="max-w-[600px] text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">Become a Culture Tripper!</h1>
                        <p className="text-lg text-gray-300 mb-6">Sign up to our newsletter to get notified for new trips.</p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-4">
                            <input
                                type="email"
                                placeholder="E-mail address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-5 py-3 w-full sm:w-[360px] text-base rounded-full border border-gray-600 bg-gray-700 text-white outline-none"
                            />
                            <button
                                className="px-7 py-3 bg-blue-600 text-white text-base rounded-full border-none cursor-pointer hover:bg-blue-700 transition"
                                onClick={handleNewsletterSignup}
                            >
                                Sign Up
                            </button>
                        </div>
                        {emailError && <p className="text-red-400 font-medium mb-2">{emailError}</p>}
                        {signedUp && <p className="text-green-400 font-medium mb-2">You've signed up for our newsletter!</p>}
                        <p className="text-sm text-gray-400 mt-2">
                            See our <a href="#" className="text-blue-400 underline">privacy policy</a>.
                        </p>
                        <p className="text-sm text-gray-400">
                            This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue-400 underline">Privacy Policy</a> and <a href="#" className="text-blue-400 underline">Terms of Service</a> apply.
                        </p>
                    </div>
                    <div>
                        <img src="pictures_homepage/bee.png" alt="illustration" className="max-w-[500px] h-auto" />
                    </div>
                </div>

                {/* Login/Signup Modal (retained white background for contrast) */}
                {showForm && (
                    !loggedIn ?
                        <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-60 flex justify-center items-center z-[999]"
                            onClick={(e) => { e.stopPropagation() }}>
                            <div className="bg-white w-[450px] max-h-[90vh] rounded-xl p-6 relative shadow-lg overflow-y-auto transition-all duration-300 ease-in-out">
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-red-500 font-bold"
                                >
                                    &times;
                                </button>
                                <h2 className="text-lg font-bold mb-4 text-gray-800">PROFILE</h2>
                                <hr className="mb-4" />
                                <div className="flex bg-gray-200 rounded-full overflow-hidden mb-6 shadow-inner">
                                    <button
                                        className={`flex-1 py-2 text-sm font-bold transition duration-300 ${active === 'signup' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'text-gray-600 hover:text-black'}`}
                                        onClick={() => setActive('signup')}
                                    >
                                        Sign Up
                                    </button>
                                    <button
                                        className={`flex-1 py-2 text-sm font-bold transition duration-300 ${active === 'login' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'text-gray-600 hover:text-black'}`}
                                        onClick={() => setActive('login')}
                                    >
                                        Log In
                                    </button>
                                </div>

                                {active === 'login' ? (
                                    <div>
                                        {/* Login Form */}
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                    Username
                                                </label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="username"
                                                    type="text"
                                                    placeholder="Username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                    Password
                                                </label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="password"
                                                    type="password"
                                                    placeholder="******************"
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    type="button"
                                                    onClick={handleLogin}
                                                >
                                                    Sign In
                                                </button>
                                                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                ) : (
                                    <div>
                                        {/* Sign Up Form */}
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-username">
                                                    Username
                                                </label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="new-username"
                                                    type="text"
                                                    placeholder="Username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-email">
                                                    Email
                                                </label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="new-email"
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
                                                    Password
                                                </label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="new-password"
                                                    type="password"
                                                    placeholder="******************"
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <button
                                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    type="button"
                                                    onClick={handleLogin} // Assuming signup also logs in for this example
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                        : // If loggedIn is true, show the logout/profile view
                        <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-60 flex justify-center items-center z-[999]"
                            onClick={(e) => { e.stopPropagation() }}>
                            <div className="bg-white w-[450px] max-h-[90vh] rounded-xl p-6 relative shadow-lg overflow-y-auto transition-all duration-300 ease-in-out">
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-red-500 font-bold"
                                >
                                    &times;
                                </button>
                                <h2 className="text-lg font-bold mb-4 text-gray-800">Welcome Back!</h2>
                                <hr className="mb-4" />
                                <p className="text-gray-700 mb-4">You are currently logged in.</p>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={handleLogout}
                                >
                                    Log Out
                                </button>
                                {/* New button to go to dashboard from login modal */}
                                <button
                                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                    onClick={() => { setShowForm(false); handleDashboardClick(); }}
                                >
                                    Go to Dashboard
                                </button>
                            </div>
                        </div>
                )}
            </div>
        </div>
    );
}
