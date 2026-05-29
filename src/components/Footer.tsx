import * as React from "react";
import { useState, useEffect } from "react";
import { BRAND_CONFIG } from "../data";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ChevronRight, 
  MessageSquareText, 
  Shield, 
  Sparkles, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  MessageCircle, 
  ArrowRight, 
  Zap, 
  Sun, 
  Moon, 
  Cpu, 
  ExternalLink 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  theme: "dark" | "light";
  onToggleTheme?: () => void;
}

export default function Footer({ onNavClick, theme, onToggleTheme }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHoveringCta, setIsHoveringCta] = useState(false);

  // Quick action links
  const companyLinks = [
    { label: "Home Base", id: "home" },
    { label: "Our Work", id: "portfolio" },
    { label: "Elite Team", id: "team" },
    { label: "Technologies", id: "technologies" },
    { label: "Process Sprints", id: "process" },
    { label: "FAQs Desk", id: "faq" },
    { label: "Contact Us", id: "contact" }
  ];

  const studioServices = [
    { label: "Website Development", id: "services" },
    { label: "Mobile App Development", id: "services" },
    { label: "Full Stack Platforms", id: "services" },
    { label: "Dashboard Systems", id: "services" },
    { label: "AI Integrations", id: "services" },
    { label: "UI/UX Design", id: "services" },
    { label: "Bug Fixing & Upgrades", id: "services" }
  ];

  const handleCtaMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative w-full overflow-hidden" id="footer-section">
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. TOP PREMIUM CTA SECTION (ABOVE FOOTER FOOTPRINT) */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className={`relative px-6 md:px-12 py-20 max-w-7xl mx-auto z-10 transition-colors duration-500`}>
        <motion.div
          onMouseMove={handleCtaMouseMove}
          onMouseEnter={() => setIsHoveringCta(true)}
          onMouseLeave={() => setIsHoveringCta(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative rounded-3xl overflow-hidden border p-8 md:p-16 text-center shadow-2xl transition-all duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-b from-brand-dark/80 to-brand-darker/95 border-white/5 shadow-brand-cyan/5"
              : "bg-white border-slate-200 shadow-slate-200/50"
          }`}
          id="ready-cta-card"
        >
          {/* Animated glow ray background inside CTA */}
          {theme === "dark" && (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <div 
                className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15 transition-all duration-300 pointer-events-none"
                style={{
                  top: `${coords.y - 250}px`,
                  left: `${coords.x - 250}px`,
                  background: "radial-gradient(circle, #06b6d4 0%, #8b5cf6 65%, transparent 100%)"
                }}
              />
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse duration-[10000ms]" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
            </div>
          )}

          {/* Clean ambient mesh line vectors */}
          <div 
            className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.012)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none z-0 ${
              theme === "dark" ? "opacity-100" : "opacity-35"
            }`}
            style={{
              maskImage: "radial-gradient(ellipse at center, white 50%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, white 50%, transparent 100%)"
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">
            
            {/* Elegant Micro-pill logo tag */}
            <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border shadow-sm ${
              theme === "dark"
                ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                : "bg-brand-cyan/5 border-brand-cyan/10 text-brand-blue"
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest font-black">
                LEAP INTO NEXT-GEN SPACES
              </span>
            </div>

            {/* Glowing Headline: Adaptive clamped fonts */}
            <h2 className={`font-display font-extrabold text-3xl sm:text-4xl md:text-5.5xl tracking-tight leading-none ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
              Ready to Build <br className="xs:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
                Something Modern?
              </span>
            </h2>

            {/* Premium, relaxed bio descriptions */}
            <p className={`font-sans text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-slate-600 font-medium"
            }`}>
              Let’s create scalable websites, apps, dashboards, and digital experiences together. Harness our strict technical ecosystems to scale your operations effortlessly.
            </p>

            {/* Interaction Action Panel with dynamic CTA hovers */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavClick("contact")}
                className="group w-full sm:w-auto bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-white px-8 py-4.5 rounded-xl text-sm font-bold shadow-xl hover:shadow-brand-cyan/20 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer"
                id="cta-start-project-v3"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4.5 h-4.5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavClick("contact")}
                className={`group w-full sm:w-auto px-7 py-4.5 rounded-xl text-sm font-bold border transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 text-white border-white/10"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-250 shadow-sm"
                }`}
                id="cta-consult-v3"
              >
                <span>Contact Us</span>
              </motion.button>
            </div>

            {/* Status Live desk updates snippet */}
            <div className={`flex items-center space-x-1.5 font-mono text-[9px] tracking-tight font-bold pt-3 ${
              theme === "dark" ? "text-gray-500" : "text-slate-450"
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>COMMUNICATION HANDSHAKE COMPLETED • SLACK DIRECT CHANNELS OPERATIONAL</span>
            </div>

          </div>
        </motion.div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. THE GRAND FOUR-COLUMN PROFESSIONAL FOOTER CONTAINER */}
      {/* ──────────────────────────────────────────────────────── */}
      <footer className={`relative pt-16 pb-12 transition-colors duration-500 border-t ${
        theme === "dark" 
          ? "bg-brand-darker border-white/5 shadow-[inset_0_2px_20px_rgba(0,0,0,0.8)]" 
          : "bg-slate-50 border-slate-200/80"
      }`}>
        
        {/* Absolute Glowing spots in footer */}
        {theme === "dark" && (
          <>
            <div className="absolute right-[-10%] bottom-0 w-[40rem] h-[40rem] rounded-full glow-spot-purple pointer-events-none z-0 opacity-15" />
            <div className="absolute left-[-15%] top-20 w-[35rem] h-[35rem] rounded-full glow-spot-blue pointer-events-none z-0 opacity-15" />
          </>
        )}

        {/* Outer Grid lines wrapper */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.007)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.007)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 ${
          theme === "dark" ? "opacity-100" : "opacity-35"
        }`} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Main Footer Layout: 4 columns on Desktop, 2 on Tablet, 1 on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 text-left">
            
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* COLUMN 1 — BRAND AREA INFORMATION PANEL */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              
              <button
                onClick={() => onNavClick("home")}
                className="flex items-center space-x-3 cursor-pointer group text-left w-fit"
                id="footer-logo-btn-v3"
              >
                {/* Visual Identity Logo Icon */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple p-[1px] shadow-lg shadow-brand-cyan/20 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-x-0 top-0 h-[40%] bg-white/20 blur-[1px] z-1" />
                  <div className={`w-full h-full rounded-[11px] flex items-center justify-center font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-base ${
                    theme === "dark" ? "bg-brand-darker" : "bg-white"
                  }`}>
                    PL
                  </div>
                </div>

                <div>
                  <div className={`font-display font-black text-xl tracking-tight transition-colors flex items-center gap-1.5 ${
                    theme === "dark" ? "text-white group-hover:text-brand-cyan" : "text-slate-900 group-hover:text-brand-blue"
                  }`}>
                    <span>{BRAND_CONFIG.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse shrink-0" />
                  </div>
                  <div className={`font-mono text-[9px] tracking-widest uppercase ${
                    theme === "dark" ? "text-gray-500" : "text-slate-400"
                  }`}>
                    {BRAND_CONFIG.domain}
                  </div>
                </div>
              </button>

              <div className="space-y-3.5">
                <p className={`font-sans text-xs sm:text-sm font-semibold tracking-tight ${
                  theme === "dark" ? "text-gray-200" : "text-slate-800"
                }`}>
                  {BRAND_CONFIG.tagline}
                </p>
                <p className={`font-sans text-xs sm:text-sm leading-relaxed max-w-sm ${
                  theme === "dark" ? "text-gray-400 font-normal" : "text-slate-600 font-medium"
                }`}>
                  We build websites, apps, dashboards, and scalable digital solutions with modern technologies and premium user experiences. Designed and compiled strictly in elite TypeScript ecosystems.
                </p>
              </div>

              {/* Verified Badge and Social Portals */}
              <div className="flex flex-col space-y-4 pt-1">
                <div className={`flex items-center space-x-2 border px-3 py-1.5 rounded-xl w-fit ${
                  theme === "dark" 
                    ? "bg-white/5 border-white/5 text-gray-400" 
                    : "bg-slate-100 border-slate-200/60 text-slate-650 font-semibold shadow-inner"
                }`}>
                  <Shield className="w-4 h-4 text-brand-cyan shrink-0 animate-pulse" />
                  <span className="font-mono text-[8.5px] uppercase tracking-widest font-black">
                    COMPRESSION OK • SECURE HANDSHAKES
                  </span>
                </div>

                {/* Social media media micro-interactive blocks */}
                <div className="flex items-center space-x-3.5" id="footer-social-panel">
                  {[
                    { icon: Github, link: BRAND_CONFIG.github, label: "GitHub" },
                    { icon: Linkedin, link: BRAND_CONFIG.linkedin, label: "LinkedIn" },
                    { icon: Instagram, link: BRAND_CONFIG.instagram, label: "Instagram" },
                    { icon: Twitter, link: BRAND_CONFIG.x, label: "Twitter" }
                  ].map((soc, i) => (
                    <motion.a
                      key={i}
                      href={soc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={soc.label}
                      whileHover={{ y: -3, scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm ${
                        theme === "dark"
                          ? "bg-white/5 border-white/5 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/20 hover:bg-brand-cyan/5"
                          : "bg-white border-slate-200/80 text-slate-600 hover:text-brand-blue hover:border-brand-blue/30 shadow shadow-slate-100"
                      }`}
                      id={`social-link-${soc.label.toLowerCase()}`}
                    >
                      <soc.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* COLUMN 2 — CORE ENGINEERING SERVICES MAP   */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="lg:col-span-2.5">
              <h4 className={`font-mono text-[10px] uppercase tracking-widest mb-6 font-black border-b pb-2.5 ${
                theme === "dark" ? "text-white/50 border-white/5" : "text-slate-900/60 border-slate-200"
              }`}>
                Services
              </h4>
              <ul className="space-y-3">
                {studioServices.map((serv, index) => (
                  <li key={index}>
                    <button
                      onClick={() => onNavClick(serv.id)}
                      className={`group/item text-left font-sans text-xs sm:text-sm tracking-tight transition-all duration-300 cursor-pointer flex items-center space-x-1 w-full ${
                        theme === "dark" 
                          ? "text-gray-400 hover:text-brand-cyan" 
                          : "text-slate-600 hover:text-brand-blue font-medium"
                      }`}
                      id={`footer-service-${serv.label.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full scale-0 group-hover/item:scale-100 transition-transform duration-300 shrink-0 ${
                        theme === "dark" ? "bg-brand-cyan" : "bg-brand-blue"
                      }`} />
                      <span className="relative py-0.5">
                        {serv.label}
                        <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover/item:w-full ${
                          theme === "dark" ? "bg-brand-cyan" : "bg-brand-blue"
                        }`} />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* COLUMN 3 — COMPANY QUICK REDIRECT NAV MAP */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="lg:col-span-2.5">
              <h4 className={`font-mono text-[10px] uppercase tracking-widest mb-6 font-black border-b pb-2.5 ${
                theme === "dark" ? "text-white/50 border-white/5" : "text-slate-900/60 border-slate-200"
              }`}>
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavClick(link.id)}
                      className={`group/item font-sans text-xs sm:text-sm tracking-tight transition-all duration-300 cursor-pointer flex items-center space-x-1.5 w-full text-left ${
                        theme === "dark" 
                          ? "text-gray-400 hover:text-white" 
                          : "text-slate-600 hover:text-slate-950 font-semibold"
                      }`}
                      id={`footer-company-nav-${link.id}`}
                    >
                      <ChevronRight className={`w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 shrink-0 ${
                        theme === "dark" ? "text-brand-cyan" : "text-brand-blue"
                      }`} />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* COLUMN 4 — DIRECT CONTACT & PLACEMENT DESK */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="lg:col-span-3 flex flex-col space-y-6">
              <h4 className={`font-mono text-[10px] uppercase tracking-widest mb-0 font-black border-b pb-2.5 ${
                theme === "dark" ? "text-white/50 border-white/5" : "text-slate-900/60 border-slate-200"
              }`}>
                Contact
              </h4>

              <div className="space-y-4 pt-1">
                {/* Location Box */}
                <div className={`flex items-start space-x-3 text-xs sm:text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-slate-700 font-medium"
                }`}>
                  <MapPin className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-black text-[9px] uppercase tracking-widest font-mono text-gray-500">Location</span>
                    <span className="text-[12px] sm:text-sm">{BRAND_CONFIG.location}</span>
                  </div>
                </div>

                {/* Direct Phone Hub */}
                <a 
                  href={`tel:${BRAND_CONFIG.phone.replace(/\s+/g, "")}`} 
                  className={`flex items-start space-x-3 text-xs sm:text-sm group/contact transition-colors ${
                    theme === "dark" ? "text-gray-300 hover:text-brand-cyan" : "text-slate-705 text-slate-700 hover:text-brand-blue font-medium"
                  }`}
                >
                  <Phone className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-black text-[9px] uppercase tracking-widest font-mono text-gray-500">Phone Support</span>
                    <span className="text-[12px] sm:text-sm">{BRAND_CONFIG.phone}</span>
                  </div>
                </a>

                {/* Clickable WhatsApp Portal */}
                <a 
                  href={`https://wa.me/91${BRAND_CONFIG.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-start space-x-3 text-xs sm:text-sm group/contact transition-colors ${
                    theme === "dark" ? "text-gray-300 hover:text-emerald-400" : "text-slate-700 hover:text-emerald-600 font-medium"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-black text-[9px] uppercase tracking-widest font-mono text-gray-500">WhatsApp Hub</span>
                    <span className="text-[12px] sm:text-sm font-semibold text-emerald-500 group-hover/contact:underline">
                      +91 {BRAND_CONFIG.whatsapp}
                    </span>
                  </div>
                </a>

                {/* Direct Mail with Interactive Clipboard Copy */}
                <div className="flex flex-col space-y-1">
                  <div className={`flex items-start space-x-3 text-xs sm:text-sm`}>
                    <Mail className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <div className="w-full">
                      <span className="block font-black text-[9px] uppercase tracking-widest font-mono text-gray-500">Business Mail</span>
                      <div className="flex items-center justify-between gap-1.5 w-full">
                        <span className={`text-[12px] sm:text-sm break-all font-mono ${
                          theme === "dark" ? "text-gray-300" : "text-slate-700"
                        }`}>{BRAND_CONFIG.email}</span>
                        <button
                          onClick={handleCopyEmail}
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded cursor-pointer shrink-0 transition-all ${
                            copiedEmail
                              ? "bg-emerald-500/10 text-emerald-400"
                              : theme === "dark"
                                ? "bg-white/5 hover:bg-white/10 text-gray-400"
                                : "bg-slate-200/60 hover:bg-slate-200 text-slate-600"
                          }`}
                          id="footer-email-copy"
                        >
                          {copiedEmail ? "COPIED" : "COPY"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start a project glass button in contact column */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavClick("contact")}
                className={`w-full font-bold py-3.5 px-4.5 rounded-xl text-xs border transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm relative overflow-hidden ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 text-white border-brand-cyan/30 hover:border-brand-cyan/50 hover:from-brand-cyan/30"
                    : "bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow shadow-slate-100"
                }`}
                id="footer-cta-project-btn-v3"
              >
                <div className="absolute inset-x-0 top-0 h-[40%] bg-white/10 blur-[1px]" />
                <Cpu className="w-4 h-4 text-brand-cyan animate-pulse" />
                <span>Start a Project</span>
              </motion.button>

            </div>

          </div>

          {/* ──────────────────────────────────────────────────────── */}
          {/* 3. FOOTER LOWER SHEETS: COPYRIGHT, UTILITIES, TOGGLER     */}
          {/* ──────────────────────────────────────────────────────── */}
          <div className="mt-16 pt-8 border-t border-brand-light flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 relative z-10">
            
            {/* Multi-gradient transition dividing line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent animate-pulse" />

            <div className={`space-y-1.5 text-xs font-mono select-none ${
              theme === "dark" ? "text-gray-500" : "text-slate-500 font-medium"
            }`}>
              <p className="tracking-tight">
                &copy; {currentYear} <span className={theme === "dark" ? "text-gray-300 font-bold" : "text-slate-800 font-bold"}>{BRAND_CONFIG.name}</span> — Engineering Modern Digital Products.
              </p>
              <p className="text-[10px] opacity-75">
                Designed & Engineered with premium quality by peerlynk labs.
              </p>
            </div>

            {/* Dark & Light Switcher Core & HQ */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-5">
              
              <div className={`flex items-center space-x-1.5 font-mono text-[10px] ${
                theme === "dark" ? "text-gray-500" : "text-slate-550 text-slate-500 font-semibold"
              }`}>
                <Globe className="w-3.5 h-3.5 text-brand-cyan animate-spin duration-10000 shrink-0" />
                <span>HQ: New Delhi, India</span>
              </div>

              <div className={`h-3 w-[1px] hidden sm:block ${theme === "dark" ? "bg-white/10" : "bg-slate-300"}`} />

              <div className={`flex items-center space-x-1.5 font-mono text-[10px] ${
                theme === "dark" ? "text-gray-500" : "text-slate-500 font-semibold"
              }`}>
                <Zap className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                <span>Modern Systems Pass</span>
              </div>

              {/* Interactive Theme Toggler */}
              {onToggleTheme && (
                <>
                  <div className={`h-3 w-[1px] hidden sm:block ${theme === "dark" ? "bg-white/10" : "bg-slate-300"}`} />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onToggleTheme}
                    className={`p-2.5 rounded-xl border flex items-center justify-center cursor-pointer transition-all ${
                      theme === "dark"
                        ? "bg-white/5 border-white/5 text-brand-cyan hover:bg-white/10"
                        : "bg-white border-slate-300 text-brand-blue hover:bg-slate-100 shadow"
                    }`}
                    aria-label="Toggle Theme Mode"
                    id="footer-theme-toggle-v3"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-4 h-4 text-yellow-400" />
                    ) : (
                      <Moon className="w-4 h-4 text-indigo-500" />
                    )}
                  </motion.button>
                </>
              )}

            </div>

          </div>

        </div>
      </footer>

    </section>
  );
}
