import React from "react";
import { ArrowRight } from "lucide-react";
import MobileImage from "../../assets/Portfolio/MobileImage.jpg";
import Draw from "../../assets/Portfolio/Draw.jpg";
import Analysis from "../../assets/Portfolio/Analysis.jpg";
import DesktopScreen from "../../assets/Portfolio/DeskTopScreen.jpg";

export default function Portfolio() {
    return (
        <section className="relative bg-black text-white py-16 px-4 overflow-hidden">
            <div className="relative max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                                <div 
                                    style={{ 
                                        backgroundImage: `url(${MobileImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }} 
                                    className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                                />
                            </div>

                            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                                <div 
                                    style={{ 
                                        backgroundImage: `url(${Draw})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }} 
                                    className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col justify-center space-y-6 lg:pl-8">
                        <div className=" p-8 space-y-6">
                            <div className="inline-block">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                    Our Portfolio
                                </span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                                A Journey of <br />
                                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                                    Creativity & Innovation
                                </span>
                            </h2>

                            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                                Discover how we transformed ideas into inspiring projects that serve our clients and deliver tangible results.
                            </p>

                            <div className="relative inline-block">
                                <button className="group flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                    <span className="text-sm">📱 Our Portfolio</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

    
                            </div>
                        </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                        <div 
                            style={{ 
                                backgroundImage: `url(${Analysis})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }} 
                            className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                        <div 
                            style={{ 
                                backgroundImage: `url(${DesktopScreen})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }} 
                            className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}