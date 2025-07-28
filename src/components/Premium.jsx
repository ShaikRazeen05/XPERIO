import { Heart } from 'lucide-react';
import react,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Star, MapPin, Clock,Send } from 'lucide-react'; 
export function Premium(){
    return(
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
    );
}