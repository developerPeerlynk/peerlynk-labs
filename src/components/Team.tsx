import { motion } from "motion/react";
import { Github, Linkedin, Briefcase, Mail, Sparkles, ArrowRight, UserCheck } from "lucide-react";

interface TeamProps {
  theme: "dark" | "light";
  onJoinClick: (role: string, desc: string) => void;
}

const TEAM_MEMBERS = [
  {
    id: "dhruv-pal",
    name: "Dhruv Pal",
    role: "Founder & Software Engineer",
    description: "Focused on building scalable products, modern user experiences, full stack systems, and startup-focused digital platforms.",
    initials: "DP",
    colorBg: "from-brand-cyan via-brand-blue to-brand-purple",
    textColor: "text-brand-cyan",
    badgeBg: "bg-brand-cyan/10 border-brand-cyan/20",
    skills: ["System Architecture", "React", "Node.js", "Venture MVPs"],
    github: "https://github.com/peerlynk",
    linkedin: "https://linkedin.com/company/peerlynk"
  },
  {
    id: "akash",
    name: "Akash",
    role: "Software Developer & Full Stack Developer",
    description: "Works on frontend and backend systems, APIs, responsive interfaces, and scalable web applications.",
    initials: "AK",
    colorBg: "from-brand-blue to-cyan-500",
    textColor: "text-brand-blue",
    badgeBg: "bg-brand-blue/10 border-brand-blue/20",
    skills: ["Frontend Sockets", "Express APIs", "React Native", "Tailwind UI"],
    github: "https://github.com/peerlynk",
    linkedin: "https://linkedin.com/company/peerlynk"
  },
  {
    id: "diwakar-singh",
    name: "Diwakar Singh",
    role: "Full Stack Developer",
    description: "Specialized in full stack development, backend architecture, database systems, and modern application development.",
    initials: "DS",
    colorBg: "from-brand-purple to-purple-600",
    textColor: "text-brand-purple",
    badgeBg: "bg-brand-purple/10 border-brand-purple/20",
    skills: ["PostgreSQL", "Database Design", "Node Backend", "Server Deploy"],
    github: "https://github.com/peerlynk",
    linkedin: "https://linkedin.com/company/peerlynk"
  },
  {
    id: "ankit-pal",
    name: "Ankit Pal",
    role: "Data Analyst",
    description: "Focused on analytics, data processing, reporting systems, and data-driven insights for digital products.",
    initials: "AP",
    colorBg: "from-indigo-500 to-pink-500",
    textColor: "text-pink-500",
    badgeBg: "bg-pink-500/10 border-pink-500/20",
    skills: ["Data Pipelines", "Excel Metrics", "SQL Analytics", "Reporting Systems"],
    github: "https://github.com/peerlynk",
    linkedin: "https://linkedin.com/company/peerlynk"
  }
];

