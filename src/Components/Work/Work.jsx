import React from 'react';
import RocketBg from "../../assets/Work/Rocket.png";
import Blur from "../../assets/Work/Blur.png";
import Blur2 from "../../assets/Work/Blur2.png";

export default function Work() {
    const steps = [
        {
            number: "1",
            title: "Understanding the Client",
            description: "We start by carefully listening to our clients to understand their goals and analyze their needs and challenges.",
            color: "bg-[#cca63c]" // لون أصفر مشابه للصورة
        },
        {
            number: "2",
            title: "Creative Thinking",
            description: "We conduct intensive brainstorming sessions to generate innovative ideas that achieve the defined goals.",
            color: "bg-[#cca63c]"
        },
        {
            number: "3",
            title: "Strategic Planning",
            description: "We develop a detailed action plan that defines the key project phases and the required resources.",
            color: "bg-[#cca63c]"
        },
        {
            number: "4",
            title: "Precise Execution",
            description: "We implement the project with high accuracy, ensuring quality at every stage.",
            color: "bg-[#cca63c]"
        },
        {
            number: "5",
            title: "Review & Improvement",
            description: "We continuously review the work and make the necessary adjustments to ensure the best results.",
            color: "bg-[#cca63c]"
        },
        {
            number: "6",
            title: "Delivery & Follow-Up",
            description: "We deliver the final product to the client and follow up to ensure satisfaction and the achievement of goals.",
            color: "bg-[#cca63c]"
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#0a0b1a] overflow-hidden py-20 px-6">
            {/* Background Images */}
            <img style={{position:"absolute",left:"0", top: "0", zIndex: 1}} src={RocketBg} alt="rocketImage" />
            <img style={{position:"absolute",left:"0", top: "0", zIndex: 2}} src={Blur} alt="Blur" />
            <img style={{position:"absolute",right:"0", top: "0", zIndex: 2}} src={Blur2} alt="Blur2" />
            
            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm mb-6">
                        Our Methodology
                    </div>
                    <h1 className="text-5xl font-bold mb-6">
                        <span className="text-blue-500">Spacelab's</span>
                        <span className="text-white"> Work</span>
                        <br />
                        <span className="text-white">Approach</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        We follow a well-structured, proven methodology that ensures achieving the best results at every stage of the project.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-4 bg-[#141529] rounded-xl p-5 shadow-md">
                            {/* Number Badge */}
                            <div className={`${step.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl font-bold`}>
                                {step.number}
                            </div>
                            
                            {/* Content */}
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