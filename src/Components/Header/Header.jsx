import React, { useState, useEffect } from "react";
import { Globe, Phone, Menu, X, ChevronDown } from "lucide-react";
import ar from "../../locales/ar.json";
import en from "../../locales/en.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ar");

  // تغيير اتجاه الصفحة حسب اللغة
  useEffect(() => {
    document.body.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  // اختيار الترجمة
  const translations = { ar, en };
  const t = translations[language];

  const navLinks = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.partners, href: "#" },
    { label: t.nav.about, href: "#" },
    { label: t.nav.services, href: "#" },
    { label: t.nav.process, href: "#" },
    { label: t.nav.projects, href: "#" },
    { label: t.nav.contact, href: "#" }
  ];

  const toggleLanguage = () => setLanguage(language === "ar" ? "en" : "ar");

  return (
    <header className="w-full bg-[#0a0a1a] text-white border-b border-gray-800/50" dir="ltr">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 bg-clip-text text-transparent"
          >
            {t.logo}
          </a>

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
              {language === "ar" ? "EN" : "AR"}
            </button>

            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-purple-500 to-orange-400 text-white rounded-full px-6 py-2.5 text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              <Phone size={16} />
              {t.buttons.startProject}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* اللوجو بجوار أيقونة البورجر */}
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 bg-clip-text text-transparent"
            >
              {t.logo}
            </a>
          </div>

          <button className="bg-gradient-to-r from-purple-600 via-purple-500 to-orange-400 text-white rounded-full px-5 py-2 text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            {t.buttons.startNow}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800/50 pt-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            <div className="mt-4 px-4">
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