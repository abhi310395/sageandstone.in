"use client";

import Link from "next/link";

/* --- 1. CONFIGURATION --- */
const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdG2HoIqUocySV65T7rq2S1bvTwhO2ZKMozDDau5F5YRAiEMg/viewform";
const LINKEDIN_URL = "https://linkedin.com/in/your-profile"; // TODO: replace with your real LinkedIn
const TWITTER_URL = "https://twitter.com/your-handle";       // TODO: replace with your real Twitter

/* --- 2. DATA --- */
interface ProjectProps {
  title: string;
  category: string;
  description: string;
  color: string;
}

interface WorkProps {
  icon: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  outcome: string;
  accentColor: string;
}

const CAPABILITIES: ProjectProps[] = [
  { title: "Healthcare Intelligence",  category: "AI Diagnostics & OCR",  description: "Engineering AI-driven solutions for pharmaceutical verification and HIPAA-compliant workflows.", color: "text-blue-600" },
  { title: "Government & Defense",     category: "Secure Logistics",       description: "Specialized procurement architectures (GeM) and secure systems for defense centers.", color: "text-emerald-600" },
  { title: "EdTech Ecosystems",        category: "Learning Platforms",     description: "Scalable LMS architectures bridging the gap between curriculum and analytics.", color: "text-purple-600" },
  { title: "Enterprise Systems",       category: "Operational Tech",       description: "Building robust internal tools to streamline complex business operations.", color: "text-amber-600" },
];

const PROJECTS: WorkProps[] = [
  {
    icon: "🏥",
    title: "Paavani Medical Centre",
    category: "Healthcare · Clinical Tech",
    description: "Full-stack appointment booking system for a respiratory clinic. Patients get instant WhatsApp confirmations via Twilio; doctors receive real-time email alerts via SendGrid. All bookings stored in Supabase with error logging and scalable API routes.",
    stack: ["Next.js", "TypeScript", "Twilio", "SendGrid", "Supabase"],
    outcome: "Replaced 100% of manual phone bookings for a 200+ patient/month clinic.",
    accentColor: "text-blue-600",
  },
  {
    icon: "🐾",
    title: "PawPortal",
    category: "Pet-Tech · Veterinary SaaS",
    description: "End-to-end practice management SaaS for veterinary clinics. Features appointment scheduling, patient record management, role-based access control, and billing. Architected for multi-clinic operations from day one.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    outcome: "Production-ready platform designed to onboard 50+ clinics at launch.",
    accentColor: "text-emerald-600",
  },
  {
    icon: "💊",
    title: "MedicineScannerIndia",
    category: "Healthcare · Mobile App",
    description: "Cross-platform iOS & Android app for pharmaceutical verification using OCR and AI diagnostics. Users scan medicine packaging to verify authenticity and get instant drug info. Built with Expo for rapid delivery.",
    stack: ["Expo", "React Native", "TypeScript", "OCR / AI"],
    outcome: "MVP shipped in 4 months. Targeting India's ₹1.8L crore pharma market.",
    accentColor: "text-red-500",
  },
  {
    icon: "📚",
    title: "Edscape",
    category: "EdTech · Learning Platform",
    description: "Scalable LMS and course delivery platform with video content, assessments, progress tracking, and instructor dashboards. Multi-tenant architecture built for institutional clients.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    outcome: "Live platform with active courses and enrolled student cohorts.",
    accentColor: "text-purple-600",
  },
  {
    icon: "🏃",
    title: "BhagBro",
    category: "Fitness · Community",
    description: "Running and fitness community platform for Indian athletes. Features progress tracking, community challenges, and personalized training plans. Mobile-first with real-time leaderboards.",
    stack: ["JavaScript", "Next.js", "Supabase"],
    outcome: "Live product with an active running community.",
    accentColor: "text-amber-600",
  },
];

/* --- 3. COMPONENTS --- */
function CapabilityCard({ title, category, description, color }: ProjectProps) {
  return (
    <div
      onClick={() => window.open(FORM_LINK, "_blank")}
      className="group relative bg-white p-8 rounded-3xl border border-stone-200 hover:border-emerald-400 transition-all hover:shadow-xl cursor-pointer h-full flex flex-col justify-between"
    >
      <div>
        <div className="mb-4">
          <span className={`text-xs font-bold tracking-widest uppercase ${color}`}>{category}</span>
        </div>
        <h3 className="text-3xl font-bold text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors">{title}</h3>
        <p className="text-stone-600 leading-relaxed mb-8">{description}</p>
      </div>
      <div className="flex items-center gap-2 text-stone-900 font-medium text-sm group-hover:gap-4 transition-all mt-auto">
        View Case Study <span>→</span>
      </div>
    </div>
  );
}

function WorkCard({ icon, title, category, description, stack, outcome, accentColor }: WorkProps) {
  return (
    <div className="group bg-white rounded-3xl border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all overflow-hidden">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 bg-stone-50 border border-stone-200 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
            {icon}
          </div>
          <div>
            <span className={`text-xs font-bold tracking-widest uppercase ${accentColor}`}>{category}</span>
            <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors leading-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-stone-600 leading-relaxed text-sm mb-5">{description}</p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {stack.map((t) => (
            <span key={t} className="text-xs font-medium text-stone-500 bg-stone-100 border border-stone-200 px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* Outcome */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-3">
          <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Outcome</p>
          <p className="text-sm font-semibold text-stone-800">{outcome}</p>
        </div>
      </div>
    </div>
  );
}

