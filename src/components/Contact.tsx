import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Copy, Check, Instagram, Linkedin, Twitter, Github, Trash2, HelpCircle } from "lucide-react";
import { BRAND_CONFIG } from "../data";
import { ContactSubmission } from "../types";

interface ContactProps {
  initialServiceNeeded?: string;
  initialDescription?: string;
  onClearServiceSync?: () => void;
  theme: "dark" | "light";
}

export default function Contact({ initialServiceNeeded = "", initialDescription = "", onClearServiceSync, theme }: ContactProps) {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceNeeded: "Website Development",
    projectType: "Complete Product Design",
    budgetRange: "$5,000 - $15,000",
    description: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  const formRef = useRef<HTMLDivElement>(null);

  // Sync inputs when user clicks service matrices or project discussions
  useEffect(() => {
    if (initialServiceNeeded) {
      setFormData(prev => ({
        ...prev,
        serviceNeeded: initialServiceNeeded.split(",")[0] || initialServiceNeeded,
        description: initialDescription
      }));
      
      // Auto-scroll inside contact panel gently
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [initialServiceNeeded, initialDescription]);

  // Load existing inquiries from localStorage for realistic offline database persistence
  useEffect(() => {
    try {
      const stored = localStorage.getItem("peerlynk_inquiries");
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Storage reading bypassed", e);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
        return next;
      });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please input a valid email layout";
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      nextErrors.phone = "Invalid phone structure (numbers only)";
    }
    if (!formData.description.trim() || formData.description.length < 10) {
      nextErrors.description = "Project description must be at least 10 characters";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate elite secure pipeline delay
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: "PL-" + Math.floor(Math.random() * 90000 + 10000),
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName || "Independent Creator / Startup",
        serviceNeeded: formData.serviceNeeded,
        projectType: formData.projectType,
        budgetRange: formData.budgetRange,
        description: formData.description,
        timestamp: new Date().toLocaleString()
      };

      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      try {
        localStorage.setItem("peerlynk_inquiries", JSON.stringify(updated));
      } catch (err) {
        console.warn("Storage save bypassed", err);
      }

      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset input fields but retain category settings
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        serviceNeeded: "Website Development",
        projectType: "Complete Product Design",
        budgetRange: "$5,000 - $15,000",
        description: ""
      });

      if (onClearServiceSync) onClearServiceSync();
    }, 1500);
  };

  const deleteSubmission = (id: string) => {
    const updated = submissions.filter(item => item.id !== id);
    setSubmissions(updated);
    try {
      localStorage.setItem("peerlynk_inquiries", JSON.stringify(updated));
    } catch (err) {
      console.warn("Storage delete bypassed", err);
    }
  };

  const budgets = [
    "< $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+"
  ];

  const servicesOptionList = [
    "Website Development",
    "Mobile App Development",
    "Full Stack Application Development",
    "Custom Software Development",
    "Startup MVP Development",
    "Admin Dashboard Development",
    "Website Redesign",
    "App UI Improvements",
    "Feature Integration",
    "Performance Optimization",
    "AI Integration",
    "Custom Solutions API"
  ];

  return (
    <section id="contact" ref={formRef} className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-300 ${
      theme === "dark" ? "bg-brand-darker border-t border-white/5" : "bg-white border-t border-slate-200"
    }`}>
      {/* Background neon visual indicators - Dark Mode Only */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/4 left-1/10 w-[45rem] h-[45rem] rounded-full glow-spot-cyan pointer-events-none z-0" />
          <div className="absolute bottom-1/4 right-1/10 w-[40rem] h-[40rem] rounded-full glow-spot-purple pointer-events-none z-0 opacity-40" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Upper Title Description block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border mb-4 ${
            theme === "dark"
              ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
              : "bg-brand-cyan/10 border-brand-cyan/30 text-brand-blue"
          }`}>
            <Send className="w-4 h-4" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
            Let’s Build Your Next Digital Product
          </h2>
          <p className={`font-sans text-sm sm:text-base mt-4 max-w-xl ${
            theme === "dark" ? "text-gray-400" : "text-slate-600"
          }`}>
            Have a clear project plan or an outdated stack that needs surgical re-engineering? Submit your requirements below to instantly notify our engineering desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="contact-split-layout">
          
          {/* Left Column: Hand-crafted Contact details and Social tiles */}
          <div className="col-span-1 lg:col-span-5 flex flex-col space-y-8 lg:sticky lg:top-28">
            
            <div className={`p-8 rounded-2xl border space-y-6 ${
              theme === "dark"
                ? "glass-effect border-white/5"
                : "bg-slate-50 border-slate-200 shadow-sm shadow-slate-100"
            }`}>
              
              <h3 className={`font-display font-semibold text-xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Core Studio Desk Info
              </h3>
              <p className={`font-sans text-xs sm:text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>
                Connect directly with peerlynk labs. We prefer straight, jargon-free channels. Coordinate sprints, share credentials, and view metrics live.
              </p>

              <div className={`space-y-4 pt-4 border-t ${theme === "dark" ? "border-white/5" : "border-slate-200"}`}>
                
                {/* Physical Location */}
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    theme === "dark" ? "bg-white/5 text-brand-purple" : "bg-slate-100 text-brand-purple"
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                      theme === "dark" ? "text-gray-500" : "text-slate-400"
                    }`}>Location HQ</div>
                    <div className={`font-sans text-sm mt-1 font-medium ${theme === "dark" ? "text-white" : "text-slate-900"}`}>{BRAND_CONFIG.location}</div>
                  </div>
                </div>

                {/* Direct Phone Call */}
                <a href={`tel:${BRAND_CONFIG.phone}`} className={`flex items-start space-x-4 p-2 rounded-xl transition-all group/link ${
                  theme === "dark" ? "hover:bg-white/5" : "hover:bg-slate-100"
                }`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    theme === "dark"
                      ? "bg-white/5 text-brand-cyan group-hover/link:bg-brand-cyan/20 group-hover/link:text-brand-cyan"
                      : "bg-slate-100 text-brand-blue group-hover/link:bg-brand-blue/10 group-hover/link:text-brand-blue"
                  }`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                      theme === "dark" ? "text-gray-500" : "text-slate-400"
                    }`}>24/7 Hot Line</div>
                    <div className={`font-sans text-sm mt-0.5 font-semibold transition-colors ${
                      theme === "dark" ? "text-white group-hover/link:text-brand-cyan" : "text-slate-900 group-hover/link:text-brand-blue"
                    }`}>{BRAND_CONFIG.phone}</div>
                  </div>
                </a>

                {/* Direct Email Address Copy desk */}
                <div className={`flex items-start justify-between p-2 rounded-xl transition-all group/link ${
                  theme === "dark" ? "hover:bg-white/5" : "hover:bg-slate-100"
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      theme === "dark"
                        ? "bg-white/5 text-brand-blue group-hover/link:bg-brand-blue/20 group-hover/link:text-brand-cyan"
                        : "bg-slate-100 text-brand-blue group-hover/link:bg-brand-blue/10 group-hover/link:text-brand-blue"
                    }`}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                        theme === "dark" ? "text-gray-500" : "text-slate-400"
                      }`}>Official Inbox</div>
                      <div className={`font-sans text-sm mt-0.5 font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>{BRAND_CONFIG.email}</div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCopyEmail}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
                      theme === "dark" ? "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-500"
                    }`}
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-brand-cyan" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Instant WhatsApp Sync */}
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="flex items-start space-x-4 p-2 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/15 transition-all group/link"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-green-400 stroke-[0]" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-green-500 uppercase tracking-widest font-semibold">Instant Response</div>
                    <div className="font-sans text-sm text-green-400 mt-0.5 font-bold flex items-center space-x-1.5 animate-pulse">
                      <span>WhatsApp Direct Channel</span>
                    </div>
                  </div>
                </a>

              </div>
            </div>

            {/* Premium Social Links Cards Grid */}
            <div className="grid grid-cols-4 gap-4" id="contact-social-tiles">
              {[
                { label: "Instagram", url: BRAND_CONFIG.instagram, icon: Instagram, color: "hover:text-pink-500 hover:border-pink-500/30" },
                { label: "LinkedIn", url: BRAND_CONFIG.linkedin, icon: Linkedin, color: "hover:text-blue-500 hover:border-blue-500/30" },
                { label: "X / Twitter", url: BRAND_CONFIG.x, icon: Twitter, color: "hover:text-sky-400 hover:border-sky-400/30" },
                { label: "GitHub Hub", url: BRAND_CONFIG.github, icon: Github, color: "hover:text-purple-400 hover:border-purple-400/30" }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`p-4.5 rounded-xl border flex flex-col items-center justify-center transition-all ${social.color} hover:-translate-y-0.5 ${
                      theme === "dark"
                        ? "glass-effect border-white/5 text-gray-400"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 shadow-sm"
                    }`}
                  >
                    <Icon className="w-5 h-5 mb-1" />
                    <span className="font-sans text-[9px] font-bold">{social.label.split(" ")[0]}</span>
                  </a>
                );
              })}
            </div>

          </div>

          {/* Right Column: Premium, Interactive Contact Form */}
          <div className="col-span-1 lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-2xl border relative ${
              theme === "dark"
                ? "glass-effect border-white/10"
                : "bg-slate-50 border-slate-200 shadow-md shadow-slate-100"
            }`} id="contact-interactive-desk">
              
              {/* Dynamic decorative backdrop header sync status indicators */}
              {initialServiceNeeded && (
                <div className={`mb-6 p-4 rounded-xl border flex items-center justify-between text-left animate-in fade-in slide-in-from-top-1 ${
                  theme === "dark"
                    ? "bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan"
                    : "bg-brand-cyan/10 border-brand-cyan/40 text-brand-blue shadow-sm"
                }`}>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest font-bold">Checklist Synchronized</div>
                    <p className={`font-sans text-xs mt-1 ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}>
                      Specifications for <span className={`${theme === "dark" ? "text-white" : "text-slate-900"} font-bold`}>{formData.serviceNeeded}</span> have been loaded!
                    </p>
                  </div>
                  <button
                    onClick={onClearServiceSync}
                    className={`font-mono text-[10px] underline cursor-pointer px-2 ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-slate-500 hover:text-slate-800"}`}
                  >
                    Reset Form
                  </button>
                </div>
              )}

              {showSuccess ? (
                /* visual Form Success receipt layout block */
                <div className="text-center py-10 flex flex-col items-center space-y-6" id="submission-success">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/20 border border-brand-cyan/50 flex items-center justify-center text-brand-cyan animate-bounce">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className={`font-display font-bold text-2xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Project Inquiry Received!</h3>
                    <p className={`font-sans text-sm max-w-lg ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>
                      Thank you for submitting specifications. Our core developers are reviewing the files and will issue a technical roadmap feedback within 24 hours.
                    </p>
                  </div>

                  {/* Summary of what we processed in visual ticket structure */}
                  <div className={`p-5 rounded-xl border w-full text-left font-mono text-xs space-y-2.5 ${
                    theme === "dark" ? "bg-brand-darker border-white/5 text-gray-300" : "bg-white border-slate-200 text-slate-850 shadow-inner"
                  }`}>
                    <div className={`flex justify-between border-b pb-2 font-bold text-[10px] uppercase tracking-widest ${
                      theme === "dark" ? "border-white/5 text-gray-500" : "border-slate-100 text-slate-400"
                    }`}>
                      <span>Receipt ID</span>
                      <span className="text-brand-cyan">PL-PENDING</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={theme === "dark" ? "text-gray-500" : "text-slate-400"}>Service Area:</span>
                      <span className={`${theme === "dark" ? "text-white" : "text-slate-900"} font-semibold`}>{formData.serviceNeeded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={theme === "dark" ? "text-gray-500" : "text-slate-400"}>Project Type:</span>
                      <span className={theme === "dark" ? "text-white" : "text-slate-800"}>{formData.projectType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={theme === "dark" ? "text-gray-500" : "text-slate-400"}>Budget Range:</span>
                      <span className={`${theme === "dark" ? "text-brand-cyan" : "text-brand-blue"} font-bold`}>{formData.budgetRange}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowSuccess(false)}
                    className={`font-semibold px-6 py-2.5 rounded-xl text-sm border transition-colors cursor-pointer ${
                      theme === "dark" ? "bg-white/5 hover:bg-white/10 text-white border-white/10" : "bg-slate-150 hover:bg-slate-200 text-slate-700 border-slate-200"
                    }`}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                /* Standard dynamic form markup entry */
                <form onSubmit={handleSubmit} className="space-y-6" id="project-request-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Full Name field */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="fullName" className={`font-mono text-xs uppercase tracking-widest font-semibold ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Liam Sterling"
                        className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue tracking-normal transition-colors duration-250 ${
                          theme === "dark" 
                            ? "bg-brand-darker text-white placeholder-gray-600 focus:text-white" 
                            : "bg-white text-slate-900 placeholder-slate-400 border-slate-200 focus:bg-slate-50/20"
                        } ${errors.fullName ? "border-red-500/50 focus:border-red-500" : (theme === "dark" ? "border-white/5" : "border-slate-200")}`}
                      />
                      {errors.fullName && <span className="font-sans text-[11px] text-red-500">{errors.fullName}</span>}
                    </div>

                    {/* Email Address field */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className={`font-mono text-xs uppercase tracking-widest font-semibold ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors duration-250 ${
                          theme === "dark" 
                            ? "bg-brand-darker text-white placeholder-gray-600" 
                            : "bg-white text-slate-900 placeholder-slate-400 border-slate-200 focus:bg-slate-50/20"
                        } ${errors.email ? "border-red-500/50 focus:border-red-500" : (theme === "dark" ? "border-white/5" : "border-slate-200")}`}
                      />
                      {errors.email && <span className="font-sans text-[11px] text-red-500">{errors.email}</span>}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Phone Number Field */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className={`font-mono text-xs uppercase tracking-widest font-semibold ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9599865700"
                        className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors duration-250 ${
                          theme === "dark" 
                            ? "bg-brand-darker text-white placeholder-gray-600" 
                            : "bg-white text-slate-900 placeholder-slate-400 border-slate-200 focus:bg-slate-50/20"
                        } ${errors.phone ? "border-red-500/50 focus:border-red-500" : (theme === "dark" ? "border-white/5" : "border-slate-200")}`}
                      />
                      {errors.phone && <span className="font-sans text-[11px] text-red-500">{errors.phone}</span>}
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="companyName" className={`font-mono text-xs uppercase tracking-widest font-semibold ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Apex Studio Co."
                        className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors duration-250 ${
                          theme === "dark" 
                            ? "bg-brand-darker text-white placeholder-gray-600 border-white/5" 
                            : "bg-white text-slate-900 placeholder-slate-400 border-slate-200"
                        }`}
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Service needed drop selector */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="serviceNeeded" className={`font-mono text-xs uppercase tracking-widest font-semibold ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                        Service Needed
                      </label>
                      <select
                        name="serviceNeeded"
                        id="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleInputChange}
                        className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue cursor-pointer transition-colors ${
                          theme === "dark"
                            ? "bg-brand-darker text-gray-300 border-white/5 focus:text-white"
                            : "bg-white text-slate-700 border-slate-200 focus:text-slate-900"
                        }`}
                      >
                        {servicesOptionList.map((item) => (
                          <option key={item} value={item} className={theme === "light" ? "text-slate-900" : ""}>{item}</option>
                        ))}
                      </select>
                    </div>

                    {/* Project style select */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="projectType" className={`font-mono text-xs uppercase tracking-widest font-semibold ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                        Project Style
                      </label>
                      <select
                        name="projectType"
                        id="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className={`border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue cursor-pointer transition-colors ${
                          theme === "dark"
                            ? "bg-brand-darker text-gray-300 border-white/5 focus:text-white"
                            : "bg-white text-slate-700 border-slate-200 focus:text-slate-900"
                        }`}
                      >
                        <option value="Complete Product Design" className={theme === "light" ? "text-slate-900" : ""}>Complete Product Design</option>
                        <option value="Visual Redesign Overhaul" className={theme === "light" ? "text-slate-900" : ""}>Visual Redesign Overhaul</option>
                        <option value="Task/Bug fixing sprint" className={theme === "light" ? "text-slate-900" : ""}>Task/Bug fixing sprint</option>
                        <option value="Technical Consultation" className={theme === "light" ? "text-slate-900" : ""}>Technical Consultation Review</option>
                      </select>
                    </div>

                  </div>

                  {/* Budget Choice selector - buttons panel */}
                  <div className="flex flex-col space-y-2">
                    <label className={`font-mono text-xs uppercase tracking-widest font-semibold ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                      Budget Investment Target Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {budgets.map((b) => {
                        const isBudgetSelected = formData.budgetRange === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, budgetRange: b }))}
                            className={`px-4 py-3.5 rounded-xl text-center font-mono text-xs font-bold border transition-all cursor-pointer ${
                              isBudgetSelected
                                ? "bg-brand-blue border-brand-cyan text-white shadow-md shadow-brand-blue/15"
                                : theme === "dark"
                                  ? "bg-brand-darker hover:bg-brand-card-hover text-gray-400 hover:text-white border-white/5"
                                  : "bg-white border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900"
                            }`}
                            id={`budget-choice-${b.replace(/[$,+\s]/g, "-").replace(/--/g, "-")}`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project description editor */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-baseline">
                      <label htmlFor="description" className={`font-mono text-xs uppercase tracking-widest font-semibold ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                        Project Specifications Details *
                      </label>
                      <span className={`font-mono text-[10px] ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`}>Min 10 letters</span>
                    </div>
                    <textarea
                      name="description"
                      id="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Detail your goals... Include links to existing sites, desired timeframes and feature logs."
                      className={`border rounded-xl p-4 text-sm resize-y leading-relaxed focus:outline-none focus:border-brand-blue transition-colors duration-250 ${
                        theme === "dark" 
                          ? "bg-brand-darker text-white placeholder-gray-600 focus:text-white" 
                          : "bg-white text-slate-900 placeholder-slate-400 border-slate-200 focus:bg-slate-50/20"
                      } ${errors.description ? "border-red-500/50 focus:border-red-500" : (theme === "dark" ? "border-white/5" : "border-slate-200")}`}
                    />
                    {errors.description && <span className="font-sans text-[11px] text-red-500">{errors.description}</span>}
                  </div>

                  {/* Submit buttons */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple hover:opacity-95 text-white font-semibold py-4 px-6 rounded-xl text-sm shadow-lg shadow-brand-blue/15 transition-all flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-50"
                    id="submit-form-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                        <span>Transmitting Specifications...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 animate-bounce" />
                        <span>Transmit Specifications to Developer Desk</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Offline simulated database outputs showing previous submissions (Dynamic review log block) */}
        {submissions.length > 0 && (
          <div className={`mt-16 sm:mt-24 pt-12 border-t ${
            theme === "dark" ? "border-white/5" : "border-slate-200"
          }`} id="contact-submissions-preview">
            <div className={`flex items-center space-x-2 font-mono text-xs uppercase font-semibold mb-6 ${
              theme === "dark" ? "text-brand-purple" : "text-brand-blue"
            }`}>
              <HelpCircle className="w-4 h-4" />
              <span>Personal Inquiries Archive ({submissions.length})</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {submissions.map((sub) => (
                <div key={sub.id} className={`p-6 rounded-2xl border flex flex-col justify-between transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-brand-card/65 border-white/5"
                    : "bg-white border-slate-200 shadow-sm hover:bg-slate-50/50"
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className={`font-mono text-xs font-bold ${theme === "dark" ? "text-brand-cyan" : "text-brand-blue"}`}>{sub.id}</span>
                        <span className={`font-mono text-[9px] tracking-wider ml-2 px-2 py-0.5 rounded uppercase border ${
                          theme === "dark" ? "bg-white/5 text-gray-400 border-white/10" : "bg-slate-100 text-slate-500 border-slate-200"
                        }`}>
                          {sub.projectType}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => deleteSubmission(sub.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
                        title="Delete Inquiry Log"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className={`font-display font-semibold text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                      {sub.serviceNeeded}
                    </h4>
                    
                    <p className={`font-sans text-xs mt-2 line-clamp-2 ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>
                      {sub.description}
                    </p>
                  </div>

                  <div className={`mt-6 pt-4 border-t flex flex-wrap justify-between text-[11px] font-mono gap-2 ${
                    theme === "dark" ? "border-white/5 text-gray-500" : "border-slate-100 text-slate-400"
                  }`}>
                    <span>Contact: {sub.fullName}</span>
                    <span>Budget: {sub.budgetRange}</span>
                    <span>Synced: {sub.timestamp.split(",")[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
