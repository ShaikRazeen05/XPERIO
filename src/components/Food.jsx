import { Heart } from 'lucide-react';
import react,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Star, MapPin, Clock,Send } from 'lucide-react'; 
export function Food(){
    const navigate = useNavigate();
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
    function handleFav(name) {
        setFav((prev) => ({
            ...prev,
            [name]: !prev[name]
        }));
    }
    useEffect(() => {
        sessionStorage.setItem("fav", JSON.stringify(fav));
    }, [fav]);
    return (
        <section className=" h-screen w-full overflow-hidden bg-gray-800 shadow-2xl p-8 md:p-12 relative  transform transition-transform duration-500 hover:scale-[1.01]">
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
            <img
            src="pictures_homepage/biryani.jpg"
            alt="Hyderabadi Biryani"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
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

            <div className="flex items-center justify-between space-x-6 text-white text-sm mb-4">
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
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-2">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300">
                Explore
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300">
                Add to Plan
            </button>
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
<div className="flex justify-center gap-4 mt-2">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300">
                Explore
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300">
                Add to Plan
            </button>
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
                <div className="flex justify-center gap-4 mt-2">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300">
                Explore
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300">
                Add to Plan
            </button>
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
<div className="flex justify-center gap-4 mt-2">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300">
                Explore
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300">
                Add to Plan
            </button>
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
<div className="flex justify-center gap-4 mt-2">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300">
                Explore
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded-full transition-colors duration-300">
                Add to Plan
            </button>
            </div>
                </div>
            </div>
        </div>
    </section>
    );
}
