'use client';

import { useState } from 'react';
import { Section } from './Section';
import { Mail, Github, Linkedin, Check, Copy, ArrowRight } from 'lucide-react';

export const Contact = () => {
    const [copied, setCopied] = useState(false);

    const email = "juniornunez480@gmail.com";
    const github = "https://github.com/Benover75";
    const linkedin = "https://www.linkedin.com/in/lamberto-nunez-6125a9206";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background Gradients removed for global canvas */}

            <Section className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-blue-500 block" />
                    <span className="bg-gradient-to-r from-white via-blue-500 to-purple-500 text-animate-gradient">
                        Get in Touch
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <p className="text-xl text-gray-300 leading-relaxed">
                            I&apos;m currently open to new opportunities in AI Engineering and MLOps.
                            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>

                        <div className="flex flex-col gap-4 mt-8">
                            <div className="group relative">
                                <div
                                    onClick={handleCopyEmail}
                                    className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 cursor-pointer hover:border-blue-500/50 hover:bg-white/5 transition-all"
                                >
                                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-400">Email</div>
                                        <div className="text-white font-mono">{email}</div>
                                    </div>
                                    <div className="text-gray-500 group-hover:text-white transition-colors">
                                        {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                                    </div>
                                </div>
                            </div>

                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group"
                            >
                                <div className="p-3 rounded-lg bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                    <Github size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm text-gray-400">GitHub</div>
                                    <div className="text-white font-mono">github.com/Benover75</div>
                                </div>
                                <ArrowRight size={20} className="text-gray-500 group-hover:text-white -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                            </a>

                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 cursor-pointer hover:border-blue-700/50 hover:bg-blue-900/10 transition-all group"
                            >
                                <div className="p-3 rounded-lg bg-blue-700/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                                    <Linkedin size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm text-gray-400">LinkedIn</div>
                                    <div className="text-white font-mono">Connect on LinkedIn</div>
                                </div>
                                <ArrowRight size={20} className="text-gray-500 group-hover:text-white -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                            </a>
                        </div>
                    </div>


                </div>
            </Section>
        </div>
    );
};
