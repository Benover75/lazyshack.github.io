'use client';

import { Section } from './Section';

const projects = [
    {
        title: "RAG Reasoning Engine",
        status: "In Development",
        tags: ["LangChain", "Vector DB", "React"],
        description: "A specialized RAG chatbot implementing explicit reasoning traces and long-term memory persistence for complex query resolution."
    },
    {
        title: "Multi-Agent Workflow Manager",
        status: "Prototype",
        tags: ["Python", "FastAPI", "Orchestration"],
        description: "System for coordinating multiple specialized AI agents to execute multi-step workflows with failure recovery and state management."
    },
    {
        title: "AI Observability Dashboard",
        status: "Design Phase",
        tags: ["Next.js", "OpenTelemetry", "D3.js"],
        description: "Real-time visualization interface for monitoring reasoning drift, token usage, and system latency in agentic pipelines."
    }
];

export const Projects = () => {
    return (
        <div id="projects" className="py-24 px-6 bg-gradient-to-b from-transparent to-black">
            <Section className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-blue-500 block" />
                    <span className="bg-gradient-to-r from-white via-blue-500 to-purple-500 text-animate-gradient">
                        Active Development
                    </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Section
                            key={index}
                            delay={index * 100}
                            className="glass-panel p-6 rounded-xl flex flex-col hover:border-blue-500/30 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold text-gray-100">{project.title}</h3>
                                <span className="text-[10px] uppercase font-mono px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
                                    {project.status}
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs text-gray-500">#{tag}</span>
                                ))}
                            </div>
                        </Section>
                    ))}
                </div>
            </Section>
        </div>
    );
};
