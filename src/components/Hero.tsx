'use client';

import { Section } from './Section';



export const Hero = () => {
    return (
        <div id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
            {/* Background ambient glow removed for global canvas */
            }

            <Section className="z-10 text-center max-w-4xl px-6">


                <h2 className="text-blue-400 tracking-[0.2em] text-sm uppercase mb-6 font-mono">
                    System Architecture & Intelligence
                </h2>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-blue-500 to-purple-500 text-animate-gradient">
                    Lamberto Nunez
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                    AI / Data Analytics Engineer — <span className="text-white font-medium">Agentic Systems & MLOps</span>
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm font-mono text-gray-500">
                    <span className="px-3 py-1 glass-panel rounded-full">Autonomous Agents</span>
                    <span className="hidden md:block">•</span>
                    <span className="px-3 py-1 glass-panel rounded-full">Reasoning Pipelines</span>
                    <span className="hidden md:block">•</span>
                    <span className="px-3 py-1 glass-panel rounded-full">Production AI Systems</span>
                </div>
            </Section>
        </div>
    );
};
