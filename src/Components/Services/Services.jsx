import {
    TrendingUp,
    Search,
    Users,
    ShoppingCart,
    PenTool,
    Settings,
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import starsBg from '../../assets/Services/Element.png';
import BlueBlur from '../../assets/Services/Container.png';
import SearchEngineCardBG from '../../assets/Services/Group 5.png';
import MarketBg from "../../assets/Services/Market.png";
import SocialMedia from "../../assets/Services/SocialMedia.png";
import Ecommarce from "../../assets/Services/ECommerce.png";
import DesginBg from "../../assets/Services/Desgin.png";
import MangementBg from "../../assets/Services/Mangement.png";

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Services() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', i18n.language);
    }, [i18n.language]);

    const servicesData = [
        {
            title: t('cards.marketing.title'),
            description: t('cards.marketing.description'),
            icon: TrendingUp,
            bgStyle: 'bg-gradient-to-br from-[#8B5CF6] to-[#A855F7]',
            buttonText: t('cards.marketing.button'),
            buttonLink: '#',
            backgroundImage: MarketBg,
            backgroundImageStyle: {
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.5,
            },
        },
        {
            title: t('cards.seo.title'),
            description: t('cards.seo.description'),
            icon: Search,
            bgStyle: 'bg-gradient-to-br from-[#141116] to-[#4A5A7A]',
            buttonText: t('cards.seo.button'),
            buttonLink: '#',
            backgroundImage: SearchEngineCardBG,
            backgroundImageStyle: {
                position: 'absolute',
                right: i18n.language === 'ar' ? 'unset' : 0,
                left: i18n.language === 'ar' ? 0 : 'unset',
                bottom: 0,
                width: '128px',
                opacity: 0.5,
            },
        },
        {
            title: t('cards.socialMedia.title'),
            description: t('cards.socialMedia.description'),
            icon: Users,
            bgStyle: 'bg-gradient-to-br from-[#141116] to-[#374151]',
            buttonText: t('cards.socialMedia.button'),
            buttonLink: '#',
            backgroundImage: SocialMedia,
            backgroundImageStyle: {
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.5,
            },
        },
        {
            title: t('cards.ecommerce.title'),
            description: t('cards.ecommerce.description'),
            icon: ShoppingCart,
            bgStyle: 'bg-gradient-to-br from-[#6366F1] to-[#818CF8]',
            buttonText: t('cards.ecommerce.button'),
            buttonLink: '#',
            backgroundImage: Ecommarce,
            backgroundImageStyle: {
                position: 'absolute',
                left: i18n.language === 'ar' ? 'unset' : 0,
                right: i18n.language === 'ar' ? 0 : 'unset',
                top: 0,
                width: '192px',
                opacity: 0.5,
            },
        },
        {
            title: t('cards.graphicDesign.title'),
            description: t('cards.graphicDesign.description'),
            icon: PenTool,
            bgStyle: 'bg-gradient-to-br from-[#8B5CF6] to-[#A855F7]',
            buttonText: t('cards.graphicDesign.button'),
            buttonLink: '#',
            backgroundImage: DesginBg,
            backgroundImageStyle: {
                position: 'absolute',
                right: i18n.language === 'ar' ? 'unset' : 0,
                left: i18n.language === 'ar' ? 0 : 'unset',
                bottom: 0,
                width: '160px',
                opacity: 0.5,
            },
        },
        {
            title: t('cards.managementSystems.title'),
            description: t('cards.managementSystems.description'),
            icon: Settings,
            bgStyle: 'bg-gradient-to-br from-[#141116] to-[#4A5A7A]',
            buttonText: t('cards.managementSystems.button'),
            buttonLink: '#',
            backgroundImage: MangementBg,
            backgroundImageStyle: {
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.5,
            },
        },
    ];

    return (
        <div className={`relative min-h-screen bg-[#0A0A0F] py-16 px-4 overflow-visible ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <img
                className="absolute left-[15%] top-0 pointer-events-none z-0"
                src={starsBg}
                alt="starsBg"
            />
            <img
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
                src={BlueBlur}
                alt="BlueBlur"
            />
            <img
                className="absolute right-[15%] top-[10%] pointer-events-none z-0"
                src={BlueBlur}
                alt="BlueBlur"
            />

            <div className="absolute top-10 left-10 w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent rotate-45 pointer-events-none" />
            <div className="absolute top-20 left-16 w-32 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent rotate-45 pointer-events-none" />
            <div className="absolute top-32 right-20 w-24 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -rotate-45 pointer-events-none" />
            <div className="absolute bottom-32 right-32 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rotate-45 pointer-events-none" />

            <div className={`relative max-w-6xl mx-auto ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="text-center mb-12">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">
                        {t('sectionLabel')}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                        {t('sectionTitle').replace(
                            t('sectionHighlight'),
                            ''
                        )}
                        <br />
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                            {t('sectionHighlight')}
                        </span>
                    </h1>
                    <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed">
                        {t('sectionDescription')}
                    </p>
                </div>

                <div className="block md:hidden">
                    <div className={i18n.language === 'ar' ? 'pr-4 -mr-4' : 'pl-4 -ml-4'}>
                        <Swiper
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            spaceBetween={16}
                            slidesPerView={1.2}
                            dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} 
                            key={i18n.language}
                            style={{
                                width: '100vw',
                                position: 'relative',
                                right: i18n.language === 'ar' ? '16px' : '0',
                                left: i18n.language === 'ar' ? '0' : '16px',
                            }}
                        >
                            {servicesData.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div className={i18n.language === 'ar' ? 'pr-4' : 'pl-4'}>
                                        <ServiceCard {...service} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-2 gap-6">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ServiceCard({
    title,
    description,
    bgStyle,
    buttonText,
    buttonLink,
    backgroundImage,
    backgroundImageStyle,
}) {
    const { i18n } = useTranslation();

    return (
        <div
            className={`relative rounded-2xl p-6 overflow-hidden group hover:scale-[1.02] transition-transform duration-300 ${bgStyle} ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}
        >
            {backgroundImage && (
                <img
                    src={backgroundImage}
                    alt=""
                    style={backgroundImageStyle}
                />
            )}
            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-white text-lg font-bold mb-3 leading-tight">{title}</h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed flex-grow">{description}</p>
                <a
                    href={buttonLink}
                    className={`text-white text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                    {buttonText} <span>{i18n.language === 'ar' ? '←' : '→'}</span>
                </a>
            </div>
        </div>
    );
}