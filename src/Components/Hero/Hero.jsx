import React, { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { FolderArchive, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import planet from "../../assets/Hero/planet.webp";
import rocks from "../../assets/Hero/Rocks.webp";
import BlueBlur from "../../assets/Hero/Blueblur.webp";
import Loader from "../Loader/Loader";
import styles from "./Hero.module.css";

const Partners = lazy(() => import("../Partners/Partners"));
const WhyChooseUs = lazy(() => import("../WhyShooseUs/WhyShooseUs"));
const Stats = lazy(() => import("../Stats/Stats"));
const Services = lazy(() => import("../Services/Services"));
const Work = lazy(() => import("../Work/Work"));
const Portfolio = lazy(() => import("../Portfolio/Portfolio"));
const Contact = lazy(() => import("../Contact/Contact"));

const gradientWords = ["Solutions", "Limits", "حلول", "تجاوز", "الكون"];

function GradientText({ text }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[\.,]/g, "");
        const isGradient = gradientWords.includes(cleanWord);
        return (
          <span
            key={i}
            className={
              isGradient
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7c6fd4] to-[#a68fff]"
                : "text-white"
            }
          >
            {word}{" "}
          </span>
        );
      })}
    </>
  );
}

export default function Hero() {
  const { t } = useTranslation();

 
  const { ref: partnersRef, inView: partnersInView } = useInView({ triggerOnce: true, rootMargin: "200px" });
  const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true, rootMargin: "200px" });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, rootMargin: "200px" });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, rootMargin: "200px" });
  const { ref: workRef, inView: workInView } = useInView({ triggerOnce: true, rootMargin: "200px" });
  const { ref: portfolioRef, inView: portfolioInView } = useInView({ triggerOnce: true, rootMargin: "200px" });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, rootMargin: "200px" });

  return (
    <>
      
      <div className={styles["hero-section"]}>
        
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className={`${styles.star} absolute bg-white rounded-full`}
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animationDelay: Math.random() * 3 + "s",
                animationDuration: Math.random() * 3 + 2 + "s",
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        
        <img
          src={rocks}
          alt="floating rocks"
          loading="lazy"
          className={`${styles["rocks-img"]} ${styles["left"]} ${styles.float} hidden sm:block`}
        />
        <img
          src={rocks}
          alt="floating rocks"
          loading="lazy"
          className={`${styles["rocks-img"]} ${styles["right"]} ${styles["float-delayed"]} hidden sm:block`}
        />
        <img
          src={planet}
          alt="planet"
          fetchPriority="high"
          width="800"
          height="800"
          className={`${styles["planet-img"]} hidden sm:block`}
        />
        <img
          src={BlueBlur}
          alt="BlueBlur"
          loading="lazy"
          className={`${styles["blue-blur-img"]}`}
        />
        <img
          src={BlueBlur}
          alt="BlueBlur"
          loading="lazy"
          className={`${styles["blue-blur-small"]} ${styles.float}`}
        />

     
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 text-center">
          
          <div className={`${styles.badge} mb-6 sm:mb-12`}>
            <div className="px-4 py-2 border border-yellow-500 rounded-full backdrop-blur-sm bg-white/5 sm:bg-white/10">
              <p className="text-white/80 text-xs sm:text-sm tracking-wider">{t("badge")}</p>
            </div>
          </div>

         
          <div className={`${styles.title} mb-12 max-w-full sm:max-w-[90%] md:max-w-[838px]`}>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug sm:leading-tight break-words">
              <GradientText text={t("heading.line1")} />
              <br className="sm:hidden" />
              <GradientText text={t("heading.line2")} />
            </h1>
          </div>

     
          <div className={`${styles.buttons} flex gap-4 justify-center w-full max-w-sm`}>
            <button
              className={`${styles["button-hover"]} px-6 py-3 bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] rounded-full text-white font-medium text-sm sm:text-base flex items-center gap-2`}
            >
              <span>{t("Herobuttons.contact")}</span>
              <Phone className="w-5 h-5" />
            </button>
            <Link
              to="/projects"
              className={`${styles["button-hover"]} px-6 py-3 bg-transparent border border-yellow-500 rounded-full text-white font-bold text-sm sm:text-base flex items-center gap-2`}
            >
              <span>{t("Herobuttons.portfolio")}</span>
              <FolderArchive className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

  
      <div
        ref={partnersRef}
        className={`${styles["fade-in-up"]} ${partnersInView ? styles.visible : ""}`}
      >
        {partnersInView && (
          <Suspense fallback={<Loader />}>
            <Partners />
          </Suspense>
        )}
      </div>

      <div
        ref={whyRef}
        className={`${styles["fade-in-up"]} ${whyInView ? styles.visible : ""}`}
      >
        {whyInView && (
          <Suspense fallback={<Loader />}>
            <WhyChooseUs />
          </Suspense>
        )}
      </div>

      <div
        ref={statsRef}
        className={`${styles["fade-in-up"]} ${statsInView ? styles.visible : ""}`}
      >
        {statsInView && (
          <Suspense fallback={<Loader />}>
            <Stats />
          </Suspense>
        )}
      </div>

      <div
        ref={servicesRef}
        className={`${styles["fade-in-up"]} ${servicesInView ? styles.visible : ""}`}
      >
        {servicesInView && (
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        )}
      </div>

      <div
        ref={workRef}
        className={`${styles["fade-in-up"]} ${workInView ? styles.visible : ""}`}
      >
        {workInView && (
          <Suspense fallback={<Loader />}>
            <Work />
          </Suspense>
        )}
      </div>

      <div
        ref={portfolioRef}
        className={`${styles["fade-in-up"]} ${portfolioInView ? styles.visible : ""}`}
      >
        {portfolioInView && (
          <Suspense fallback={<Loader />}>
            <Portfolio />
          </Suspense>
        )}
      </div>

      <div
        ref={contactRef}
        className={`${styles["fade-in-up"]} ${contactInView ? styles.visible : ""}`}
      >
        {contactInView && (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        )}
      </div>
    </>
  );
}