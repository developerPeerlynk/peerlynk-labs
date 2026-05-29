import { TESTIMONIALS } from "../data";
import { MessageSquare, Star } from "lucide-react";

interface TestimonialsProps {
  theme: "dark" | "light";
}

export default function Testimonials({ theme }: TestimonialsProps) {
  return (
    <section id="testimonials" className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-300 ${
      theme === "dark" ? "bg-brand-darker border-t border-white/5" : "bg-white border-t border-slate-200"
    }`}>
      {/* Background radial effects - Dark Mode Only */}
      {theme === "dark" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full glow-spot-purple pointer-events-none z-0 opacity-40" />
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title structure */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 flex flex-col items-center">
          <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border mb-4 ${
            theme === "dark"
              ? "bg-brand-blue/10 border-brand-blue/20 text-brand-blue"
              : "bg-brand-blue/10 border-brand-blue/30 text-brand-blue font-medium"
          }`}>
            <MessageSquare className="w-4 h-4" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase">
              Partner Feedback
            </span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
            Trusted by Builders & Founders
          </h2>
          <p className={`font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-2xl ${
            theme === "dark" ? "text-gray-400" : "text-slate-600"
          }`}>
            We prioritize transparent milestones and neat engineering above all. Read reviews from product stakeholders who have shipped solutions with our studio.
          </p>
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((t) => {
            // Elegant placeholder visual colors based on author name for customized avatars
            const colors = [
              "from-brand-cyan to-brand-blue",
              "from-brand-purple to-brand-violet",
              "from-brand-blue to-brand-purple"
            ];
            const colorClass = colors[t.author.length % colors.length];

            return (
              <div
                key={t.id}
                className={`group relative p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                  theme === "dark"
                    ? "glass-effect border-white/5 hover:border-brand-blue/15 hover:bg-brand-card-hover/20"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/50 shadow-sm shadow-slate-100"
                }`}
                id={`testimonial-${t.id}`}
              >
                
                {/* Visual quote accent mark */}
                <div className={`absolute top-6 right-8 font-serif font-bold text-7xl select-none leading-none pointer-events-none ${
                  theme === "dark" ? "text-white/[0.02]" : "text-slate-900/[0.025]"
                }`}>
                  “
                </div>

                <div>
                  {/* Star reviews indicators */}
                  <div className="flex items-center space-x-1.5 mb-6 text-brand-cyan">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-cyan stroke-[0]" />
                    ))}
                  </div>

                  {/* Core comment text */}
                  <p className={`font-sans text-sm sm:text-base italic leading-relaxed ${
                    theme === "dark" ? "text-gray-200" : "text-slate-800"
                  }`}>
                    "{t.quote}"
                  </p>
                </div>

                {/* Author attribution info */}
                <div className={`mt-8 pt-6 border-t flex items-center space-x-4 ${
                  theme === "dark" ? "border-white/5" : "border-slate-200/60"
                }`}>
                  {/* High end fallback avatar */}
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${colorClass} p-[1px] shrink-0`}>
                    <div className={`w-full h-full rounded-full flex items-center justify-center font-display font-bold text-xs uppercase tracking-wider ${
                      theme === "dark" ? "bg-brand-darker text-white" : "bg-white text-slate-800"
                    }`}>
                      {t.author.substring(0, 2)}
                    </div>
                  </div>

                  <div>
                    <div className={`font-display font-semibold text-sm ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                      {t.author}
                    </div>
                    <div className={`font-sans text-[11px] mt-0.5 leading-none ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                      {t.role} at <span className={theme === "dark" ? "text-brand-cyan font-semibold" : "text-brand-blue font-semibold"}>{t.company}</span>
                    </div>

                    <span className={`inline-block mt-2 font-mono text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded border ${
                      theme === "dark"
                        ? "text-brand-purple bg-brand-purple/5 border-brand-purple/10"
                        : "text-brand-purple bg-brand-purple/5 border-brand-purple/15"
                    }`}>
                      {t.projectType}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
