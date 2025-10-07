import React from 'react';
import bg from "../../../assets/Projects/ProjectDetails/bg.png";
import BlueBlur from "../../../assets/Projects/ProjectDetails/BlueBlur.png";
import DesktopScreen from "../../../assets/Projects/ProjectDetails/desktop-buraq-84bf798e 1.png";
import Star from "../../../assets/Projects/ProjectDetails/Star.png";
import homePage from "../../../assets/Projects/ProjectDetails/Hompage-buraq.png";
import AboutPage from "../../../assets/Projects/ProjectDetails/About-Libya-buraq-.png";

export default function ProjectDetails() {
    return (
        <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            <div
                className="absolute top-0 right-0 w-1/2 h-1/2 opacity-40"
                style={{
                    backgroundImage: `url(${BlueBlur})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top right'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
                <div className="mb-16">
                    <h1 className="text-5xl font-bold mb-6">Buraq Air</h1>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
                            UI/UX
                        </button>
                        <button className="px-6 py-2 border border-gray-600 text-white rounded-full text-sm font-medium hover:border-gray-400 transition">
                            Web Design Development
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="relative">
                        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"></div>

                        <div className="pl-8">
                            <img
                                src={DesktopScreen}
                                alt="Buraq Air Desktop Screen"
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Buraq Air is one of Libya's leading airlines, committed to providing safe, reliable, and efficient air transport services that connect Libya with regional and international destinations.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex border-b border-gray-800 pb-4">
                                <span className="text-gray-400 w-32">Clint</span>
                                <span className="text-white">Buraq Air</span>
                            </div>
                            <div className="flex border-b border-gray-800 pb-4">
                                <span className="text-gray-400 w-32">Launched in</span>
                                <span className="text-white">2025</span>
                            </div>
                            <div className="flex border-b border-gray-800 pb-4">
                                <span className="text-gray-400 w-32">Category</span>
                                <span className="text-white">UI/UX, Web Design Development</span>
                            </div>
                            <div className="flex border-b border-gray-800 pb-4">
                                <span className="text-gray-400 w-32">Sector</span>
                                <span className="text-white">Airlines</span>
                            </div>
                            <div className="flex border-b border-gray-800 pb-4">
                                <span className="text-gray-400 w-32">Website</span>
                                <span className="text-white">buraq.aero</span>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mt-20 space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <span>Clint</span>
                            <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
                        </h2>
                        <p className="text-gray-300 leading-relaxed max-w-4xl">
                            Buraq Air I stepped in situations with finding difficulty in education. In digital education transformation, Buraq Air has partnered with top technology providers to deliver a seamless, user-friendly online booking platform that enhances customer experience and operational efficiency.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <span>Achievement</span>
                            <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
                        </h2>
                        <p className="text-gray-300 leading-relaxed max-w-4xl">
                            We designed and developed a modernize digital platform that combines safety with ease of use for travelers seeking to book flights across Libya and beyond. The platform highlights Buraq Air's commitment to service excellence, featuring real-time flight updates, easy booking processes, and comprehensive travel information. The result is a professional image that builds customer trust.
                        </p>
                    </div>
                </div>
                <div className="mt-20 flex justify-between">
                    <div className="w-[45%]">
                        <img
                            src={homePage}
                            alt="Buraq Air Homepage"
                            className="w-full h-auto rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="w-[45%]">
                        <img
                            src={AboutPage}
                            alt="Buraq Air About Page"
                            className="w-full h-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}
