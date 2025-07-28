import { Heart } from 'lucide-react';
import react,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Star, MapPin, Clock,Send } from 'lucide-react'; 
export function Culture(){
    const navigate = useNavigate();
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
    return(
        
                    <section className="h-screen w-full overflow-hidden bg-gray-800 shadow-2xl p-8 md:p-12 relative  transform transition-transform duration-500 hover:scale-[1.01]">
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
    );
}