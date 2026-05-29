import * as React from "react";
import { useState } from "react";
import { RouterProvider, useRouter, Link } from "./lib/router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { 
  Sparkles, 
  ArrowLeft, 
  Cpu, 
  Layers, 
  Globe, 
  Smartphone, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Send,
  Zap,
  CheckCircle2,
  Bookmark,
  Calendar,
  User,
  Heart
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function MainApp() {
  const { path, navigate } = useRouter();
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [syncedService, setSyncedService] = useState("");
  const [syncedDescription, setSyncedDescription] = useState("");

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  const handleSelectService = (serviceTitle: string, description: string) => {
    setSyncedService(serviceTitle);
    setSyncedDescription(description);
    navigate("/contact");
  };

  const handleDiscussProject = (projectName: string, techStack: string[]) => {
    const techText = techStack.join(", ");
    setSyncedService("Custom Application Stack");
    setSyncedDescription(
      `I am interested in designing a digital product with capabilities similar to our featured case study: ${projectName}.\n\nSpecifically looking at utilizing: [ ${techText} ]. Please formulate an architectural timeline assessment for my growth team.`
    );
    navigate("/contact");
  };

  const handleJoinClick = (role: string, desc: string) => {
    setSyncedService(role);
    setSyncedDescription(desc);
    navigate("/contact");
  };

  const handleClearSync = () => {
    setSyncedService("");
    setSyncedDescription("");
  };

  // Render the corresponding view based on pathname
  const renderPageContent = () => {
    switch (path) {
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 1. HOME INDEX ROUTE
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/":
        return (
          <>
            <Hero
              theme={theme}
              onStartProject={() => navigate("/contact")}
              onViewWork={() => navigate("/work")}
              onContactUs={() => navigate("/contact")}
            />
            <TrustSection theme={theme} />
            <Services theme={theme} onSelectServiceForProject={handleSelectService} />
            
            {/* Quick Home action router to view all core capabilities */}
            <div className="py-8 text-center">
              <button
                onClick={() => navigate("/services")}
                className={`inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase py-3.5 px-6 rounded-xl border transition-all active:scale-95 cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/5 border-white/5 text-brand-cyan hover:bg-white/10"
                    : "bg-slate-100 border-slate-200 text-brand-blue hover:bg-slate-200 shadow-sm"
                }`}
              >
                <span>Access Interactive Product Planner</span>
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </button>
            </div>

            <Portfolio theme={theme} onDiscussProject={handleDiscussProject} />
            
            <div className="py-8 text-center">
              <button
                onClick={() => navigate("/work")}
                className={`inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase py-3.5 px-6 rounded-xl border transition-all active:scale-95 cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/5 border-white/5 text-brand-cyan hover:bg-white/10"
                    : "bg-slate-100 border-slate-200 text-brand-blue hover:bg-slate-200 shadow-sm"
                }`}
              >
                <span>View Full Works Portfolio Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <Team theme={theme} onJoinClick={handleJoinClick} />

            <div className="py-8 text-center">
              <button
                onClick={() => navigate("/team")}
                className={`inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase py-3.5 px-6 rounded-xl border transition-all active:scale-95 cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/5 border-white/5 text-brand-cyan hover:bg-white/10"
                    : "bg-slate-100 border-slate-200 text-brand-blue hover:bg-slate-200 shadow-sm"
                }`}
              >
                <span>Explore Full Engineering Core & Values</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <Technologies theme={theme} />
            <Process theme={theme} />
            <WhyUs theme={theme} />
            <Testimonials theme={theme} />
            <FAQ theme={theme} onContactClick={() => navigate("/contact")} />
            <Contact
              theme={theme}
              initialServiceNeeded={syncedService}
              initialDescription={syncedDescription}
              onClearServiceSync={handleClearSync}
            />
          </>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 2. DETAILED SERVICES ROUTE
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/services":
        return (
          <div className="pt-28">
            <div className="pt-12 pb-8 px-6 md:px-12 max-w-7xl mx-auto text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border mb-6 ${
                    theme === "dark" ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan" : "bg-brand-cyan/5 border-brand-cyan/15 text-brand-blue"
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-black">STRICT TECHNICAL CAPABILITIES</span>
                  </div>
                  <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Our Engineering Services.
                  </h1>
                  <p className={`font-sans text-base md:text-lg max-w-2xl font-light leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
                    Harness our high-speed sprints to formulate elegant websites, native applications, real-time dashboards, and secure automated systems. Configure your scope live on the planner matrix below.
                  </p>
                </div>

                {/* Micro-Nav Back link */}
                <button
                  onClick={() => navigate("/")}
                  className={`inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase py-2.5 px-4.5 rounded-xl border cursor-pointer active:scale-95 shrink-0 ${
                    theme === "dark" ? "bg-white/5 border-white/5 text-gray-400 hover:text-white" : "bg-white border-slate-250 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return Home</span>
                </button>
              </div>
            </div>

            <Services theme={theme} onSelectServiceForProject={handleSelectService} />
            <WhyUs theme={theme} />
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 3. DETAILED PORTFOLIO ROUTE
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/work":
        return (
          <div className="pt-28">
            <div className="pt-12 pb-8 px-6 md:px-12 max-w-7xl mx-auto text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border mb-6 ${
                    theme === "dark" ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan" : "bg-brand-cyan/5 border-brand-cyan/15 text-brand-blue"
                  }`}>
                    <Layers className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-black">OUR SHIPPED DEPLOYMENTS</span>
                  </div>
                  <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Crafted Productions.
                  </h1>
                  <p className={`font-sans text-base md:text-lg max-w-2xl font-light leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
                    Filter our deep engineering portfolio. Every case study outlines an advanced technical solution crafted from the ground up for micro-latency, SEO supremacy, and buttery smooth client loops.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/")}
                  className={`inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase py-2.5 px-4.5 rounded-xl border cursor-pointer active:scale-95 shrink-0 ${
                    theme === "dark" ? "bg-white/5 border-white/5 text-gray-400 hover:text-white" : "bg-white border-slate-250 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return Home</span>
                </button>
              </div>

              {/* Extra Interactive case study redirects indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
                {[
                  { name: "peerlynk", label: "peerlynk Platform Details", url: "/case-study/peerlynk" },
                  { name: "cravenutri", label: "CraveNutri Application Details", url: "/case-study/cravenutri" },
                  { name: "nextwise", label: "NextWise System Details", url: "/case-study/nextwise" }
                ].map((caseRef) => (
                  <button
                    key={caseRef.name}
                    onClick={() => navigate(caseRef.url)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                      theme === "dark"
                        ? "bg-brand-dark/40 border-white/5 hover:border-brand-cyan/20 hover:bg-brand-dark/80"
                        : "bg-white border-slate-200 hover:border-brand-blue/30 shadow-sm"
                    }`}
                  >
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-gray-500 mb-1 font-bold">CASE DIRECTORY</span>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs md:text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>{caseRef.label}</span>
                      <ChevronRight className="w-4 h-4 text-brand-cyan" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <Portfolio theme={theme} onDiscussProject={handleDiscussProject} />
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 4. ELITE TEAM CORE ROUTE
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/team":
        return (
          <div className="pt-28">
            <div className="pt-12 pb-8 px-6 md:px-12 max-w-7xl mx-auto text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border mb-6 ${
                    theme === "dark" ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan" : "bg-brand-cyan/5 border-brand-cyan/15 text-brand-blue"
                  }`}>
                    <Cpu className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-black">ELITE CODE FOUNDRY</span>
                  </div>
                  <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Our Engineering Team.
                  </h1>
                  <p className={`font-sans text-base md:text-lg max-w-2xl font-light leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
                    Meet the elite developers shaping startup software architecture. We build using strict mathematical type assertions, highly responsive modules, and direct Slack pipeline communication.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/")}
                  className={`inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase py-2.5 px-4.5 rounded-xl border cursor-pointer active:scale-95 shrink-0 ${
                    theme === "dark" ? "bg-white/5 border-white/5 text-gray-400 hover:text-white" : "bg-white border-slate-250 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return Home</span>
                </button>
              </div>

              {/* Startup Values Section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-12 text-left">
                {[
                  { title: "Pure Type Strictness", desc: "We deploy 100% type-checked TypeScript systems, minimizing runtime crash telemetry completely." },
                  { title: "Direct Contact Desk", desc: "No bulky management bloat. Sync directly with your principal engineer in private channels for weekly sprints." },
                  { title: "Performance First", desc: "Buttery animations, SEO layout structures, and edge nodes optimized for milliseconds, not seconds." },
                  { title: "Continuous Integration", desc: "Automatic testing, linting protocols, and deployment triggers configured elegantly on every Git action." }
                ].map((val, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border ${
                      theme === "dark"
                        ? "bg-white/5 border-white/5"
                        : "bg-white border-slate-200 shadow shadow-slate-100"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mb-3" />
                    <h3 className={`font-display font-bold text-base mb-2.5 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>{val.title}</h3>
                    <p className={`font-sans text-xs sm:text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <Team theme={theme} onJoinClick={handleJoinClick} />
            <div className="py-12" />
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 5. TECHNICAL STACK ROUTE
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/technologies":
        return (
          <div className="pt-28">
            <div className="pt-12 pb-8 px-6 md:px-12 max-w-7xl mx-auto text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border mb-6 ${
                    theme === "dark" ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan" : "bg-brand-cyan/5 border-brand-cyan/15 text-brand-blue"
                  }`}>
                    <Zap className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-black">ELITE BUILD SYSTEMS CONFIG</span>
                  </div>
                  <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Our Tech Stack.
                  </h1>
                  <p className={`font-sans text-base md:text-lg max-w-2xl font-light leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
                    We engineer digital platforms using exclusively clean, modern, proven open-source systems. This minimizes technical debt and maintains absolute lightning-fast compiling pathways forever.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/")}
                  className={`inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase py-2.5 px-4.5 rounded-xl border cursor-pointer active:scale-95 shrink-0 ${
                    theme === "dark" ? "bg-white/5 border-white/5 text-gray-400 hover:text-white" : "bg-white border-slate-250 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return Home</span>
                </button>
              </div>
            </div>

            <Technologies theme={theme} />
            <div className="py-12" />
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 6. SPRINT PROCESS ROUTE
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/process":
        return (
          <div className="pt-28">
            <div className="pt-12 pb-8 px-6 md:px-12 max-w-7xl mx-auto text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border mb-6 ${
                    theme === "dark" ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan" : "bg-brand-cyan/5 border-brand-cyan/15 text-brand-blue"
                  }`}>
                    <Clock className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-black">CHRONOLOGICAL SPRINT LAYOUT</span>
                  </div>
                  <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Chronology workflow.
                  </h1>
                  <p className={`font-sans text-base md:text-lg max-w-2xl font-light leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
                    Formulating elite software requires structured checkpoints. We break each milestone down into actionable, 2-week developer sprints complete with automatic test pipelines and live feedback loops.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/")}
                  className={`inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase py-2.5 px-4.5 rounded-xl border cursor-pointer active:scale-95 shrink-0 ${
                    theme === "dark" ? "bg-white/5 border-white/5 text-gray-400 hover:text-white" : "bg-white border-slate-250 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return Home</span>
                </button>
              </div>
            </div>

            <Process theme={theme} />
            <WhyUs theme={theme} />
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 7. CONTACT OUTLET PORTAL
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/contact":
        return (
          <div className="pt-28">
            <div className="pt-12 pb-4 px-6 md:px-12 max-w-7xl mx-auto text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border mb-6 ${
                    theme === "dark" ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan" : "bg-brand-cyan/5 border-brand-cyan/15 text-brand-blue"
                  }`}>
                    <Send className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-black">COMMUNICATIONS DIRECTORY</span>
                  </div>
                  <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Start engineering.
                  </h1>
                  <p className={`font-sans text-base md:text-lg max-w-2xl font-light leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
                    Send across your structural requirements directly to our contact desk. Let’s translate your operational blueprints into optimized production models and scalable code foundations.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/")}
                  className={`inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase py-2.5 px-4.5 rounded-xl border cursor-pointer active:scale-95 shrink-0 ${
                    theme === "dark" ? "bg-white/5 border-white/5 text-gray-400 hover:text-white" : "bg-white border-slate-250 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return Home</span>
                </button>
              </div>
            </div>

            <Contact
              theme={theme}
              initialServiceNeeded={syncedService}
              initialDescription={syncedDescription}
              onClearServiceSync={handleClearSync}
            />
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 8. ACCORDION FAQ HELPDESK OFFICE
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/faq":
        return (
          <div className="pt-28">
            <div className="pt-12 pb-4 px-6 md:px-12 max-w-7xl mx-auto text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border mb-6 ${
                    theme === "dark" ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan" : "bg-brand-cyan/5 border-brand-cyan/15 text-brand-blue"
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-black">STRICT OPERATIONS DIRECTIVE FAQ</span>
                  </div>
                  <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Frequently Asked FAQ.
                  </h1>
                  <p className={`font-sans text-base md:text-lg max-w-2xl font-light leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
                    Verify detailed answers mapping layout delivery sprint intervals, ownership rights, live developer Slack desk configurations, and secure hosting frameworks in our system files.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/")}
                  className={`inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase py-2.5 px-4.5 rounded-xl border cursor-pointer active:scale-95 shrink-0 ${
                    theme === "dark" ? "bg-white/5 border-white/5 text-gray-400 hover:text-white" : "bg-white border-slate-250 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return Home</span>
                </button>
              </div>
            </div>

            <FAQ theme={theme} onContactClick={() => navigate("/contact")} />
            <div className="py-12" />
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 9. ADVANCED ROUTES — CASE STUDY: PEERLYNK
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/case-study/peerlynk":
        return (
          <div className="pt-28 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-left">
            <button
              onClick={() => navigate("/work")}
              className={`inline-flex items-center space-x-2 font-mono text-xs font-semibold py-2 px-4 rounded-xl border mb-8 cursor-pointer ${
                theme === "dark" ? "bg-white/5 border-white/5 text-gray-400 hover:text-white" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Works Portfolio</span>
            </button>

            <div className={`p-8 md:p-12 rounded-3xl border ${
              theme === "dark" ? "bg-brand-dark border-white/5" : "bg-white border-slate-200 shadow-xl shadow-slate-100"
            }`}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-cyan/15 border border-brand-cyan/20 text-brand-cyan rounded-full mb-6 font-mono text-[9px] font-black uppercase tracking-wider">
                Micro-Latency Socket Stream Matrix
              </div>
              
              <h2 className={`font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-6 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                PeerLynk Communication System
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/5 my-6">
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">CLIENT TYPE</span>
                  <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>SaaS Scale</span>
                </div>
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">LATENCY RATE</span>
                  <span className="text-sm font-bold text-brand-cyan">18ms (Edge Node)</span>
                </div>
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">STACK USED</span>
                  <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>React / Node / WebSockets</span>
                </div>
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">DELIVERY TILES</span>
                  <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>6 Weeks Sprint</span>
                </div>
              </div>

              <p className={`font-sans text-sm md:text-base leading-relaxed mb-6 ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}>
                The PeerLynk framework was built to resolve high concurrency single-point server load stress. We structured an autonomous WebRTC signaling path powered by clustered Node state machines. The end dashboard delivers high-frequency metrics displaying direct latencies, socket status indicators, and client telemetry variables perfectly in 4K resolutions.
              </p>

              <h4 className={`font-mono text-[10px] uppercase tracking-widest font-black mb-4 ${theme === "dark" ? "text-brand-cyan" : "text-brand-blue"}`}>
                Engineering Achievements:
              </h4>
              <ul className="space-y-3.5 mb-8">
                {[
                  "18ms micro-latency live socket callbacks configured over globally pooled regional edge nodes.",
                  "TypeScript strictly implemented across frontend view layer, reducing interface boundary crashes to 0%.",
                  "Visual interactive metrics running on hardware-accelerated SVG pathways for heavy CPU data charts.",
                  "Optimized responsive layouts rendering flawlessly on multiple displays (iPhone up to ultra-wide)."
                ].map((ach, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className={theme === "dark" ? "text-gray-300" : "text-slate-750"}>{ach}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleDiscussProject("PeerLynk Platform Stack", ["WebRTC", "React", "NodeJS", "Strict TypeScript", "Clustered Sockets"])}
                className="w-full bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-purple text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-brand-blue/15 active:scale-98 transition-all"
              >
                <span>Formulate Blueprint Similar To This Project</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 10. ADVANCED ROUTES — CASE STUDY: CRAVENUTRI
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/case-study/cravenutri":
        return (
          <div className="pt-28 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-left">
            <button
              onClick={() => navigate("/work")}
              className={`inline-flex items-center space-x-2 font-mono text-xs font-semibold py-2 px-4 rounded-xl border mb-8 cursor-pointer ${
                theme === "dark" ? "bg-white/5 border-white/5" : "bg-slate-100 border-slate-200"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Works Portfolio</span>
            </button>

            <div className={`p-8 md:p-12 rounded-3xl border ${
              theme === "dark" ? "bg-brand-dark border-white/5" : "bg-white border-slate-200 shadow-xl shadow-slate-100"
            }`}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-purple/15 border border-brand-purple/20 text-brand-purple rounded-full mb-6 font-mono text-[9px] font-black uppercase tracking-wider">
                E-Commerce Delivery Stack Architecture
              </div>
              
              <h2 className={`font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-6 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                CraveNutri Native Suite
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/5 my-6">
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">CLIENT TYPE</span>
                  <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Venture Consumer</span>
                </div>
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">CONVERSION INCR</span>
                  <span className="text-sm font-bold text-brand-purple">+34% Checkout Rate</span>
                </div>
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">STACK USED</span>
                  <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>React Native / Expo / Firebase</span>
                </div>
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">DEVELOPMENT TIMER</span>
                  <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>8 Weeks Sprint</span>
                </div>
              </div>

              <p className={`font-sans text-sm md:text-base leading-relaxed mb-6 ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}>
                CraveNutri required a hypercoded consumer shopping pipeline complete with push notification relays, offline checkout caches, and smooth micro-interactions. We compiled native assemblies utilizing Expo pipelines and integrated highly secure Firebase firestore schemas.
              </p>

              <h4 className={`font-mono text-[10px] uppercase tracking-widest font-black mb-4 ${theme === "dark" ? "text-brand-purple" : "text-brand-blue"}`}>
                Engineering Achievements:
              </h4>
              <ul className="space-y-3.5 mb-8">
                {[
                  "Offline-first sync caches holding user baskets robustly across momentary network blind spots.",
                  "Optimized mobile assets compression, outputting tiny IPA/APK builds for high app store ratings.",
                  "Unified single-view checkout layouts complete with seamless address validations and Google Pay triggers.",
                  "Premium spring-loaded UI animations engineered using custom bezier values to reinforce user actions."
                ].map((ach, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                    <span className={theme === "dark" ? "text-gray-300" : "text-slate-750"}>{ach}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleDiscussProject("CraveNutri E-Commerce System", ["React Native", "Expo", "Firebase Firestore", "Offline Caching", "Bezier UX"])}
                className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-blue hover:to-brand-cyan text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center space-x-2 cursor-pointer shadow-lg active:scale-98 transition-all"
              >
                <span>Formulate Blueprint Similar To CraveNutri</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 11. ADVANCED ROUTES — CASE STUDY: NEXTWISE
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/case-study/nextwise":
        return (
          <div className="pt-28 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-left">
            <button
              onClick={() => navigate("/work")}
              className={`inline-flex items-center space-x-2 font-mono text-xs font-semibold py-2 px-4 rounded-xl border mb-8 cursor-pointer ${
                theme === "dark" ? "bg-white/5 border-white/5" : "bg-slate-100 border-slate-200"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Works Portfolio</span>
            </button>

            <div className={`p-8 md:p-12 rounded-3xl border ${
              theme === "dark" ? "bg-brand-dark border-white/5" : "bg-white border-slate-200 shadow-xl shadow-slate-100"
            }`}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-blue/15 border border-brand-blue/20 text-brand-blue rounded-full mb-6 font-mono text-[9px] font-black uppercase tracking-wider">
                Heavy Analytics Database Dashboard
              </div>
              
              <h2 className={`font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-6 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                NextWise Enterprise Portal
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/5 my-6">
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">CLIENT TYPE</span>
                  <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Enterprise Analytics</span>
                </div>
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">LOAD CAPACITY</span>
                  <span className="text-sm font-bold text-brand-blue">14.8k operations/sec</span>
                </div>
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">STACK USED</span>
                  <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>React / Vite / PostgreSQL</span>
                </div>
                <div>
                  <span className="block font-mono text-[8.5px] text-gray-500 uppercase tracking-widest font-black">PROJECT TIMESPAN</span>
                  <span className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>10 Weeks Sprint</span>
                </div>
              </div>

              <p className={`font-sans text-sm md:text-base leading-relaxed mb-6 ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}>
                NextWise demanded an executive operations console displaying heavy chronological graphs, real-time security alerts, and custom permission directories. We engineered a robust Redux-managed data path utilizing PostgreSQL index structures for high-speed reporting returns.
              </p>

              <h4 className={`font-mono text-[10px] uppercase tracking-widest font-black mb-4 ${theme === "dark" ? "text-brand-blue" : "text-brand-blue"}`}>
                Engineering Achievements:
              </h4>
              <ul className="space-y-3.5 mb-8">
                {[
                  "Buttery-smooth charting components rendering 100k data nodes efficiently using Canvas overlay matrices.",
                  "Dynamic role authentication restricting directory nodes via cryptographically signed JWT hashes.",
                  "Auto-compiling PDF ledger sheets pulling live summaries inside custom server loops.",
                  "Fluid responsiveness supporting massive 8K executive boardroom projector displays perfectly."
                ].map((ach, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className={theme === "dark" ? "text-gray-300" : "text-slate-750"}>{ach}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleDiscussProject("NextWise Enterprise Portal", ["React", "TypeScript", "Redux Toolkit", "D3 Charts", "PostgreSQL", "JWT Node"])}
                className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-cyan text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center space-x-2 cursor-pointer shadow-lg active:scale-98 transition-all"
              >
                <span>Blueprints Architectural Review Just Like NextWise</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 12. SERVICES DETAILS FANS — FUTURE PREPARATION
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/services/web-development":
      case "/services/mobile-app-development":
      case "/services/full-stack-development":
        return (
          <div className="pt-28 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-left">
            <button
              onClick={() => navigate("/services")}
              className={`inline-flex items-center space-x-2 font-mono text-xs font-semibold py-2 px-4 rounded-xl border mb-8 cursor-pointer ${
                theme === "dark" ? "bg-white/5 border-white/5" : "bg-slate-100 border-slate-200"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </button>

            <div className={`p-8 md:p-12 rounded-3xl border text-center ${
              theme === "dark" ? "bg-brand-dark border-brand-cyan/20" : "bg-white border-slate-250 shadow-xl shadow-slate-100"
            }`}>
              <Sparkles className="w-12 h-12 text-brand-cyan mx-auto mb-6 animate-spin duration-10000" />
              <h2 className={`font-display font-black text-3xl md:text-5xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Engineering Sprint Initializing...
              </h2>
              <p className={`font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-6 ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
                Our technical team is compiling custom specifications for this service depth. Our standard 16-Week heavy scale matrix supports these features out-of-the-box.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleSelectService("Custom Growth Framework Sprints", "I want to organize a direct developer consultation to review customized specifications.")}
                  className="w-full sm:w-auto bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-white font-bold py-3.5 px-7 rounded-xl text-xs sm:text-sm shadow-md cursor-pointer"
                >
                  Schedule Technical Blueprint Consultation
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className={`w-full sm:w-auto py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold border cursor-pointer ${
                    theme === "dark" ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-slate-100 border-slate-200 text-slate-850"
                  }`}
                >
                  Configure Service Planner Matrix Instead
                </button>
              </div>
            </div>
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 13. CAREERS ROUTE / PORTAL
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/careers":
        return (
          <div className="pt-28 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-left">
            <div className="flex items-center justify-between gap-4 mb-8">
              <button
                onClick={() => navigate("/")}
                className={`inline-flex items-center space-x-2 font-mono text-xs font-semibold py-2 px-4 rounded-xl border cursor-pointer ${
                  theme === "dark" ? "bg-white/5 border-white/5" : "bg-slate-100 border-slate-200"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return Home</span>
              </button>
              <div className="flex items-center space-x-1.5 font-mono text-[9px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>HIRING SPRINT RUNNING</span>
              </div>
            </div>

            <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Join peerlynk labs.
            </h1>
            <p className={`font-sans text-base md:text-lg max-w-2xl font-light mb-10 ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
              We are expanding our core team of strict typescript specialists, backend framework crafters, and layout enthusiasts. Direct peer reviews, high performance parameters, and zero bureaucratic blockages.
            </p>

            <div className="space-y-6">
              {[
                {
                  role: "Lead Full-Stack Architect",
                  type: "Full-Time / India",
                  desc: "Configure clustered Node states, design PostgreSQL indices, and orchestrate strict system handshakes. Requirements: 5+ yrs in enterprise SaaS applications.",
                  salary: "₹18L - ₹24L per annum"
                },
                {
                  role: "Technical Frontend developer",
                  type: "Contract / Remote Friendly",
                  desc: "Produce pixel-perfect React modules, custom spring animations using motion, and robust lightweight layouts. Requirements: Mastery of Tailwind CSS, micro-latency assets loading.",
                  salary: "₹12L - ₹16L per annum"
                },
                {
                  role: "Product Data Analyst",
                  type: "Full-Time / Delhi NCR",
                  desc: "Track user interaction loops, formulate performance ledgers, and establish pipeline dashboards. Requirements: Proficiency with SQL analytics, Python notebooks.",
                  salary: "₹10L - ₹14L per annum"
                }
              ].map((pos, i) => (
                <div
                  key={i}
                  className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:border-brand-cyan/20 ${
                    theme === "dark" ? "bg-brand-dark/60 border-white/5" : "bg-white border-slate-200 shadow-sm shadow-slate-100"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <span className="font-mono text-[9px] text-brand-cyan font-bold tracking-wider uppercase bg-brand-cyan/10 px-2 py-0.5 rounded">{pos.type}</span>
                      <h3 className={`font-display font-extrabold text-xl md:text-2xl mt-1.5 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>{pos.role}</h3>
                    </div>
                    <span className={`font-mono text-xs md:text-sm font-bold ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>{pos.salary}</span>
                  </div>
                  <p className={`font-sans text-xs sm:text-sm leading-relaxed mb-6 ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>{pos.desc}</p>
                  
                  <button
                    onClick={() => handleJoinClick(`Job Application: ${pos.role}`, `I am highly interested in applying for the ${pos.role} position at peerlynk labs.\n\nMy primary technology stack is [ ...please insert stack... ]. Let's set up my technical validation sprint.`)}
                    className="w-full bg-gradient-to-r from-brand-cyan to-brand-blue text-white py-3 px-5 rounded-xl font-bold text-xs sm:text-sm cursor-pointer shadow hover:shadow-brand-cyan/10 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Apply For This Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 14. ABOUT PORTAL — STARTUP NARRATIVE & DNA
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/about":
        return (
          <div className="pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto text-left">
            <button
              onClick={() => navigate("/")}
              className={`inline-flex items-center space-x-2 font-mono text-xs font-semibold py-2 px-4 rounded-xl border mb-8 cursor-pointer ${
                theme === "dark" ? "bg-white/5 border-white/5" : "bg-slate-100 border-slate-200"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back Home</span>
            </button>

            <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Who is peerlynk.
            </h1>
            <p className={`font-display font-light text-xl leading-relaxed mb-8 ${theme === "dark" ? "text-brand-cyan" : "text-brand-blue font-semibold"}`}>
              We are an elite software foundry engineering production-grade software for rapid-growth startups.
            </p>

            <div className="space-y-6 font-sans text-sm sm:text-base leading-relaxed text-slate-700">
              <p className={theme === "dark" ? "text-gray-300" : "text-slate-600"}>
                Founding a tech startup or operating an enterprise network requires pristine software, not placeholder templates. PeerLynk labs was formed specifically to provide deep-tech software solutions with structural strictness, extreme performance variables, and a complete absence of fluff.
              </p>
              <p className={theme === "dark" ? "text-gray-300" : "text-slate-600"}>
                Our principal partners are seasoned engineers, specializing in direct system compilation. By eliminating bulk marketing departments and middle layer managers, we sync your executive board directly with active developers via real-time Slack channels, yielding immediate milestone updates and continuous delivery cycles.
              </p>

              <div className={`p-6 rounded-2xl border my-8 ${theme === "dark" ? "bg-white/5 border-white/5" : "bg-slate-100 border-slate-200/60 shadow-inner"}`}>
                <div className="font-mono text-xs text-brand-purple font-black uppercase tracking-wider mb-2">Our Manifesto</div>
                <div className={`font-serif italic text-base sm:text-lg ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                  "Strict compilers create stable platforms. Perfect layouts reinforce operational trust. We compile beautiful systems to power the next generation of scale."
                </div>
              </div>

              <div className="text-center pt-8">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-white font-bold py-4.5 px-8 rounded-xl text-sm shadow-lg cursor-pointer"
                >
                  Schedule Your System Blueprinting session
                </button>
              </div>
            </div>
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 15. ENGINEERING BLOG GRID
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      case "/blog":
        return (
          <div className="pt-28 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-left">
            <button
              onClick={() => navigate("/")}
              className={`inline-flex items-center space-x-2 font-mono text-xs font-semibold py-2 px-4 rounded-xl border mb-8 cursor-pointer ${
                theme === "dark" ? "bg-white/5 border-white/5" : "bg-slate-100 border-slate-200"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return Home</span>
            </button>

            <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              The compile Log.
            </h1>
            <p className={`font-sans text-base md:text-lg max-w-2xl font-light mb-10 ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
              Weekly deep-dives mapping TypeScript compiler hacks, micro-latency socket benchmarks, CSS hardware-accelerated loops, and direct API synchronization pipelines.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "How We Optimized Socket Handshakes for Concurrency",
                  tag: "SaaS Networking",
                  date: "May 24, 2026",
                  desc: "A chronological walkthrough detailing clustered signaling paths, state synchronization boundaries, and reducing telemetry logs by 84%."
                },
                {
                  title: "Eliminating Technical Debt via Type Strictness",
                  tag: "Languages / TSC",
                  date: "April 18, 2026",
                  desc: "Why we forbid lazy type casting in production builds, and why matching structural shapes perfectly avoids downstream enterprise crashes."
                },
                {
                  title: "Squeezing Performance out of Hardware-Accelerated SVG Charts",
                  tag: "Frontend / UX",
                  date: "March 11, 2026",
                  desc: "Using coordinate transforms, ResizeObservers, and direct path manipulations to support 100k data metrics buttery smooth at 60FPS."
                }
              ].map((blog, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 ${
                    theme === "dark" ? "bg-brand-dark border-white/5" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[9px] font-mono font-bold tracking-wider mb-3">
                      <span className="text-brand-cyan uppercase bg-brand-cyan/10 px-2 py-0.5 rounded">{blog.tag}</span>
                      <span className="text-gray-500">{blog.date}</span>
                    </div>
                    <h3 className={`font-display font-bold text-lg mb-2.5 leading-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}>{blog.title}</h3>
                    <p className={`font-sans text-xs leading-relaxed mb-6 ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>{blog.desc}</p>
                  </div>

                  <button
                    onClick={() => handleSelectService("Direct consultation request from Compile Blog", `I want to schedule a call after reading your compile log article: "${blog.title}".`)}
                    className={`font-mono text-[9px] font-black uppercase tracking-widest text-left cursor-pointer transition-colors pt-2.5 border-t border-white/5 w-fit ${
                      theme === "dark" ? "text-brand-cyan hover:text-white" : "text-brand-blue hover:text-slate-950"
                    }`}
                  >
                    Discuss Article Architecture →
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 16. DETAILED ROUTE FALLBACK (404 ERROR REDIRECT)
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      default:
        return (
          <div className="pt-28 pb-16 px-6 max-w-md mx-auto text-center h-[70vh] flex flex-col items-center justify-center">
            <Cpu className="w-12 h-12 text-brand-purple mb-4 animate-bounce" />
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">ROUTE NOT COMPILED</span>
            <h2 className={`font-display font-black text-4xl mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>404 Not Found.</h2>
            <p className={`font-sans text-xs sm:text-sm leading-relaxed mb-6 ${theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"}`}>
              The directory or route you inputted does not map to a strict production system node in our workspace files. Let's return back to safety.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-brand-cyan to-brand-blue text-white py-3 px-6 rounded-xl text-xs sm:text-sm font-bold shadow-md cursor-pointer inline-flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home Base</span>
            </button>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans antialiased text-left selection:bg-brand-cyan transition-colors duration-500 overflow-x-hidden ${
      theme === "dark"
        ? "bg-brand-darker text-gray-100 selection:text-brand-darker"
        : "bg-slate-50 text-slate-900 selection:text-white"
    }`}>
      
      {/* Primary Sticky Header Section */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main visual modules sequence handled by reactive router switches */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Brand Footer */}
      <Footer theme={theme} onNavClick={(id) => {
        // If clicking a footer block that corresponds to navigation route, route directly!
        const matchedRoute = ["home", "services", "portfolio", "team", "technologies", "process", "faq", "contact"].find(
          r => r === id || (id === "portfolio" && r === "work")
        );
        
        if (matchedRoute) {
          const routePath = matchedRoute === "home" ? "/" : matchedRoute === "portfolio" ? "/work" : `/${matchedRoute}`;
          navigate(routePath);
        } else {
          navigate("/");
        }
      }} onToggleTheme={toggleTheme} />

    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainApp />
    </RouterProvider>
  );
}
