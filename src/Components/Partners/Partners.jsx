import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./Partners.module.css";

export default function Partners() {
  const initialPartners = [
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
  ];
  const [partnersState] = useState([...initialPartners, ...initialPartners, ...initialPartners]);

  const swiperRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Swiper initialization
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
          loopedSlides: initialPartners.length * 3,
          speed: 6000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          },
          freeMode: {
            enabled: true,
            momentum: false,
          },
          centeredSlides: false,
          breakpoints: {
            320: {
              spaceBetween: 8,
            },
            640: {
              spaceBetween: 12,
            },
            1024: {
              spaceBetween: 16,
            },
          },
          watchSlidesProgress: true,
          resistanceRatio: 0,
          slidesPerGroup: 1,
          updateOnWindowResize: true,
          loopAdditionalSlides: initialPartners.length,
        });
      }
    };

    document.body.appendChild(script);

    // Intersection Observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when element is in view
          if (entry.target === titleRef.current) {
            entry.target.classList.add(styles.title);
            entry.target.classList.remove(styles.noAnimation);
          } else if (entry.target === descriptionRef.current) {
            entry.target.classList.add(styles.description);
            entry.target.classList.remove(styles.noAnimation);
          }
        } else {
          // Remove animation classes and reset styles when element leaves view
          if (entry.target === titleRef.current) {
            entry.target.classList.remove(styles.title);
            entry.target.classList.add(styles.noAnimation);
          } else if (entry.target === descriptionRef.current) {
            entry.target.classList.remove(styles.description);
            entry.target.classList.add(styles.noAnimation);
          }
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <div className="relative w-full bg-[#0A0A0F] py-16 px-4 overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 ref={titleRef} className={`${styles.noAnimation} text-4xl md:text-5xl font-bold text-white mb-6`} dir="rtl">
          {t('sucessPartners')}
        </h1>
        <p ref={descriptionRef} className={`${styles.noAnimation} text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed`} dir="rtl">
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