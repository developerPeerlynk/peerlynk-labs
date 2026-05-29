import {
  ServiceCategory,
  TrustPoint,
  ProcessPhase,
  Technology,
  ProjectItem,
  TestimonialItem,
  FAQItem
} from "./types";

export const BRAND_CONFIG = {
  name: "peerlynk labs",
  shortName: "peerlynk",
  domain: "labs.peerlynk.com",
  phone: "+91 7599865700",
  whatsapp: "7599865700",
  email: "labs@peerlynk.com",
  location: "New Delhi, India",
  instagram: "https://instagram.com/peerlynk",
  linkedin: "https://linkedin.com/company/peerlynk",
  x: "https://x.com/peerlynk",
  github: "https://github.com/peerlynk",
  tagline: "We build and upgrade modern digital products."
};

export const SERVICE_CATEGORIES: { [key: string]: ServiceCategory } = {
  core: {
    title: "Core Development",
    subtitle: "End-to-end engineering of custom digital products designed for high performance.",
    services: [
      {
        id: "web-dev",
        title: "Website Development",
        description: "Bespoke marketing engines and high-conversion web experiences. We use headless frameworks to build lightning-fast web infrastructure.",
        iconName: "Globe",
        badge: "Most Popular",
        features: ["Semantic HTML & SEO Perfected", "Fluid Web Animations", "CMS & Headless Connections", "Edge Network Deployment"]
      },
      {
        id: "mobile-dev",
        title: "Mobile App Development",
        description: "Native-grade iOS & Android applications engineered with shared codebases for quick product iterations without compromising on touch precision.",
        iconName: "Smartphone",
        badge: "Full Access",
        features: ["React Native & Expo Ecosystems", "Hardware integrations & Sensors", "Offline-ready caching structures", "App Store / Play Store compliance"]
      },
      {
        id: "fullstack-dev",
        title: "Full Stack Development",
        description: "Entire application stacks constructed with unified architectures from custom business processes to responsive client views.",
        iconName: "Layers",
        features: ["React/Next.js Client Interfaces", "Secure TypeScript Server Frameworks", "Live Sync via WebSockets", "Strict Access Control Routines"]
      },
      {
        id: "custom-software",
        title: "Custom Software",
        description: "Tailor-made software modules configured around unique enterprise data, bridging proprietary tools and legacy structures.",
        iconName: "Cpu",
        features: ["Configurable System Workflows", "Proprietary Algorithm Implementation", "Audit Logs & Task Schedulers", "Automation Core Engines"]
      },
      {
        id: "mvp-dev",
        title: "Startup MVP Development",
        description: "Highly focused, production-grade iterations engineered at venture speed. Perfect for raising capital or finding product-market fit.",
        iconName: "Rocket",
        badge: "Fast Track",
        features: ["Core Interaction Blueprinting", "Stripe & Firebase Foundations", "Quick User Feedback Sockets", "Scalable Database Scaffolding"]
      },
      {
        id: "dashboard-dev",
        title: "Admin Dashboards",
        description: "Crisp internal control units featuring custom metrics, live telemetry, interactive charts, and rich permission tools.",
        iconName: "LayoutDashboard",
        features: ["Interactive SQL/NoSQL Reports", "Role-Based Access Controls (RBAC)", "Mass Action Operations", "System Metrics Visualizers"]
      }
    ]
  },
  upgrade: {
    title: "Upgrade & Improvement",
    subtitle: "Revitalize, accelerate, and expand the capabilities of your existing digital platforms.",
    services: [
      {
        id: "redesign",
        title: "Website Redesign",
        description: "Complete visual and UX overhauls, bringing outdated structures to contemporary, conversion-focused layout standards.",
        iconName: "Paintbrush",
        badge: "Visual Uplift",
        features: ["High-Contrast Modern Aesthetics", "Optimized Layout Flow Patterns", "Perfect Responsive Adaptation", "Asset Optimization & Modernization"]
      },
      {
        id: "ui-improve",
        title: "App UI Improvements",
        description: "Fine-tuning interaction points, upgrading layouts, and boosting overall visual consistency to premium visual standards.",
        iconName: "Sparkles",
        features: ["Interactive Micro-transitions", "Responsive Fluid Layout Refinement", "Touch Target Compliance Tests", "Cohesive Iconography & Styling"]
      },
      {
        id: "feature-integration",
        title: "Feature Integration",
        description: "Seamlessly graft missing layers like payment portals, analytical dashboards, or content processors directly into active products.",
        iconName: "PlusCircle",
        features: ["Non-disruptive Code Injection", "Third-party SDK Hook-ups", "State Management Extension", "Zero-downtime Deployments"]
      },
      {
        id: "bug-fixing",
        title: "Bug Fixing & Debugging",
        description: "Surgical isolation and neutralization of critical memory leaks, broken logic flows, or UI anomalies across any frontend or backend structure.",
        iconName: "Wrench",
        badge: "Critical Support",
        features: ["Root Cause Thread Isolation", "State-Synchronizer corrections", "Edge Case Testing Integration", "Long-term Prevention Patches"]
      },
      {
        id: "performance",
        title: "Performance Optimization",
        description: "Radically lowering Web Vitals timings, shrinking script asset weights, and boosting database index performance scores.",
        iconName: "Zap",
        features: ["Dynamic Server Response Tuning", "Lazy loading & code-splitting setups", "Caching Engine Integrations", "Excellent Lighthouse Ratings"]
      },
      {
        id: "auth-systems",
        title: "Authentication Systems",
        description: "Upgrading user credential storage to ultra-secure modern setups incorporating passwordless portals and social providers.",
        iconName: "Lock",
        features: ["OAuth Integration protocols", "Multi-factor authentication (MFA)", "Secure JSON Web Tokens handling", "Secure Cookie Configuration"]
      }
    ]
  },
  advanced: {
    title: "Advanced Engineering",
    subtitle: "Complex backend architectures, artificial intelligence, and high-frequency real-time connections.",
    services: [
      {
        id: "api-dev",
        title: "API Development & Integration",
        description: "Building fast, declarative endpoint structures coupled with detailed documentation logs to drive external integrations securely.",
        iconName: "Code2",
        features: ["RESTful, GraphQL or tRPC standards", "Rate Limiter Gateways", "Strict Payload Schema Checks", "Clear OpenAPI Reference Logs"]
      },
      {
        id: "realtime-chat",
        title: "Real-time Chat Features",
        description: "Instant message transports and user connection signals configured using lightweight non-blocking event-based sockets.",
        iconName: "MessageSquareText",
        badge: "Sockets",
        features: ["WebSockets Engine integration", "Active status monitors", "Offline queuing buffers", "Multi-room network channels"]
      },
      {
        id: "ai-integration",
        title: "AI Integration",
        description: "Embedding large language models, smart categorization workflows, auto-summarizers, and embeddings directly inside your products.",
        iconName: "BrainCircuit",
        badge: "Next Gen",
        features: ["Gemini API integration", "Context-aware routing matrices", "Prompt tuning setups", "Semantic vector queries"]
      },
      {
        id: "cloud-deploy",
        title: "Cloud Deployment",
        description: "Migrating and containerizing codebases to premium elastic resources for auto-scaling and continuous zero-downtime updates.",
        iconName: "Cloud",
        features: ["Terraform or IaC Setup", "Docker containerization", "CI/CD deployment lines", "Serverless architecture setups"]
      },
      {
        id: "database-design",
        title: "Database Design",
        description: "Structuring scalable schemas and query optimizations to handle heavy records with bulletproof integrity and millisecond speeds.",
        iconName: "Database",
        features: ["Relational & Non-relational setups", "Query index adjustments", "Transaction boundary validation", "Automated backups configurations"]
      },
      {
        id: "tech-consultation",
        title: "Technical Consultation",
        description: "Deep reviews of tech stacks, development pipelines, and code architecture designs to minimize technical debt.",
        iconName: "Compass",
        features: ["Security audit checklists", "Scalability blueprint reviews", "Infrastructure cost tuning", "Development process coaching"]
      }
    ]
  }
};

