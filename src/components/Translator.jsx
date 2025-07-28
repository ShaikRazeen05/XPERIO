import { Heart } from 'lucide-react';
import react,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Star, MapPin, Clock,Send } from 'lucide-react'; 
export function Translator(){
    return(
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
    );
}