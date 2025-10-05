import React, { useEffect, useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import Bahrin from '../../assets/Footer/Bahrin.webp';
import Egypt from '../../assets/Footer/Egypt.webp';
import FaceBook from '../../assets/Footer/FaceBook.webp';
import instagram from '../../assets/Footer/Instagram.webp';
import kewit from '../../assets/Footer/Kewit.webp';
import Linkedin from '../../assets/Footer/Linkedin.webp';
import Oman from '../../assets/Footer/Oman.webp';
import Qatar from '../../assets/Footer/Qatar.webp';
import Sudan from '../../assets/Footer/Sudan.webp';
import SudiArabia from '../../assets/Footer/SudiArabia.webp';
import Turkey from '../../assets/Footer/Turkey.webp';
import Twitter from '../../assets/Footer/Twitter.webp';
import UAE from '../../assets/Footer/UAE.webp';
import Blur from "../../assets/Footer/Blur.webp";
import MiniBlue from "../../assets/Footer/MiniBlue.webp";
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const [Year, setYear] = useState();
    const { t } = useTranslation();

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const countryMap = {
        SudiArabia,
        UAE,
        Egypt,
        kewit,
        Bahrin,
        Oman,
        Qatar,
        Turkey,
        Sudan
    };

    return (
        <footer className="bg-[#0A0A0F] text-white py-8 px-8 relative">
            <img
                loading="lazy"
                src={MiniBlue}
                alt="Mini Blue"
                className="absolute left-0 w-[400px] h-[200px] object-contain z-10 pointer-events-none"
            />

            <img
                loading="lazy"
                src={Blur}
                alt="Blur"
                className="absolute right-0 w-[1000px] h-[200px] opacity-50 object-contain z-0 pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-20">

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">

                    <div className="md:col-span-1">
                        <h1 className="text-2xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] bg-clip-text text-transparent">
                                {t('brand')}
                            </span>
                        </h1>
                        <p className="text-gray-400 text-xs leading-relaxed mb-6">
                            {t('Footerdescription')}
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img loading="lazy" src={Linkedin} alt={t('socialMedia.linkedin')} className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img loading="lazy" src={instagram} alt={t('socialMedia.instagram')} className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img loading="lazy" src={Twitter} alt={t('socialMedia.twitter')} className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img loading="lazy" src={FaceBook} alt={t('socialMedia.facebook')} className="w-5 h-5" />
                            </a>
                        </div>
                    </div>


                    <div>
                        <h3 className="font-semibold mb-4 text-sm">{t('sections.ourServices.title')}</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            {t('sections.ourServices.items', { returnObjects: true }).map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" className="hover:text-purple-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm">{t('sections.helpCenter.title')}</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            {t('sections.helpCenter.items', { returnObjects: true }).map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" className="hover:text-purple-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm">{t('sections.otherLinks.title')}</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            {t('sections.otherLinks.items', { returnObjects: true }).map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" className="hover:text-purple-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm">{t('sections.contactUs.title')}</h3>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-gray-400" />
                                <a href={`tel:${t('sections.contactUs.phone')}`} className="hover:text-purple-400 transition-colors">{t('sections.contactUs.phone')}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={14} className="text-gray-400" />
                                <a href={`mailto:${t('sections.contactUs.email')}`} className="hover:text-purple-400 transition-colors">{t('sections.contactUs.email')}</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">{t('sections.contactUs.contactLink')}</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="border-t border-gray-800 pt-6 mt-6">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <p className="text-xs text-white font-bold">{t('serviceLocations.title')}</p>
                            {['SudiArabia', 'UAE', 'Egypt', 'kewit', 'Bahrin', 'Oman', 'Qatar', 'Turkey', 'Sudan'].map((country, idx) => (
                                <img
                                    loading="lazy"
                                    key={idx}
                                    src={countryMap[country]}
                                    alt={t(`serviceLocations.countries.${idx}`)}
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover"
                                />
                            ))}
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
