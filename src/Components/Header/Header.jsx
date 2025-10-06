import React, { useState } from "react";
import { Globe, Phone, Menu, X, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language || "ar");

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.partners"), href: "#" },
    { label: t("nav.about"), href: "#" },
    { label: t("nav.services"), href: "#" },
    { label: t("nav.process"), href: "#" },
    { label: t("nav.projects"), href: "/projects" },
    { label: t("nav.contact"), href: "#" },
  ];

  const toggleLanguage = () => {
    const newLang = language === "ar" ? "en" : "ar";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={`${styles.header} w-full bg-[#0a0a1a] text-white border-b border-gray-800/50`} dir="ltr">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="hidden lg:flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] bg-clip-text text-transparent transition-all duration-300 delay-150 hover:text-opacity-90"
          >
            {t("logo")}
          </Link>

          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-[#2a2a3a] text-white rounded-full px-4 py-2 hover:bg-[#3a3a4a] transition-colors duration-200"
            >
              {language === "ar" ? "EN" : "AR"} <Languages stroke="#a855f7" />
            </button>

            <button className="flex items-center gap-2 bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] rounded-full px-6 py-2.5 text-sm font-medium text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 delay-150 hover:text-opacity-90">
              <Phone size={16} />
              {t("buttons.startProject")}
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X size={24} stroke="#a855f7" />
              ) : (
                <Menu size={24} stroke="#a855f7" />
              )}
            </button>

            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] bg-clip-text text-transparent transition-all duration-300 delay-150 hover:text-opacity-90"
            >
              {t("logo")}
            </a>
          </div>

          <button className="bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] text-white rounded-full px-5 py-2 text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 delay-150 hover:text-opacity-90">
            {t("buttons.startNow")}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''} lg:hidden`}>
            <div className="flex justify-between items-center mb-6">
              <a
                href="#"
                className="text-xl font-bold bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] bg-clip-text text-transparent"
              >
                {t("logo")}
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="focus:outline-none p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
              >
                <X size={24} stroke="#a855f7" />
              </button>
            </div>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-white hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 bg-[#2a2a3a] text-white rounded-full px-4 py-2 hover:bg-[#3a3a4a] transition-colors duration-200 w-full"
              >
                <Globe size={16} />
                {language === "ar" ? "EN" : "AR"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}