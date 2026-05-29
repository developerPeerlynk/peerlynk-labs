import { useState } from "react";
import { FAQ_ITEMS } from "../data";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

interface FAQProps {
  onContactClick: () => void;
  theme: "dark" | "light";
}

export default function FAQ({ onContactClick, theme }: FAQProps) {
  const [openFAQId, setOpenFAQId] = useState<string | null>("faq-projects");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Questions" },
    { key: "services", label: "Services & Scope" },
    { key: "tech", label: "Core Technology" },
    { key: "process", label: "Studio Process" }
  ];

  const filteredFAQs = FAQ_ITEMS.filter(faq => {
    if (selectedCategory === "all") return true;
    return faq.category === selectedCategory || (selectedCategory === "services" && faq.category === "services");
  });

  const toggleFAQ = (id: string) => {
    setOpenFAQId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className={`py-24 md:py-32 relative overflow-hidden border-t border-b transition-colors duration-300 ${
      theme === "dark" ? "bg-brand-dark border-white/5" : "bg-slate-100/60 border-slate-200"
    }`}>
      {/* Background glow highlights - Dark Mode Only */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/3 left-0 w-[45rem] h-[45rem] rounded-full glow-spot-cyan pointer-events-none z-0 opacity-40" />
          <div className="absolute bottom-1/3 right-0 w-[40rem] h-[40rem] rounded-full glow-spot-purple pointer-events-none z-0 opacity-40" />
        </>
      )}

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border mb-4 ${
            theme === "dark"
              ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
              : "bg-brand-cyan/10 border-brand-cyan/30 text-brand-blue"
          }`}>
            <HelpCircle className="w-4 h-4" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase">
              FAQ Helpdesk
            </span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
            Frequently Asked Queries
          </h2>
          <p className={`font-sans text-sm sm:text-base mt-4 max-w-xl ${
            theme === "dark" ? "text-gray-400" : "text-slate-600"
          }`}>
            Have questions about deadlines, technology compatibilities, or previous designs? Here are direct, high-level answers to our client structures.
          </p>
        </div>

        {/* Category Filters row */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="faq-category-filters">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-brand-purple text-white shadow-md shadow-brand-purple/15"
                  : theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
                    : "bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm"
              }`}
              id={`faq-filter-btn-${cat.key}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions Container */}
        <div className="space-y-4" id="faq-accordion-group">
          {filteredFAQs.map((faq) => {
            const isOpen = openFAQId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? theme === "dark"
                      ? "border-brand-purple/35 bg-brand-purple/[0.015]"
                      : "border-brand-purple/40 bg-brand-purple/[0.01] shadow-sm shadow-brand-purple/5"
                    : theme === "dark"
                      ? "border-white/5"
                      : "bg-white border-slate-200 hover:border-slate-300 shadow-sm shadow-slate-100/50"
                }`}
                id={`faq-accordion-item-${faq.id}`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between cursor-pointer focus:outline-none select-none group"
                  id={`faq-trigger-${faq.id}`}
                >
                  <span className={`font-display font-semibold text-base sm:text-lg pr-4 transition-colors duration-200 ${
                    isOpen 
                      ? "text-brand-purple font-semibold" 
                      : theme === "dark" ? "text-white group-hover:text-brand-cyan" : "text-slate-900 group-hover:text-brand-blue"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 bg-brand-purple/20 text-brand-purple"
                      : theme === "dark"
                        ? "bg-white/5 text-gray-400 group-hover:text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-900"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion content with height reveal */}
                <div
                  className={`transition-all duration-350 ease-in-out ${
                    isOpen 
                      ? "max-h-[300px] border-t opacity-100" 
                      : "max-h-0 opacity-0 pointer-events-none"
                  } ${
                    theme === "dark" ? "border-white/5" : "border-slate-100"
                  }`}
                  id={`faq-body-${faq.id}`}
                >
                  <div className={`p-5 sm:p-6 font-sans text-xs sm:text-sm leading-relaxed max-w-3xl ${
                    theme === "dark" ? "bg-brand-darker/60 text-gray-300" : "bg-slate-50/50 text-slate-700"
                  }`}>
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Unresolved Questions panel */}
        <div className={`mt-12 text-center rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-white/5 border border-white/5"
            : "bg-slate-50 border border-slate-200 shadow-sm"
        }`} id="faq-unresolved-call">
          <div className="text-left">
            <div className={`font-display font-semibold text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Have an advanced custom engineering question?
            </div>
            <p className={`font-sans text-xs mt-1 ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>
              Contact our core developers directly. We formulate answers on unique specifications within 24 hours.
            </p>
          </div>
          
          <button
            onClick={onContactClick}
            className={`w-full sm:w-auto font-semibold py-3 px-5 rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center space-x-1.5 ${
              theme === "dark"
                ? "bg-brand-cyan hover:bg-opacity-90 text-brand-dark"
                : "bg-brand-blue hover:bg-opacity-90 text-white"
            }`}
            id="faq-unresolved-cta"
          >
            <span>Ask Us Direct</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
