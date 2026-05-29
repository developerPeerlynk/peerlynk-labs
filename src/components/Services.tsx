import { useState } from "react";
import { Check, Plus, Minus, ArrowRight, Sparkles, SlidersHorizontal } from "lucide-react";
import { SERVICE_CATEGORIES } from "../data";
import LucideIcon from "./LucideIcon";

interface ServicesProps {
  onSelectServiceForProject: (serviceTitle: string, description: string) => void;
  theme: "dark" | "light";
}

export default function Services({ onSelectServiceForProject, theme }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<"core" | "upgrade" | "advanced">("core");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "web-dev",
    "mobile-dev",
    "fullstack-dev",
    "dashboard-dev"
  ]);
  const [timelineWeeks, setTimelineWeeks] = useState(16);

  const categories = [
    { key: "core", label: "Core Development", count: SERVICE_CATEGORIES.core.services.length },
    { key: "upgrade", label: "Upgrade & Improve", count: SERVICE_CATEGORIES.upgrade.services.length },
    { key: "advanced", label: "Advanced Engineering", count: SERVICE_CATEGORIES.advanced.services.length }
  ];

  const toggleSelectService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleExportToForm = () => {
    // Find all titles
    const allServices = [
      ...SERVICE_CATEGORIES.core.services,
      ...SERVICE_CATEGORIES.upgrade.services,
      ...SERVICE_CATEGORIES.advanced.services
    ];
    const selectedTitles = allServices
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.title)
      .join(", ");

    const desc = `I selected these services: [${selectedTitles}]. Anticipating a project complexity timeline of approximately ${timelineWeeks} weeks.`;
    onSelectServiceForProject(selectedTitles || "Custom Application Stack", desc);
  };

  const currentCategory = SERVICE_CATEGORIES[activeTab];

  return (
    <section id="services" className={`py-24 md:py-32 relative overflow-hidden border-y transition-colors duration-300 ${
      theme === "dark" ? "bg-brand-dark border-white/5" : "bg-slate-100/60 border-slate-200"
    }`}>
      {/* Background radial highlight - Dark Mode Only */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/2 left-0 w-[45rem] h-[45rem] rounded-full glow-spot-purple -translate-y-1/2 pointer-events-none z-0" />
          <div className="absolute bottom-0 right-1/10 w-[35rem] h-[35rem] rounded-full glow-spot-cyan pointer-events-none z-0 opacity-40" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border mb-4 ${
            theme === "dark"
              ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
              : "bg-brand-cyan/10 border-brand-cyan/30 text-brand-blue"
          }`}>
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
              Core Capabilities
            </span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
            Comprehensive Digital Production
          </h2>
          <p className={`font-sans text-base sm:text-lg mt-5 leading-relaxed ${
            theme === "dark" ? "text-gray-400" : "text-slate-600"
          }`}>
            We don't offer generic templates or basic advice. We design, craft, compile, debug, and ship production-ready, highly polished software pipelines built to accomplish goals.
          </p>
        </div>

        {/* Tab Selection Filter Menu */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 sm:mb-16" id="services-tabs">
          {categories.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "core" | "upgrade" | "advanced")}
              className={`px-5 py-3 rounded-xl font-sans text-sm font-semibold transition-all duration-300 flex items-center space-x-2.5 border cursor-pointer ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white border-transparent shadow-lg shadow-brand-blue/15"
                  : theme === "dark"
                    ? "bg-brand-card hover:bg-brand-card-hover text-gray-400 hover:text-white border-white/5"
                    : "bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border-slate-200 shadow-sm"
              }`}
              id={`tab-btn-${tab.key}`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                activeTab === tab.key 
                  ? "bg-white/20 text-white" 
                  : theme === "dark"
                    ? "bg-white/5 text-gray-500"
                    : "bg-slate-100 text-slate-500"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="max-w-2xl mx-auto text-center mb-12" id="services-tab-intro">
          <p className={`font-sans text-base font-medium ${
            theme === "dark" ? "text-gray-300" : "text-slate-700"
          }`}>
            {currentCategory.subtitle}
          </p>
        </div>

        {/* Services Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24" id="services-grid">
          {currentCategory.services.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <div
                key={service.id}
                onClick={() => toggleSelectService(service.id)}
                className={`group p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer select-none ${
                  theme === "dark"
                    ? isSelected
                      ? "border-brand-cyan/40 bg-brand-cyan/5 shadow-lg shadow-brand-cyan/5"
                      : "glass-effect glass-effect-hover border-white/5"
                    : isSelected
                      ? "border-brand-blue bg-brand-blue/5 shadow-md shadow-brand-blue/5"
                      : "bg-white hover:bg-slate-50 border-slate-200 shadow-sm shadow-slate-100"
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Badge if present */}
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-cyan to-brand-blue text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {service.badge}
                  </div>
                )}

                <div>
                  {/* Glowing Icon Wrapper */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    theme === "dark"
                      ? isSelected
                        ? "bg-brand-cyan/20 text-brand-cyan"
                        : "bg-white/5 text-brand-blue group-hover:bg-brand-blue/10 group-hover:text-brand-cyan"
                      : isSelected
                        ? "bg-brand-blue/15 text-brand-blue font-bold"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-brand-blue"
                  }`}>
                    <LucideIcon name={service.iconName} className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`font-display font-semibold text-xl transition-colors duration-200 flex items-center space-x-2 ${
                    theme === "dark"
                      ? "text-white group-hover:text-brand-cyan"
                      : "text-slate-900 group-hover:text-brand-blue"
                  }`}>
                    <span>{service.title}</span>
                  </h3>
                  <p className={`font-sans text-sm mt-3 leading-relaxed ${
                    theme === "dark" ? "text-gray-400" : "text-slate-500"
                  }`}>
                    {service.description}
                  </p>

                  {/* Embedded List Checklist Features */}
                  <ul className={`mt-6 space-y-2.5 pt-6 border-t ${
                    theme === "dark" ? "border-white/5" : "border-slate-100"
                  }`}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span className={`font-sans text-xs leading-snug ${
                          theme === "dark" ? "text-gray-300" : "text-slate-600"
                        }`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card toggle helper */}
                <div className="mt-8 pt-4 flex items-center justify-between text-xs font-mono font-semibold">
                  <span className={
                    theme === "dark"
                      ? isSelected ? "text-brand-cyan" : "text-gray-500 group-hover:text-gray-400"
                      : isSelected ? "text-brand-blue font-semibold" : "text-slate-400 group-hover:text-slate-500"
                  }>
                    {isSelected ? "Requirement Selected" : "Click to select"}
                  </span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                    theme === "dark"
                      ? isSelected
                        ? "bg-brand-cyan border-brand-cyan text-brand-dark"
                        : "border-white/10 text-gray-500 group-hover:border-white/20 group-hover:text-white"
                      : isSelected
                        ? "bg-brand-blue border-brand-blue text-white"
                        : "border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600"
                  }`}>
                    {isSelected ? <Check className="w-3 h-3 stroke-[3]" /> : <Plus className="w-3 h-3" />}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Tool: Interactive Studio Scope Planner */}
        <div className={`p-8 sm:p-10 rounded-3xl border relative overflow-hidden transition-all duration-300 ${
          theme === "dark"
            ? "glass-effect border-white/10"
            : "bg-white border-slate-200/85 shadow-lg shadow-slate-100"
        }`} id="services-scope-planner">
          {/* Subtle design gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-brand-cyan font-mono text-xs uppercase font-semibold">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Interactive Product Planner</span>
              </div>
              <h3 className={`font-display font-bold text-2xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Configure your digital request in real-time
              </h3>
              <p className={`font-sans text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                Check individual services above to automatically build a custom scope matrix. Tune the estimated timeframe below to match your market deadline, then export directly to our Contact Desk to start engineering.
              </p>

              {/* Timeline Adjuster Slider */}
              <div className="pt-4 flex flex-col space-y-3 max-w-md w-full">
                <div className="flex justify-between text-xs font-mono">
                  <span className={theme === "dark" ? "text-gray-400" : "text-slate-500"}>Launch Timeline Target:</span>
                  <span className={`${theme === "dark" ? "text-brand-cyan" : "text-brand-blue"} font-bold bg-brand-cyan/10 px-2 py-0.5 rounded`}>{timelineWeeks} Weeks</span>
                </div>
                <div className="flex items-center space-x-3.5 py-1.5">
                  <button
                    onClick={() => setTimelineWeeks(prev => Math.max(2, prev - 1))}
                    className={`w-11 h-11 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center cursor-pointer font-bold transition-colors shrink-0 active:scale-95 ${
                      theme === "dark"
                        ? "bg-white/5 hover:bg-white/15 border-white/5 text-gray-400 hover:text-white"
                        : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm"
                    }`}
                    aria-label="Decrease Timeline"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="flex-1 py-2 flex items-center">
                    <input
                      type="range"
                      min="2"
                      max="16"
                      value={timelineWeeks}
                      onChange={(e) => setTimelineWeeks(parseInt(e.target.value))}
                      className={`w-full h-2 rounded-lg appearance-none cursor-pointer outline-none transition-all ${
                        theme === "dark" ? "bg-brand-darker accent-brand-cyan" : "bg-slate-200 accent-brand-blue"
                      }`}
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    />
                  </div>
                  <button
                    onClick={() => setTimelineWeeks(prev => Math.min(16, prev + 1))}
                    className={`w-11 h-11 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center cursor-pointer font-bold transition-colors shrink-0 active:scale-95 ${
                      theme === "dark"
                        ? "bg-white/5 hover:bg-white/15 border-white/5 text-gray-400 hover:text-white"
                        : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm"
                    }`}
                    aria-label="Increase Timeline"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-mono tracking-tight">
                  <span>2 Weeks (Venture MVP)</span>
                  <span>16 Weeks (Heavy Scale Platform)</span>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-5 p-6 rounded-2xl border flex flex-col justify-between h-full min-h-[220px] w-full ${
              theme === "dark"
                ? "bg-brand-darker/60 border-white/5"
                : "bg-slate-50 border-slate-200 shadow-inner"
            }`}>
              <div>
                <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                  Live Planner Matrix Output
                </div>
                
                <div className="mt-4 flex justify-between items-baseline">
                  <span className="text-xs text-slate-400">Services Highlighted:</span>
                  <span className={`font-display font-bold text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    {selectedServices.length} Selected
                  </span>
                </div>

                <div className="mt-2.5 flex justify-between items-baseline">
                  <span className="text-xs text-slate-400">Engineering Phase Sprints:</span>
                  <span className={`font-display font-bold text-base ${theme === "dark" ? "text-brand-cyan" : "text-brand-blue"}`}>
                    {Math.ceil(timelineWeeks / 2)} Sprints
                  </span>
                </div>
                
                <div className="mt-2.5 flex justify-between items-baseline">
                  <span className="text-xs text-slate-400">Average Review Intervals:</span>
                  <span className="font-mono text-xs text-brand-purple font-medium">
                    Weekly Direct Slack
                  </span>
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t ${theme === "dark" ? "border-white/5" : "border-slate-200"}`}>
                <button
                  onClick={handleExportToForm}
                  className="w-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple hover:to-brand-cyan text-white font-semibold py-3 px-4 rounded-xl text-xs transition-all duration-300 flex items-center justify-center space-x-2 shadow-md shadow-brand-blue/10 cursor-pointer"
                  id="planner-export-btn"
                >
                  <span>Sync Specifications to Contact Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
