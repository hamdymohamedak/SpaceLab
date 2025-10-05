import React from 'react';
import RocketBg from "../../assets/Work/Rocket.png";
import Blur from "../../assets/Work/Blur.png";
import Blur2 from "../../assets/Work/Blur2.png";
import { useTranslation } from 'react-i18next';

export default function Work() {

    const { t } = useTranslation()

    const steps = [
        {
            number: "1",
            title: t("UnderstandingTheClient"),
            description: t("WeStartBy"),
            color: "bg-[#cca63c]"
        },
        {
            number: "2",
            title: t("CreativeThinking"),
            description: t("WeConduct"),
            color: "bg-[#cca63c]"
        },
        {
            number: "3",
            title: t("StrategicPlanning"),
            description: t("WeDevelop"),
            color: "bg-[#cca63c]"
        },
        {
            number: "4",
            title: t("PreciseExecution"),
            description: t("WeImplement"),
            color: "bg-[#cca63c]"
        },
        {
            number: "5",
            title: t("Review&Improvement"),
            description: t("WeContinuously"),
            color: "bg-[#cca63c]"
        },
        {
            number: "6",
            title: t("Delivery&Follow-Up"),
            description: t("WeDeliver"),
            color: "bg-[#cca63c]"
        }
    ];


    return (
        <div className="relative min-h-screen bg-[#0A0A0F] overflow-hidden py-20 px-6">
            <img style={{ position: "absolute", left: "0", top: "0", zIndex: 1 }} src={RocketBg} alt="rocketImage" />
            <img style={{ position: "absolute", left: "0", top: "0", zIndex: 2 }} src={Blur} alt="Blur" />
            <img style={{ position: "absolute", right: "0", top: "0", zIndex: 2 }} src={Blur2} alt="Blur2" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm mb-6">
                        {t("OurMethodology")}
                    </div>
                    <h1 className="text-5xl font-bold mb-6">
                        <span className='text-white'>{t("way")}</span>
                        <span className="text-blue-500"> {t("Spacelabs")}</span>
                        <span className="text-white"> {t("Work")}</span>
                        <br />
                        <span className="text-white">{t("Approach")}</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        {t("WeFollow")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-4 bg-[#141529] rounded-xl p-5 shadow-md">
                            <div className={`${step.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl font-bold`}>
                                {step.number}
                            </div>

                            <div className="flex-1">
                                <h3 className="text-white text-xl font-semibold mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-white text-sm leading-tight">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}