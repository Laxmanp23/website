import React from "react";

const Hero = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/digital-art-ai-technology-background_23-2151719581.jpg')]">
                <div className="absolute inset-0 bg-black/60 dark:bg-white/5 backdrop-blur-sm"></div>
                <div className="relative z-10 flex items-center justify-center h-full px-4 py-20 text-center">
                    <div className="max-w-4xl mx-auto text-white">
                        <div className="absolute top-20 right-7  w-8 h-8 rounded-full border-blue-600 animate-blink"></div>

                        <h1 className="font-bold text-4xl md:text-6xl dark:text-black "> Welcome to <span className="text-blue-500">Magic Face </span></h1>
                        <p className="text-lg py-2 mb-4 dark:text-black">upload two pictures and watch and wait Magic AI</p>
                        <div className="flex justify-center gap-4 flrx-wrap">
                            <button className="bg-blue-500 rounded-xl text-white transition hover:bg-blue-400">Get Started</button>
                            <button className="bg-gray-700 rounded-xl text-white transition hover:bg-gray-600">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Hero;
