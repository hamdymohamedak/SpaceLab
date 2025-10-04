import React from 'react';
import {
  TrendingUp,
  Search,
  Users,
  ShoppingCart,
  PenTool,
  Settings,
} from 'lucide-react';

import starsBg from '../../assets/Services/Element.png';
import BlueBlur from '../../assets/Services/Container.png';
import SearchEngineCardBG from '../../assets/Services/Group 5.png';

const servicesData = [
  {
    title: 'Marketing & Campaign Management',
    description:
      "With our ads, you don't just sell products. You create a unique experience that touches your audience's emotions and stays in their memory forever.",
    icon: TrendingUp,
    bgStyle: 'bg-gradient-to-br from-[#712CD9] to-pink-500',
    buttonText: 'Start Now',
    buttonLink: '#',
  },
  {
    title: 'Search Engine Optimization - SEO',
    description:
      "Without SEO, your website is like a lost map in a maze. With our team, you'll be at the top of Google search results.",
    icon: Search,
    bgStyle: 'bg-gradient-to-br from-blue-600/80 to-purple-600/80',
    buttonText: 'Start Now',
    buttonLink: '#',
    image: SearchEngineCardBG,
    imageStyle: 'absolute right-0 bottom-0 w-32 opacity-10',
  },
  {
    title: 'Social Media Management',
    description:
      "We create content that leaves a mark and tells your brand's story in a way that inspires your audience and turns engagement into lasting, genuine connections.",
    icon: Users,
    bgStyle: 'bg-gradient-to-br from-purple-600 to-pink-500',
    buttonText: 'Start Now',
    buttonLink: '#',
  },
  {
    title: 'E-Commerce Store Design & Development',
    description:
      'With us, your online store becomes professional, fast, and tailored for an ideal user experience that attracts customers and boosts sales.',
    icon: ShoppingCart,
    bgStyle: 'bg-[#4F4EFA]',
    buttonText: 'Start Now',
    buttonLink: '#',
  },
  {
    title: 'Graphic Design & Brand Identity',
    description:
      'We design unique visual identities that reflect your uniqueness and build a strong image of your brand in the minds of your customers.',
    icon: PenTool,
    bgStyle: 'bg-gradient-to-br from-purple-600 to-pink-500',
    buttonText: 'Start Now',
    buttonLink: '#',
  },
  {
    title: 'Management & Sales Systems',
    description:
      'We provide smart system solutions to efficiently manage your operations and sales, helping you organize your business and increase profits.',
    icon: Settings,
    bgStyle: 'bg-gradient-to-br from-blue-600/80 to-purple-600/80',
    buttonText: 'Start Now',
    buttonLink: '#',
  },
];

export default function Services() {
  return (
    <div className="relative min-h-screen bg-black py-16 px-4 overflow-visible">
      {/* Background Images */}
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

      {/* Gradient Lines */}
      <div className="absolute top-10 left-10 w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent rotate-45 pointer-events-none" />
      <div className="absolute top-20 left-16 w-32 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent rotate-45 pointer-events-none" />
      <div className="absolute top-32 right-20 w-24 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -rotate-45 pointer-events-none" />
      <div className="absolute bottom-32 right-32 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rotate-45 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            How we turn your ideas into a
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              stunning digital reality
            </span>
          </h1>
          <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed">
            We provide a comprehensive range of design and development solutions
            that meet all your needs, and ensure you are
            <br className="hidden md:block" /> getting the best planning
            efficiency and creativity
          </p>
        </div>

        {/* Services Two by Two */}
        <div className="flex flex-col gap-5">
          {Array.from({ length: Math.ceil(servicesData.length / 2) }).map((_, i) => {
            const left = servicesData[i * 2];
            const right = servicesData[i * 2 + 1];
            return (
              <div key={i} className="flex flex-col md:flex-row gap-5">
                {/* Left Card */}
                {left && (
                  <ServiceCard key={i * 2} {...left} />
                )}
                {/* Right Card */}
                {right && (
                  <ServiceCard key={i * 2 + 1} {...right} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Card Component (Extracted for reuse)
function ServiceCard({ title, description, icon: Icon, bgStyle, buttonText, buttonLink, image, imageStyle }) {
  return (
    <div
      className={`flex-1 relative rounded-3xl p-8 overflow-hidden group hover:scale-105 transition-transform duration-300 ${bgStyle}`}
    >
      {image && (
        <img src={image} alt="" className={imageStyle} />
      )}
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-white" />
          <h3 className="text-white text-xl font-bold mb-0">{title}</h3>
        </div>
        <p className="text-white/90 text-sm mb-6 leading-relaxed">{description}</p>
        <a
          href={buttonLink}
          className="text-white text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
        >
          {buttonText} <span>→</span>
        </a>
      </div>
    </div>
  );
}
