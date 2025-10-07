import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import bg from "../../../assets/Projects/ProjectDetails/bg.png";
import BlueBlur from "../../../assets/Projects/ProjectDetails/BlueBlur.png";
import DesktopScreen from "../../../assets/Projects/ProjectDetails/desktop-buraq-84bf798e 1.png";
import homePage from "../../../assets/Projects/ProjectDetails/Hompage-buraq.png";
import AboutPage from "../../../assets/Projects/ProjectDetails/About-Libya-buraq-.png";
import Afriqiyah from "../../../assets/Projects/Afriqiyah.webp";
import AlhakeemCo from "../../../assets/Projects/AlhakeemCo.webp";
import Birds from "../../../assets/Projects/Birds.webp";
import BuraqAir from "../../../assets/Projects/BuraqAir.webp";
import informatics from "../../../assets/Projects/informatics.webp";
import Libyana from "../../../assets/Projects/Libyana.webp";
import lsGives from "../../../assets/Projects/lsGives.webp";
import LYpay from "../../../assets/Projects/LYpay.webp";
import Mobile from "../../../assets/Projects/Mobile.webp";
import MREIC from "../../../assets/Projects/MREIC.webp";

export default function ProjectDetails() {
  const { t } = useTranslation();

  const [activeFilter, setActiveFilter] = useState(t('filters.0'));
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(t("optionFilters.0"));

  useEffect(() => {
    setActiveFilter(t('filters.0'));
    setSelectedDropdown(t("optionFilters.0"));
  }, [t]);

  const projects = [
    { id: 1, title: t('projects.0.title'), des: t('projects.0.des'), image: Mobile, category: t("optionFilters.1") },
    { id: 2, title: t('projects.1.title'), des: t('projects.1.des'), image: BuraqAir, category: t("optionFilters.4") },
    { id: 3, title: t('projects.2.title'), des: t('projects.2.des'), image: AlhakeemCo, category: t("optionFilters.1") },
    { id: 4, title: t('projects.3.title'), des: t('projects.3.des'), image: MREIC, category: t("optionFilters.3") },
    { id: 5, title: t('projects.4.title'), des: t('projects.4.des'), image: Afriqiyah, category: t("optionFilters.4") },
    { id: 6, title: t('projects.5.title'), des: t('projects.5.des'), image: Libyana, category: t("optionFilters.1") },
    { id: 7, title: t('projects.6.title'), des: t('projects.6.des'), image: lsGives, category: t("optionFilters.2") },
    { id: 8, title: t('projects.7.title'), des: t('projects.7.des'), image: LYpay, category: t("optionFilters.1") },
    { id: 9, title: t('projects.8.title'), des: t('projects.8.des'), image: informatics, category: t("optionFilters.3") },
    { id: 10, title: t('projects.9.title'), des: t('projects.9.des'), image: Birds, category: t("optionFilters.2") },
  ];

  const filteredProjects = activeFilter === t('filters.0') || selectedDropdown === t("optionFilters.0")
    ? projects
    : projects.filter(p => p.category === selectedDropdown);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 opacity-40"
        style={{ backgroundImage: `url(${BlueBlur})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top right' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t('title')}</h1>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
              {t('tags.uiux')}
            </button>
            <button className="px-6 py-2 border border-gray-600 text-white rounded-full text-sm font-medium hover:border-gray-400 transition">
              {t('tags.webDesign')}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative">
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"></div>
            <div className="pl-8">
              <img src={DesktopScreen} alt={t('altTexts.desktopScreen')} className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-8">
                {t('ProjectDetailsdescription.main')}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex border-b border-gray-800 pb-4">
                <span className="text-gray-400 w-32">{t('infoSection.clientLabel')}</span>
                <span className="text-white">{t('infoSection.clientValue')}</span>
              </div>
              <div className="flex border-b border-gray-800 pb-4">
                <span className="text-gray-400 w-32">{t('infoSection.launchedInLabel')}</span>
                <span className="text-white">{t('infoSection.launchedInValue')}</span>
              </div>
              <div className="flex border-b border-gray-800 pb-4">
                <span className="text-gray-400 w-32">{t('infoSection.categoryLabel')}</span>
                <span className="text-white">{t('infoSection.categoryValue')}</span>
              </div>
              <div className="flex border-b border-gray-800 pb-4">
                <span className="text-gray-400 w-32">{t('infoSection.sectorLabel')}</span>
                <span className="text-white">{t('infoSection.sectorValue')}</span>
              </div>
              <div className="flex border-b border-gray-800 pb-4">
                <span className="text-gray-400 w-32">{t('infoSection.websiteLabel')}</span>
                <span className="text-white">{t('infoSection.websiteValue')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-20 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span>{t('ProjectDetailssections.client')}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-4xl">
              {t('ProjectDetailsdescription.client')}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span>{t('ProjectDetailssections.achievement')}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-4xl">
              {t('ProjectDetailsdescription.achievement')}
            </p>
          </div>
        </div>

        {/* Pages */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6 text-white">{t('ProjectDetailssections.buraqPages')}</h2>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-[45%]">
              <img src={homePage} alt={t('altTexts.homepage')} className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
            <div className="w-full md:w-[45%] transform -translate-y-8 md:-translate-y-12">
              <img src={AboutPage} alt={t('altTexts.aboutPage')} className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Similar Projects */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6 text-white">{t('ProjectDetailssections.similarProjects')}</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            navigation
            direction="horizontal"
            className="mySwiper"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="relative rounded-lg shadow-lg overflow-hidden group">
                  <div className="relative h-64 w-full">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 opacity-60"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.des}</p>
                  </div>
                  <div className="absolute -left-2 top-1/2 w-12 h-3/4 transform -rotate-15"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
