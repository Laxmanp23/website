import React from "react";
import { UploadCloud, Sparkles, Download } from "lucide-react";

const steps = [
    {
        icon: <UploadCloud className="w-8 h-8 text-blue-500" />,
        title: "Upload Your Images",
        description: "Choose the source face and target image you want to swap.",
    },
    {
        icon: <Sparkles className="w-8 h-8 text-blue-500" />,
        title: "AI Face Swapping",
        description: "Our AI analyzes and perfectly merges faces using deep learning.",
    },
    {
        icon: <Download className="w-8 h-8 text-blue-500" />,
        title: "Download the Output",
        description: "Get the final image instantly and share it anywhere.",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="dark:bg-white bg-zinc-800 dark:text-black text-white py-20 px-4">
            <div className=" relative max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    How <span className="text-blue-500">It Works</span>
                </h2>

                <div className="relative border-l-4 border-blue-500 pl-16">
                    {steps.map((step, index) => (
                        <div key={index} className="mb-12 relative">
                            {/* Dot */}
                            <div className="absolute -left-8 top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-black"></div>

                            <div className="dark:bg-gray-100 bg-zinc-900 p-6 rounded-xl shadow hover:shadow-lg transition">
                                <div className="flex items-center gap-4 mb-2">
                                    {step.icon}
                                    <h3 className="text-xl font-semibold">{step.title}</h3>
                                </div>
                                <p className="text-sm text-gray-300 dark:text-gray-900">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute top-6 right-0 w-12 h-12 bg-blue-600  animate-rotateSlow rounded-sm hidden md:block"></div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
