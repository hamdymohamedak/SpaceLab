import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Partners() {
  let [partnersState] = useState([
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

  const swiperRef = useRef(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true;

    script.onload = () => {
      if (window.Swiper && swiperRef.current) {
        new window.Swiper(swiperRef.current, {
          slidesPerView: 'auto',
          spaceBetween: 16,
          loop: true,
          speed: 3000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          freeMode: true,
          freeModeMomentum: false,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  // translate hook
  const { t } = useTranslation();

  return (
    <div className="relative w-full bg-[#0a0b1e] py-16 px-4 overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" dir="rtl">
          {t('sucessPartners')}
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed" dir="rtl">
          {t('sucessPartnersDes')}
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">
            {partnersState.map((item, index) => (
              <div key={index} className="swiper-slide" style={{ width: 'auto' }}>
                <div className="border border-yellow-400 rounded-xl px-8 py-4 backdrop-blur-sm hover:border-yellow-300 transition-all duration-300">
                  <span className="text-white text-lg font-medium whitespace-nowrap">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}