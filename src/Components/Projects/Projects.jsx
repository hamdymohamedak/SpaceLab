import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

// استيراد الصور
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

const projectImages = {
  Afriqiyah,
  AlhakeemCo,
  Birds,
  BuraqAir,
  informatics,
  Libyana,
  lsGives,
  LYpay,
  Mobile,
  MREIC
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [loadedImages, setLoadedImages] = useState({});

  const categories = ['All', 'Java', 'Web Design/Development', 'App Development', 'E-Commerce', 'Branding'];

  const projects = [
    { imageKey: 'Mobile', title: 'Merdami', description: 'UI, UX & Web Development', category: 'Web Design/Development' },
    { imageKey: 'BuraqAir', title: 'Buraq Air', description: 'UI, UX, Web Design/Development', category: 'Web Design/Development' },
    { imageKey: 'AlhakeemCo', title: 'Alhakeem Co', description: 'E-Commerce, UI, UX, App Development', category: 'E-Commerce' },
    { imageKey: 'MREIC', title: 'MREIC', description: 'UI, UX, Web Design/Development, App Development', category: 'Web Design/Development' },
    { imageKey: 'Afriqiyah', title: 'Afriqiyah Airways', description: 'UI, UX, Web Design/Development', category: 'Web Design/Development', size: 'large'},
    { imageKey: 'Libyana', title: 'Libyana', description: 'UI, UX, Web Design/Development', category: 'Web Design/Development', size: 'large' },
    { imageKey: 'Birds', title: 'Birds', description: 'UI, UX, Branding', category: 'Branding' },
    { imageKey: 'informatics', title: 'Informatics', description: 'UI, UX, Web Design/Development', category: 'Web Design/Development' },
    { imageKey: 'lsGives', title: 'LS Gives', description: 'UI, UX, App Development', category: 'App Development' },
    { imageKey: 'LYpay', title: 'LYpay', description: 'UI, UX, App Development', category: 'App Development' }
  ];

  // تحميل الصور مسبقاً
  useEffect(() => {
    const loadImages = async () => {
      const loaded = {};
      for (const [key, src] of Object.entries(projectImages)) {
        try {
          const img = new Image();
          img.src = src;
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
          loaded[key] = src;
        } catch (error) {
          console.error(`Failed to load image: ${key}`, error);
          loaded[key] = null;
        }
      }
      setLoadedImages(loaded);
    };

    loadImages();
  }, []);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleImageError = (e, imageKey) => {
    console.error(`Error loading image: ${imageKey}`);
    e.target.style.display = 'none';
    e.target.parentElement.innerHTML = `
      <div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
        <div class="text-4xl mb-2">📷</div>
        <p class="text-center">Image not available</p>
        <p class="text-sm text-gray-400 mt-1">${imageKey}</p>
      </div>
    `;
  };

  const handleImageLoad = (e, imageKey) => {
    console.log(`Successfully loaded: ${imageKey}`);
    e.target.style.opacity = '1';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-8">PROJECTS</h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-yellow-500 text-gray-900'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-2xl ${
                project.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''
              } ${
                index === 0
                  ? 'bg-gradient-to-br from-red-900 to-red-700'
                  : index === 1
                  ? 'bg-gradient-to-br from-orange-800 to-orange-600'
                  : index === 2
                  ? 'bg-gradient-to-br from-blue-900 to-blue-700'
                  : index === 3
                  ? 'bg-gradient-to-br from-gray-700 to-gray-600'
                  : index === 4
                  ? 'bg-gradient-to-br from-cyan-600 to-blue-500'
                  : index === 5
                  ? 'bg-gradient-to-br from-purple-800 to-pink-600'
                  : index === 6
                  ? 'bg-gradient-to-br from-green-700 to-green-500'
                  : index === 7
                  ? 'bg-gradient-to-br from-indigo-800 to-indigo-600'
                  : index === 8
                  ? 'bg-gradient-to-br from-yellow-700 to-orange-500'
                  : 'bg-gradient-to-br from-teal-700 to-cyan-500'
              } hover:scale-[1.02] transition-transform duration-300 cursor-pointer min-h-[400px] flex flex-col`}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-800 flex-shrink-0">
                {loadedImages[project.imageKey] ? (
                  <img
                    src={loadedImages[project.imageKey]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-0"
                    onLoad={(e) => handleImageLoad(e, project.imageKey)}
                    onError={(e) => handleImageError(e, project.imageKey)}
                    style={{ transition: 'opacity 0.3s' }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <div className="animate-pulse flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-600 rounded-full mb-2"></div>
                      <div className="w-24 h-4 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <span className="inline-block px-3 py-1 bg-black bg-opacity-30 rounded-full text-white text-xs">
                  {project.category}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
              </div>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {Object.keys(loadedImages).length === 0 && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
            <p className="text-white text-xl">Loading projects...</p>
          </div>
        )}

        {/* No Projects Message */}
        {filteredProjects.length === 0 && Object.keys(loadedImages).length > 0 && (
          <div className="text-center py-12">
            <p className="text-white text-xl">No projects found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}