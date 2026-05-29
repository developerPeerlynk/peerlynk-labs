import * as React from "react";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Terminal, 
  Cpu, 
  Layers, 
  Sparkles, 
  Activity, 
  ArrowUpRight,
  Code2,
  CheckCircle,
  Clock,
  Heart,
  BarChart3
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Floating3DSpheres from "./Floating3DSpheres";

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
  onContactUs: () => void;
  theme: "dark" | "light";
}

const BADGES = [
  { label: "Web Development", icon: Globe, color: "text-blue-500 dark:text-sky-400" },
  { label: "Mobile Apps", icon: Smartphone, color: "text-purple-500 dark:text-indigo-400" },
  { label: "Full Stack Systems", icon: Layers, color: "text-emerald-500 dark:text-emerald-400" },
  { label: "AI Integration", icon: Sparkles, color: "text-amber-500 dark:text-amber-400" },
  { label: "Scalable Architecture", icon: Cpu, color: "text-rose-500 dark:text-rose-400" }
];

export default function Hero({ onStartProject, onViewWork, onContactUs, theme }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"analytics" | "performance" | "code">("analytics");

  // Simple auto-rotation interval for the mockup tabs to keep the UI interactive and alive
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "analytics") return "performance";
        if (prev === "performance") return "code";
        return "analytics";
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-36 flex items-center justify-center overflow-hidden transition-colors duration-500 ${
        theme === "dark" 
          ? "bg-[#09090b] text-white" 
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* 1. Subtle, Elegant Blur Glow Mesh (Vercel & Stripe Style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-0 left-1/3 w-[60vw] h-[50vh] rounded-full blur-[140px] mix-blend-screen opacity-50 transition-all duration-1000 ${
          theme === "dark" 
            ? "bg-indigo-500/10 via-purple-500/10 to-transparent" 
            : "bg-indigo-100/40 via-sky-100/30 to-transparent"
        }`} />
        <div className={`absolute bottom-1/4 right-10 w-[40vw] h-[40vh] rounded-full blur-[160px] mix-blend-screen opacity-40 transition-all duration-1000 ${
          theme === "dark"
            ? "bg-sky-500/10 via-blue-500/5 to-transparent"
            : "bg-blue-100/20 via-purple-100/15 to-transparent"
        }`} />
      </div>

      {/* 2. Precision Micro-Grid Overlay */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 ${
          theme === "dark" ? "opacity-100" : "opacity-80"
        }`}
        style={{
          maskImage: "radial-gradient(ellipse 65% 65% at 50% 35%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 65% at 50% 35%, #000 60%, transparent 100%)"
        }}
      />

      {/* 2.5 Dynamic WebGL Interactive 3D Gradient Spheres Backdrop */}
      <Floating3DSpheres theme={theme} />

      {/* 3. Balanced Content Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* ==================================== */}
        {/* LEFT COMPASS: STRIPE & VERCEL TEXT COLUMN */}
        {/* ==================================== */}
        <div className="col-span-1 lg:col-span-6 flex flex-col space-y-8 text-center lg:text-left">
          
          {/* Subtle minimal banner */}
          <div className="flex justify-center lg:justify-start">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide border shadow-sm transition-all ${
              theme === "dark"
                ? "bg-zinc-900/60 border-zinc-805/50 text-sky-400"
                : "bg-white border-slate-200 text-sky-600"
            }`}>
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Sprints-Based Engineering Studio
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className={`font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] text-balance ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
              {"Building "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400 font-extrabold pb-1">
                Modern Digital Products
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className={`font-sans text-base sm:text-lg md:text-xl font-normal leading-relaxed text-balance max-w-2xl mx-auto lg:mx-0 ${
            theme === "dark" ? "text-zinc-400" : "text-slate-600"
          }`}>
            We design and develop scalable websites, mobile apps, dashboards, and full stack platforms for startups, businesses, and modern brands.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            {/* Primary Start Project */}
            <button
              onClick={onStartProject}
              className="group relative w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer bg-slate-900 text-white dark:bg-white dark:text-black hover:opacity-95 shadow-lg dark:hover:shadow-white/5 shadow-slate-900/10 active:scale-98"
              id="hero-start-project"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary View Our Work */}
            <button
              onClick={onViewWork}
              className={`w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer border active:scale-98 ${
                theme === "dark"
                  ? "border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:bg-zinc-900/80 hover:border-zinc-700"
                  : "border-slate-300 bg-white/60 text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm"
              }`}
              id="hero-view-work"
            >
              <span>View Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>

          {/* Separator line */}
          <div className={`w-full h-[1px] ${theme === "dark" ? "bg-zinc-900" : "bg-slate-200"}`} />

          {/* Trust Badges Pills */}
          <div className="space-y-3">
            <span className={`block font-mono text-[10px] font-semibold uppercase tracking-wider ${
              theme === "dark" ? "text-zinc-500" : "text-slate-500"
            }`}>
              Expert capabilities
            </span>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {BADGES.map((badge, idx) => {
                const IconComp = badge.icon;
                return (
                  <div
                    key={idx}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all cursor-default shadow-sm ${
                      theme === "dark"
                        ? "bg-zinc-900/40 border-zinc-800/80 text-zinc-350 hover:border-zinc-750 hover:bg-zinc-900/60"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/50"
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${badge.color}`} />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================================== */}
        {/* RIGHT COMPASS: LINEAR-STYLE BROWSER MOCKUP */}
        {/* ==================================== */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center relative mt-8 lg:mt-0">
          
          {/* Subtle soft gradient backlights directly behind browser container */}
          <div className="absolute w-[280px] h-[280px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse duration-5000" />
          <div className="absolute w-[220px] h-[220px] bg-purple-500/5 rounded-full blur-[60px] pointer-events-none top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 z-0" />

          {/* Interactive Window Controls Tabs */}
          <div className="relative z-10 w-full mb-4 flex items-center justify-between border-b pb-2 max-w-lg border-transparent">
            {/* Small subtle selector dots / tab switches */}
            <div className={`p-1 rounded-lg border flex items-center space-x-1 ${
              theme === "dark" ? "bg-zinc-900/60 border-zinc-800/60" : "bg-slate-200/80 border-slate-250/50"
            }`}>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  activeTab === "analytics"
                    ? theme === "dark" ? "bg-zinc-800 text-white" : "bg-white text-slate-900 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-400"
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab("performance")}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  activeTab === "performance"
                    ? theme === "dark" ? "bg-zinc-800 text-white" : "bg-white text-slate-900 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-400"
                }`}
              >
                Performance
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  activeTab === "code"
                    ? theme === "dark" ? "bg-zinc-800 text-white" : "bg-white text-slate-900 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-400"
                }`}
              >
                TypeScript Setup
              </button>
            </div>
            
            {/* Live Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Edge Status: Active</span>
            </div>
          </div>

          {/* Premium Browser Window Wrapper (With minimal isometric skew matching linear.app) */}
          <div 
            className="w-full relative max-w-lg transition-transform duration-700 ease-out z-10"
            style={{
              transform: "perspective(1200px) rotateX(4deg) rotateY(-6deg) rotateZ(1deg)",
            }}
          >
            {/* Outer high-end border frame */}
            <div className={`p-0.5 rounded-2xl border shadow-2xl transition-all duration-500 ${
              theme === "dark"
                ? "bg-gradient-to-b from-zinc-800 to-zinc-900/20 border-zinc-800/80 shadow-black/80"
                : "bg-gradient-to-b from-white to-slate-200/50 border-slate-250 shadow-slate-300/40"
            }`}>
              
              {/* Main Inside Window Surface */}
              <div className={`rounded-[14px] overflow-hidden p-6 text-left aspect-[1.38] flex flex-col justify-between relative ${
                theme === "dark" ? "bg-[#0b0b0f]" : "bg-white"
              }`}>
                {/* Visual subtle card shine reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.015] to-transparent pointer-events-none" />

                {/* Browser Chrome Header controls */}
                <div className="flex items-center justify-between border-b pb-4 border-slate-100 dark:border-zinc-900">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className={`px-4 py-1 rounded text-[10px] font-mono border text-center truncate max-w-[200px] sm:max-w-[260px] ${
                    theme === "dark" ? "bg-zinc-900/60 border-zinc-800/80 text-zinc-400" : "bg-slate-50 border-slate-200 text-slate-500"
                  }`}>
                    peerlynk.com/dashboard/sprints
                  </div>
                  <div className="w-8 shrink-0" />
                </div>

                {/* Panel Display Screen */}
                <div className="flex-1 py-4 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    
                    {/* TAB PANEL 1: ANALYTICS PREVIEW */}
                    {activeTab === "analytics" && (
                      <motion.div
                        key="analytics"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="space-y-4 h-full flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold uppercase block">PRODUCTION LATENCY TRACE</span>
                            <h3 className={`text-lg font-black tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Sprint Performance Registry</h3>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 font-bold">
                            99.98% SLA
                          </span>
                        </div>

                        {/* Custom Pure Vector Line Chart */}
                        <div className={`relative h-28 w-full rounded-xl border p-2 flex items-end justify-between overflow-hidden ${
                          theme === "dark" ? "bg-zinc-950/50 border-zinc-900" : "bg-slate-50 border-slate-200"
                        }`}>
                          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-sky-500/5 to-transparent pointer-events-none" />
                          <div className="absolute top-2 left-3 text-[9px] font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                            <Activity className="w-3 h-3 text-sky-400 animate-pulse" />
                            Live Telemetry Loop
                          </div>

                          {/* Line Chart path overlay */}
                          <svg className="absolute inset-0 w-full h-full p-2 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4338ca" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#4338ca" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            {/* Area shadow */}
                            <path d="M 0 95 Q 15 45 30 70 T 60 25 T 90 10 L 100 10 L 100 100 L 0 100 Z" fill="url(#chartGlow)" />
                            {/* Main Stroke */}
                            <path d="M 0 95 Q 15 45 30 70 T 60 25 T 90 10 L 100 10" fill="none" stroke={theme === "dark" ? "#38bdf8" : "#4f46e5"} strokeWidth="2.5" strokeLinecap="round" />
                          </svg>

                          {/* Interactive data markers */}
                          <div className="absolute top-1/4 right-[25%] flex flex-col items-center">
                            <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-sky-400 ring-4 ring-blue-500/20" />
                            <div className="px-1.5 py-0.5 rounded bg-slate-900 border border-zinc-800 text-[8px] font-mono text-white mt-1">12ms</div>
                          </div>
                        </div>

                        {/* Bottom Metric Cards */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className={`p-2.5 rounded-lg border text-center transition-all ${
                            theme === "dark" ? "bg-zinc-950/60 border-zinc-900" : "bg-slate-50 border-slate-200"
                          }`}>
                            <span className="block text-[8px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold">Total Pings</span>
                            <span className={`block text-xs font-bold font-sans mt-0.5 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>258,241 /s</span>
                          </div>
                          <div className={`p-2.5 rounded-lg border text-center transition-all ${
                            theme === "dark" ? "bg-zinc-950/60 border-zinc-900" : "bg-slate-50 border-slate-200"
                          }`}>
                            <span className="block text-[8px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold">Core Nodes</span>
                            <span className={`block text-xs font-bold font-sans mt-0.5 ${theme === "dark" ? "text-white" : "text-slate-850"}`}>14 Dynamic</span>
                          </div>
                          <div className={`p-2.5 rounded-lg border text-center transition-all ${
                            theme === "dark" ? "bg-zinc-950/60 border-zinc-900" : "bg-slate-50 border-slate-200"
                          }`}>
                            <span className="block text-[8px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold">Build speed</span>
                            <span className="block text-xs font-extrabold font-mono text-sky-400 mt-0.5">0.14s</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB PANEL 2: PERFORMANCE PREVIEW */}
                    {activeTab === "performance" && (
                      <motion.div
                        key="performance"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="space-y-4 h-full flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold uppercase block">PRODUCTION VITALS</span>
                            <h3 className={`text-lg font-black tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}>System Quality Assessment</h3>
                          </div>
                          <div className="flex items-center gap-1.5 font-mono text-[9px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded font-black">
                            LIGHTHOUSE PASS
                          </div>
                        </div>

                        {/* Interactive Vital Counters */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Core Web Vital Card 1 */}
                          <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
                            theme === "dark" ? "bg-zinc-950/60 border-zinc-900" : "bg-slate-50 border-slate-200"
                          }`}>
                            <div className="space-y-1">
                              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">First Content Paint</span>
                              <div className={`text-base font-bold font-sans ${theme === "dark" ? "text-white" : "text-slate-800"}`}>240ms</div>
                              <span className="text-[8px] font-mono text-emerald-500 font-bold block">▲ 98% faster than edge median</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center font-mono text-[11px] font-black text-emerald-500 shadow-sm">
                              99
                            </div>
                          </div>

                          {/* Core Web Vital Card 2 */}
                          <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
                            theme === "dark" ? "bg-zinc-950/60 border-zinc-900" : "bg-slate-50 border-slate-200"
                          }`}>
                            <div className="space-y-1">
                              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">SEO Score Card</span>
                              <div className={`text-base font-bold font-sans ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Perfect A+</div>
                              <span className="text-[8px] font-mono text-emerald-500 font-bold block">▲ Schema markup fully optimized</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center font-mono text-[11px] font-black text-emerald-400 shadow-sm">
                              100
                            </div>
                          </div>
                        </div>

                        {/* Interactive progress log line style */}
                        <div className={`p-2.5 rounded-lg border text-xs font-mono flex items-center justify-between ${
                          theme === "dark" ? "bg-zinc-950/30 border-zinc-900 text-zinc-400" : "bg-slate-100/50 border-slate-200 text-slate-600"
                        }`}>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-sky-400" />
                            Interactive Speed test bound
                          </span>
                          <span className="font-extrabold text-blue-500 dark:text-sky-300">PASS (0ms load latency)</span>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB PANEL 3: CODE SNIPPET PREVIEW */}
                    {activeTab === "code" && (
                      <motion.div
                        key="code"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="space-y-4 h-full flex flex-col justify-between font-mono text-xs"
                      >
                        <div className="flex items-center justify-between pb-1 border-b border-zinc-900">
                          <span className="text-[9px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold block">configure-routing.ts</span>
                          <span className="text-[8.5px] uppercase font-semibold text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-400/20 shadow-sm">
                            100% STRICT TS
                          </span>
                        </div>

                        {/* Code box mock */}
                        <div className={`p-4 rounded-xl flex-1 text-[10px] sm:text-xs leading-relaxed overflow-x-auto ${
                          theme === "dark" ? "bg-zinc-950/80 text-zinc-300 border border-zinc-900" : "bg-slate-50 text-slate-700 border border-slate-200"
                        }`}>
                          <div className="space-y-1">
                            <div><span className="text-zinc-500 dark:text-zinc-500">1</span> <span className="text-pink-400">import</span> {"{"} configureApp {"}"} <span className="text-pink-400">from</span> <span className="text-emerald-400">"@peerlynk/core"</span>;</div>
                            <div><span className="text-zinc-500 dark:text-zinc-500">2</span> <span className="text-pink-400">export default</span> configureApp({"{"}</div>
                            <div><span className="text-zinc-500 dark:text-zinc-500">3</span>   engine: <span className="text-amber-400">"rust-edge"</span>,</div>
                            <div><span className="text-zinc-500 dark:text-zinc-500">4</span>   safety: <span className="text-sky-400">"strict-typescript"</span>,</div>
                            <div><span className="text-zinc-500 dark:text-zinc-500">5</span>   database: <span className="text-purple-400">"durable-cloud"</span></div>
                            <div><span className="text-zinc-500 dark:text-zinc-500">6</span> {"}"});</div>
                          </div>
                        </div>

                        {/* Console Log status tag bar */}
                        <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 pt-1">
                          <div className="flex items-center gap-1.5 text-emerald-400">
                            <Code2 className="w-3.5 h-3.5" />
                            <span>Build verified successful (in 12ms)</span>
                          </div>
                          <span>V1.4.0 Edge Core</span>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Simulated high-quality terminal status ribbon bar footer */}
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-zinc-900 pt-3 text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                  <div className="flex items-center space-x-1.5 text-emerald-500">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span className="font-bold">TELEMETRY PASS</span>
                  </div>
                  <span>EDGE COMPILE: READY</span>
                </div>
              </div>

            </div>

            {/* Micro premium absolute secondary glass cards floating behind the skewed browser frame */}
            {/* Card 1: Bottom absolute float */}
            <div className="absolute bottom-[-16px] left-[24px] z-20">
              <div className={`px-3.5 py-2.5 rounded-xl shadow-xl border flex items-center space-x-2 transition-all duration-300 hover:-translate-y-1 ${
                theme === "dark" 
                  ? "bg-zinc-950 border-zinc-800 text-zinc-300 shadow-black/50" 
                  : "bg-white border-slate-200 text-slate-800 shadow-slate-350/40"
              }`}>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                  Sprint Delivery Sync
                </span>
              </div>
            </div>

            {/* Card 2: Top right absolute float */}
            <div className="absolute top-[48px] right-[-24px] z-20 hidden md:block">
              <div className={`p-3 rounded-xl shadow-xl border flex flex-col justify-center space-y-1 transition-all duration-300 hover:scale-102 ${
                theme === "dark" 
                  ? "bg-zinc-950/95 border-zinc-850 text-zinc-200 shadow-black/60" 
                  : "bg-white/95 border-slate-250 text-slate-900 shadow-slate-300/40"
              }`}>
                <div className="flex items-center space-x-1.5 text-blue-500 dark:text-sky-400">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span className="font-mono text-[9px] uppercase font-extrabold tracking-widest leading-none">Speed metric</span>
                </div>
                <span className="font-sans text-xs font-black">
                  100% Lighthouse Score
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
