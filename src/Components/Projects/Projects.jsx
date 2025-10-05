import React, { useState, useEffect } from 'react';
import Afriqiyah from "../../assets/Projects/Afriqiyah.webp";
import AlhakeemCo from "../../assets/Projects/AlhakeemCo.webp";
import Birds from "../../assets/Projects/Birds.webp";
import BuraqAir from "../../assets/Projects/BuraqAir.webp";
import informatics from "../../assets/Projects/informatics.webp";
import Libyana from "../../assets/Projects/Libyana.webp";
import lsGives from "../../assets/Projects/lsGives.webp";
import LYpay from "../../assets/Projects/LYpay.webp";
import Mobile from "../../assets/Projects/Mobile.webp";
import MREIC from "../../assets/Projects/MREIC.webp";
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  // اختيار All Products افتراضيًا
  const [activeFilter, setActiveFilter] = useState(t('filters.0'));

  // تحديث الفلتر عند تغيير اللغة
  useEffect(() => {
    setActiveFilter(t('filters.0'));
  }, [t]);

  const projects = [
    { id: 1, title: t('projects.0.title'), des: t('projects.0.des'), image: Mobile, category: 'Mobile App' },
    { id: 2, title: t('projects.1.title'), des: t('projects.1.des'), image: BuraqAir, category: 'Web Development' },
    { id: 3, title: t('projects.2.title'), des: t('projects.2.des'), image: AlhakeemCo, category: 'E-Commerce' },
    { id: 4, title: t('projects.3.title'), des: t('projects.3.des'), image: MREIC, category: 'Web Development' },
    { id: 5, title: t('projects.4.title'), des: t('projects.4.des'), image: Afriqiyah, category: 'Web Development' },
    { id: 6, title: t('projects.5.title'), des: t('projects.5.des'), image: Libyana, category: 'Branding' },
    { id: 7, title: t('projects.6.title'), des: t('projects.6.des'), image: lsGives, category: 'Branding' },
    { id: 8, title: t('projects.7.title'), des: t('projects.7.des'), image: LYpay, category: 'Branding' },
    { id: 9, title: t('projects.8.title'), des: t('projects.8.des'), image: informatics, category: 'Branding' },
    { id: 10, title: t('projects.9.title'), des: t('projects.9.des'), image: Birds, category: 'Branding' }
  ];

  const filters = [
    t('filters.0'), // All
    t('filters.1'), // Java
    t('filters.2'), // Web Design/Development
    t('filters.3'), // App Development
    t('filters.4'), // E-Commerce
    t('filters.5')  // Branding
  ];

  const filteredProjects = activeFilter === t('filters.0')
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <div className="min-h-screen p-8">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-6">{t('header')}</h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-yellow-400 text-black'
                    : 'bg-slate-800/50 text-white hover:bg-slate-700/50 border border-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6 bg-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 text-white">
                  {project.des}
                </div>
              </div>

              <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