/* --- 4. MAIN PAGE --- */
export default function Home() {
  return (
    <main id="top" className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans scroll-smooth">

      {/* NAVIGATION */}
      <nav className="w-full px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-emerald-500 rounded-tr-lg rounded-bl-lg"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-stone-900">
            Sage <span className="text-emerald-600">&</span> Stone
          </span>
        </div>
        <Link
          href="#profile"
          className="hidden md:block text-stone-600 hover:text-stone-900 font-medium text-sm transition-colors border border-stone-200 px-5 py-2.5 rounded-full hover:border-stone-400"
        >
          Get in Touch
        </Link>
      </nav>

      {/* HERO */}
      <section className="flex flex-col justify-center px-6 max-w-7xl mx-auto w-full pt-16 pb-12">
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-12 bg-emerald-600"></span>
            <span className="text-emerald-700 font-bold tracking-widest text-xs uppercase">Digital Product Studio</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-stone-900 leading-[0.95] tracking-tight">
            Wisdom in <span className="text-stone-400">Design.</span><br />
            Stability in <span className="text-stone-400">Code.</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
            We design and engineer scalable web and mobile applications for ambitious founders —
            healthcare, SaaS, EdTech, and consumer apps. Senior engineer. Real products. No middlemen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md pt-4">
            <Link href="#work" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg text-center order-2 sm:order-1">
              See Work
            </Link>
            <Link href="#contact" className="border-2 border-stone-200 text-stone-900 px-8 py-4 rounded-2xl font-bold text-lg hover:border-stone-400 transition-all text-center order-1 sm:order-2">
              Start Project
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 pb-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center border-y border-stone-200 py-12">
          <div>
            <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-1">6+</div>
            <p className="text-sm text-stone-500 uppercase tracking-wide font-medium">Years Building</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-1">5+</div>
            <p className="text-sm text-stone-500 uppercase tracking-wide font-medium">Live Products</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-1">₹20L+</div>
            <p className="text-sm text-stone-500 uppercase tracking-wide font-medium">Project Value</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-1">3</div>
            <p className="text-sm text-stone-500 uppercase tracking-wide font-medium">Industries Served</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="px-6 py-24 bg-stone-100 rounded-[3rem] mx-2 md:mx-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 border-l-4 border-emerald-600 pl-6">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((c) => (
              <CapabilityCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* REAL PROJECTS */}
      <section id="work" className="px-6 py-24 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-emerald-600"></span>
            <span className="text-emerald-700 font-bold tracking-widest text-xs uppercase">Selected Work</span>
          </div>
          <h2 className="text-4xl font-bold text-stone-900 border-l-4 border-emerald-600 pl-6">
            5 products shipped, end to end
          </h2>
          <p className="text-stone-500 mt-3 pl-6 max-w-xl">
            Real systems, not demos. Each built solo or as lead engineer — from architecture to deployment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((p) => (
            <WorkCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* FOUNDER / ABOUT */}
      <section id="profile" className="px-6 pt-4 pb-24 max-w-7xl mx-auto w-full">
        <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white shadow-2xl">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex-shrink-0 border-4 border-stone-700 overflow-hidden shadow-xl">
            <img src="/profile.jpg" alt="Abhishek Singh" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-5 text-center md:text-left">
            <div>
              <p className="text-emerald-500 font-bold tracking-wide uppercase text-xs mb-2">Lead Engineer · Founder</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Abhishek Singh</h2>
            </div>
            <p className="text-stone-300 max-w-xl leading-relaxed">
              6 years building production systems across healthcare, pet-tech, EdTech, and consumer apps.
              Currently CEAM at <span className="text-white font-semibold">Altera</span>. I take select projects through Sage & Stone — you work directly with me, start to finish.
            </p>
            <p className="text-stone-400 text-sm">
              📍 Lucknow, India &nbsp;·&nbsp; 🌍 Remote — EST, PST, GMT &nbsp;·&nbsp; ✅ Verified on Upwork & Contra
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-stone-900 bg-white px-5 py-2 rounded-full hover:bg-stone-100 transition-colors">
                LinkedIn
              </a>
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-stone-300 border border-stone-600 px-5 py-2 rounded-full hover:border-stone-400 hover:text-white transition-colors">
                Twitter / X
              </a>
              <a href="https://github.com/abhi310395" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-stone-300 border border-stone-600 px-5 py-2 rounded-full hover:border-stone-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="mailto:abhishekairforce@gmail.com" className="text-sm font-semibold text-stone-300 border border-stone-600 px-5 py-2 rounded-full hover:border-stone-400 hover:text-white transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-24 text-center border-t border-stone-200">
        <div className="max-w-md mx-auto mb-10">
          <h3 className="text-3xl font-bold text-stone-900 mb-4">Have an idea? Let&apos;s build it.</h3>
          <p className="font-semibold text-stone-700 mb-2">Serving ambitious founders and teams globally</p>
          <div className="flex justify-center items-center gap-6 text-xs uppercase tracking-wider text-stone-400">
            <span>Lucknow, India</span>
            <span>•</span>
            <span>Remote Worldwide</span>
            <span>•</span>
            <span>Reply in 24hrs</span>
          </div>
        </div>
        <a
          href={FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-50 border-2 border-emerald-600 transition-all shadow-lg mx-auto"
        >
          Discuss Your Project →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sage & Stone. Lucknow, India.</p>
          <div className="flex items-center gap-6">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors font-medium">LinkedIn</a>
            <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors font-medium">Twitter</a>
            <a href="https://github.com/abhi310395" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors font-medium">GitHub</a>
            <Link href="#top" className="flex items-center gap-2 hover:text-stone-900 transition-colors font-bold group">
              Back to top <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
