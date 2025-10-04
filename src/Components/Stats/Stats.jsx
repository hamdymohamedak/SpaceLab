import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Stats() {
  const {t} = useTranslation()
  return (
    <div className="flex justify-around items-center h-[8rem] py-2 px-4 bg-gradient-to-r from-[#F5A623] via-[#8E2DE2]/80 to-[#4A00E0] text-white border-t-4 border-transparent">

      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">4.9</div>
        <div className="text-xs sm:text-sm md:text-base font-bold">{t("AverageRating")}</div>
      </div>
      <div className="w-px h-full bg-white/30 mx-1"></div>

      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">850+</div>
        <div className="text-xs sm:text-sm md:text-base font-bold">{t("ClientReviews")}</div>
      </div>

      <div className="w-px h-full bg-white/30 mx-1"></div>


      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">4</div>
        <div className="text-xs sm:text-sm md:text-base font-bold">{t("YearsOfExperience")}</div>
      </div>
      <div className="w-px h-full bg-white/30 mx-1"></div>


            <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">1,223</div>
        <div className="text-xs sm:text-sm md:text-base">{t("HappyClients")}</div>
      </div>
    </div>
  );
}