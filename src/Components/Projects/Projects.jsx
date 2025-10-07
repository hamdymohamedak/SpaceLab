import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
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
import { Link } from 'react-router-dom';

export default function Projects() {
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
    { id: 3, title: t('projects.2.title'), des: t('projects.2.des'), image: AlhakeemCo, category: t("optionFilters.1") }, // Finance
    { id: 4, title: t('projects.3.title'), des: t('projects.3.des'), image: MREIC, category: t("optionFilters.3") },
    { id: 5, title: t('projects.4.title'), des: t('projects.4.des'), image: Afriqiyah, category: t("optionFilters.4") }, // Travel & Tourism
    { id: 6, title: t('projects.5.title'), des: t('projects.5.des'), image: Libyana, category: t("optionFilters.1") },
    { id: 7, title: t('projects.6.title'), des: t('projects.6.des'), image: lsGives, category: t("optionFilters.2") },
    { id: 8, title: t('projects.7.title'), des: t('projects.7.des'), image: LYpay, category: t("optionFilters.1") },
    { id: 9, title: t('projects.8.title'), des: t('projects.8.des'), image: informatics, category: t("optionFilters.3") },
    { id: 10, title: t('projects.9.title'), des: t('projects.9.des'), image: Birds, category: t("optionFilters.2") },
  ];

  const filters = [
    t('filters.0'),
    t('filters.1'),
    t('filters.2'),
    t('filters.3'),
    t('filters.4'),
    t('filters.5'),
  ];

  const dropdownOptions = [
    t("optionFilters.0"),
    t("optionFilters.1"),
    t("optionFilters.2"),
    t("optionFilters.3"),
    t("optionFilters.4"),
  ];

  const categoryMap = {
    [t("optionFilters.0")]: t('filters.0'),
    [t("optionFilters.1")]: t("optionFilters.1"),
    [t("optionFilters.2")]: t("optionFilters.2"),
    [t("optionFilters.3")]: t("optionFilters.3"),
    [t("optionFilters.4")]: t("optionFilters.4"),
  };

  const filteredProjects = activeFilter === t('filters.0') || selectedDropdown === t("optionFilters.0")
    ? projects
    : projects.filter(p => p.category === selectedDropdown);

  return (
    <div className="min-h-screen p-8">
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-6">{t('header')}</h1>

          <div className="flex flex-wrap gap-3 relative">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setSelectedDropdown(t("optionFilters.0"));
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                    ? 'bg-yellow-400 text-black'
                    : 'bg-slate-800/50 text-white hover:bg-slate-700/50 border border-slate-700'
                  }`}
              >
                {filter}
              </button>
            ))}

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${showDropdown || selectedDropdown !== t("optionFilters.0")
                    ? 'bg-yellow-400 text-black'
                    : 'bg-yellow-400 text-black hover:bg-yellow-500'
                  }`}
              >
                {selectedDropdown}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`}
                />
              </button>

              {showDropdown && (
                <div className="absolute mt-2 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-10">
                  {dropdownOptions.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedDropdown(option);
                        setActiveFilter(categoryMap[option]);
                        setShowDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-slate-700 transition-colors duration-200"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Link
              style={{ cursor: "pointer" }}
              key={project.id}
              to={"/ProjectsDetails"}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}