export const TRUST_POINTS: TrustPoint[] = [
  {
    id: "modern-design",
    title: "Modern Design & Dev",
    description: "We don't use dated layouts or generic libraries. Every product is visually distinct, highly responsive, and feels premium in hand.",
    iconName: "Eye"
  },
  {
    id: "fast-delivery",
    title: "Fast, Dedicated Builds",
    description: "We work in dedicated weekly sprints, meaning we ship functional software constantly and launch your final product exactly on schedule.",
    iconName: "Clock"
  },
  {
    id: "scalable-arch",
    title: "Scalable Architecture",
    description: "Codebases are written in clean TypeScript with strict module boundaries. Your platform will cleanly scale from thousands to millions of requests.",
    iconName: "TrendingUp"
  },
  {
    id: "custom-solutions",
    title: "Custom Tailored Fit",
    description: "Every business is unique. We build handcrafted software layers matched strictly to your business processes. No useless code bloat.",
    iconName: "Sliders"
  },
  {
    id: "mobile-first",
    title: "Mobile-First Precision",
    description: "With over 60% of web traffic active on phones, we design mobile layouts first, maintaining 1:1 interactions and high reading legibility.",
    iconName: "Tv"
  },
  {
    id: "transparent-comm",
    title: "Direct Engineering Slack",
    description: "No middlemen or generic project coordinators. Speak directly with the core developers building your platform via dedicated shared channels.",
    iconName: "CheckCircle2"
  }
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    step: "01",
    title: "Discover",
    description: "We define precise goals, scope specifications, target audience profiles, and feature maps to ensure clean development alignment.",
    duration: "Week 1",
    deliverables: ["Product Scope Document", "High-level Tech Architecture", "Project Milestones"]
  },
  {
    step: "02",
    title: "Design",
    description: "We craft interactive wireframes and interactive user interfaces highlighting transitions, layout rhythm, and spatial guidelines.",
    duration: "Week 2 - 3",
    deliverables: ["Figma Interactive Prototype", "Global Style System", "User Flow Diagrams"]
  },
  {
    step: "03",
    title: "Build",
    description: "We implement robust frontends using React and configure fast backend APIs. All components are hand-crafted in clean TypeScript.",
    duration: "Week 4 - 8",
    deliverables: ["Responsive Client Views", "REST/GraphQL API Layer", "Core System Codebase"]
  },
  {
    step: "04",
    title: "Test",
    description: "We run comprehensive end-to-end user tests, device responsiveness testing, performance optimization, and strict security checks.",
    duration: "Week 9",
    deliverables: ["Security Audit Report", "Responsive Layout Checklist", "Vitals Performance Score Card"]
  },
  {
    step: "05",
    title: "Launch",
    description: "We migrate datasets, compile assets for production, configure production domain records, and set up live system monitoring.",
    duration: "Week 10",
    deliverables: ["Production Deployment", "SSL Certificates Setup", "Operational Server Checks"]
  },
  {
    step: "06",
    title: "Support",
    description: "We schedule regular dependency upgrades, platform performance analytics reviews, and support rapid bug mitigation for flawless ops.",
    duration: "Ongoing",
    deliverables: ["Monthly Security Audits", "Continuous Integration Monitoring", "Post-launch Feature Priority Checks"]
  }
];

