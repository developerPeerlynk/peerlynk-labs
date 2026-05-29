import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../data";
import { Briefcase, ArrowUpRight, FolderHeart, ShieldCheck, Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface PortfolioProps {
  onDiscussProject: (projectName: string, techStack: string[]) => void;
  theme: "dark" | "light";
}

export default function Portfolio({ onDiscussProject, theme }: PortfolioProps) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filters = [
    { key: "all", label: "All Works" },
    { key: "Website Showcase", label: "Websites" },
    { key: "Mobile App Showcase", label: "Mobile Apps" },
    { key: "Dashboard Showcase", label: "Dashboards" }
  ];

  // Restrict to the 6 core high-concept projects explicitly requested for a crisp Vercel-like portfolio
  const featuredIds = [
    "peerlynk-website",
    "peerlynk-dashboard",
    "peerlynk-app",
    "cravenutri-website",
    "cravenutri-app",
    "nextwise-website"
  ];

  const coreProjects = PORTFOLIO_PROJECTS.filter(project => featuredIds.includes(project.id));

  const filteredProjects = coreProjects.filter(project => {
    if (selectedFilter === "all") return true;
    return project.category === selectedFilter;
  });

  // Render highly-detailed, beautiful simulated developer screens/hardware instead of static broken URLs.
  // This utilizes Tailwind shapes, SVG lines and realistic dashboard typography.
  const renderProjectMockup = (projectId: string) => {
    switch (projectId) {
      case "peerlynk-website":
        return (
          <div className="w-full pt-4 px-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 dark:from-slate-900/40 dark:to-slate-950/10 rounded-t-2xl border-b border-white/5 overflow-hidden flex items-center justify-center min-h-[220px]">
            <div className="w-full max-w-[340px] sm:max-w-[420px] mx-auto transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
              {/* Browser chrome top bar */}
              <div className="bg-slate-800/90 dark:bg-slate-950/90 rounded-t-lg px-3 py-2 flex items-center justify-between border-b border-white/5 shadow-md">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <div className="bg-white/5 rounded px-2 py-0.5 text-[8px] font-mono text-gray-400 w-1/2 text-center select-none overflow-hidden text-ellipsis whitespace-nowrap">
                  labs.peerlynk.com
                </div>
                <div className="w-4" />
              </div>
              {/* Screen viewport */}
              <div className="aspect-[16/10] bg-slate-950 text-white overflow-hidden relative border-x border-b border-slate-800/80 dark:border-slate-900 shadow-2xl flex flex-col p-4 bg-[radial-gradient(circle_at_top_right,rgba(0,180,216,0.1),transparent_50%)]">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="font-display font-black text-[9px] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">PEERLYNK</span>
                  <span className="font-mono text-[5px] text-gray-500">EST. 2026 // LABS</span>
                </div>
                <div className="mt-2 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <div className="font-display text-[12px] font-semibold leading-tight text-white tracking-tight">
                      Engineering BESPOKE Digital Products That <span className="text-brand-cyan">Scale</span>.
                    </div>
                    <div className="font-sans text-[7px] text-gray-400 mt-1 max-w-[190px] leading-snug">
                      Next.js marketing engine with clean static edge rendering & responsive animations.
                    </div>
                  </div>
                  
                  {/* Micro Grid for stats */}
                  <div className="grid grid-cols-3 gap-1.5 mt-1.5">
                    <div className="bg-white/[0.02] border border-white/5 p-1 rounded">
                      <div className="font-mono text-[5px] text-gray-500">LIGHTHOUSE</div>
                      <div className="font-display font-extrabold text-[8px] text-neutral-200">100/100</div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 p-1 rounded">
                      <div className="font-mono text-[5px] text-gray-500">CONVERSION</div>
                      <div className="font-display font-extrabold text-[8px] text-brand-cyan">+4x</div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 p-1 rounded">
                      <div className="font-mono text-[5px] text-gray-500">SESSION TIME</div>
                      <div className="font-display font-extrabold text-[8px] text-brand-purple">+180%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "peerlynk-dashboard":
        return (
          <div className="w-full pt-4 px-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 dark:from-slate-900/40 dark:to-slate-950/10 rounded-t-2xl border-b border-white/5 overflow-hidden flex items-center justify-center min-h-[220px]">
            <div className="w-full max-w-[340px] sm:max-w-[420px] mx-auto transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
              <div className="bg-slate-900 border border-slate-800 dark:border-slate-900 rounded-t-lg overflow-hidden shadow-lg">
                <div className="px-3 py-1.5 flex items-center justify-between bg-slate-950/90 border-b border-slate-850">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                    <span className="font-mono text-[8px] uppercase tracking-widest text-brand-cyan font-bold">peerlynk dashboard</span>
                  </div>
                  <span className="font-mono text-[7px] text-gray-500">OPERATIONS CONSOLE</span>
                </div>
                {/* Dashboard layout inside */}
                <div className="aspect-[16/10] bg-slate-950 text-white overflow-hidden relative flex bg-slate-950">
                  {/* Left panel mini navigation */}
                  <div className="w-1/4 border-r border-slate-900 bg-slate-950/60 p-2 flex flex-col space-y-1 text-left">
                    <div className="h-2 w-8 bg-neutral-800 rounded mb-2" />
                    <div className="h-1.5 w-10 bg-brand-cyan/20 rounded" />
                    <div className="h-1.5 w-8 bg-neutral-900 rounded" />
                    <div className="h-1.5 w-7 bg-neutral-900 rounded" />
                    <div className="h-1.5 w-9 bg-neutral-900 rounded" />
                  </div>
                  {/* Main screen statistics */}
                  <div className="flex-grow p-3 flex flex-col justify-between text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[6px] text-gray-400 uppercase tracking-widest">Global Live Ingestion</span>
                      <span className="font-mono text-[6px] text-green-500 bg-green-500/10 px-1 py-0.5 rounded font-bold">● ONLINE</span>
                    </div>
                    
                    {/* SVG Vector Chart Line inside Dashboard */}
                    <div className="h-14 w-full border-b border-l border-slate-900 relative mt-1 flex items-end">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path d="M0,35 Q15,10 30,25 T60,5 T90,20 T100,10" fill="none" stroke="rgba(0,180,216,0.6)" strokeWidth="1.5" />
                        <path d="M0,35 Q15,10 30,25 T60,5 T90,20 T100,10 L100,40 L0,40 Z" fill="rgba(0,180,216,0.08)" />
                      </svg>
                      <div className="absolute top-1 right-1 font-mono text-[5px] text-gray-500">VOL: 2.4M TXS/DAY</div>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 mt-1.5">
                      <div className="bg-white/[0.01] border border-white/5 p-1 rounded flex items-center justify-between">
                        <span className="text-[5px] text-gray-400">DB Sync Link</span>
                        <span className="font-mono text-[6px] text-brand-cyan font-bold">&lt; 150ms</span>
                      </div>
                      <div className="bg-white/[0.01] border border-white/5 p-1 rounded flex items-center justify-between">
                        <span className="text-[5px] text-gray-400">Team Efficiency</span>
                        <span className="font-mono text-[6px] text-brand-purple font-bold">+55%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "peerlynk-app":
        return (
          <div className="w-full pt-4 px-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 dark:from-slate-900/40 dark:to-slate-950/10 rounded-t-2xl border-b border-white/5 overflow-hidden flex items-center justify-center min-h-[240px]">
            <div className="w-[170px] sm:w-[190px] mx-auto transition-transform duration-500 group-hover:scale-[1.04] group-hover:-translate-y-1">
              {/* Mobile metal casing */}
              <div className="bg-slate-900 dark:bg-black rounded-t-[32px] px-3.5 pt-3.5 border-t-4 border-x-4 border-slate-800 shadow-xl relative">
                {/* Camera notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-slate-900 dark:bg-black rounded-b-xl z-20 flex items-center justify-center">
                  <div className="w-5 h-1 bg-white/20 rounded-full" />
                </div>
                {/* Screen frame */}
                <div className="aspect-[9/19] bg-slate-950 text-white rounded-t-[20px] overflow-hidden relative border border-slate-900 flex flex-col pt-3">
                  {/* Battery clock stats */}
                  <div className="px-2.5 py-1 flex items-center justify-between text-[7px] font-mono text-gray-400">
                    <span>9:41 AM</span>
                    <span>5G WiFi</span>
                  </div>
                  {/* Chat interface client */}
                  <div className="flex-grow bg-slate-950 p-2.5 flex flex-col justify-between text-left">
                    <div className="flex items-center space-x-1 border-b border-white/5 pb-1.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-brand-cyan flex items-center justify-center text-[5px] font-bold">PL</div>
                      <span className="font-display font-extrabold text-[8px] tracking-tight">peerlynk sync</span>
                    </div>
                    {/* message cells */}
                    <div className="space-y-1.5 flex-grow flex flex-col justify-end my-2">
                      <div className="bg-white/5 p-1 rounded-r-lg rounded-tl-lg max-w-[85%] self-start text-[6px] text-gray-300">
                        <span className="font-bold text-brand-cyan block">@dhruv_pal</span>
                        iOS app bundle build starting for collaborative nodes. Check push channels!
                      </div>
                      <div className="bg-brand-blue/15 p-1 rounded-l-lg rounded-tr-lg max-w-[85%] self-end text-[6px] text-neutral-200 text-right">
                        <span className="font-bold text-brand-purple block">@akash</span>
                        Deploy verified green. Active sockets running fine. All connected!
                      </div>
                    </div>
                    {/* metrics cell */}
                    <div className="bg-white/[0.02] border border-white/5 p-1.5 rounded flex items-center justify-between">
                      <span className="text-[5px] text-gray-400 font-mono">CONCURRENT SOCKETS</span>
                      <span className="font-mono text-[7px] text-brand-cyan font-bold">150K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "cravenutri-website":
        return (
          <div className="w-full pt-4 px-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 dark:from-slate-900/40 dark:to-slate-950/10 rounded-t-2xl border-b border-white/5 overflow-hidden flex items-center justify-center min-h-[220px]">
            <div className="w-full max-w-[340px] sm:max-w-[420px] mx-auto transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
              {/* Browser chrome top bar */}
              <div className="bg-slate-800/90 dark:bg-slate-950/90 rounded-t-lg px-3 py-2 flex items-center justify-between border-b border-white/5 shadow-md">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <div className="bg-white/5 rounded px-2 py-0.5 text-[8px] font-mono text-gray-400 w-1/2 text-center select-none overflow-hidden text-ellipsis whitespace-nowrap">
                  cravenutri.com
                </div>
                <div className="w-4" />
              </div>
              <div className="aspect-[16/10] bg-slate-950 text-white overflow-hidden relative border-x border-b border-slate-800/80 dark:border-slate-900 shadow-2xl flex flex-col p-4 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_50%)]">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="font-display font-extrabold text-[9px] tracking-tight text-emerald-400">CRAVENUTRI Group</span>
                  <span className="font-mono text-[5px] text-gray-500">SUBSCRIPTION DIET COMMERCE</span>
                </div>
                <div className="mt-2 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <div className="font-display text-[12px] font-semibold leading-tight text-white tracking-tight">
                      Bespoke Subscription Planners
                    </div>
                    <div className="font-sans text-[7px] text-gray-400 mt-1 max-w-[200px] leading-snug">
                      High-conversion nutritional portals carrying custom Stripe recurrent billing processors.
                    </div>
                  </div>
                  
                  <div className="bg-emerald-500/15 border border-emerald-500/20 px-2 py-1 rounded w-fit flex items-center space-x-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[5px] text-emerald-400 font-bold uppercase tracking-wider">STRIPE INTEGRATION CONNECTED</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 mt-1.5">
                    <div className="bg-white/[0.01] border border-white/5 p-1 rounded">
                      <div className="font-mono text-[5px] text-gray-500">PAY DROP RATE</div>
                      <div className="font-display font-extrabold text-[8px] text-neutral-200">-40%</div>
                    </div>
                    <div className="bg-white/[0.01] border border-white/5 p-1 rounded">
                      <div className="font-mono text-[5px] text-gray-500">LOAD SPEED</div>
                      <div className="font-display font-extrabold text-[8px] text-emerald-400">0.6s</div>
                    </div>
                    <div className="bg-white/[0.01] border border-white/5 p-1 rounded">
                      <div className="font-mono text-[5px] text-gray-500">CONVERSION</div>
                      <div className="font-display font-extrabold text-[8px] text-emerald-500">8.4%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "cravenutri-app":
        return (
          <div className="w-full pt-4 px-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 dark:from-slate-900/40 dark:to-slate-950/10 rounded-t-2xl border-b border-white/5 overflow-hidden flex items-center justify-center min-h-[240px]">
            <div className="w-[170px] sm:w-[190px] mx-auto transition-transform duration-500 group-hover:scale-[1.04] group-hover:-translate-y-1">
              {/* phone chassis */}
              <div className="bg-slate-900 dark:bg-black rounded-t-[32px] px-3.5 pt-3.5 border-t-4 border-x-4 border-slate-800 shadow-xl relative">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-slate-900 dark:bg-black rounded-b-xl z-20 flex items-center justify-center">
                  <div className="w-5 h-1 bg-white/20 rounded-full" />
                </div>
                <div className="aspect-[9/19] bg-slate-950 text-white rounded-t-[20px] overflow-hidden relative border border-slate-905 flex flex-col pt-3">
                  <div className="px-2.5 py-1 flex items-center justify-between text-[7px] font-mono text-gray-400">
                    <span>9:41 AM</span>
                    <span>100% SCAN</span>
                  </div>
                  {/* barcode scan viewport mockup */}
                  <div className="flex-grow bg-slate-950 p-2.5 flex flex-col justify-between text-left">
                    <span className="font-display font-extrabold text-[8px] text-emerald-400">CraveNutrition Tracker</span>
                    
                    {/* Scanner sight */}
                    <div className="relative border border-dashed border-emerald-500/40 p-1.5 text-center bg-white/[0.01] rounded-lg my-1.5">
                      <span className="font-mono text-[4px] text-emerald-400 font-semibold block tracking-widest uppercase">CAMERA BARCODE ALIGN</span>
                      <div className="w-full h-[1px] bg-red-500 animate-pulse mt-0.5" />
                      <div className="text-[5px] text-gray-500 mt-1 select-none">Ingesting calorie data...</div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 p-1 rounded flex items-center justify-between">
                      <div>
                        <div className="font-mono text-[4px] text-gray-400 uppercase">Daily Hydration</div>
                        <div className="font-display font-bold text-[7px]">85% Completed</div>
                      </div>
                      <div className="w-4 h-4 rounded-full border border-emerald-500 border-t-transparent flex items-center justify-center text-[4px] font-mono text-emerald-400">85</div>
                    </div>

                    <div className="mt-1 text-center bg-emerald-500/10 border border-emerald-500/20 py-0.5 rounded">
                      <span className="font-mono text-[5px] text-emerald-400 font-bold uppercase">#50 Free Medical Apps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "nextwise-website":
        return (
          <div className="w-full pt-4 px-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 dark:from-slate-900/40 dark:to-slate-950/10 rounded-t-2xl border-b border-white/5 overflow-hidden flex items-center justify-center min-h-[220px]">
            <div className="w-full max-w-[340px] sm:max-w-[420px] mx-auto transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
              {/* Browser chrome top bar */}
              <div className="bg-slate-800/90 dark:bg-slate-950/90 rounded-t-lg px-3 py-2 flex items-center justify-between border-b border-white/5 shadow-md">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <div className="bg-white/5 rounded px-2 py-0.5 text-[8px] font-mono text-gray-400 w-1/2 text-center select-none overflow-hidden text-ellipsis whitespace-nowrap">
                  nextwise.io
                </div>
                <div className="w-4" />
              </div>
              <div className="aspect-[16/10] bg-slate-950 text-white overflow-hidden relative border-x border-b border-slate-800/80 dark:border-slate-900 shadow-2xl flex flex-col p-4 bg-[radial-gradient(circle_at_left,rgba(63,98,238,0.12),transparent_50%)]">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="font-display font-black text-[9px] tracking-widest text-[#415a77]">NEXTWISE</span>
                  <span className="font-mono text-[5px] text-gray-500">GLOBAL INTEL NETWORK</span>
                </div>
                <div className="mt-2 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <div className="font-display text-[12px] font-semibold leading-tight text-white tracking-tight">
                      Financial Market Intelligence
                    </div>
                    <div className="font-sans text-[7px] text-gray-400 mt-1 max-w-[190px] leading-snug">
                      Content workspaces rendering live ticker feeds using edge-cached analytical databases.
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 my-1">
                    <div className="bg-black/50 border border-slate-850 p-1 rounded flex items-center justify-between text-[5px] font-mono">
                      <span className="text-gray-400">BTC/USD</span>
                      <span className="text-emerald-400 font-bold">+4.8%</span>
                    </div>
                    <div className="bg-black/50 border border-slate-850 p-1 rounded flex items-center justify-between text-[5px] font-mono">
                      <span className="text-gray-400">AAPL/NASDAQ</span>
                      <span className="text-emerald-400 font-bold">+1.2%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1.5 mt-1">
                    <div className="bg-white/[0.01] border border-white/5 p-1 rounded text-center">
                      <div className="font-mono text-[4px] text-gray-500">LATENCY</div>
                      <div className="font-display font-extrabold text-[8px] text-brand-blue">&lt; 50ms</div>
                    </div>
                    <div className="bg-white/[0.01] border border-white/5 p-1 rounded text-center">
                      <div className="font-mono text-[4px] text-gray-500">SEO</div>
                      <div className="font-display font-extrabold text-[8px] text-neutral-200">TOP 3</div>
                    </div>
                    <div className="bg-white/[0.01] border border-white/5 p-1 rounded text-center">
                      <div className="font-mono text-[4px] text-gray-500 font-bold">SIGNUPS</div>
                      <div className="font-display font-extrabold text-[8px] text-brand-cyan">+4.5K/wk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className={`py-24 md:py-32 relative overflow-hidden border-t border-b transition-colors duration-300 ${
      theme === "dark" ? "bg-brand-dark border-white/5" : "bg-slate-100/60 border-slate-200"
    }`}>
      {/* Background glowing gradients - Dark Mode Only */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/2 left-0 w-[45rem] h-[45rem] rounded-full glow-spot-blue -translate-y-1/2 pointer-events-none z-0 opacity-40 animate-pulse" />
          <div className="absolute bottom-0 right-1/10 w-[35rem] h-[35rem] rounded-full glow-spot-purple pointer-events-none z-0 opacity-20" />
        </>
      )}

      {/* Grid line grid overlay */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 ${
        theme === "dark" ? "opacity-100" : "opacity-30"
      }`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border mb-4 bg-brand-purple/10 border-brand-purple/20 text-brand-purple`}>
            <FolderHeart className="w-4 h-4 text-brand-purple" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase">
              Proven Digital Products
            </span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
            Our Work
          </h2>
          <p className={`font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-2xl ${
            theme === "dark" ? "text-gray-400" : "text-slate-600"
          }`}>
            Explore actual vector-rendered mockup reviews, device views, and quantifiable technical blueprints built strictly for modern web, iOS/Android mobile, and operation dashboards.
          </p>
        </div>

        {/* Portfolio Filters Pill Header */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16" id="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                selectedFilter === filter.key
                  ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white border-transparent shadow shadow-brand-blue/15"
                  : theme === "dark"
                    ? "bg-brand-card hover:bg-brand-card-hover text-gray-400 hover:text-white border-white/5"
                    : "bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border-slate-200 shadow-sm"
              }`}
              id={`portfolio-filter-btn-${filter.key.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Work Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProject === project.id;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className={`group rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  theme === "dark"
                    ? "glass-effect border-white/5 hover:border-brand-cyan/20 bg-brand-card/20 shadow-2xl shadow-black/10"
                    : "bg-white border-slate-200 shadow-md hover:border-slate-300/80 shadow-slate-100"
                }`}
                id={`project-card-${project.id}`}
              >
                {/* Upper Mockup Area block */}
                <div className="relative">
                  {renderProjectMockup(project.id)}
                  
                  {/* Subtle overlay indicator on hover */}
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/5 font-mono text-[8px] uppercase tracking-wider text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                    <Sparkles className="w-2.5 h-2.5 text-brand-cyan animate-pulse" />
                    <span>interactive preview</span>
                  </div>
                </div>
                
                {/* Lower Information Area Segment */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Category & badge info */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                        <span className={`font-mono text-[9px] uppercase font-bold tracking-wider ${
                          theme === "dark" ? "text-gray-400" : "text-slate-500"
                        }`}>
                          {project.clientType}
                        </span>
                      </div>

                      <div className={`font-mono text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border ${
                        theme === "dark"
                          ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                          : "bg-brand-cyan/5 border-brand-cyan/15 text-brand-blue"
                      }`}>
                        {project.category.replace(" Showcase", "")}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`font-display font-bold text-xl transition-colors ${
                      theme === "dark" ? "text-white group-hover:text-brand-cyan" : "text-slate-900 group-hover:text-brand-blue"
                    }`}>
                      {project.name}
                    </h3>
                    
                    {/* Description */}
                    <p className={`font-sans text-xs sm:text-sm mt-2 leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-slate-600 font-medium"
                    }`}>
                      {project.description}
                    </p>

                    {/* Specifications expansion toggle */}
                    <button
                      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                      className={`font-mono text-[10px] hover:text-brand-cyan mt-3.5 transition-colors flex items-center space-x-1 cursor-pointer focus:outline-none font-bold uppercase tracking-wider ${
                        theme === "dark" ? "text-brand-purple" : "text-brand-blue hover:text-brand-cyan"
                      }`}
                      id={`project-expand-${project.id}`}
                    >
                      <span>{isExpanded ? "[-] Hide system specs" : "[+] Read engineering details"}</span>
                    </button>

                    {isExpanded && (
                      <div className={`mt-3 p-3.5 rounded-xl border animate-in fade-in slide-in-from-top-1 duration-200 text-left ${
                        theme === "dark"
                          ? "bg-brand-darker/80 border-white/5"
                          : "bg-slate-100 border-slate-200/80 shadow-inner"
                      }`}>
                        <div className={`font-mono text-[8px] uppercase tracking-widest mb-1.5 font-bold ${
                          theme === "dark" ? "text-gray-500" : "text-slate-400"
                        }`}>
                          Architectural Specifications
                        </div>
                        <p className={`font-sans text-xs leading-relaxed ${
                          theme === "dark" ? "text-gray-300" : "text-slate-700"
                        }`}>
                          {project.detailedDescription}
                        </p>
                        <div className="mt-3.5 flex items-center space-x-1.5 text-[9px] text-brand-cyan font-mono font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                          <span>Core Timeline: {project.duration}</span>
                        </div>
                      </div>
                    )}

                    {/* Tech stack tags */}
                    <div className={`flex flex-wrap gap-1.5 mt-5 pt-4.5 border-t ${
                      theme === "dark" ? "border-white/5" : "border-slate-100"
                    }`}>
                      {project.techStack.map(tech => (
                        <span key={tech} className={`font-mono text-[9px] border rounded px-2 py-0.5 ${
                          theme === "dark"
                            ? "bg-white/5 border-white/5 text-gray-300"
                            : "bg-slate-50 border-slate-200 text-slate-700 font-medium"
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Outcomes Grid */}
                  <div className="mt-6">
                    <div className={`font-mono text-[9px] uppercase tracking-widest pl-1 mb-2.5 font-bold ${
                      theme === "dark" ? "text-gray-500" : "text-slate-400"
                    }`}>
                      Validated Operational Impact
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className={`p-2.5 rounded-xl border text-center flex flex-col justify-center ${
                          theme === "dark"
                            ? "bg-brand-darker/40 border-white/5"
                            : "bg-slate-50 border-slate-200"
                        }`}>
                          <div className={`font-display font-extrabold text-sm sm:text-base leading-none ${
                            theme === "dark" ? "text-white" : "text-slate-900"
                          }`}>
                            {metric.value}
                          </div>
                          <div className={`font-sans text-[8px] mt-1.5 leading-tight ${
                            theme === "dark" ? "text-gray-400" : "text-slate-500"
                          }`}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer metrics details button */}
                <div className={`p-5 border-t flex flex-wrap items-center justify-between gap-3 ${
                  theme === "dark"
                    ? "bg-brand-darker/35 border-white/5"
                    : "bg-slate-50 border-slate-200"
                }`}>
                  <div className={`flex items-center space-x-1.5 font-mono text-[10px] uppercase font-bold tracking-tight ${
                    theme === "dark" ? "text-brand-cyan" : "text-brand-blue"
                  }`}>
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{project.result}</span>
                  </div>

                  <button
                    onClick={() => onDiscussProject(project.name, project.techStack)}
                    className={`font-mono text-[10px] font-bold uppercase hover:text-brand-cyan transition-colors flex items-center space-x-1 tracking-wider cursor-pointer group/btn ${
                      theme === "dark" ? "text-white" : "text-slate-700 hover:text-brand-blue"
                    }`}
                    id={`project-discuss-${project.id}`}
                  >
                    <span>Discuss Product</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Product Eng Pledging Info Box */}
        <div className={`mt-16 border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6 relative z-10 transition-all duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-tr from-brand-cyan/5 to-transparent border-brand-cyan/15"
            : "bg-slate-50 border-slate-200 shadow-sm"
        }`} id="portfolio-banner">
          <div className="flex items-center space-x-4 text-left">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-brand-cyan/10 text-brand-cyan`}>
              <Briefcase className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className={`font-display font-semibold text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Zero Visual Compromise Delivery Model
              </div>
              <p className={`font-sans text-xs mt-1 max-w-xl ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>
                We don't use dated layouts, bloated templates, or sluggish third-party widget tools. peerlynk labs is a premium bespoke visual engineering studio shipping responsive client codebases and cloud-native databases on custom-scoped commitments.
              </p>
            </div>
          </div>
          <div className={`font-mono text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg border shrink-0 ${
            theme === "dark"
              ? "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20"
              : "text-brand-blue bg-brand-blue/10 border-brand-blue/20"
          }`}>
            PROJECT-BASED ENGAGEMENT MODEL
          </div>
        </div>

      </div>
    </section>
  );
}
