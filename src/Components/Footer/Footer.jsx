import React, { useEffect, useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import Bahrin from '../../assets/Footer/Bahrin.png';
import Egypt from '../../assets/Footer/Egypt.png';
import FaceBook from '../../assets/Footer/FaceBook.png';
import instagram from '../../assets/Footer/Instagram.png';
import kewit from '../../assets/Footer/Kewit.png';
import Linkedin from '../../assets/Footer/Linkedin.png';
import Oman from '../../assets/Footer/Oman.png';
import Qatar from '../../assets/Footer/Qatar.png';
import Sudan from '../../assets/Footer/Sudan.png';
import SudiArabia from '../../assets/Footer/SudiArabia.png';
import Turkey from '../../assets/Footer/Turkey.png';
import Twitter from '../../assets/Footer/Twitter.png';
import UAE from '../../assets/Footer/UAE.png';

export default function Footer() {
    let [Year, setYear] = useState();

    useEffect(() => {
        let date = new Date();
        let thisYear = date.getFullYear();
        setYear(thisYear);
    }, []);

    return (
        <footer className="bg-[#0a0118] text-white py-12 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <h1 className="text-2xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] bg-clip-text text-transparent">
                                SpaceLab
                            </span>
                        </h1>
                        <p className="text-gray-400 text-xs leading-relaxed mb-6">
                            We envision your ideas into innovative digital solutions. We give your brand a promising start to open beyond borders. We believe in delivering projects on time, passing into the future.
                        </p>

                        <div className="flex gap-3">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src={Linkedin} alt="LinkedIn" className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src={instagram} alt="Instagram" className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src={Twitter} alt="Twitter" className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src={FaceBook} alt="Facebook" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Our Services</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Search Engine Optimization</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Campaign Management</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">National Development</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Graphic Design & Branding</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Help Center</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Articles & Insights</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">User Guidelines</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Technical Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Other Links</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Portfolio</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Contact Us</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-gray-400" />
                                <a href="tel:+966573434567" className="hover:text-purple-400 transition-colors">+966573434567</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={14} className="text-gray-400" />
                                <a href="mailto:info@spacelab.com" className="hover:text-purple-400 transition-colors">info@spacelab.com</a>
                            </li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 mt-6">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <p className="text-xs text-white font-bold">We provide our services in :</p>
                            <img src={SudiArabia} alt="Saudi Arabia" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover" />
                            <img src={UAE} alt="UAE" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover" />
                            <img src={Egypt} alt="Egypt" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover" />
                            <img src={kewit} alt="Kuwait" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover" />
                            <img src={Bahrin} alt="Bahrain" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover" />
                            <img src={Oman} alt="Oman" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover" />
                            <img src={Qatar} alt="Qatar" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover" />
                            <img src={Turkey} alt="Turkey" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover" />
                            <img src={Sudan} alt="Sudan" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover" />
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-xs text-gray-500">
                            © {Year} SpaceLab. All Rights Reserved - Solutions Beyond Earth's Limits.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