export default function Team({ theme, onJoinClick }: TeamProps) {
  const handleJoinTeam = () => {
    onJoinClick(
      "Join the Engineering Team",
      "I am interested in exploring engineering sync opportunities, project collaborations, or developer openings with the peerlynk labs team.\n\nMy primary technology focus is: "
    );
  };

  return (
    <section
      id="team"
      className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-300 border-t border-b ${
        theme === "dark" ? "bg-brand-darker border-white/5" : "bg-white border-slate-200"
      }`}
    >
      {/* Background Animated Gradient Globs - Dark Mode Only */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] rounded-full glow-spot-blue pointer-events-none z-0 opacity-40 animate-pulse" />
          <div className="absolute bottom-1/4 left-10 w-[35rem] h-[35rem] rounded-full glow-spot-purple pointer-events-none z-0 opacity-20" />
        </>
      )}

      {/* Decorative Grid Patterns */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.012)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0 ${
        theme === "dark" ? "opacity-100" : "opacity-30"
      }`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading & Introduction Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border mb-4 bg-brand-purple/10 border-brand-purple/20 text-brand-purple`}>
            <Briefcase className="w-4 h-4 text-brand-purple" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase">
              Elite Engineering Core
            </span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
            Meet The Team
          </h2>
          <p className={`font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-2xl ${
            theme === "dark" ? "text-gray-400" : "text-slate-600"
          }`}>
            A passionate team focused on building modern digital products, scalable platforms, and high-quality software solutions. We coordinate directly to deliver clean software payloads.
          </p>
        </div>

        {/* Team Members Grid - Premium Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {TEAM_MEMBERS.map((member, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6, scale: 1.03, rotateX: 3, rotateY: -3 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 150, damping: 15, delay: index * 0.1 }}
                key={member.id}
                id={`team-member-${member.id}`}
                className={`group relative p-6 rounded-2xl border flex flex-col h-full overflow-hidden transition-all duration-300 ${
                  theme === "dark"
                    ? "glass-effect border-white/5 hover:border-brand-cyan/20 hover:bg-brand-card-hover/30 shadow-2xl shadow-black/10"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/50 shadow-md shadow-slate-100"
                }`}
              >
                {/* Glowing border accent on hover */}
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${member.colorBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

                {/* Sub-block Spot Light on dark mode cards */}
                {theme === "dark" && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 blur-[35px] pointer-events-none rounded-full" />
                )}

                {/* Circular/Rounded-Square Portrait Section */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative w-28 h-28">
                    {/* Ring glow effect */}
                    <div className={`absolute -inset-1 rounded-full bg-gradient-to-tr ${member.colorBg} opacity-0 group-hover:opacity-100 blur-[8px] transition-all duration-500 scale-105`} />
                    
                    {/* Main decorative design initials logo */}
                    <div className={`relative w-28 h-28 rounded-full bg-gradient-to-tr ${member.colorBg} p-[2px] transition-transform duration-500 group-hover:rotate-6`}>
                      <div className={`w-full h-full rounded-full flex items-center justify-center font-display font-extrabold text-2xl tracking-wider text-white shadow-inner ${
                        theme === "dark" ? "bg-brand-dark" : "bg-slate-900"
                      }`}>
                        {member.initials}
                      </div>
                    </div>

                    {/* Operational Online Ping Spot */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-brand-dark flex items-center justify-center shadow-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-100 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Role and Identity Info */}
                <div className="text-center flex-grow flex flex-col">
                  {/* Name */}
                  <h3 className={`font-display font-bold text-lg leading-tight transition-colors duration-200 ${
                    theme === "dark" ? "text-white group-hover:text-brand-cyan" : "text-slate-900 group-hover:text-brand-blue"
                  }`}>
                    {member.name}
                  </h3>

                  {/* Role Badge */}
                  <span className={`inline-block mt-2 mx-auto font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border ${
                    theme === "dark"
                      ? `${member.textColor} ${member.badgeBg}`
                      : `${member.textColor} ${member.badgeBg} font-semibold`
                  }`}>
                    {member.role}
                  </span>

                  {/* Operational details divider */}
                  <div className={`my-4 border-t ${theme === "dark" ? "border-white/5" : "border-slate-200"}`} />

                  {/* Description statement */}
                  <p className={`font-sans text-xs sm:text-sm leading-relaxed max-w-sm mx-auto flex-grow ${
                    theme === "dark" ? "text-gray-300" : "text-slate-600"
                  }`}>
                    {member.description}
                  </p>

                  {/* Skills/Tags display */}
                  <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${
                          theme === "dark"
                            ? "bg-white/5 border-white/5 text-gray-400"
                            : "bg-slate-100 border-slate-200 text-slate-500"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Attribution and contact social indicators */}
                <div className={`mt-6 pt-4 border-t flex items-center justify-center space-x-3.5 ${
                  theme === "dark" ? "border-white/5" : "border-slate-200"
                }`}>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      theme === "dark"
                        ? "bg-white/5 text-gray-400 hover:text-brand-cyan hover:bg-brand-cyan/10"
                        : "bg-slate-150 text-slate-500 hover:text-brand-blue hover:bg-slate-200"
                    }`}
                    title="LinkedIn Verification"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      theme === "dark"
                        ? "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                        : "bg-slate-150 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
                    }`}
                    title="GitHub Commits"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onJoinClick(`Sync with ${member.name}`, `I am exploring project planning. Please hook me up with ${member.name} for developer consultations.`)}
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      theme === "dark"
                        ? "bg-white/5 text-gray-400 hover:text-brand-purple hover:bg-brand-purple/10"
                        : "bg-slate-150 text-slate-500 hover:text-brand-purple hover:bg-slate-200"
                    }`}
                    title={`Contact ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Join our team dynamic CTA banner row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`border p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 relative z-10 transition-all duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-r from-brand-cyan/5 via-brand-purple/5 to-white/[0.01] border-white/5"
              : "bg-slate-50 border-slate-200 shadow-sm shadow-slate-100"
          }`}
          id="team-join-alliance"
        >
          <div className="flex items-center space-x-4 text-left">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-brand-cyan/10 text-brand-cyan`}>
              <UserCheck className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <div className={`font-display font-semibold text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Interested in Joining the Team?
              </div>
              <p className={`font-sans text-xs mt-0.5 max-w-xl ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>
                We are always seeking elite talent. If you are a high-end designer, full stack engineer, or analytical wizard, transmit your details to us.
              </p>
            </div>
          </div>
          
          <button
            onClick={handleJoinTeam}
            className={`w-full sm:w-auto font-semibold py-3 px-6 rounded-xl text-xs transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-2 shrink-0 ${
              theme === "dark"
                ? "bg-brand-purple hover:bg-brand-purple/90 text-white shadow-lg shadow-brand-purple/20"
                : "bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg shadow-brand-blue/15"
            }`}
            id="team-cta-join"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Apply / Join peerlynk</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
