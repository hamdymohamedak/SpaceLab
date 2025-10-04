import React from 'react';
import { Lightbulb, Target, Phone } from 'lucide-react';
import textbg from "../../assets/whyShooseUs/textBG.png";

export default function WhyChooseUs() {
    return (
        <div className="min-h-screen bg-slate-950 py-20 px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start text-left">
                    {/* Left Column - Feature Cards */}
                    <div className="space-y-8 text-left order-first lg:order-first">
                        {/* Header */}
                        <div>
                            <div className="inline-block px-4 py-2 bg-slate-800/70 rounded-full text-xs text-slate-300 mb-6 border border-slate-700 text-left">
                                Why Choose Us?
                            </div>

                            <h1 className="text-5xl font-bold text-white mb-6 leading-tight text-left">
                                Designs That Drive <span className="text-blue-500">Sales</span>
                            </h1>

                            <p className="text-slate-400 text-base leading-relaxed mb-10 text-left">
                                We provide comprehensive digital solutions focused on a deep understanding of your business needs,
                                helping you build a professional brand and create seamless user experiences in high-quality ecommerce
                                platforms with SEO and smart marketing, ensuring your brand leaves its mark and turns ideas into
                                measurable results.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="space-y-6 text-left">
                            {/* Card 1 - Transparent */}
                            <div
                                style={{
                                    backgroundImage: `url(${textbg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                className="rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-left bg-transparent backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-5">

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-3 text-left">Goal-Driven Creativity</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed text-left">
                                            We blend beauty with functionality, creating designs that don't just impress but also serve your
                                            marketing objectives and satisfy the right audience.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                                        <Lightbulb className="w-7 h-7 text-slate-900" />
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 - Transparent */}
                            <div className="rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-left bg-transparent backdrop-blur-sm">
                                <div className="flex items-start gap-5">

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-3 text-left">Result-Oriented Experience</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed text-left">
                                            Our design approach is based on analyzing digital behavior to ensure visitor engagement,
                                            reduce bounce rates, and maximize conversion opportunities.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                                        <Target className="w-7 h-7 text-slate-900" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Big Card */}
                    <div className="relative order-last lg:order-last">
                        <div style={{
                            backgroundImage: `url(${textbg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} className="rounded-3xl p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden bg-slate-900/40 backdrop-blur-sm">
                            <div className="relative z-10">
                                <div className="inline-block px-4 py-2 bg-slate-900/70 rounded-full text-xs text-slate-300 mb-8 border border-slate-700 text-left">
                                    What Sets Us Apart
                                </div>

                                <h2 className="text-5xl font-bold text-white mb-6 leading-tight text-left">
                                    Enhance your digital<br />
                                    impact with{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
                                        SpaceLab's
                                    </span>
                                    <br />
                                    expertise.
                                </h2>

                                <p className="text-slate-400 text-base leading-relaxed mb-10 text-left">
                                    At SpaceLab, we empower brands with advanced digital solutions that drive engagement and growth.
                                    From impressive website design to strategic marketing, our expertise ensures you a strong online
                                    presence that attracts audiences and delivers results.
                                </p>

                                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-semibold rounded-full flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                                    Start Your Journey
                                    <Phone />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden space-y-8 text-left">
                    {/* Header */}
                    <div>
                        <div className="inline-block px-4 py-2 bg-slate-800/70 rounded-full text-xs text-slate-300 mb-6 border border-slate-700 text-left">
                            Why Choose Us?
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-left px-4">
                            Designs That Drive <span className="text-blue-500">Sales</span>
                        </h1>

                        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 text-left px-4">
                            We provide comprehensive digital solutions focused on a deep understanding of your business needs,
                            helping you build a professional brand and create seamless user experiences in high-quality ecommerce
                            platforms with SEO and smart marketing, ensuring your brand leaves its mark and turns ideas into
                            measurable results.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="space-y-6 px-4 text-left">
                        {/* Card 1 - Transparent */}
                        <div className="rounded-2xl p-6 border border-slate-700/50 bg-transparent backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <Lightbulb className="w-6 h-6 text-slate-900" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-2 text-left">Goal-Driven Creativity</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed text-left">
                                        We blend beauty with functionality, creating designs that don't just impress but also serve your
                                        marketing objectives and satisfy the right audience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Transparent */}
                        <div className="rounded-2xl p-6 border border-slate-700/50 bg-transparent backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <Target className="w-6 h-6 text-slate-900" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-2 text-left">Result-Oriented Experience</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed text-left">
                                        Our design approach is based on analyzing digital behavior to ensure visitor engagement,
                                        reduce bounce rates, and maximize conversion opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 text-left">
                        <button className="w-full group px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-semibold rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-lg">
                            What Sets Us Apart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}