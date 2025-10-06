import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState({
    rating: 0,
    reviews: 0,
    years: 0,
    clients: 0,
  });

  const targetValues = {
    rating: 4.9,
    reviews: 850,
    years: 4,
    clients: 1223,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // Animation duration in ms
      const steps = 60; // Number of animation steps
      const increment = {
        rating: targetValues.rating / steps,
        reviews: Math.ceil(targetValues.reviews / steps),
        years: targetValues.years / steps,
        clients: Math.ceil(targetValues.clients / steps),
      };

      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts(targetValues);
          return;
        }

        setCounts((prev) => ({
          rating: Math.min(
            targetValues.rating,
            Number((prev.rating + increment.rating).toFixed(1))
          ),
          reviews: Math.min(
            targetValues.reviews,
            prev.reviews + increment.reviews
          ),
          years: Math.min(
            targetValues.years,
            Number((prev.years + increment.years).toFixed(0))
          ),
          clients: Math.min(
            targetValues.clients,
            prev.clients + increment.clients
          ),
        }));

        currentStep++;
      }, duration / steps);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex justify-around items-center h-[8rem] py-2 px-4 bg-gradient-to-r from-[#F5A623] via-[#8E2DE2]/80 to-[#4A00E0] text-white border-t-4 border-transparent"
    >
      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {counts.rating.toFixed(1)}
        </div>
        <div className="text-xs sm:text-sm md:text-base font-bold">
          {t("AverageRating")}
        </div>
      </div>
      <div className="w-px h-full bg-white/30 mx-1"></div>

      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {counts.reviews}
        </div>
        <div className="text-xs sm:text-sm md:text-base font-bold">
          {t("ClientReviews")}
        </div>
      </div>
      <div className="w-px h-full bg-white/30 mx-1"></div>

      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {counts.years}
        </div>
        <div className="text-xs sm:text-sm md:text-base font-bold">
          {t("YearsOfExperience")}
        </div>
      </div>
      <div className="w-px h-full bg-white/30 mx-1"></div>

      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {counts.clients.toLocaleString()}
        </div>
        <div className="text-xs sm:text-sm md:text-base">
          {t("HappyClients")}
        </div>
      </div>
    </div>
  );
}