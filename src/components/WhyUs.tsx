import { TRUST_POINTS } from "../data";
import LucideIcon from "./LucideIcon";
import { Shield, Sparkle, Award } from "lucide-react";

interface WhyUsProps {
  theme: "dark" | "light";
}

export default function WhyUs({ theme }: WhyUsProps) {
  return (
    <section id="why-us" className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-300 ${
      theme === "dark" ? "bg-brand-darker" : "bg-white"
    }`}>
      {/* Background neon glows - Dark Mode Only */}
      {theme === "dark" && (
        <>
          <div className="absolute top-0 right-0 w-[45rem] h-[45rem] rounded-full glow-spot-blue pointer-events-none z-0" />
          <div className="absolute bottom-1/4 left-1/10 w-[35rem] h-[35rem] rounded-full glow-spot-purple pointer-events-none z-0 opacity-50" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Header Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className={`flex items-center space-x-2 border px-3.5 py-1.5 rounded-full w-fit ${
              theme === "dark"
                ? "bg-brand-purple/10 border-brand-purple/20 text-brand-purple"
                : "bg-brand-purple/10 border-brand-purple/30 text-brand-purple font-medium"
            }`}>
              <Shield className="w-4 h-4 text-brand-purple" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                Our Standards
              </span>
            </div>
            <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
              An Engineering Partner, Not Just an Agency
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className={`font-sans text-sm sm:text-base leading-relaxed lg:border-l lg:pl-6 ${
              theme === "dark"
                ? "text-gray-400 border-white/10"
                : "text-slate-600 border-slate-200"
            }`}>
              Unlike generic, low-cost freelancers, we align directly with your growth team. We craft robust products with perfect design integrity, production speeds, and zero shortcuts.
            </p>
          </div>
        </div>

        {/* trust points grid - Bento Grid Visual Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="whyus-grid">
          {TRUST_POINTS.map((point, index) => {
            return (
              <div
                key={point.id}
                className={`group relative p-8 rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[220px] ${
                  theme === "dark"
                    ? "glass-effect border-white/5 hover:border-brand-blue/20 hover:bg-brand-card-hover/40"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/50 shadow-sm shadow-slate-100"
                }`}
                id={`why-card-${point.id}`}
              >
                {/* Visual grid spot effect inside card */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full border-l border-b pointer-events-none transition-all group-hover:bg-brand-blue/[0.015] group-hover:border-brand-blue/10 ${
                  theme === "dark"
                    ? "bg-white/[0.015] border-white/[0.02]"
                    : "bg-slate-900/[0.005] border-slate-200/50"
                }`} />

                <div>
                  {/* Dynamic icon with responsive colors */}
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 ${
                    theme === "dark"
                      ? "bg-white/5 text-brand-cyan group-hover:bg-brand-cyan/15 group-hover:text-brand-cyan"
                      : "bg-slate-100 text-brand-blue group-hover:bg-brand-blue/10 group-hover:text-brand-blue"
                  }`}>
                    <LucideIcon name={point.iconName} className="w-5 h-5" />
                  </div>

                  <h3 className={`font-display font-semibold text-lg transition-colors duration-200 ${
                    theme === "dark" 
                      ? "text-white group-hover:text-brand-cyan" 
                      : "text-slate-900 group-hover:text-brand-blue"
                  }`}>
                    {point.title}
                  </h3>
                  
                  <p className={`font-sans text-xs sm:text-sm mt-3 leading-relaxed ${
                    theme === "dark" ? "text-gray-400" : "text-slate-600"
                  }`}>
                    {point.description}
                  </p>
                </div>

                {/* Bottom detail marker */}
                <div className={`mt-8 pt-4 border-t flex items-center justify-between text-[10px] font-mono ${
                  theme === "dark" ? "border-white/5 text-gray-500" : "border-slate-200/60 text-slate-400"
                }`}>
                  <span>SYSTEM STANDARD</span>
                  <span className={`font-bold group-hover:text-brand-cyan ${
                    theme === "dark" ? "text-gray-400" : "text-slate-500"
                  }`}>0{index + 1} // CODE_MAX</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Channel Pledge Callout Block */}
        <div className={`mt-16 md:mt-20 border p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 relative z-10 transition-all duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-brand-blue/5 via-brand-purple/5 to-white/[0.02] border-white/5"
            : "bg-slate-50 border-slate-200 shadow-sm shadow-slate-100"
        }`} id="whyus-pledge">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              theme === "dark" ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-blue/10 text-brand-blue"
            }`}>
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className={`font-display font-semibold text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Direct-to-Engineer Business Architecture
              </div>
              <p className={`font-sans text-xs mt-1 max-w-xl ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>
                We despise corporate red tape and sales-pitch noise. Talk, coordinate and review deliverables directly with the elite builders compiling your software payload, and make alterations in real-time.
              </p>
            </div>
          </div>
          <div className={`flex items-center space-x-2 font-mono text-xs font-semibold uppercase px-3.5 py-2 rounded-xl border ${
            theme === "dark"
              ? "text-brand-cyan bg-brand-cyan/5 border-brand-cyan/10"
              : "text-brand-blue bg-brand-blue/5 border-brand-blue/10"
          }`}>
            <Sparkle className="w-3.5 h-3.5" />
            <span>Guaranteed Zero Management Layer Overhead</span>
          </div>
        </div>

      </div>
    </section>
  );
}
