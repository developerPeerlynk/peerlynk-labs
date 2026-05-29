import { motion } from "motion/react";
import { ShieldCheck, Cpu, Database, CheckCircle, Scale } from "lucide-react";

interface TrustSectionProps {
  theme: "dark" | "light";
}

const PARTNER_LOGOS = [
  { name: "GreenSphere Tech", abbr: "GS", color: "text-emerald-500", glow: "shadow-emerald-500/10" },
  { name: "Aero Logistics", abbr: "AL", color: "text-amber-500", glow: "shadow-amber-500/10" },
  { name: "Aura Creative", abbr: "AC", color: "text-brand-purple", glow: "shadow-brand-purple/10" },
  { name: "CraveNutri Group", abbr: "CN", color: "text-brand-cyan", glow: "shadow-brand-cyan/10" },
  { name: "NextWise Fintech", abbr: "NW", color: "text-brand-blue", glow: "shadow-brand-blue/10" },
  { name: "Venture Hackers", abbr: "VH", color: "text-pink-500", glow: "shadow-pink-500/10" }
];

export default function TrustSection({ theme }: TrustSectionProps) {
  return (
    <section
      id="trust-section"
      className={`py-12 relative overflow-hidden transition-colors duration-300 border-b ${
        theme === "dark" ? "bg-brand-dark/30 border-white/5" : "bg-slate-100/40 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Header Indicator */}
        <p className={`font-mono text-[10px] tracking-widest uppercase font-semibold text-center ${
          theme === "dark" ? "text-gray-500" : "text-slate-400"
        }`}>
          Trusted by high-growth startups, wellness brands & venture portfolios
        </p>

        {/* Scrolling/Row Partner Badges */}
        <div className="w-full mt-6" id="trust-logos-row">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {PARTNER_LOGOS.map((partner, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -2 }}
                key={partner.name}
                id={`trust-partner-${partner.abbr.toLowerCase()}`}
                className={`flex items-center space-x-2.5 px-4 py-3 rounded-xl border w-full justify-center transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                }`}
              >
                {/* Micro avatar-icon of partner */}
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-display font-black text-xs ${partner.color} bg-black/15`}>
                  {partner.abbr}
                </div>
                
                {/* Partner Name branding text */}
                <span className={`font-display text-xs font-bold tracking-tight shrink-0 transition-colors ${
                  theme === "dark" ? "text-gray-400 group-hover:text-white" : "text-slate-600 group-hover:text-slate-900"
                }`}>
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual trust metrics strip */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full mt-10 pt-8 border-t ${
          theme === "dark" ? "border-white/5" : "border-slate-200"
        }`}>
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0 animate-pulse" />
            <span className={`font-mono text-[10px] uppercase tracking-wider font-semibold ${
              theme === "dark" ? "text-gray-400" : "text-slate-500"
            }`}>
              Security Audited System
            </span>
          </div>

          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <Cpu className="w-4 h-4 text-brand-blue shrink-0" />
            <span className={`font-mono text-[10px] uppercase tracking-wider font-semibold ${
              theme === "dark" ? "text-gray-400" : "text-slate-500"
            }`}>
              100% Production Tested
            </span>
          </div>

          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <Database className="w-4 h-4 text-brand-purple shrink-0" />
            <span className={`font-mono text-[10px] uppercase tracking-wider font-semibold ${
              theme === "dark" ? "text-gray-400" : "text-slate-500"
            }`}>
              Strict Data Privacy Enc
            </span>
          </div>

          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className={`font-mono text-[10px] uppercase tracking-wider font-semibold ${
              theme === "dark" ? "text-gray-400" : "text-slate-500"
            }`}>
              Zero Leak Guarantee
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
