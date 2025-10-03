import React, { useState } from 'react';

export default function Partners() {
    let [partenersState] = useState([
        "Partners",
        "SmartSys",
        "WebForce",
        "AppMakers",
        "CodeLab",
        "DevStudio",
        "TechCorp",
        "InnovateX",
        "FutureSpace",
        "DigitalHub",
        "CloudTech",
        "DataFlow",
        "NextGen",
        "SmartSys",
    ]);

    // Duplicate the array for seamless loop
    const duplicatedPartners = [...partenersState, ...partenersState];

    return (
        <div className="relative w-full bg-[#0a0b1e] py-16 px-4 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Content container */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" dir="rtl">
                    شركاؤنا في النجاح
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed" dir="rtl">
                    رحلتنا مع شركائنا لم تكن مجرد مشاريع عابرة، بل هي مسيرة مستمرة من الإنجازات المشتركة، حيث يلتقي الطموح مع الخبرة لنحقق معًا مستقبلًا رقميًا أكثر إشراقًا.
                </p>
            </div>

            {/* Animated slider */}
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-scroll gap-6">
                    {duplicatedPartners.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0  border border-yellow-400 rounded-xl px-8 py-4 backdrop-blur-sm hover:border-yellow-300 transition-all duration-300"
                        >
                            <span className="text-white text-lg font-medium whitespace-nowrap">
                                {item}
                            </span>
                        </div>

                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}