export const TECHNOLOGIES: Technology[] = [
  { name: "React", category: "frontend", iconName: "Atom", level: "Expert" },
  { name: "Node.js", category: "backend", iconName: "Server", level: "Expert" },
  { name: "PostgreSQL", category: "database", iconName: "Database", level: "Advanced" },
  { name: "MongoDB", category: "database", iconName: "Grid", level: "Expert" },
  { name: "React Native", category: "mobile", iconName: "Smartphone", level: "Expert" },
  { name: "Tailwind CSS", category: "frontend", iconName: "Compass", level: "Expert" },
  { name: "Firebase", category: "backend", iconName: "Flame", level: "Advanced" },
  { name: "Socket.io", category: "apis", iconName: "Activity", level: "Expert" },
  { name: "Express", category: "backend", iconName: "Cpu", level: "Expert" },
  { name: "OpenAI APIs", category: "apis", iconName: "BrainCircuit", level: "Advanced" },
  { name: "Vercel", category: "devops", iconName: "TrendingUp", level: "Expert" },
  { name: "AWS", category: "devops", iconName: "Cloud", level: "Advanced" }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  // WEBSITES
  {
    id: "peerlynk-website",
    name: "peerlynk Website",
    clientType: "Venture Hackers",
    category: "Website Showcase",
    description: "An elegant Next.js marketing engine with interactive 3D components and modular blocks.",
    detailedDescription: "A gorgeous, lightning-fast marketing website with rich interactive visualizers, modern typographic layout rhythm, and instant rendering scores built using serverless edge hosting architectures.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel", "motion"],
    duration: "4 Weeks",
    result: "Achieved continuous 100/100 Lighthouse performance and 4x higher trial signups.",
    imageAlt: "peerlynk corporate marketing web page layout with grid structure",
    metrics: [
      { label: "Performance Score", value: "100/100" },
      { label: "User Session Time", value: "+180%" },
      { label: "Total Visits Scale", value: "1.2M / mo" }
    ]
  },
  {
    id: "cravenutri-website",
    name: "CraveNutri Website",
    clientType: "Wellness Group",
    category: "Website Showcase",
    description: "A subscription-based meal planner platform featuring animated visual product galleries.",
    detailedDescription: "A highly conversion-focused marketing hub showcasing delicious nutritional programs, detailed user intake funnels, and integrated Stripe recurrent payment routines.",
    techStack: ["Next.js", "React", "Tailwind CSS", "GraphQL", "Stripe API"],
    duration: "5 Weeks",
    result: "Boosted product conversion rates by a verified 45% within the first month.",
    imageAlt: "CraveNutri subscription landing page visual design",
    metrics: [
      { label: "Conversion rate", value: "8.4%" },
      { label: "Page Load Speed", value: "0.6s" },
      { label: "Checkout Drop Rate", value: "-40%" }
    ]
  },
  {
    id: "nextwise-website",
    name: "NextWise Website",
    clientType: "Fintech Startup",
    category: "Website Showcase",
    description: "A fast, content-driven global market intelligence landing and interactive portal.",
    detailedDescription: "A bespoke marketing workspace styled with beautiful glassmorphic content cards, dark mode accents, with seamless API integration for live market ticket grids.",
    techStack: ["React", "Tailwind CSS", "Vercel", "motion", "REST APIs"],
    duration: "4 Weeks",
    result: "Deployed to Vercel global edge for instant loading across international markets.",
    imageAlt: "NextWise financial platform dashboard layout screens",
    metrics: [
      { label: "Edge Latency", value: "< 50ms" },
      { label: "Weekly Signups", value: "+4,500" },
      { label: "SEO Core Ranking", value: "Top 3" }
    ]
  },
  {
    id: "extra-websites-placeholder",
    name: "Additional custom websites",
    clientType: "Active Brands Portfolio",
    category: "Website Showcase",
    description: "Bespoke high-performance websites engineered to stand out and capture traffic.",
    detailedDescription: "Placeholder illustrating various custom enterprise projects tailored around proprietary visual styles, lightning fast SEO configurations, and seamless content structures.",
    techStack: ["React", "Tailwind CSS", "Next.js", "Docker", "AWS"],
    duration: "Varies",
    result: "Custom tailored to each brand's specific growth targets and structural standards.",
    imageAlt: "Various premium web design previews grid block",
    metrics: [
      { label: "Development Speed", value: "10-15 Days" },
      { label: "Average Lighthouse", value: "95+" },
      { label: "Responsive Tests", value: "100%" }
    ]
  },

  // APPS
  {
    id: "peerlynk-app",
    name: "peerlynk App",
    clientType: "Social Ecosystem",
    category: "Mobile App Showcase",
    description: "A high-performance iOS and Android client for instant network collaborations.",
    detailedDescription: "A native-grade real-time developer collaboration application highlighting fast offline-first local datastores, seamless chat networks, and customized push notification cascades.",
    techStack: ["React Native", "Expo", "Socket.io", "Node.js", "Firebase"],
    duration: "8 Weeks",
    result: "Sustainably handles 50k active concurrent app connections with millisecond response.",
    imageAlt: "peerlynk mobile application user interface mockups screen",
    metrics: [
      { label: "Active Mobile Users", value: "150,000" },
      { label: "Push Delivery Rate", value: "99.9%" },
      { label: "App Store Assessment", value: "4.9 Stars" }
    ]
  },
  {
    id: "cravenutri-app",
    name: "CraveNutri App",
    clientType: "Health & Fitness Co",
    category: "Mobile App Showcase",
    description: "A gorgeous nutrition tracker and scanner with interactive dashboard overlays.",
    detailedDescription: "A custom biometric mapping application containing live bar code integrations, daily hydration charts, and high-contrast nutrition profile visual summaries.",
    techStack: ["React Native", "Expo", "MongoDB", "Express", "Recharts"],
    duration: "9 Weeks",
    result: "Rated in Top #50 free medical app directories after launching on App Store.",
    imageAlt: "CraveNutri mobile nutrition application barcode scan interface",
    metrics: [
      { label: "Average Rating", value: "4.8" },
      { label: "Food Log Velocity", value: "3.2s" },
      { label: "Monthly Actives", value: "85,000" }
    ]
  },
  {
    id: "extra-apps-placeholder",
    name: "More mobile apps placeholder",
    clientType: "Enterprise Solutions",
    category: "Mobile App Showcase",
    description: "Elegantly coded cross-platform mobile tools designed for the modern palm.",
    detailedDescription: "Ongoing iterations covering specialized local storage structures, background synchronization helpers, sensor trackers, and smooth gesture transitions.",
    techStack: ["React Native", "Firebase", "TypeScript", "Node.js", "AWS"],
    duration: "Varies",
    result: "Engineered single-codebase architectures that decrease app development bills strictly by 50%.",
    imageAlt: "Multiple mobile app devices mockup preview layout",
    metrics: [
      { label: "Cross Platform Code", value: "95% Shared" },
      { label: "Android Crash Rate", value: "< 0.05%" },
      { label: "Apple Acceptance Speed", value: "24 Hours" }
    ]
  },

  // DASHBOARDS
  {
    id: "peerlynk-dashboard",
    name: "peerlynk Dashboard",
    clientType: "Product Operations Hub",
    category: "Dashboard Showcase",
    description: "Core administrative panel monitoring live code pipelines, and client requests.",
    detailedDescription: "A beautifully styled control console demonstrating clean system visual states, user activity histograms, real-time deployment streams, and role access settings dashboards.",
    techStack: ["React", "Tailwind CSS", "Socket.io", "PostgreSQL", "Node.js"],
    duration: "7 Weeks",
    result: "Accelerated developer assignment speed by 60% with unified team request boards.",
    imageAlt: "peerlynk cloud operation control center live metrics monitoring interface",
    metrics: [
      { label: "Daily Transactions", value: "2.4M" },
      { label: "Database Sync Delay", value: "< 150ms" },
      { label: "Staff Efficiency", value: "+55%" }
    ]
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    clientType: "Fintech & Data Brands",
    category: "Dashboard Showcase",
    description: "Sleek data intelligence center presenting interactive cohorts and api monitors.",
    detailedDescription: "A highly complex visual setup charting exact user behaviors, web vitals indicators, geographical distributions, and cloud server health logs on a live dashboard canvas.",
    techStack: ["React", "Tailwind CSS", "Recharts", "Node.js", "MongoDB"],
    duration: "6 Weeks",
    result: "Streamlined performance review reporting times down from 4 hours to instantaneous.",
    imageAlt: "Analytics console mockup featuring line charts and metrics grids",
    metrics: [
      { label: "Interactive Charts", value: "12 Layouts" },
      { label: "Raw Event Capacity", value: "5.5M / day" },
      { label: "Data Latency Rate", value: "0.2s" }
    ]
  },
  {
    id: "admin-panels",
    name: "Admin Panels Hub",
    clientType: "Internal Operations Teams",
    category: "Dashboard Showcase",
    description: "Secure, role-based visual panels featuring automated multi-step custom workflows.",
    detailedDescription: "A solid internal configuration suite helping operations managers update prices instantly, manage user profiles, dispatch transactional mailers, and trigger custom database indices easily.",
    techStack: ["React", "Express.js", "PostgreSQL", "Tailwind CSS", "Socket.io"],
    duration: "5 Weeks",
    result: "Empowered support staff to self-resolve 90% of user data adjustments without requesting dev help.",
    imageAlt: "Database record table admin layout with filters list",
    metrics: [
      { label: "Ticket Resolution time", value: "-75%" },
      { label: "Access Security Score", value: "100%" },
      { label: "Table Page Loads", value: "85ms" }
    ]
  },
  {
    id: "business-systems",
    name: "Business Management Systems",
    clientType: "Supply Chain & Retail Partners",
    category: "Dashboard Showcase",
    description: "Enterprise supply control boards optimizing inventory records and carrier lines.",
    detailedDescription: "A highly resilient private portal tracking material movements, verifying carrier logs, and calculating delivery timetables via advanced mapping and routing arrays.",
    techStack: ["React", "Express.js", "MongoDB", "Tailwind CSS", "AWS", "GitHub"],
    duration: "10 Weeks",
    result: "Decreased stock-out incidences by 32% due to smart predictive alerts configuration.",
    imageAlt: "Inventory status chart boards with responsive filters list",
    metrics: [
      { label: "Inventory Velocity", value: "+24%" },
      { label: "Fulfillment SLA", value: "99.94%" },
      { label: "API Sync Interval", value: "Instant" }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote: "peerlynk labs delivered our platform ahead of schedule. The engineering is pristine—their developers understand scalability, clean styles, and visual polish perfectly. True product partners.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "GreenSphere Tech",
    avatarSeed: "elena",
    projectType: "Full Stack Platform"
  },
  {
    id: "testimonial-2",
    quote: "Our existing application was plagued with memory leaks and lag. The team at peerlynk isolated the causes in two days and shipped a beautiful UI revamp that our clients absolutely adore.",
    author: "David Vance",
    role: "Founder & CEO",
    company: "Aero Logistics",
    avatarSeed: "david",
    projectType: "App Revamp & Revitalize"
  },
  {
    id: "testimonial-3",
    quote: "Outstanding MVP delivery. They helped us bridge our Stripe configurations and build a real-time analytics hub in six weeks, leading to our visual platform's seed round success.",
    author: "Shubham Gupta",
    role: "Technical Founder",
    company: "Aura Creative",
    avatarSeed: "shubham",
    projectType: "Startup MVP Launch"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-projects",
    question: "What types of projects do you build?",
    answer: "We specialize in building modern, interactive websites, high-performance web applications, native-grade iOS & Android mobile apps, custom internal tools/dashboards, and technical MVPs for venture startups.",
    category: "services"
  },
  {
    id: "faq-existing",
    question: "Do you work on existing websites and apps?",
    answer: "Yes, we handle existing systems regularly. We can perform complete visual redesigns, inject new features, optimize performance, implement database adjustments, secure authorization flows, or audit current code structures.",
    category: "services"
  },
  {
    id: "faq-bugs",
    question: "Can you fix bugs and add new features?",
    answer: "Absolutely. We offer dedicated support sprints to locate and debug memory leaks, faulty asynchronous integrations, layout breakages, API sync issues, or deploy modern additions to live services on quick delivery windows.",
    category: "services"
  },
  {
    id: "faq-mvp",
    question: "Do you build MVPs for startups?",
    answer: "Yes! Startup MVP development is a core specialty. We help you isolate the must-have feature set and build a highly polished, interactive product in 4 to 8 weeks so you can acquire users and present to investors confidently.",
    category: "process"
  },
  {
    id: "faq-tech",
    question: "What technologies do you use?",
    answer: "Our core engineering toolkit centers around TypeScript. For clients, we build with React, Tailwind CSS, Vite, Node.js, Express, PostgreSQL, MongoDB, Redis, React Native, Expo, and standard cloud platforms like AWS, GCP, and Vercel.",
    category: "tech"
  },
  {
    id: "faq-contact",
    question: "How do clients contact you and start?",
    answer: "You can submit your requirements via our interactive request form at the bottom of the page, or correspond with us instantly through WhatsApp (+91 7599865700) or direct business email (labs@peerlynk.com) to arrange a discovery call.",
    category: "process"
  }
];
