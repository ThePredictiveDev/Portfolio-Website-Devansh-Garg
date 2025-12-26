import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, BookOpen, Briefcase, Code, FileText, ExternalLink, 
  X, ChevronRight, ChevronDown, Clock, Globe, Award, Cpu, 
  DollarSign, BarChart3, GraduationCap, Users, Zap, Layers, Download
} from 'lucide-react';

/**
 * ==================================================================================
 * CONTENT MANAGEMENT SYSTEM (CMS)
 * ==================================================================================
 */
const DATA = {
  profile: {
    name: "Devansh Garg",
    role: "Pre-final Year B.Tech @ IIT Mandi | Finance & AI",
    tagline: "Educated in AI, Building in Finance",
    email: "devanshg.iitm@gmail.com",
    phone: "+91-9910329901",
    linkedin: "https://www.linkedin.com/in/devansh-garg-92888a241",
    github: "https://github.com/ThePredictiveDev",
    resumeLink: "/resume.pdf", // Placeholder for actual resume file
    location: "Noida, UP / Mandi, HP",
    about: "My journey began with a curiosity for how complex systems behave, and over time that curiosity has grown into a blend of finance, AI, and problem-solving. I enjoy exploring how intelligent models, thoughtful analysis, and careful reasoning can shape real outcomes. I am actively pursuing internships in investment banking and private equity, focusing on M&A, LBOs, and deal analysis. My long-term aim is to build a private equity firm guided by social and cultural ESG principles."
  },

  education: {
    university: "Indian Institute of Technology (IIT), Mandi",
    degree: "Bachelor of Technology in Bioengineering",
    minor: "Minor in Intelligent Systems (AI) & Minor in Management",
    batch: "Class of 2027",
    coursework: [
      "Economics", "Entrepreneurship", "Probability & Statistics", 
      "Deep Learning", "Advanced DL", "Computational Methods in Pricing", 
      "Trading Algorithms", "M&A Valuation", "Market Risk Management"
    ]
  },
  
  ticker: [
    { symbol: "CFA", value: "Lvl-1 Feb '26", change: "Prep" },
    { symbol: "IITM", value: "B.Tech '27", change: "Bio/AI" },
    { symbol: "EXP", value: "IB/PE Incoming", change: "IIFL/HDB" },
    { symbol: "TECH", value: "Deep Learning", change: "Adv" },
    { symbol: "LANG", value: "Python/R/SQL", change: "Native" },
    { symbol: "VENTURE", value: "BioPay/Itivrit", change: "Founder" },
    { symbol: "PORTFOLIO", value: "8-Figure INR", change: "+Alpha" }
  ],

  skills: {
    finance: [
      "Financial Modeling (DCF, LBO, Comps)", 
      "Valuation (Relative & Intrinsic)", 
      "M&A Deal Structuring", 
      "Financial Statement Analysis", 
      "Due Diligence", 
      "Portfolio Management",
      "Risk Analysis"
    ],
    technical: [
      "Python (Pandas, NumPy)", 
      "R / SQL", 
      "Excel (Advanced Modeling)", 
      "TensorFlow / PyTorch", 
      "Data Visualization", 
      "FastAPI", 
      "Statistical Analysis"
    ],
    leadership: [
      "Deal Execution", 
      "Client Management", 
      "Strategic Planning", 
      "Team Leadership", 
      "Negotiation"
    ]
  },

  // Corporate Experience
  corporate: [
    {
      company: "HDB Financial Services",
      role: "Winter Analyst - Debt",
      period: "Dec 2025 - Jan 2026",
      location: "Noida, UP",
      desc: [
        "Structured a novel SGB-backed secured lending product; modeled deal economics projecting ₹560M annualized revenue impact through LTV optimization and collateral arbitrage",
        "Engineered a risk-mitigation framework by leveraging the sovereign guarantee of underlying collateral, effectively eliminating credit default risk.",
        "Built a scenario-based risk framework for the product, calibrating stress cases and collateral thresholds to preserve returns under adverse market conditions."
      ]
    },
    {
      company: "Meanlabs Software Pvt Ltd",
      role: "Head of AI & Business Development",
      period: "Jun 2025 - Present",
      location: "Noida, UP",
      desc: [
        "Led product strategy and go-to-market for AI-powered investment banking workflow automation platform; designed product roadmap targeting M&A, valuation, and due diligence processes",
        "Architected AI agent for M&A workflow automation (deal structuring, financial modeling, document review); demonstrated 80%+ process time reduction vs. manual workflows.",
        "Built multi-source financial intelligence system aggregating and analyzing Reddit, news, and market data streams; deployed for real-time market sentiment analysis supporting 5K+ daily deal signals"
      ]
    },
    {
      company: "FidelFolio Investments",
      role: "Quantitative Analyst Intern",
      period: "Feb 2025 - May 2025",
      location: "Mumbai, MH (WFH)",
      desc: [
        "Developed multi-factor ML model for systematic equity portfolio construction; backtested strategy across 2015-2024, achieving 20%+ annualized returns",
        "Engineered an API to compare mutual fund performance, improving analysis efficiency by ~50%",
        "Deployed modularized TensorFlow inference pipeline for live trading execution; reduced model latency by 20%"
      ]
    },
    {
      company: "Private Portfolio",
      role: "Long Term Investor",
      period: "2022 - Present",
      location: "Personal",
      desc: [
        "Active long-term investor managing an 8-figure (INR) personal portfolio.",
        "Focus on fundamental analysis, asset allocation, and risk management across various asset classes."
      ]
    }
  ],

  // Entrepreneurial Ventures
  ventures: [
    {
      company: "Itivrit AI",
      role: "Co-Founder",
      period: "Oct 2025 - Present",
      location: "Remote",
      desc: [
        "Co-founded a conversational AI product emphasizing primary sources, provenance, and timeline-based exploration.",
        "Leading all non-technical operations, including strategy, product roadmap, and business development.",
        "Facilitating direct user interaction with historical records rather than intermediaries."
      ]
    },
    {
      company: "BioPay",
      role: "Founder",
      period: "May 2025 - Oct 2025",
      location: "Noida, UP",
      desc: [
        "Founded biometric payment fintech; built deep learning authentication system (face + voice verification) achieving 95%+ accuracy on live test data.",
        "Identified regulatory friction with RBI on biometric payment systems, leading to development of a novel pipeline with perfect legal compliance",
        "Led a team of 6 interns; raised interest from early-stage investors (₹10M+) before strategic exit for confidential reasons."
      ]
    }
  ],

  // Past Experience (Hidden in Dropdown)
  pastExperience: [
    {
      company: "WorldQuant",
      role: "Research Consultant",
      period: "Oct 2023 - Feb 2025",
      location: "Remote",
      desc: [
        "Alpha generation to maximize returns and minimize risk.",
        "Utilized Portfolio Management, Computational Finance, and Algorithmic Trading skills."
      ]
    },
    {
      company: "CollegeCraves",
      role: "Co-Founder",
      period: "Sep 2023 - Sep 2024",
      location: "IIT Mandi",
      desc: [
        "Implemented innovative web-based solutions to make accessing Cafeterias across campus easier.",
        "Optimised logistic routes to make efficient and fast food deliveries."
      ]
    },
    {
      company: "Masai",
      role: "Teaching Assistant CS-101",
      period: "Sep 2024 - Jan 2025",
      location: "Remote",
      desc: [
        "Responsible for taking doubt clearing sessions of over 60 students and monitoring in-class activity.",
        "Focused on Python programming and Data Science fundamentals."
      ]
    },
    {
      company: "Indian Institute of Technology, Mandi",
      role: "Teaching Assistant DS-1",
      period: "Aug 2024 - Dec 2024",
      location: "Mandi, HP",
      desc: [
        "Teaching Assistant for Data Science - 1 course.",
        "Assisted with Python, Anaconda, and Pandas curriculum."
      ]
    }
  ],

  leadership: [
    {
      org: "National Service Scheme (NSS) HP",
      role: "Coordinator",
      period: "Nov 2023 - Mar 2025",
      desc: "Led 100+ volunteers for social service activities. Raised ₹80,000+ in donations. Recruited 50+ volunteers for underprivileged education."
    },
    {
      org: "Kullhad Economy Festival",
      role: "Head of Ops & Strategy",
      period: "Aug 2025 - Oct 2025",
      desc: "Managed 200+ volunteers. Developed strategic relations with top bureaucrats. Footfall of 1500+, helping local business ecosystem."
    },
    {
      org: "Kamand Bioengineering Group",
      role: "Co-Coordinator",
      period: "Aug 2025 - Present",
      desc: "Leading 30+ volunteers. Pioneered 'Advanced AI in Biology' session (110+ students). Leading cutting-edge research at intersection of biosignals and DL."
    },
    {
      org: "Exodia IIT Mandi",
      role: "Head of Security",
      period: "Nov 2024 - Mar 2025",
      desc: "Incharge of security team handling large masses, ensuring safe entry/exit and conflict resolution."
    },
    {
      org: "Teach Your Neighbour",
      role: "Head Coordinator",
      period: "Dec 2024 - May 2025",
      desc: "Recruited 80+ volunteers to provide STEM education to underprivileged students. Delegated supervisory roles."
    }
  ],

  certifications: {
    featured: {
      title: "CFA Level 1 Candidate",
      issuer: "CFA Institute",
      date: "Appearing Feb 2026",
      desc: "Comprehensive preparation in Ethical Standards, Quant Methods, Economics, and Financial Reporting."
    },
    list: [
      { title: "Strategic Leadership & Management", issuer: "Gies College of Business (UIUC)", date: "Nov 2025" },
      { title: "Finance of M&A: Valuation & Pricing", issuer: "University of Illinois (UIUC)", date: "Aug 2023" },
      { title: "Fundamentals of Finance", issuer: "Wharton Online", date: "Aug 2023" },
      { title: "Fundamentals of Quantitative Modeling", issuer: "Wharton Online", date: "Aug 2023" },
      { title: "Intro to Spreadsheets and Models", issuer: "Wharton Online", date: "Sep 2023" },
      { title: "Investment Banking: Financial Analysis", issuer: "Gies College of Business", date: "Sep 2023" },
      { title: "Market Risk Management", issuer: "New York Institute of Finance", date: "Sep 2023" },
      { title: "Machine Learning in Trading", issuer: "Google Cloud", date: "Sep 2023" },
      { title: "Discounted Cash Flow Modeling", issuer: "Coursera", date: "Aug 2023" },
      { title: "Computational Methods in Pricing", issuer: "Columbia University", date: "Oct 2023" },
      { title: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", date: "Oct 2023" },
      { title: "Sequences, Time Series and Prediction", issuer: "DeepLearning.AI", date: "Oct 2023" },
      { title: "Advanced Trading Algorithms", issuer: "Indian School of Business", date: "Sep 2023" },
      { title: "Derivatives - Options & Futures", issuer: "Interactive Brokers", date: "Sep 2023" }
    ]
  },

  research: [
    {
      id: "r1",
      title: "Strongly Connected Components Are All You Need",
      subtitle: "Graph-Theoretic Interpretability for Vision Transformers",
      status: "Accepted",
      venue: "ICVGIP'25 (ACM ICPS)",
      summary: "A novel graph-theoretic framework analyzing attention mechanisms in Vision Transformers, proving that meaningful SCCs correspond to semantic visual features.",
      link: "https://doi.org/10.21203/rs.3.rs-7877883/v1", 
      tags: ["Computer Vision", "Graph Theory", "Transformers"]
    },
    {
      id: "r2",
      title: "Multiscale Portfolio Optimization",
      subtitle: "Via ICEEMDAN and Hilbert Spectral Analysis",
      status: "Under Review",
      venue: "Journal of Forecasting",
      summary: "Introduces a scale-diversified portfolio framework decomposing asset returns into frequency bands to separate high-frequency noise from long-term trends.",
      link: "https://doi.org/10.21203/rs.3.rs-7841142/v1",
      tags: ["Quant Finance", "Signal Processing", "Portfolio Mgmt"]
    },
    {
      id: "r3",
      title: "Nonparametric Regime Segmentation",
      subtitle: "In Financial Time Series via Hilbert-ICEEMDAN",
      status: "Under Review",
      venue: "Journal of Forecasting",
      summary: "A unified estimation pipeline for detecting structural breaks in multivariate financial time series using penalized change-point detection.",
      link: "https://dx.doi.org/10.2139/ssrn.5611890",
      tags: ["Time Series", "Regime Switching", "Econometrics"]
    },
    {
      id: "r4",
      title: "Corporate Insurance Make-or-Buy",
      subtitle: "Under Binding Capital Constraints in India",
      status: "Under Review",
      venue: "JII",
      summary: "Analyzes self-insurance viability for Indian corporations, identifying discontinuous cost structures due to regulatory capital requirements.",
      link: "https://dx.doi.org/10.2139/ssrn.5599810",
      tags: ["Corporate Finance", "Insurance", "Regulation"]
    },
    {
      id: "r5",
      title: "Modeling the Ballot",
      subtitle: "Agent-Based Insights into Representation & Welfare",
      status: "Under Review",
      venue: "JASSS",
      summary: "Agent-based simulation of democratic decision-making comparing six voting mechanisms on welfare and fairness.",
      link: "https://doi.org/10.31235/osf.io/mp9kh_v1",
      tags: ["Game Theory", "Social Choice", "ABM"]
    },
    {
      id: "r6",
      title: "FinChart-Multimodal",
      subtitle: "Dataset for Context-Injected Financial Chart Understanding",
      status: "Submitted",
      venue: "CVPR",
      summary: "A large-scale dataset aligning OHLCV time series with chart images to enable multimodal financial analysis.",
      link: "https://drive.google.com/file/d/12-LB6tu27Tqi2dNg4OjJA0qQ8-R1BC6D/view?usp=sharing",
      tags: ["Computer Vision", "Finance", "Multimodal AI"]
    }
  ],

  projects: [
    {
      id: "p5",
      title: "Corrective RAG Agent",
      metric: "3rd Place",
      desc: "Agentic RAG with chain-of-thought reasoning for MATLAB troubleshooting. Won 3rd place at IIT Mandi DL Hackathon.",
      tech: ["LLMs", "LangChain", "Python"],
      link: "https://github.com/ThePredictiveDev/Hierarchical-Corrective-RAG-for-Troubleshooting"
    },
    {
      id: "p1",
      title: "Automated Trading System",
      metric: "Real-time",
      desc: "Complete trading simulator with Order Book, FIX Engine, Market Maker, and algorithmic bots featuring real-time sentiment analysis.",
      tech: ["Python", "C++", "FIX Protocol"],
      link: "https://github.com/ThePredictiveDev/Automated-Financial-Market-Trading-System"
    },
    {
      id: "p3",
      title: "Optimal Order Execution",
      metric: "-30% Slippage",
      desc: "Implemented Almgren-Chriss framework for optimal execution of large orders, significantly reducing market impact and slippage.",
      tech: ["Python", "SciPy", "QuantLib"],
      link: "https://github.com/ThePredictiveDev/Optimal-Execution-Model-with-Stochastic-Control"
    },
    {
      id: "p2",
      title: "DL-Based Autonomous Trader",
      metric: "+80% Return",
      desc: "Developed LSTM-based autonomous trading bot achieving 80%+ returns on validation backtests.",
      tech: ["TensorFlow", "Keras", "Python"],
      link: "https://github.com/ThePredictiveDev/LSTM-Based-regime-selection-and-rule-set-based-signal-generation/blob/main/LSTM%20Model.ipynb"
    },
    {
      id: "p4",
      title: "DCF Automation Tool",
      metric: "-70% Time",
      desc: "Automated Discounted Cash Flow analysis using Aswath Damodaran's framework and Yahoo Finance API.",
      tech: ["Python", "Pandas", "Excel API"],
      link: "https://github.com/ThePredictiveDev/DCF-Automator-Program"
    }
  ],

  caseStudies: [
    {
      id: "cs1",
      title: "Tech Sector LBO Model",
      type: "LBO Analysis",
      status: "Coming Soon",
      desc: "A comprehensive leveraged buyout model for a mid-cap SaaS company, including debt schedules and sensitivity analysis."
    },
    {
      id: "cs2",
      title: "Cross-Border M&A",
      type: "Transaction Analysis",
      status: "Coming Soon",
      desc: "Strategic rationale and valuation synergy analysis for a hypothetical merger in the renewable energy sector."
    }
  ]
};

/**
 * ==================================================================================
 * UTILITY: FADE-IN ANIMATION COMPONENT
 * ==================================================================================
 */
const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// 1. Header & Ticker
const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-xs md:text-sm bg-slate-950 text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-gold-500 font-bold tracking-wider">
            <BarChart3 size={14} />
            DG TERMINAL
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline">MARKET STATUS: <span className="text-green-500">OPEN</span></span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 font-mono">
            <Clock size={12} />
            {time.toLocaleTimeString([], { hour12: false })}
          </span>
          <span className="hidden md:inline font-mono text-slate-500">
            {time.toISOString().split('T')[0]}
          </span>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div className="relative flex overflow-x-hidden bg-slate-900 py-2 border-b border-slate-800 text-sm font-mono">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          {[...DATA.ticker, ...DATA.ticker, ...DATA.ticker].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="font-bold text-slate-200">{item.symbol}</span>
              <span className="text-slate-400">{item.value}</span>
              <span className="text-gold-500">▲ {item.change}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 2. Hero Section
const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Intro */}
        <div className="lg:col-span-2 space-y-6">
          <FadeIn>
            <div className="inline-block px-3 py-1 border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-mono uppercase tracking-widest rounded">
              Executive Profile
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-100 font-medium tracking-tight mt-4">
              {DATA.profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed mt-4">
              {DATA.profile.tagline}
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            {/* Education Highlight */}
            <div className="bg-slate-800/30 border-l-2 border-gold-500 pl-4 py-2 my-6 hover:bg-slate-800/50 transition-colors">
              <h3 className="text-slate-200 font-serif text-lg flex items-center gap-2">
                <GraduationCap size={18} className="text-gold-500" />
                {DATA.education.university}
              </h3>
              <div className="text-slate-400 text-sm mt-1">
                {DATA.education.degree} <span className="text-slate-600 mx-1">•</span> {DATA.education.minor}
              </div>
              <div className="text-slate-500 text-xs font-mono mt-1 uppercase tracking-wide">
                {DATA.education.batch}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href={`mailto:${DATA.profile.email}`} className="btn-primary">
                Contact Me
              </a>
              <a href={DATA.profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn
              </a>
              <a href={DATA.profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                GitHub
              </a>
            </div>
          </FadeIn>
        </div>

        {/* About "Report" */}
        <FadeIn delay={400}>
          <div className="bg-slate-800/50 p-6 border border-slate-700 rounded-sm backdrop-blur-sm h-fit shadow-2xl">
            <h3 className="text-gold-500 font-mono text-sm mb-4 flex items-center gap-2">
              <FileText size={14} />
              ABSTRACT / BIO
            </h3>
            <p className="text-slate-300 text-sm leading-7 text-justify font-serif">
              {DATA.profile.about}
            </p>
            <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-500 block">LOCATION</span>
                <span className="text-slate-200">{DATA.profile.location}</span>
              </div>
              <div>
                <span className="text-slate-500 block">FOCUS</span>
                <span className="text-slate-200">IB / PE</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// 3. Skills Matrix
const SkillsSection = () => {
  return (
    <section className="border-y border-slate-800 bg-slate-900/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Core Finance", icon: DollarSign, skills: DATA.skills.finance },
              { title: "Technical Stack", icon: Code, skills: DATA.skills.technical },
              { title: "Leadership", icon: Users, skills: DATA.skills.leadership }
            ].map((category, idx) => (
              <div key={idx}>
                <h3 className="flex items-center gap-2 text-gold-500 font-mono text-sm mb-4 uppercase tracking-wider">
                  <category.icon size={16} /> {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(s => (
                    <span key={s} className="px-2 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded hover:border-gold-500/50 transition-colors cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// 4. Certifications Section
const CertificationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? DATA.certifications.list : DATA.certifications.list.slice(0, 6);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto border-b border-slate-800">
      <FadeIn>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-serif text-slate-100">Professional Certifications</h2>
          <div className="h-px bg-slate-700 flex-1"></div>
        </div>

        {/* Featured Certification */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-gold-500/30 p-6 rounded mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg hover:shadow-gold-500/10 transition-shadow">
          <div>
            <div className="text-gold-500 font-mono text-xs uppercase tracking-widest mb-2">Featured Designation</div>
            <h3 className="text-3xl font-serif text-white mb-1">{DATA.certifications.featured.title}</h3>
            <div className="text-slate-400 text-sm">{DATA.certifications.featured.issuer} • {DATA.certifications.featured.date}</div>
          </div>
          <div className="text-slate-300 text-sm max-w-md border-l border-slate-600 pl-4">
            {DATA.certifications.featured.desc}
          </div>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedCerts.map((cert, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-4 flex justify-between items-start hover:border-slate-600 hover:bg-slate-800 transition-all">
              <div>
                <div className="text-slate-200 font-medium text-sm mb-1">{cert.title}</div>
                <div className="text-slate-500 text-xs">{cert.issuer}</div>
              </div>
              <div className="text-slate-600 text-xs font-mono whitespace-nowrap">{cert.date}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="text-gold-500 text-sm hover:text-gold-400 flex items-center gap-1 mx-auto transition-colors"
          >
            {showAll ? "Show Less" : "View All Certifications"} <ChevronDown size={14} className={`transform transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </FadeIn>
    </section>
  );
};

// 5. Experience Section (Split)
const ExperienceSection = () => {
  const [showPast, setShowPast] = useState(false);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-serif text-slate-100">Professional Experience</h2>
          <div className="h-px bg-slate-700 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Corporate Column */}
          <div>
            <h3 className="text-gold-500 font-mono text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
              <Briefcase size={16} /> Corporate Roles
            </h3>
            <div className="space-y-10 border-l border-slate-800 ml-3">
              {DATA.corporate.map((exp, idx) => (
                <div key={idx} className="relative pl-8 group">
                  <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-colors ${exp.period.includes("Ongoing") || exp.period.includes("Present") ? "bg-gold-500 border-gold-500" : "bg-slate-900 border-slate-600 group-hover:border-gold-500"}`}></div>
                  <div className="mb-1">
                    <h4 className="text-lg font-bold text-slate-200 group-hover:text-gold-400 transition-colors">{exp.company}</h4>
                    <div className="flex justify-between items-center text-xs font-mono text-slate-500 mt-1">
                      <span>{exp.role}</span>
                      <span className="text-gold-500/80 uppercase">{exp.period}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 mb-3">{exp.location}</div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400">
                    {exp.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Ventures Column */}
          <div>
            <h3 className="text-gold-500 font-mono text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
              <Zap size={16} /> Entrepreneurial Ventures
            </h3>
            <div className="space-y-10 border-l border-slate-800 ml-3">
              {DATA.ventures.map((exp, idx) => (
                <div key={idx} className="relative pl-8 group">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 bg-slate-900 border-slate-600 group-hover:border-gold-500 transition-colors"></div>
                  <div className="mb-1">
                    <h4 className="text-lg font-bold text-slate-200 group-hover:text-gold-400 transition-colors">{exp.company}</h4>
                    <div className="flex justify-between items-center text-xs font-mono text-slate-500 mt-1">
                      <span>{exp.role}</span>
                      <span className="text-gold-500/80 uppercase">{exp.period}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 mb-3">{exp.location}</div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400">
                    {exp.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Past Experience Dropdown */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <button 
            onClick={() => setShowPast(!showPast)}
            className="w-full flex items-center justify-between bg-slate-900 p-4 border border-slate-800 hover:border-slate-600 transition-colors text-left rounded group"
          >
            <span className="text-slate-300 font-medium flex items-center gap-2 group-hover:text-gold-400 transition-colors">
              <Clock size={16} /> Previous Experience
            </span>
            <ChevronDown size={16} className={`text-slate-500 transform transition-transform ${showPast ? 'rotate-180' : ''}`} />
          </button>
          
          {showPast && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 animate-in fade-in slide-in-from-top-2">
              {DATA.pastExperience.map((exp, idx) => (
                <div key={idx} className="bg-slate-900/50 p-6 border border-slate-800/50 rounded hover:bg-slate-800 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-slate-200 font-bold">{exp.company}</div>
                      <div className="text-xs text-slate-500">{exp.role}</div>
                    </div>
                    <div className="text-xs font-mono text-slate-600">{exp.period}</div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-400 mt-3">
                    {exp.desc.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
};

// 6. Leadership Section
const LeadershipSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto bg-slate-900/20 border-y border-slate-800">
      <FadeIn>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-serif text-slate-100">Leadership & Initiatives</h2>
          <div className="h-px bg-slate-700 flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.leadership.map((item, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 p-6 hover:border-gold-500/30 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="font-serif text-slate-200 text-lg">{item.org}</div>
                <Award size={16} className="text-gold-500" />
              </div>
              <div className="text-xs font-mono text-slate-500 mb-3 uppercase">{item.role} | {item.period}</div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

// 7. Research Section
const ResearchSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-serif text-slate-100">Research Work & Publications</h2>
          <div className="h-px bg-slate-700 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.research.map((paper) => (
            <a 
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              key={paper.id}
              className="group bg-slate-900 border border-slate-800 p-6 hover:border-gold-500/50 transition-all cursor-pointer hover:bg-slate-800/50 relative overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
              
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-mono px-2 py-1 rounded ${
                  paper.status === 'Accepted' ? 'bg-green-900/30 text-green-400' :
                  paper.status === 'Submitted' ? 'bg-blue-900/30 text-blue-400' :
                  'bg-slate-800 text-slate-400'
                }`}>
                  {paper.status}
                </span>
                <ExternalLink size={14} className="text-slate-600 group-hover:text-gold-500 transition-colors" />
              </div>

              <h3 className="text-lg font-medium text-slate-200 mb-2 group-hover:text-gold-400 transition-colors">
                {paper.title}
              </h3>
              <div className="text-sm text-slate-500 font-serif italic mb-4">
                {paper.venue}
              </div>
              <p className="text-sm text-slate-400 line-clamp-3 mb-4 flex-1">
                {paper.summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {paper.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-800 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

// 8. Projects Section
const ProjectsSection = () => {
  return (
    <section className="py-20 bg-slate-900/30 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-serif text-slate-100">Proprietary Projects</h2>
            <div className="text-xs font-mono text-slate-500">INDEX: TECH_FIN</div>
          </div>

          <div className="grid gap-4">
            {DATA.projects.map((project) => (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id} 
                className="bg-slate-900 border border-slate-800 p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-slate-500 hover:shadow-lg transition-all cursor-pointer group hover:-translate-y-0.5"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 bg-gold-500 rounded-full group-hover:animate-pulse"></div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white flex items-center gap-2">
                      {project.title} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-500"/>
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 max-w-2xl">{project.desc}</p>
                </div>
                
                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                  <div className="text-right">
                    <div className="text-xs font-mono text-slate-500 uppercase">Key Metric</div>
                    <div className="text-sm font-mono text-green-400">{project.metric}</div>
                  </div>
                  <div className="h-8 w-px bg-slate-800 hidden md:block"></div>
                  <div className="text-right hidden md:block">
                    <div className="text-xs font-mono text-slate-500 uppercase">Stack</div>
                    <div className="text-sm text-slate-300">{project.tech[0]}</div>
                  </div>
                  <ChevronRight className="text-slate-700 group-hover:text-gold-500 transition-colors" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a 
              href={DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-mono text-sm border-b border-gold-500/50 pb-1 hover:border-gold-400 transition-colors"
            >
              VIEW MORE PROJECTS ON GITHUB <ExternalLink size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// 9. Case Studies
const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-serif text-slate-100">Deal Flow / Case Studies</h2>
            <span className="px-2 py-1 bg-slate-900 text-slate-500 text-xs font-mono border border-slate-800">
              RESTRICTED ACCESS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA.caseStudies.map((cs) => (
              <div key={cs.id} className="relative border border-slate-800 bg-slate-900/20 p-8 rounded border-dashed">
                <div className="absolute inset-0 backdrop-blur-[1px] bg-slate-950/50 flex items-center justify-center z-10">
                  <div className="bg-slate-900 border border-gold-500/30 px-4 py-2 rounded text-gold-500 text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg">
                    <Clock size={12} />
                    Coming Soon
                  </div>
                </div>
                
                <div className="opacity-40 filter blur-[1px]">
                  <div className="text-xs font-mono text-slate-500 mb-2">{cs.type}</div>
                  <h3 className="text-xl font-serif text-slate-200 mb-4">{cs.title}</h3>
                  <p className="text-sm text-slate-400">{cs.desc}</p>
                  <div className="mt-6 h-32 bg-slate-800/50 rounded w-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-gold-500/30 selection:text-gold-200">
      <Header />
      
      <main className="relative">
        <Hero />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ResearchSection />
        <ProjectsSection />
        <LeadershipSection />
        <CaseStudiesSection />
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6 text-center">
        <div className="text-gold-500 font-serif text-xl mb-4">DEVANSH GARG</div>
        <div className="text-slate-500 text-sm mb-8">Educated in AI, Building in Finance.</div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .btn-primary {
          background-color: #d4af37;
          color: #0f172a;
          padding: 0.5rem 1.5rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.2s;
        }
        .btn-primary:hover {
          background-color: #fcd34d;
          transform: translateY(-1px);
        }
        .btn-secondary {
          background-color: transparent;
          border: 1px solid #334155;
          color: #94a3b8;
          padding: 0.5rem 1.5rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.2s;
        }
        .btn-secondary:hover {
          border-color: #d4af37;
          color: #d4af37;
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
        ::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
    </div>
  );
}

export default App;