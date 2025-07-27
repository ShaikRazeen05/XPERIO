import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react'; // Assuming Heart is used for favorites
// import DarkVeil from './DarkVeil'; // Removed as it's not used in the provided JSX and causing import issues

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

    // Removed slideshow-related states as the hero section is replaced
    // const [dummy,setDummy] = useState(true);
    // const slides = [...];
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const [isImageLoaded, setIsImageLoaded] = useState(false);

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
        const exploreSection = document.getElementById("xperio-categories");
        if (exploreSection) {
            exploreSection.scrollIntoView({ behavior: "smooth" });
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
        // setDummy(!dummy); // Keep if dummy is still used elsewhere
    }

    function handleFav(name) {
        setFav((prev) => ({
            ...prev,
            [name]: !prev[name]
        }));
        // Corrected: sessionStorage.setItem expects stringified value, and setFav is the state setter, not the value
        // You should pass the updated 'fav' state to sessionStorage.
        // The useEffect below handles saving 'fav' to sessionStorage.
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

    // Effect to save favorites to sessionStorage whenever 'fav' changes
    useEffect(() => {
        sessionStorage.setItem("fav", JSON.stringify(fav));
    }, [fav]);

    // Removed slideshow-related useEffect
    // useEffect(() => {
    //     const img = new Image();
    //     img.src = slides[0];
    //     img.onload = () => setIsImageLoaded(true);
    // }, []);

    // Removed slideshow-related useEffect
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prev) => (prev + 1) % slides.length);
    //     }, 4000);
    //     return () => clearInterval(interval);
    // }, [slides.length]);

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

    // Background image for the hero section
    const heroBackgroundImage = 'https://placehold.co/1200x800/222831/EEEEEE?text=Background';

    return (
        <div onClick={() => setShowForm(false)} className="min-h-screen font-inter relative">
            {/* Full-screen Background Image Layer (for the hero section) */}
            <div
                className="absolute inset-0 z-0" // Position absolutely to cover the entire viewport
                style={{
                    backgroundImage: `url(${heroBackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)' // Slightly dim the background image itself
                }}
            ></div>

            {/* Full-screen Overlay Layer (over the background image, but under the main content box) */}
            <div
                className="absolute inset-0 z-10" // Position absolutely, above the background image
                style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3), rgba(0,0,0,0.6))', // Darker gradient for the overall page
                }}
            ></div>

            {/* Main content container (the bordered box from Tourism example, now the hero section) */}
            <div className="relative z-20 w-full max-w-6xl h-[700px] bg-black bg-opacity-40 rounded-xl shadow-2xl overflow-hidden border border-white border-opacity-30 flex flex-col p-6 sm:p-10 mx-auto mt-8">
                {/* Inner Overlay for the content box (subtle effect within the box) */}
                <div
                    className="absolute inset-0 z-0" // Position absolutely to cover the inner container
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.05), rgba(0,0,0,0.2))', // Lighter gradient for the inner box
                    }}
                ></div>

                {/* Header Section - Integrated from both designs */}
                <header className="relative z-10 flex justify-between items-center mb-16">
                    {/* Xperio Logo */}
                    <div className="text-white text-3xl font-bold tracking-wider">
                        Xperio
                    </div>

                    {/* Navigation and Buttons */}
                    <nav className="flex items-center space-x-4 text-white text-lg font-medium">
                        {/* Tourism links (optional, can be removed if not needed) */}
                        <a href="#" className="hover:text-gray-300 transition-colors hidden sm:block">HOME</a>
                      


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
                    </nav>

                    {/* User Icon */}
                    <div className="relative z-[1000] ml-4"> {/* Adjusted z-index for icon to be clickable */}
                        <img
                            src={userIcon}
                            onMouseOver={() => setUserIcon("pictures_homepage/user.png")} // Changed hover image to user.png
                            onMouseOut={() => setUserIcon("pictures_homepage/user1.png")} // Changed default image to user1.png
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
                        DAYTIME
                    </h1>
                    <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-widest leading-none -mt-4"
                        style={{
                            textShadow: '0 0 15px rgba(0,0,0,0.5)',
                            background: 'linear-gradient(to right, #E0E0E0, #A0A0A0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        SKY
                    </h1>
                    {/* Re-added the Explore Now button */}
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
            <div className="relative z-30 bg-white"> {/* Added a white background to ensure sections are visible */}
                {/* Featured Sections */}
                <div id="xperio-categories" className="p-8 space-y-20">
                    <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden transform transition-transform duration-500 hover:scale-[1.01]">
                        <h2 className="text-4xl font-extrabold mb-4 text-gray-800 text-center">Xperio Food Delights</h2>
                        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
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
                            <div className="bg-[#E1F6F4] rounded-[2.5rem] p-6 w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                    <img src="pictures_homepage/biryani.jpg" alt="Hyderabadi Biryani" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-1">
                                        Hyderabadi Biryani
                                        <Heart
                                            className={`h-6 w-6 cursor-pointer ${fav['Hyderabadi Biryani'] ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={() => handleFav('Hyderabadi Biryani')}
                                        />
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2">Hyderabad, Telangana</p>
                                    <p className="mt-3 font-extrabold text-green-700 text-xl">₹150</p>
                                </div>
                            </div>

                            {/* Food Card 2 */}
                            <div className="bg-[#FAF0F4] rounded-[2.5rem] p-6 w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                    <img src="pictures_homepage/vadapav.jpg" alt="Vada Pav" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-1">
                                        Mumbai Vada Pav
                                        <Heart
                                            className={`h-6 w-6 cursor-pointer ${fav['Vada Pav'] ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={() => handleFav('Vada Pav')}
                                        />
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2">Mumbai, Maharashtra</p>
                                    <p className="mt-3 font-extrabold text-green-700 text-xl">₹40</p>
                                </div>
                            </div>

                            {/* Food Card 3 */}
                            <div className="bg-[#FFF3E6] rounded-[2.5rem] p-6 w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                    <img src="pictures_homepage/chat.jpg" alt="Delhi Chaat" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-1">
                                        Delhi Street Chaat
                                        <Heart
                                            className={`h-6 w-6 cursor-pointer ${fav['Delhi Chaat'] ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={() => handleFav('Delhi Chaat')}
                                        />
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2">Delhi, NCR</p>
                                    <p className="mt-3 font-extrabold text-green-700 text-xl">₹60</p>
                                </div>
                            </div>

                            {/* Food Card 4 */}
                            <div className="bg-[#E6F9F3] rounded-[2.5rem] p-6 w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                    <img src="pictures_homepage/dosa.jpg" alt="Masala Dosa" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-1">
                                        Masala Dosa
                                        <Heart
                                            className={`h-6 w-6 cursor-pointer ${fav['Masala Dosa'] ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={() => handleFav('Masala Dosa')}
                                        />
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2">Bengaluru, Karnataka</p>
                                    <p className="mt-3 font-extrabold text-green-700 text-xl">₹80</p>
                                </div>
                            </div>

                            {/* Food Card 5 */}
                            <div className="bg-[#F8F3ED] rounded-[2.5rem] p-6 w-[280px] flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-44 overflow-hidden rounded-2xl mb-4">
                                    <img src="pictures_homepage/rogan.png" alt="Rogan Josh" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-1">
                                        Kashmiri Rogan Josh
                                        <Heart
                                            className={`h-6 w-6 cursor-pointer ${fav['Rogan Josh'] ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={() => handleFav('Rogan Josh')}
                                        />
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2">Kashmir, J&K</p>
                                    <p className="mt-3 font-extrabold text-green-700 text-xl">₹300</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform transition-transform duration-500 hover:scale-[1.01]">
                        <h2 className="text-4xl font-extrabold mb-4 text-gray-800 text-center">
                            Xperio Cultural Immersion
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
                            Dive deep into the vibrant traditions and captivating performances of India.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                                    className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="h-52 overflow-hidden rounded-xl mb-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-1">
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
                                    <p className="text-gray-600 text-sm mb-2">{item.location}</p>
                                    <p className="mt-3 font-bold text-indigo-700 text-md">
                                        {item.description}
                                    </p>
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

                {/* Social Proof Section */}
                <section className="bg-[#f0f4eb] py-16 px-4 text-center">
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">Social proof? Here.</h2>
                    <p className="text-gray-600 mb-10">
                        From exploring local gems to global adventures ,2000+ happy clients and still counting.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                        {/* Testimonial Cards */}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6 w-80 transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300"
                                style={{ transform: `rotate(${index % 2 === 0 ? -3 : 2}deg)` }} // Alternating rotation
                            >
                                <p className="text-gray-800 mb-6">
                                    "{testimonial.message}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${30 + index}.jpg`} // Dynamic user images
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <p className="font-semibold text-sm text-gray-700">{testimonial.name}</p>
                                        <p className="text-xs text-gray-500">
                                            {/* Placeholder for title, if available in testimonials data */}
                                            {testimonial.name === "Rai M." && "Founder of ArtisanMarket"}
                                            {testimonial.name === "Mike P." && "GreenFuture Foundation"}
                                            {testimonial.name === "Sadiya" && "Employee NovaTech"}
                                            {testimonial.name === "Sara L." && "Influencer"}
                                            {testimonial.name === "Jack" && "Teacher"}
                                            {testimonial.name === "Raj." && "Travel influencer"}
                                            {/* Default if no specific title */}
                                            {!(testimonial.name === "Rai M." || testimonial.name === "Mike P." || testimonial.name === "Sadiya" || testimonial.name === "Sara L." || testimonial.name === "Jack" || testimonial.name === "Raj.") && "Happy Client"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-[#edf4fa] p-10 rounded-2xl my-12 mx-auto max-w-[1400px] shadow-md">
                    <div className="max-w-[600px] text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Become a Culture Tripper!</h1>
                        <p className="text-lg text-[#222] mb-6">Sign up to our newsletter to get notified for new trips.</p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-4">
                            <input
                                type="email"
                                placeholder="E-mail address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-5 py-3 w-full sm:w-[360px] text-base rounded-full border border-gray-300 outline-none"
                            />
                            <button
                                className="px-7 py-3 bg-black text-white text-base rounded-full border-none cursor-pointer hover:bg-gray-800 transition"
                                onClick={handleNewsletterSignup}
                            >
                                Sign Up
                            </button>
                        </div>
                        {emailError && <p className="text-red-600 font-medium mb-2">{emailError}</p>}
                        {signedUp && <p className="text-green-600 font-medium mb-2">You've signed up for our newsletter!</p>}
                        <p className="text-sm text-gray-600 mt-2">
                            See our <a href="#" className="text-black underline">privacy policy</a>.
                        </p>
                        <p className="text-sm text-gray-600">
                            This site is protected by reCAPTCHA and the Google <a href="#" className="text-black underline">Privacy Policy</a> and <a href="#" className="text-black underline">Terms of Service</a> apply.
                        </p>
                    </div>
                    <div>
                        <img src="pictures_homepage/bee.png" alt="illustration" className="max-w-[500px] h-auto" />
                    </div>
                </div>

                {/* Login/Signup Modal */}
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
                                <h2 className="text-lg font-bold mb-4">PROFILE</h2>
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
                                <h2 className="text-lg font-bold mb-4">Welcome Back!</h2>
                                <hr className="mb-4" />
                                <p className="text-gray-700 mb-4">You are currently logged in.</p>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={handleLogout}
                                >
                                    Log Out
                                </button>
                            </div>
                        </div>
                )}
            </div>
        </div>
    );
}

// Exporting Homepage as the default component
export default Homepage;
