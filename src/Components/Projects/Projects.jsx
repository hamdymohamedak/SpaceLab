import React, { useState } from 'react';
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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Merdami',
      des: "UI/UX, App Development",
      image: Mobile,
      category: 'Mobile App',

    },
    {
      id: 2,
      title: 'Buraq Air',
      des: "UI/UX, web design/development",
      image: BuraqAir,
      category: 'Web Development',

    },
    {
      id: 3,
      title: 'Alhakeem Co',
      des: "UI/UX, web design/development, app development",
      image: AlhakeemCo,
      category: 'E-Commerce',

    },
    {
      id: 4,
      title: 'MREIC',
      des: "UI/UX, web design/development, app development",
      image: MREIC,
      category: 'Web Development',

    },
    {
      id: 5,
      title: 'Afriqiyah Airways',
      des: "UI/UX, web design/development",
      image: Afriqiyah,
      category: 'Web Development',

    },
    {
      id: 6,
      title: 'Libyana',
      des: "UI/UX, web design/development",
      image: Libyana,
      category: 'Branding',

    },
    {
      id: 7,
      title: 'ls.gives',
      des: "UI/UX, web design/development",
      image: lsGives,
      category: 'Branding',

    },
    {
      id: 8,
      title: 'LYPay Instant Payment Service',
      des: "UI/UX, web design/development",
      image: LYpay,
      category: 'Branding',

    },
    {
      id: 9,
      title: 'Informatics Governance Forum',
      des: "UI/UX, web design/development",
      image: informatics,
      category: 'Branding',

    },
    {
      id: 10,
      title: 'Birds',
      des: "UI/UX, web design/development, Branding",
      image: Birds,
      category: 'Branding',

    }
  ];

  const filters = ['All', 'Java', 'Web Design/Development', 'App Development', 'E-Commerce', 'Branding'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <div className="min-h-screen p-8">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-6">PROJECTS</h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                  ? 'bg-yellow-400 text-black'
                  : 'bg-slate-800/50 text-white hover:bg-slate-700/50 border border-slate-700'
                  }`}
              >
                {filter}
              </button>
            ))}

            <button className="ml-auto px-6 py-2 rounded-full text-sm font-medium bg-slate-800/50 text-white border border-slate-700 hover:bg-slate-700/50 transition-all duration-300">
              All Filter
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden  hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* لو عايز تسيب تأثير تدرج شفاف خفيف ممكن تستخدم ده */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
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