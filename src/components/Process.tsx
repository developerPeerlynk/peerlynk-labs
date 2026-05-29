import { useState } from "react";
import { PROCESS_PHASES } from "../data";
import { Clock, Calendar, CheckSquare, ChevronRight, Activity } from "lucide-react";

interface ProcessProps {
  theme: "dark" | "light";
}

export default function Process({ theme }: ProcessProps) {
  const [activeStep, setActiveStep] = useState(0);

  const currentPhase = PROCESS_PHASES[activeStep];

  return (
    <section id="process" className={`py-24 md:py-32 relative overflow-hidden border-y transition-colors duration-300 ${
      theme === "dark" ? "bg-brand-dark border-white/5" : "bg-slate-100/60 border-slate-200"
    }`}>
      {/* Background glow structures - Dark Mode Only */}
      {theme === "dark" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] rounded-full glow-spot-cyan pointer-events-none z-0 opacity-40" />
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header content Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border mb-4 ${
            theme === "dark"
              ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
              : "bg-brand-cyan/10 border-brand-cyan/30 text-brand-blue"
          }`}>
            <Activity className="w-4 h-4" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase">
              Production Sequence
            </span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
            How We Build High-End Products
          </h2>
          <p className={`font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-2xl ${
            theme === "dark" ? "text-gray-400" : "text-slate-600"
          }`}>
            We follow a streamlined, milestone-driven digital sequence to ensure that your platform is constructed perfectly, optimizing resources and maintaining 100% visibility.
          </p>
        </div>

        {/* Process layout container (Interactive Dashboard structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch" id="process-dashboard">
          
          {/* Left Column: Vertical chronological buttons menu */}
          <div className="col-span-1 lg:col-span-5 flex flex-col space-y-3 justify-center">
            <div className={`font-mono text-[10px] uppercase tracking-widest mb-2 pl-3 ${
              theme === "dark" ? "text-gray-500" : "text-slate-400"
            }`}>
              Studio Sprints Navigation
            </div>
            {PROCESS_PHASES.map((phase, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={phase.step}
                  onClick={() => setActiveStep(idx)}
                  className={`group w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? theme === "dark"
                        ? "bg-gradient-to-r from-brand-blue/15 to-brand-cyan/15 border-brand-cyan/40 shadow-md shadow-brand-cyan/5"
                        : "bg-white border-brand-blue shadow-sm"
                      : theme === "dark"
                        ? "bg-brand-card hover:bg-brand-card-hover border-white/5"
                        : "bg-slate-50 hover:bg-slate-100 border-slate-200 shadow-sm"
                  }`}
                  id={`process-btn-${phase.step}`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`font-display font-bold text-sm sm:text-base ${
                      isActive 
                        ? theme === "dark" ? "text-brand-cyan" : "text-brand-blue" 
                        : "text-gray-500 group-hover:text-gray-400"
                    }`}>
                      {phase.step}
                    </span>
                    <div className={`h-4 w-[1px] ${theme === "dark" ? "bg-white/10" : "bg-slate-200"}`} />
                    <span className={`font-display font-semibold text-sm sm:text-base ${
                      isActive 
                        ? theme === "dark" ? "text-white" : "text-slate-900" 
                        : "text-gray-400 group-hover:text-white"
                    }`}>
                      {phase.title}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isActive 
                        ? theme === "dark" ? "bg-brand-cyan/20 text-brand-cyan" : "bg-brand-blue/10 text-brand-blue font-bold animate-pulse" 
                        : theme === "dark" ? "bg-white/5 text-gray-500" : "bg-slate-100 text-slate-500"
                    }`}>
                      {phase.duration}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-gray-500 group-hover:text-white transition-transform ${isActive ? "rotate-90 text-brand-cyan" : ""}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Expanded focused phase details card */}
          <div className="col-span-1 lg:col-span-7" id="process-active-console">
            <div className={`p-8 sm:p-10 rounded-2xl border h-full flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
              theme === "dark"
                ? "glass-effect border-white/10"
                : "bg-white border-slate-200 shadow-md"
            }`}>
              
              {/* Dynamic decorative backdrop number */}
              <div className={`absolute right-6 bottom-4 select-none pointer-events-none font-display font-extrabold text-[120px] leading-none ${
                theme === "dark" ? "text-white/[0.015]" : "text-slate-900/[0.02]"
              }`}>
                {currentPhase.step}
              </div>

              <div>
                {/* Upper timeline trackers */}
                <div className={`flex flex-wrap items-center gap-4 border-b pb-6 mb-6 ${
                  theme === "dark" ? "border-white/5" : "border-slate-100"
                }`}>
                  <div className={`flex items-center space-x-2 border px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                    theme === "dark"
                      ? "bg-brand-cyan/10 border-brand-cyan/25 text-brand-cyan"
                      : "bg-brand-blue/10 border-brand-blue/20 text-brand-blue"
                  }`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>TIMEFRAME: {currentPhase.duration}</span>
                  </div>
                  <div className={`flex items-center space-x-2 border px-3 py-1 rounded-full text-xs font-mono ${
                    theme === "dark"
                      ? "bg-white/5 text-gray-300 border-white/5"
                      : "bg-slate-100 text-slate-700 border-slate-200/80"
                  }`}>
                    <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                    <span>Sprint Milestone Gate</span>
                  </div>
                </div>

                <h3 className={`font-display font-bold text-2xl sm:text-3xl ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                  Phase {currentPhase.step}: <span className={theme === "dark" ? "text-brand-cyan" : "text-brand-blue"}>{currentPhase.title}</span>
                </h3>
                
                <p className={`font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-xl ${
                  theme === "dark" ? "text-gray-300" : "text-slate-600"
                }`}>
                  {currentPhase.description}
                </p>

                {/* Scope deliverables */}
                <div className="mt-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckSquare className="w-4 h-4 text-brand-purple" />
                    <span className={`font-mono text-xs uppercase tracking-widest font-semibold ${
                      theme === "dark" ? "text-gray-400" : "text-slate-500"
                    }`}>
                      Phase Sprints Deliverables
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="process-deliverables">
                    {currentPhase.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className={`px-4 py-3 rounded-xl border flex items-center space-x-3 transition-colors ${
                          theme === "dark"
                            ? "bg-brand-darker/60 border-white/5 hover:border-brand-blue/20"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full shadow-sm ${
                          theme === "dark" ? "bg-brand-cyan shadow-brand-cyan/30" : "bg-brand-blue shadow-brand-blue/30"
                        }`} />
                        <span className={`font-sans text-xs sm:text-sm font-medium ${
                          theme === "dark" ? "text-gray-200" : "text-slate-700"
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Console status footer */}
              <div className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
                theme === "dark" ? "border-white/5" : "border-slate-100"
              }`}>
                <span className={`font-mono text-[10px] ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`}>
                  PLATFORM WORKFLOW BLUEPRINT // SYNCHRONOUS_DEV
                </span>
                <span className={`font-mono text-[10px] font-semibold ${
                  theme === "dark" ? "text-brand-cyan" : "text-brand-blue"
                }`}>
                  STATUS: VERIFIED MODULE READY
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
