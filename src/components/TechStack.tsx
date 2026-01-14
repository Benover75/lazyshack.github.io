'use client';

import { Section } from './Section';

const stack = [
    {
        category: "Languages & Systems",
        items: [
            { name: "Python", url: "https://www.python.org/doc/" },
            { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
            { name: "Java", url: "https://docs.oracle.com/en/java/" },
            { name: "BASH", url: "https://www.gnu.org/software/bash/manual/" }
        ]
    },
    {
        category: "Backend & APIs",
        items: [
            { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
            { name: "Node.js", url: "https://nodejs.org/en/docs/" },
            { name: "gRPC", url: "https://grpc.io/docs/" },
            { name: "GraphQL", url: "https://graphql.org/learn/" },
            { name: "PostgreSQL", url: "https://www.postgresql.org/docs/" },
            { name: "Redis", url: "https://redis.io/docs/" }
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "Next.js", url: "https://nextjs.org/docs" },
            { name: "React", url: "https://react.dev/" },
            { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
            { name: "Three.js", url: "https://threejs.org/docs/" }
        ]
    },
    {
        category: "Infrastructure",
        items: [
            { name: "Docker", url: "https://docs.docker.com/" },
            { name: "Kubernetes", url: "https://kubernetes.io/docs/home/" },
            { name: "AWS", url: "https://docs.aws.amazon.com/" },
            { name: "Linux", url: "https://www.kernel.org/doc/html/latest/" }
        ]
    },
    {
        category: "MLOps & Data",
        items: [
            { name: "MLflow", url: "https://mlflow.org/docs/latest/index.html" },
            { name: "Airflow", url: "https://airflow.apache.org/docs/" },
            { name: "Pinecone", url: "https://docs.pinecone.io/" },
            { name: "LangChain", url: "https://python.langchain.com/docs/get_started/introduction" }
        ]
    },
    {
        category: "CI/CD & Tools",
        items: [
            { name: "GitHub Actions", url: "https://docs.github.com/en/actions" },
            { name: "ArgoCD", url: "https://argo-cd.readthedocs.io/en/stable/" },
            { name: "Terraform", url: "https://developer.hashicorp.com/terraform/docs" },
            { name: "Sentry", url: "https://docs.sentry.io/" }
        ]
    }
];

export const TechStack = () => {
    return (
        <div id="stack" className="py-24 px-6 bg-black/20">
            <div className="max-w-4xl mx-auto">
                <Section>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-blue-500 block" />
                        <span className="bg-gradient-to-r from-white via-blue-500 to-purple-500 text-animate-gradient">
                            Technical Stack
                        </span>
                    </h2>
                </Section>

                <div className="space-y-8">
                    {stack.map((group, index) => (
                        <Section key={index} delay={index * 100} className="glass-panel p-6 rounded-xl border border-white/5">
                            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((tech, i) => (
                                    <a
                                        key={i}
                                        href={tech.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1.5 text-sm rounded bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 transition-all cursor-pointer"
                                    >
                                        {tech.name}
                                    </a>
                                ))}
                            </div>
                        </Section>
                    ))}
                </div>
            </div>
        </div>
    );
};
