import * as React from "react";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageSquareText, Sun, Moon } from "lucide-react";
import { BRAND_CONFIG } from "../data";
import { useRouter } from "../lib/router";

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const { path, navigate } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
    { label: "Work", url: "/work" },
    { label: "Team", url: "/team" },
    { label: "Technologies", url: "/technologies" },
    { label: "Process", url: "/process" },
    { label: "FAQ", url: "/faq" },
    { label: "Contact", url: "/contact" }
  ];

  const handleNavClick = (url: string) => {
    setIsOpen(false);
    navigate(url);
  };

  const isActive = (itemUrl: string) => {
    if (itemUrl === "/") return path === "/";
    return path.startsWith(itemUrl);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "bg-brand-dark/85 backdrop-blur-md border-b border-white/5 py-4 shadow-xl"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo and Concept Domain */}
        <button
          onClick={() => handleNavClick("/")}
          className="flex items-center space-x-3 cursor-pointer group text-left"
          id="nav-logo-btn"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple p-[1px] shadow-lg shadow-brand-cyan/20 group-hover:shadow-brand-blue/30 transition-all duration-300">
            <div className={`w-full h-full rounded-[11px] flex items-center justify-center px-1 text-center ${
              theme === "dark" ? "bg-brand-darker" : "bg-white"
            }`}>
              <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-sm tracking-wider">
                PL
              </span>
            </div>
          </div>
          <div className="text-left">
            <div className={`font-display font-black text-xl tracking-tight transition-colors duration-200 ${
              theme === "dark" ? "text-white group-hover:text-brand-cyan" : "text-slate-900 group-hover:text-brand-cyan"
            }`}>
              {BRAND_CONFIG.name}
            </div>
            <div className={`font-mono text-[9px] tracking-widest uppercase ${
              theme === "dark" ? "text-gray-500" : "text-slate-400"
            }`}>
              {BRAND_CONFIG.domain}
            </div>
          </div>
        </button>

        {/* Desktop Nav Routing Items */}
        <nav className={`hidden lg:flex items-center space-x-1 rounded-full p-1.5 border ${
          theme === "dark" ? "bg-white/5 border-white/5" : "bg-slate-200/50 border-slate-200/80"
        }`} id="nav-desktop-menu">
          {menuItems.map((item) => (
            <button
              key={item.url}
              onClick={() => handleNavClick(item.url)}
              className={`px-4 py-1.5 rounded-full font-sans text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive(item.url)
                  ? theme === "dark"
                    ? "bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 text-white border-white/10 shadow-sm border"
                    : "bg-white text-slate-950 border-slate-300 shadow-sm border"
                  : theme === "dark"
                    ? "text-gray-400 hover:text-white border border-transparent"
                    : "text-slate-650 hover:text-slate-950 border border-transparent"
              }`}
              id={`nav-link-${item.url.replace("/", "root")}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-xl transition-all duration-300 relative overflow-hidden flex items-center justify-center cursor-pointer border ${
              theme === "dark"
                ? "bg-white/5 border-white/10 text-brand-cyan hover:bg-white/10"
                : "bg-slate-100 border-slate-200 text-amber-500 hover:bg-slate-200/80"
            }`}
            id="nav-theme-toggle"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Sun className={`absolute w-5 h-5 transition-transform duration-500 ease-out ${
                theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
              }`} />
              <Moon className={`absolute w-5 h-5 transition-transform duration-500 ease-out ${
                theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
              }`} />
            </div>
          </button>

          <button
            onClick={() => handleNavClick("/contact")}
            className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg bg-gradient-to-br from-brand-cyan via-brand-blue to-brand-purple hover:text-white focus:outline-none cursor-pointer"
            id="nav-cta-contact"
          >
            <span className={`relative px-4 py-2 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 ${
              theme === "dark" ? "bg-brand-dark" : "bg-slate-900"
            }`}>
              <span className="flex items-center space-x-2">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </span>
          </button>
        </div>

        {/* Mobile menu and burger icon with theme toggle */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer border ${
              theme === "dark"
                ? "bg-white/5 border-white/10 text-brand-cyan hover:bg-white/10"
                : "bg-slate-100 border-slate-200 text-amber-500 hover:bg-slate-200"
            }`}
            id="nav-theme-toggle-mobile"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Sun className={`absolute w-5 h-5 transition-transform duration-500 ease-out ${
                theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
              }`} />
              <Moon className={`absolute w-5 h-5 transition-transform duration-500 ease-out ${
                theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
              }`} />
            </div>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg border shadow-md focus:outline-none cursor-pointer ${
              theme === "dark"
                ? "text-gray-400 hover:text-white bg-white/5 border-white/5"
                : "text-slate-600 hover:text-slate-950 bg-white border-slate-200"
            }`}
            aria-label="Toggle Menu"
            id="nav-hamburger-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphic Drawer with Slide Transition */}
      {isOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 w-full backdrop-blur-xl border-b py-6 px-6 z-40 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 ${
          theme === "dark" ? "bg-brand-dark/95 border-white/5" : "bg-white/95 border-slate-200"
        }`} id="nav-mobile-drawer">
          <div className="flex flex-col space-y-4">
            <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest pb-2 border-b border-white/5">
              Launch Menu Nav Space
            </div>
            {menuItems.map((item) => (
              <button
                key={item.url}
                onClick={() => handleNavClick(item.url)}
                className={`py-2.5 px-4 rounded-xl text-left font-sans text-base font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                  isActive(item.url)
                    ? theme === "dark"
                      ? "bg-gradient-to-r from-brand-blue/15 to-brand-cyan/15 text-brand-cyan border-l-2 border-brand-cyan"
                      : "bg-slate-100 text-brand-blue border-l-2 border-brand-blue"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-white/5"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
                id={`nav-link-mobile-${item.url.replace("/", "root")}`}
              >
                <span>{item.label}</span>
                <ArrowRight className={`w-4 h-4 opacity-0 transition-all ${isActive(item.url) ? "opacity-100 translate-x-0" : "group-hover:opacity-100 group-hover:translate-x-1"}`} />
              </button>
            ))}
            <div className="pt-4 border-t border-white/5 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/contact");
                }}
                className="w-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-cyan text-white py-3.5 px-4 rounded-xl text-center font-bold flex items-center justify-center space-x-2 shadow-lg shadow-brand-blue/25 cursor-pointer"
                id="nav-mobile-cta"
              >
                <MessageSquareText className="w-4 h-4 animate-bounce" />
                <span>Start project direct</span>
              </button>
              <div className="text-center font-mono text-[10px] text-gray-600 font-medium">
                labs@peerlynk.com • +91 7599865700
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
