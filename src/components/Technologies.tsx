import { useState } from "react";
import { TECHNOLOGIES } from "../data";
import LucideIcon from "./LucideIcon";
import { Cpu, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TechnologiesProps {
  theme: "dark" | "light";
}

export default function Technologies({ theme }: TechnologiesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Stacks" },
    { key: "frontend", label: "Frontend & Mobile" },
    { key: "backend", label: "Backend & APIS" },
    { key: "database", label: "Databases" },
    { key: "devops", label: "DevOps & Cloud" }
  ];

  const filteredTechs = TECHNOLOGIES.filter(tech => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "frontend") return tech.category === "frontend" || tech.category === "mobile";
    if (selectedCategory === "backend") return tech.category === "backend" || tech.category === "apis";
    if (selectedCategory === "database") return tech.category === "database";
    if (selectedCategory === "devops") return tech.category === "devops";
    return true;
  });

  // Unique engineering justification facts for why the studio uses this tech
  const studyNotes: Record<string, string> = {
    React: "Leveraged for declarative UI architectures, component recycling, and lightning fast Virtual DOM updates.",
    "Node.js": "Non-blocking event loop execution to handle massive concurrent REST / WebSocket API connections effortlessly.",
    PostgreSQL: "Strict relational structures, excellent JSON query operations, and strong transactional integrity compliance.",
    MongoDB: "Document layout agility allowing rapid feature schema updates and rapid big-data read configurations.",
    "React Native": "Single TypeScript codebase compiling to native threads on iOS and Android with custom bridge controls.",
    "Tailwind CSS": "Utility compilation allowing extremely clean design systems with zero styling bundle weight overhead.",
    Firebase: "Serverless synchronization layers, cloud triggers, and bulletproof Social Authentication frameworks.",
    "Socket.io": "True real-time bidirection messaging layers designed around lightweight fallback handshakes.",
    Express: "Minimal, highly composable server routing architecture optimizing execution layers.",
    "OpenAI APIs": "Natural language indexing, text vectorization, and smart automation pipelines.",
    Vercel: "Next-gen static caching networks designed for stellar performance core web-vitals scorecards.",
    AWS: "Elastic, multi-region cloud servers configured for automatic containerized volume scales."
  };

  return (
    <section id="technologies" className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ${
      theme === "dark" ? "bg-brand-darker" : "bg-white"
    }`}>
      {/* Accent vector highlights - Dark Mode Only */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/4 right-[-5%] w-[40rem] h-[40rem] rounded-full glow-spot-purple pointer-events-none z-0" />
          <div className="absolute bottom-1/4 left-[-5%] w-[35rem] h-[35rem] rounded-full glow-spot-blue pointer-events-none z-0 opacity-40 animate-pulse duration-[8000ms]" />
        </>
      )}

      {/* Cyber Grid Lines overlay for a tech aesthetics feel */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.01)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none z-0 ${
        theme === "dark" ? "opacity-100" : "opacity-25"
      }`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Group */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className={`flex items-center space-x-2 border px-3.5 py-1.5 rounded-full w-fit ${
              theme === "dark"
                ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                : "bg-brand-cyan/10 border-brand-cyan/30 text-brand-blue"
            }`}>
              <Cpu className="w-4 h-4 text-brand-cyan animate-spin duration-5000" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                Technology Core
              </span>
            </div>
            <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
              An Elite Stack Built for Premium Performance
            </h2>
          </div>

          <div className={`flex items-center space-x-2.5 border px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm ${
            theme === "dark"
              ? "bg-white/5 border-white/5 text-gray-400"
              : "bg-slate-100 border-slate-200 text-slate-600 shadow-sm"
          }`}>
            <Terminal className="w-4 h-4 text-brand-purple" />
            <span>Strict TypeScript boundaries applied everywhere</span>
          </div>
        </div>

        {/* Category Pill Filters (Stripe Style) */}
        <div className={`flex flex-wrap gap-2.5 mb-12 sm:mb-16 pb-2 border-b ${
          theme === "dark" ? "border-white/5" : "border-slate-200"
        }`} id="tech-filters-bar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4.5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md shadow-brand-blue/20"
                  : theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm"
              }`}
              id={`tech-filter-btn-${cat.key}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid layout of technologies with Framer Motion Layout Reordering */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
          id="tech-layout-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 150, damping: 15 }}
                key={tech.name}
                className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  theme === "dark"
                    ? "glass-effect border-white/5 hover:border-brand-blue/20 hover:bg-brand-card-hover/30 shadow-xl"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm shadow-slate-100"
                }`}
                id={`tech-card-${tech.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-white/5 text-white group-hover:bg-brand-blue/10 group-hover:text-brand-cyan"
                        : "bg-slate-100 text-slate-800 group-hover:bg-brand-blue/10 group-hover:text-brand-blue shadow-inner"
                    }`}>
                      <LucideIcon name={tech.iconName} className="w-5 h-5 animate-pulse" />
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                      <span className={`font-mono text-[9px] uppercase font-bold tracking-wider ${
                        theme === "dark" ? "text-gray-400" : "text-slate-500"
                      }`}>
                        {tech.level}
                      </span>
                    </div>
                  </div>

                  <div className={`font-display font-bold text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    {tech.name}
                  </div>
                  
                  <p className={`font-sans text-[12px] mt-2.5 leading-relaxed min-h-[50px] ${
                    theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"
                  }`}>
                    {studyNotes[tech.name] || `${tech.name} constitutes a pivotal engineering tool for ensuring application responsiveness constraints.`}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-[10px] font-mono ${
                  theme === "dark" ? "border-white/5 text-gray-500" : "border-slate-200/60 text-slate-400"
                }`}>
                  <span className="uppercase">{tech.category} MODULE</span>
                  <span className={`font-semibold flex items-center ${
                    theme === "dark" ? "text-gray-400 group-hover:text-brand-cyan" : "text-slate-500 group-hover:text-brand-blue"
                  }`}>
                    <span>PRODUCTION</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
