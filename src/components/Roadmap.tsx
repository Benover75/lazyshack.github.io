'use client';

import { useState } from 'react';
import { Section } from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const phases = [
    {
        title: "LLMs & RAG",
        items: ["GPT", "LLaMA", "Vector DBs", "MCP"],
        step: "01",
        image: "/roadmap/01.png"
    },
    {
        title: "Systems & APIs",
        items: ["Python", "AsyncIO", "FastAPI", "SQL"],
        step: "02",
        image: "/roadmap/02.png"
    },
    {
        title: "Event-Driven Data",
        items: ["Kafka", "Spark", "Feature Stores"],
        step: "03",
        image: "/roadmap/03.png"
    },
    {
        title: "Infrastructure as Code",
        items: ["Terraform", "GitOps", "CI/CD"],
        step: "04",
        image: "/roadmap/04.png"
    },
    {
        title: "K8s AI Serving",
        items: ["Ray", "Triton", "KServe", "Kubernetes"],
        step: "05",
        image: "/roadmap/05.png"
    },
    {
        title: "Observability",
        items: ["OpenTelemetry", "Prometheus", "Grafana"],
        step: "06",
        image: "/roadmap/06.png"
    },
    {
        title: "Multi-Agent Systems",
        items: ["Orchestration", "Shared Memory", "Swarm"],
        step: "07",
        image: "/roadmap/07.png"
    }
];

export const Roadmap = () => {
    const [selectedPhase, setSelectedPhase] = useState<typeof phases[0] | null>(null);

    return (
        <div id="roadmap" className="py-24 px-6 relative z-10">
            <Section className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-blue-500 block" />
                    <span className="bg-gradient-to-r from-white via-blue-500 to-purple-500 text-animate-gradient">
                        Engineering Roadmap
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {phases.map((phase, index) => (
                        <Section key={index} delay={index * 100}>
                            <motion.div
                                layoutId={`card-${phase.step}`}
                                onClick={() => setSelectedPhase(phase)}
                                className="glass-card p-6 rounded-xl border border-white/5 hover:border-blue-500/30 group relative overflow-hidden cursor-pointer transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute top-4 right-4 text-4xl font-bold text-white/5 font-mono select-none group-hover:text-white/10 transition-colors">
                                    {phase.step}
                                </div>

                                <motion.h3
                                    layoutId={`title-${phase.step}`}
                                    className="text-xl font-semibold mb-4 text-gray-100 group-hover:text-blue-400 transition-colors"
                                >
                                    {phase.title}
                                </motion.h3>

                                <div className="flex flex-wrap gap-2">
                                    {phase.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </Section>
                    ))}
                </div>
            </Section>

            <AnimatePresence>
                {selectedPhase && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPhase(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={`card-${selectedPhase.step}`}
                            className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative z-60 flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedPhase(null);
                                }}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-white/10 text-white/70 hover:text-white transition-colors z-20"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>

                            {/* Left: Image/Diagram */}
                            <div className="w-full md:w-3/5 relative bg-black aspect-video md:aspect-auto">
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    src={selectedPhase.image}
                                    alt={selectedPhase.title}
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]" />
                            </div>

                            {/* Right: Content & Mini Roadmap */}
                            <div className="w-full md:w-2/5 p-8 flex flex-col relative bg-[#0a0a0a]">
                                <motion.div
                                    layoutId={`title-${selectedPhase.step}`}
                                    className="text-3xl font-bold text-white mb-2"
                                >
                                    {selectedPhase.title}
                                </motion.div>

                                <div className="text-blue-400 font-mono mb-8 text-sm">
                                    PHASE {selectedPhase.step}
                                </div>

                                <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                            Core Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedPhase.items.map((item, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/10 text-sm"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-gray-400 text-sm leading-relaxed">
                                        Advanced implementation and architectural patterns for {selectedPhase.title}.
                                        This phase establishes the foundational capability for the autonomous system.
                                    </div>
                                </div>

                                {/* Mini Roadmap Animation */}
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                        Roadmap Progress
                                    </h4>
                                    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                                        {/* Background track */}
                                        <div className="absolute inset-0 w-full h-full bg-white/5" />

                                        {/* Animated Progress Bar */}
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400"
                                            initial={{ width: 0 }}
                                            animate={{
                                                width: `${(phases.findIndex(p => p.step === selectedPhase.step) + 1) / phases.length * 100}%`
                                            }}
                                            transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
                                        />
                                    </div>

                                    {/* Steps Indicators */}
                                    <div className="flex justify-between mt-3 px-[1px]">
                                        {phases.map((p, i) => {
                                            const isActive = i === phases.findIndex(ph => ph.step === selectedPhase.step);
                                            const isPast = i < phases.findIndex(ph => ph.step === selectedPhase.step);

                                            return (
                                                <div
                                                    key={p.step}
                                                    className="flex flex-col items-center gap-1 group/step cursor-help"
                                                    title={p.title}
                                                >
                                                    <motion.div
                                                        className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)] scale-125' :
                                                            isPast ? 'bg-blue-500/50' : 'bg-white/10'
                                                            }`}
                                                        animate={{
                                                            scale: isActive ? [1, 1.5, 1] : 1
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: isActive ? Infinity : 0,
                                                            ease: "easeInOut"
                                                        }}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
