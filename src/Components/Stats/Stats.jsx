import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Stats() {

  const { t } = useTranslation()
  return (
    <div className="flex justify-around items-center h-[10rem] py-3 px-2 bg-gradient-to-r from-[#F5A623] via-[#8E2DE2]/80 to-[#4A00E0] text-white border-t-4 border-transparent">
      {/* Stat 1 */}
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold">1,223</div>
        <div className="text-base md:text-lg">Happy Clients</div>
      </div>

      <div className="w-px h-[7rem] bg-white/30 mx-2"></div>

      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold">4</div>
        <div className="text-base md:text-lg font-bold">Years of Experience</div>
      </div>

      <div className="w-px h-[7rem] bg-white/30 mx-2"></div>

      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold">850+</div>
        <div className="text-base md:text-lg font-bold">Client Reviews</div>
      </div>

      <div className="w-px h-[7rem] bg-white/30 mx-2"></div>

      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold">4.9</div>
        <div className="text-base md:text-lg font-bold">Average Rating</div>
      </div>
    </div>
  );
}