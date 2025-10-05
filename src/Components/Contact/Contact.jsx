import React from "react";
import { Send, Mail, User, Phone, Briefcase, ChevronDown } from "lucide-react";
import ManAtSpace from "../../assets/Contact/ManAtSpace.png";
import BlurAtManAtSpace from "../../assets/Contact/Blur.png";
import star from "../../assets/Contact/Star.png";
import bottomStar from "../../assets/Contact/BottomStar.png";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = Object.fromEntries(new FormData(e.target));
        console.log("contact form:", form);
    };

    return (
        <section className="relative w-full min-h-screen bg-[#0a0b0d] flex flex-col md:flex-row items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-visible">

            <img src={star} alt="star" className="absolute w-16 top-10 left-10 opacity-80" />
            <img src={bottomStar} alt="bottom star" className="absolute w-12 bottom-10 right-10 opacity-80" />

            <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-6">

                <div className="flex justify-center md:justify-end w-full md:w-1/2 relative">
                    <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl md:h-[calc(100%+4rem-150px)]">
                        <img
                            src={ManAtSpace}
                            alt="Man at space"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={BlurAtManAtSpace}
                            alt="Blur effect"
                            className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
                        />
                    </div>
                </div>

                <div className="flex justify-center md:justify-start w-full md:w-1/2">
                    <div className="w-full max-w-[760px] rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white/3 to-white/6 border border-white/6 backdrop-blur-md shadow-xl flex flex-col justify-center md:h-[calc(100%+4rem-150px)]">
                        <div className="text-center">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                                {t("contact.sectionTitle")}
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-6">
                                {t("contact.heading")}
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">

                            <label className="flex flex-col">
                                <span className="text-xs text-gray-300 mb-1">{t("contact.labels.email")}</span>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder={t("contact.placeholders.email")}
                                        required
                                        className="w-full pl-9 pr-3 py-2 rounded-full bg-[#0f1113] text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-[#8E2DE2]/30"
                                    />
                                </div>
                            </label>


                            <label className="flex flex-col">
                                <span className="text-xs text-gray-300 mb-1">{t("contact.labels.fullName")}</span>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                    <input
                                        name="fullName"
                                        type="text"
                                        placeholder={t("contact.placeholders.fullName")}
                                        required
                                        className="w-full pl-9 pr-3 py-2 rounded-full bg-[#0f1113] text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-[#8E2DE2]/30"
                                    />
                                </div>
                            </label>


                            <label className="flex flex-col">
                                <span className="text-xs text-gray-300 mb-1">{t("contact.labels.service")}</span>
                                <div className="relative">
                                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                    <select
                                        name="service"
                                        defaultValue=""
                                        required
                                        className="w-full appearance-none pl-9 pr-8 py-2 rounded-full bg-[#0f1113] text-white border border-gray-700 focus:ring-2 focus:ring-[#8E2DE2]/30"
                                    >
                                        <option value="" disabled>{t("contact.placeholders.service")}</option>
                                        <option value="web">{t("contact.services.web")}</option>
                                        <option value="mobile">{t("contact.services.mobile")}</option>
                                        <option value="design">{t("contact.services.design")}</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                </div>
                            </label>


                            <label className="flex flex-col">
                                <span className="text-xs text-gray-300 mb-1">{t("contact.labels.phone")}</span>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder={t("contact.placeholders.phone")}
                                        className="w-full pl-9 pr-3 py-2 rounded-full bg-[#0f1113] text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-[#8E2DE2]/30"
                                    />
                                </div>
                            </label>


                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] shadow-lg hover:scale-105 transition-transform"
                                >
                                    {t("contact.buttonText")}
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
