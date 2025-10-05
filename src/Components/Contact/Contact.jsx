import React from "react";
import { Send, Mail, User, Phone, Briefcase, ChevronDown } from "lucide-react";
import ManAtSpace from "../../assets/Contact/ManAtSpace.png";
import BlurAtManAtSpace from "../../assets/Contact/Blur.png";
import star from "../../assets/Contact/Star.png";
import bottomStar from "../../assets/Contact/BottomStar.png";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = Object.fromEntries(new FormData(e.target));
        console.log("contact form:", form);
    };

    return (
        <section className="relative w-full min-h-screen bg-[#0a0b0d] flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-visible">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
            </div>

            {/* Star image - Responsive positioning and sizing */}
            <img
                src={star}
                alt="star"
                className="absolute w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 opacity-90 transform -translate-x-1/2 left-1/2 top-8 sm:top-12 md:top-16"
                style={{ zIndex: "9999" }}
                draggable={false}
            />

            {/* Bottom star image - Responsive positioning */}
            <img
                src={bottomStar}
                alt="bottom star"
                className="absolute w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 opacity-75 bottom-12 sm:bottom-16 md:bottom-24 left-4 sm:left-8 md:left-16"
                style={{ zIndex: "9999" }}
                draggable={false}
            />

            <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                    {/* Image Section */}
                    <div className="flex justify-center md:justify-end">
                        <div
                            className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] h-[320px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl"
                            aria-hidden="true"
                        >
                            <img
                                src={ManAtSpace}
                                alt="Man at space"
                                className="absolute inset-0 w-full h-full object-cover"
                                width={480}
                                height={580}
                                draggable={false}
                            />
                            <img
                                src={BlurAtManAtSpace}
                                alt="Blur effect"
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-screen"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
                            <span className="absolute -left-4 sm:-left-6 -top-4 sm:-top-6 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-90 blur-sm animate-pulse" />
                            <span className="absolute -right-4 sm:-right-6 top-20 sm:top-28 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#7C4DFF] opacity-90" />
                            <span className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 w-3 sm:w-5 h-3 sm:h-5 rounded-full bg-[#FFA94D] opacity-80" />
                            <div
                                className="absolute inset-0 pointer-events-none rounded-2xl"
                                style={{
                                    boxShadow:
                                        "inset 0 1px 0 rgba(255,255,255,0.02), inset 0 -18px 40px rgba(0,0,0,0.6)",
                                }}
                            />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="flex justify-center md:justify-start">
                        <div className="w-full max-w-[760px] rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white/3 to-white/6 border border-white/6 backdrop-blur-md shadow-xl flex flex-col justify-center">
                            <div className="text-center">
                                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-2">Contact Us</p>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight mb-4 sm:mb-6">
                                    We welcome your contact
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="relative flex flex-col">
                                    <span className="text-xs sm:text-sm text-gray-300 mb-1">Email</span>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                            className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 rounded-full bg-[#0f1113] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8E2DE2]/30 text-sm sm:text-base"
                                        />
                                    </div>
                                </label>

                                <label className="relative flex flex-col">
                                    <span className="text-xs sm:text-sm text-gray-300 mb-1">Full name</span>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                        <input
                                            name="fullName"
                                            type="text"
                                            placeholder="Enter your name"
                                            required
                                            className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 rounded-full bg-[#0f1113] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8E2DE2]/30 text-sm sm:text-base"
                                        />
                                    </div>
                                </label>

                                <label className="relative flex flex-col">
                                    <span className="text-xs sm:text-sm text-gray-300 mb-1">Service</span>
                                    <div className="relative">
                                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                        <select
                                            name="service"
                                            defaultValue=""
                                            className="w-full appearance-none pl-9 sm:pl-10 pr-8 py-2 sm:py-3 rounded-full bg-[#0f1113] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8E2DE2]/30 text-sm sm:text-base"
                                            aria-label="Service"
                                            required
                                        >
                                            <option value="" disabled>
                                                Choose a service
                                            </option>
                                            <option value="web">Web Development</option>
                                            <option value="mobile">Mobile Development</option>
                                            <option value="design">UI/UX Design</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                    </div>
                                </label>

                                <label className="relative flex flex-col">
                                    <span className="text-xs sm:text-sm text-gray-300 mb-1">Phone number</span>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                        <input
                                            name="phone"
                                            type="tel"
                                            placeholder="Enter your phone"
                                            className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 rounded-full bg-[#0f1113] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8E2DE2]/30 text-sm sm:text-base"
                                        />
                                    </div>
                                </label>

                                <div className="sm:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-[1.02] bg-gradient-to-r from-[#8E2DE2] via-[#8E2DE2]/80 to-[#F5A623] text-sm sm:text-base"
                                        aria-label="Send message"
                                    >
                                        Send
                                        <Send size={16} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}