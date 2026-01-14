'use client';

import { Section } from './Section';

const jobs = [
    {
        role: "Self-Employed Food Business Owner",
        focus: "Operations & Reliability",
        description: "Managed end-to-end operational workflows, financial bookkeeping, and scheduling systems. Engineered reliability into daily processes to ensure consistent output and service availability."
    },
    {
        role: "Shipping & Receiving Specialist",
        focus: "Logistics Systems",
        description: "Optimized inventory tracking and logistics pipelines. Maintained high-throughput workflows with strict accuracy requirements."
    },
    {
        role: "Warehouse Associate",
        focus: "Fulfillment Execution",
        description: "Executed high-volume fulfillment tasks within safety and efficiency constraints. Contributed to process improvements in physical data handling."
    }
];

export const Experience = () => {
    return (
        <div id="experience" className="py-24 px-6">
            <Section className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-blue-500 block" />
                    <span className="bg-gradient-to-r from-white via-blue-500 to-purple-500 text-animate-gradient">
                        Experience
                    </span>
                </h2>

                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <Section
                            key={index}
                            delay={index * 100}
                            className="group relative pl-8 border-l border-white/10 hover:border-blue-500/50 transition-colors"
                        >
                            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all" />

                            <h3 className="text-xl font-semibold text-gray-200">
                                {job.role}
                            </h3>
                            <p className="text-sm font-mono text-blue-400 mb-2">
                                {job.focus}
                            </p>
                            <p className="text-gray-400 leading-relaxed max-w-2xl">
                                {job.description}
                            </p>
                        </Section>
                    ))}
                </div>
            </Section>
        </div>
    );
};
