import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Roadmap } from "@/components/Roadmap";
import { TechStack } from "@/components/TechStack";
import { Playground } from "@/components/Playground";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-200 overflow-x-hidden relative z-0">
      <Hero />
      <About />
      <Roadmap />
      <TechStack />
      <Playground />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-24 text-center text-sm text-gray-600 font-mono border-t border-white/5 mt-12 bg-black/80 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Lamberto Nunez.</p>
        <p className="mt-2 text-xs opacity-50 tracking-widest uppercase">System Status: ONLINE</p>
      </footer>
    </main>
  );
}
