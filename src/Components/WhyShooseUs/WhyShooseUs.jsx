import React from 'react';
import { Lightbulb, Target, Phone } from 'lucide-react';
import textbg from "../../assets/whyShooseUs/textBG.png";
import { useTranslation } from 'react-i18next';

export default function WhyChooseUs() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#0A0A0F] py-16 px-4 relative overflow-hidden" dir={t('direction')}>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start text-left">
                    <div className="relative order-first lg:order-first">
                        <div
                            style={{
                                backgroundImage: `url(${textbg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className="rounded-3xl p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden bg-slate-900/40 backdrop-blur-sm"
                        >
                            <div className="relative z-10">
                                <div className="inline-block px-4 py-2 bg-slate-900/70 rounded-full text-xs text-slate-300 mb-8 border border-slate-700 text-left">
                                    {t('whatSetsUsApart')}
                                </div>

                                <h2 className="text-5xl font-bold text-white mb-6 leading-tight text-left">
                                    {t('enhanceDigitalImpact')}
                                </h2>

                                <p className="text-slate-400 text-base leading-relaxed mb-10 text-left">
                                    {t('enhanceDigitalImpactDescription')}
                                </p>

                                <div className="flex justify-start">
                                    <button className="group px-8 py-4 bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] hover:from-[#7B1FA2] hover:via-[#7B1FA2]/80 hover:to-[#F48F0B] text-white font-semibold rounded-full flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                                        {t('startYourJourney')}
                                        <Phone />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 text-left order-last lg:order-last">
                        <div>
                            <div className="inline-block px-4 py-2 bg-slate-800/70 rounded-full text-xs text-slate-300 mb-6 border border-slate-700 text-left">
                                {t('whyChooseUs')}
                            </div>

                            <h1 className="text-5xl font-bold text-white mb-6 leading-tight text-left">
                                {t('designsThatDriveSales').split(' ').slice(0,2).join(' ')} <span className="text-blue-500">{t('designsThatDriveSales').split(' ').slice(2).join(' ')}</span>
                            </h1>

                            <p className="text-slate-400 text-base leading-relaxed mb-10 text-left">
                                {t('digitalSolutionsDescription')}
                            </p>
                        </div>

                        <div className="space-y-6 text-left">
                            <div
                                style={{
                                    backgroundImage: `url(${textbg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                className="rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-left bg-transparent backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                                        <Lightbulb className="w-6 h-6 text-slate-900" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-3 text-left">{t('goalDrivenCreativity')}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed text-left">
                                            {t('goalDrivenCreativityDescription')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-left bg-transparent backdrop-blur-sm">
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                                        <Target className="w-6 h-6 text-slate-900" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-3 text-left">{t('resultOrientedExperience')}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed text-left">
                                            {t('resultOrientedExperienceDescription')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:hidden space-y-8 text-left">
                    <div>
                        <div className="inline-block px-4 py-2 bg-slate-800/70 rounded-full text-xs text-slate-300 mb-6 border border-slate-700 text-left">
                            {t('whyChooseUs')}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-left px-4">
                            {t('designsThatDriveSales').split(' ').slice(0,2).join(' ')} <span className="text-blue-500">{t('designsThatDriveSales').split(' ').slice(2).join(' ')}</span>
                        </h1>

                        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 text-left px-4">
                            {t('digitalSolutionsDescription')}
                        </p>

                        <div className="space-y-6 px-4 text-left">
                            <div className="rounded-2xl p-6 border border-slate-700/50 bg-transparent backdrop-blur-sm">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                                        <Lightbulb className="w-6 h-6 text-slate-900" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-2 text-left">{t('goalDrivenCreativity')}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed text-left">
                                            {t('goalDrivenCreativityDescription')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 border border-slate-700/50 bg-transparent backdrop-blur-sm">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                                        <Target className="w-6 h-6 text-slate-900" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-2 text-left">{t('resultOrientedExperience')}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed text-left">
                                            {t('resultOrientedExperienceDescription')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 text-left">
                        <div
                            style={{
                                backgroundImage: `url(${textbg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className="rounded-3xl p-6 border border-slate-700/50 bg-transparent backdrop-blur-sm"
                        >
                            <div className="relative z-10">
                                <div className="inline-block px-4 py-2 bg-slate-900/70 rounded-full text-xs text-slate-300 mb-8 border border-slate-700 text-left">
                                    {t('whatSetsUsApart')}
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-left">
                                    {t('enhanceDigitalImpact')}
                                </h2>

                                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 text-left">
                                    {t('enhanceDigitalImpactDescription')}
                                </p>

                                <button className="w-full group px-8 py-4 bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] hover:from-[#7B1FA2] hover:via-[#7B1FA2]/80 hover:to-[#F48F0B] text-white font-semibold rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-lg">
                                    {t('startYourJourney')}
                                    <Phone />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}