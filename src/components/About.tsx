'use client';

import { Section } from './Section';

export const About = () => {
    return (
        <div id="about" className="py-24 px-6 relative">
            <Section className="max-w-4xl mx-auto">
                <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">


                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-blue-500 block" />
                        <span className="bg-gradient-to-r from-white via-blue-500 to-purple-500 text-animate-gradient">
                            Profile
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                As a Computer Science student specializing in Data Analytics, I focus on the intersection of
                                <span className="text-white font-medium"> algorithmic reasoning</span> and
                                <span className="text-white font-medium"> scalable infrastructure</span>.
                            </p>
                            <p>
                                My work moves beyond simple API integrations to build robust agentic systems capable of long-term memory,
                                complex reasoning loops, and deterministic output in production environments.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">Core Focus</h3>
                            <ul className="space-y-3">
                                {[
                                    "Agentic AI & Orchestration",
                                    "LLM Reasoning & Memory Systems",
                                    "System Correctness & Determinism",
                                    "Infrastructure & MLOps Hygiene"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
