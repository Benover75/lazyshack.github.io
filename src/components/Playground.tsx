'use client';

import { useState, useRef, useEffect } from 'react';
import { Section } from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Lightbulb, Check, X, RefreshCw, Send } from 'lucide-react';

// --- Terminal Logic ---
interface TerminalLine {
    type: 'input' | 'output' | 'system';
    content: string;
}

const INITIAL_LINES: TerminalLine[] = [
    { type: 'system', content: 'Agentic AI System v1.0.0 initialized...' },
    { type: 'system', content: 'Type "help" to see available commands.' },
];

// --- Quiz Logic ---
const QUIZ_QUESTIONS = [
    {
        question: "What is the primary advantage of RAG (Retrieval-Augmented Generation)?",
        options: [
            "It trains the LLM on new data immediately.",
            "It reduces hallucination by grounding answers in external data.",
            "It makes the model faster.",
            "It increases the context window size."
        ],
        correct: 1 // index
    },
    {
        question: "Which tool is commonly used for orchestrating containerized AI workloads?",
        options: [
            "Docker Compose",
            "Kubernetes",
            "Ansible",
            "Jenkins"
        ],
        correct: 1
    },
    {
        question: "In an Agentic workflow, what is 'Reasoning'?",
        options: [
            "The model's training data.",
            "The speed of token generation.",
            "The process of breaking down complex tasks into steps.",
            "Connecting to a database."
        ],
        correct: 2
    }
];

