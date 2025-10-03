import React from 'react';
import { useTranslation } from 'react-i18next';
import { FolderArchive, Phone,Languages } from 'lucide-react';
import planet from "../../assets/Hero/planet.png";
import rocks from "../../assets/Hero/Rocks.png";
import BlueBlur from "../../assets/Hero/Blueblur.png";
export default function Hero() {
    const { t } = useTranslation();

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0a1f] via-[#151532] to-[#1a1a3e]">

            <div className="absolute inset-0">
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            width: Math.random() * 2 + 1 + 'px',
                            height: Math.random() * 2 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 3 + 's',
                            animationDuration: Math.random() * 3 + 2 + 's',
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}
            </div>

            <img
                src={rocks}
                alt="floating rocks"
                className="hidden sm:block absolute left-0 top-[10%] w-[45%] max-w-[600px] opacity-60 object-contain animate-float"
            />

            <img
                src={rocks}
                alt="floating rocks"
                className="hidden sm:block absolute right-0 bottom-[15%] w-[35%] max-w-[500px] opacity-50 object-contain animate-float-delayed"
            />

            <img
                src={planet}
                alt="planet"
                className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[400px] md:h-[600px] lg:h-[800px] opacity-80 object-cover"
            />

            <img
                src={BlueBlur}
                alt="BlueBlur"
                style={{ opacity: "0.4" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-screen opacity-80 object-cover"
            />

            <img
                src={BlueBlur}
                alt="BlueBlur"
                className="absolute right-[15%] top-[15%] w-16 h-16 md:w-24 md:h-24 opacity-70 animate-float"
            />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 text-center">

                <div className="mb-6 sm:mb-12">
                    <div className="px-4 py-2 border border-yellow-500 rounded-full backdrop-blur-sm bg-white/5 sm:bg-white/10">
                        <p className="text-white/80 text-xs sm:text-sm tracking-wider">
                            {t('badge')}
                        </p>
                    </div>
                </div>

                <div style={{ width: "838px" }} className="mb-12 sm:mb-12">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        <span className="text-white">{t('heading.line1').split(' ')[0]} </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c6fd4] to-[#a68fff]">
                            {t('heading.line1').split(' ')[1]}
                        </span>
                        <span className="text-white"> {t('heading.line1').split(' ').slice(2).join(' ')}</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c6fd4] to-[#a68fff]">
                            {t('heading.line2').split(' ')[1]}
                        </span>
                        <span className="text-white"> {t('heading.line2').split(' ').slice(2).join(' ')}</span>
                    </h1>
                </div>

                <div className="flex flex-row gap-4 sm:flex-row">
                    <button className="group px-6 py-3 bg-gradient-to-r from-[#8b7fd6] to-[#d4a574] rounded-full text-white font-medium text-sm sm:text-base flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                        <span>{t('Herobuttons.contact')}</span>
                        <Phone className="w-5 h-5" />
                    </button>
                    <button className="group px-6 py-3 bg-transparent border border-yellow-500 rounded-full text-white font-bold text-sm sm:text-base flex justify-center items-center gap-2 hover:bg-yellow-500 hover:text-white hover:shadow-lg hover:shadow-red-500/50 transition-all hover:scale-105">
                        <span>{t('Herobuttons.portfolio')}</span>
                        <FolderArchive className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
