import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import MobileImage from "../../assets/Portfolio/MobileImage.webp";
import Draw from "../../assets/Portfolio/Draw.webp";
import Analysis from "../../assets/Portfolio/Analysis.webp";
import DesktopScreen from "../../assets/Portfolio/DeskTopScreen.webp";
import Light from "../../assets/Portfolio/Light.webp";
import styles from "./Portfolio.module.css";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
    const images = [MobileImage, Draw, Analysis, DesktopScreen];
    const { t, i18n } = useTranslation();
    const desktopContentRef = useRef(null); // For parent div in desktop
    const mobileContentRef = useRef(null); // For parent div in mobile

    useEffect(() => {
        document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.card);
                    entry.target.classList.remove(styles.noAnimation);
                } else {
                    entry.target.classList.remove(styles.card);
                    entry.target.classList.add(styles.noAnimation);
                }
            });
        }, observerOptions);

        if (desktopContentRef.current) observer.observe(desktopContentRef.current);
        if (mobileContentRef.current) observer.observe(mobileContentRef.current);

        return () => {
            if (desktopContentRef.current) observer.unobserve(desktopContentRef.current);
            if (mobileContentRef.current) observer.unobserve(mobileContentRef.current);
        };
    }, [i18n.language]);

    return (
        <section className={`relative bg-black text-white py-16 px-4 overflow-hidden ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <div ref={desktopContentRef} className={`relative max-w-6xl mx-auto ${styles.noAnimation}`}>
                <img
                    loading="lazy"
                    style={{
                        position: "absolute",
                        right: "20%",
                    }}
                    src={Light}
                    alt="Light"
                />

                <div ref={mobileContentRef} className={`${styles.noAnimation} lg:hidden space-y-10`}>
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-200 border-b-2 border-yellow-400 pb-1">
                            {t("ContactsectionTitle")}
                        </h3>

                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                            {t("headingLine1")} <br />
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                                {t("headingLine2")}
                            </span>
                        </h2>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
                            {t("description")}
                        </p>

                        <button className="group flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <span className="text-sm">{t("buttonText")}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={16}
                        slidesPerView={1}
                        dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                        key={i18n.language}
                        className="rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div
                                    className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        {[MobileImage, Draw].map((img, i) => (
                            <div
                                key={i}
                                className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                    className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col justify-center space-y-6 lg:pl-8">
                        <div className="p-8 space-y-6">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-200 border-b-2 border-yellow-400 inline-block pb-1">
                                {t("ContactsectionTitle")}
                            </h3>

                            <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
                                {t("headingLine1")} <br />
                                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                                    {t("headingLine2")}
                                </span>
                            </h2>

                            <p className="text-gray-400 text-base leading-relaxed">
                                {t("description")}
                            </p>

                            <button className="group flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                <span className="text-sm">{t("buttonText")}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {[Analysis, DesktopScreen].map((img, i) => (
                        <div
                            key={i}
                            className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}