export const Playground = () => {
    const [activeTab, setActiveTab] = useState<'terminal' | 'quiz'>('terminal');

    // Terminal State
    const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    // Quiz State
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    // Auto-scroll terminal
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    const handleCommand = (cmd: string) => {
        const command = cmd.trim().toLowerCase();
        const newLines = [...lines, { type: 'input', content: cmd } as TerminalLine];

        let response = '';

        switch (command) {
            case 'help':
                response = 'Available commands: about, skills, contact, clear, joke';
                break;
            case 'about':
                response = 'I am Lamberto, an AI Engineer focused on building autonomous agentic systems.';
                break;
            case 'skills':
                response = 'Expertise: Python, TypeScript, LLMs, RAG, Kubernetes, MLOps, AWS.';
                break;
            case 'contact':
                response = 'Email: juniornunez480@gmail.com | Format: json';
                break;
            case 'joke':
                response = 'Why did the neural network break up with the random forest? Because it had too many decision trees capabilities.';
                break;
            case 'clear':
                setLines(INITIAL_LINES);
                return; // Special case, reset lines
            default:
                response = `Command not found: "${command}". Type "help" for valid commands.`;
        }

        setLines([...newLines, { type: 'output', content: response }]);
    };

    const handleTerminalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommand(input);
        setInput('');
    };

    const handleQuizOption = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);

        if (index === QUIZ_QUESTIONS[currentQuestion].correct) {
            setScore(score + 1);
        }

        // Wait then move to next or finish
        setTimeout(() => {
            if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null);
                setIsAnswered(false);
            } else {
                setShowResult(true);
            }
        }, 1500);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    return (
        <div id="playground" className="py-24 px-6">
            <Section className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Header / Sidebar */}
                    <div className="md:w-1/3 space-y-6">
                        <h2 className="text-3xl font-bold flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-blue-500 block" />
                            <span className="bg-gradient-to-r from-white via-blue-500 to-purple-500 text-animate-gradient">
                                Playground
                            </span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Engage with the system directly. Test your knowledge or query the agent via the terminal interface.
                        </p>

                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setActiveTab('terminal')}
                                className={`p-4 rounded-xl text-left border transition-all flex items-center gap-3 ${activeTab === 'terminal'
                                    ? 'bg-blue-500/10 border-blue-500 text-blue-400'
                                    : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                <Terminal size={20} />
                                <span className="font-mono">Terminal_Sandbox</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('quiz')}
                                className={`p-4 rounded-xl text-left border transition-all flex items-center gap-3 ${activeTab === 'quiz'
                                    ? 'bg-purple-500/10 border-purple-500 text-purple-400'
                                    : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                <Lightbulb size={20} />
                                <span className="font-mono">Skill_Assessment</span>
                            </button>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:w-2/3 w-full">
                        <div className="glass-panel p-1 rounded-2xl overflow-hidden min-h-[400px] border border-white/10 relative">
                            <AnimatePresence mode="wait">
                                {activeTab === 'terminal' ? (
                                    <motion.div
                                        key="terminal"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="bg-[#0c0c0c] p-6 h-[400px] flex flex-col font-mono text-sm rounded-xl overflow-hidden"
                                    >
                                        <div
                                            ref={scrollRef}
                                            className="flex-1 overflow-y-auto space-y-2 custom-scrollbar pr-2 mb-4"
                                        >
                                            {lines.map((line, i) => (
                                                <div key={i} className={`${line.type === 'input' ? 'text-white font-bold' :
                                                    line.type === 'system' ? 'text-blue-400' : 'text-gray-300'
                                                    }`}>
                                                    {line.type === 'input' && <span className="text-blue-500 mr-2">$</span>}
                                                    {line.content}
                                                </div>
                                            ))}
                                        </div>
                                        <form onSubmit={handleTerminalSubmit} className="flex gap-2 border-t border-white/10 pt-4">
                                            <span className="text-blue-500 animate-pulse">$</span>
                                            <input
                                                type="text"
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700"
                                                placeholder="Type 'help'..."
                                                autoFocus
                                            />
                                            <button
                                                type="submit"
                                                className="text-gray-500 hover:text-white transition-colors"
                                                aria-label="Send command"
                                                title="Send command"
                                            >
                                                <Send size={16} />
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="quiz"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="bg-[#0c0c0c]/50 p-6 h-[400px] flex flex-col justify-center items-center rounded-xl relative"
                                    >
                                        {!showResult ? (
                                            <div className="w-full max-w-md space-y-6">
                                                <div className="flex justify-between items-center text-xs font-mono text-gray-500 uppercase">
                                                    <span>Question {currentQuestion + 1} / {QUIZ_QUESTIONS.length}</span>
                                                    <span>Score: {score * 100} XP</span>
                                                </div>

                                                <h3 className="text-xl font-bold text-white leading-snug">
                                                    {QUIZ_QUESTIONS[currentQuestion].question}
                                                </h3>

                                                <div className="space-y-3">
                                                    {QUIZ_QUESTIONS[currentQuestion].options.map((opt, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => handleQuizOption(i)}
                                                            disabled={isAnswered}
                                                            className={`w-full p-4 rounded-lg text-left text-sm transition-all border ${isAnswered
                                                                ? i === QUIZ_QUESTIONS[currentQuestion].correct
                                                                    ? 'bg-green-500/20 border-green-500 text-green-300'
                                                                    : i === selectedOption
                                                                        ? 'bg-red-500/20 border-red-500 text-red-300'
                                                                        : 'bg-white/5 border-white/5 text-gray-500 opacity-50'
                                                                : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20'
                                                                }`}
                                                        >
                                                            <div className="flex justify-between items-center">
                                                                {opt}
                                                                {isAnswered && i === QUIZ_QUESTIONS[currentQuestion].correct && <Check size={16} className="text-green-500" />}
                                                                {isAnswered && i === selectedOption && i !== QUIZ_QUESTIONS[currentQuestion].correct && <X size={16} className="text-red-500" />}
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center space-y-6">
                                                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-blue-500/20">
                                                    {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-2xl font-bold text-white">Assessment Complete</h3>
                                                    <p className="text-gray-400">
                                                        You scored <span className="text-white font-bold">{score}</span> out of <span className="text-white font-bold">{QUIZ_QUESTIONS.length}</span>
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={resetQuiz}
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                                                >
                                                    <RefreshCw size={18} />
                                                    Try Again
                                                </button>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
