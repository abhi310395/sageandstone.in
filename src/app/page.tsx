"use client";

import Link from "next/link";

/* --- 1. CONFIGURATION --- */
const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdG2HoIqUocySV65T7rq2S1bvTwhO2ZKMozDDau5F5YRAiEMg/viewform";
const LINKEDIN_URL = "https://linkedin.com/in/your-profile";
const TWITTER_URL = "https://twitter.com/your-handle";

/* --- 2. INTERNAL COMPONENT: PROJECT CARD --- */
interface ProjectProps {
  title: string;
  category: string;
  description: string;
  color: string;
}

function ProjectCard({ title, category, description, color }: ProjectProps) {
  return (
    <div 
      onClick={() => window.open(FORM_LINK, '_blank')}
      className="group relative bg-white p-8 rounded-3xl border border-stone-200 hover:border-emerald-400 transition-all hover:shadow-xl cursor-pointer h-full flex flex-col justify-between"
    >
      <div>
        <div className="mb-4">
          <span className={`text-xs font-bold tracking-widest uppercase ${color}`}>
            {category}
          </span>
        </div>
        <h3 className="text-3xl font-bold text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-2 text-stone-900 font-medium text-sm group-hover:gap-4 transition-all mt-auto">
        View Case Study <span>→</span>
      </div>
    </div>
  );
}

/* --- 3. MAIN PAGE --- */
export default function Home() {
  return (
    <main id="top" className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans scroll-smooth">
      
      {/* --- NAVIGATION --- */}
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

      {/* --- HERO SECTION --- */}
      <section className="flex flex-col justify-center px-6 max-w-7xl mx-auto w-full pt-16 pb-12">
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-12 bg-emerald-600"></span>
            <span className="text-emerald-700 font-bold tracking-widest text-xs uppercase">
              Digital Product Studio
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-stone-900 leading-[0.95] tracking-tight">
            Wisdom in <span className="text-stone-400">Design.</span><br />
            Stability in <span className="text-stone-400">Code.</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
            We design and engineer scalable web and mobile applications for ambitious founders.
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

      {/* --- STATS SECTION --- */}
      <section className="px-6 pb-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-y border-stone-200 py-12">
          <div>
            <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-1">6+</div>
            <p className="text-sm text-stone-500 uppercase tracking-wide font-medium">Years Building</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-1">3</div>
            <p className="text-sm text-stone-500 uppercase tracking-wide font-medium">Live Products</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-1">₹20L+</div>
            <p className="text-sm text-stone-500 uppercase tracking-wide font-medium">Project Value</p>
          </div>
        </div>
      </section>

      {/* --- WORK SECTION --- */}
      <section id="work" className="px-6 py-24 bg-stone-100 rounded-[3rem] mx-2 md:mx-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 border-l-4 border-emerald-600 pl-6">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard title="Healthcare Intelligence" category="AI Diagnostics & OCR" description="Engineering AI-driven solutions for pharmaceutical verification and HIPAA-compliant workflows." color="text-blue-600" />
            <ProjectCard title="Government & Defense" category="Secure Logistics" description="Specialized procurement architectures (GeM) and secure systems for defense centers." color="text-emerald-600" />
            <ProjectCard title="EdTech Ecosystems" category="Learning Platforms" description="Scalable LMS architectures bridging the gap between curriculum and analytics." color="text-purple-600" />
            <ProjectCard title="Enterprise Systems" category="Operational Tech" description="Building robust internal tools to streamline complex business operations." color="text-amber-600" />
          </div>
        </div>
      </section>

      {/* --- FOUNDER SECTION (UPDATED WITH PHOTO) --- */}
      <section id="profile" className="px-6 pt-24 max-w-7xl mx-auto w-full">
        <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white shadow-2xl">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex-shrink-0 border-4 border-stone-700 overflow-hidden relative shadow-xl">
             <img 
              src="/profile.jpg" 
              alt="Abhishek Singh" 
              className="w-full h-full object-cover" 
             />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div>
              <p className="text-emerald-500 font-bold tracking-wide uppercase text-xs mb-2">Lead Engineer</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Abhishek Singh</h2>
            </div>
            <p className="text-stone-300 max-w-xl leading-relaxed">
              With 6 years of technical support and systems engineering experience, I bridge the gap between complex engineering and intuitive design.
            </p>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section id="contact" className="px-6 py-24 text-center border-t border-stone-200 mt-20">
        <div className="max-w-md mx-auto mb-10">
          <h3 className="text-3xl font-bold text-stone-900 mb-4">Have an idea? Let's build it.</h3>
          <p className="font-semibold text-stone-700 mb-2">Serving ambitious founders and teams</p>
          <div className="flex justify-center items-center gap-6 text-xs uppercase tracking-wider text-stone-400">
            <span>Lucknow, India</span>
            <span>•</span>
            <span>Remote Worldwide</span>
          </div>
        </div>
        <a href={FORM_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-50 border-2 border-emerald-600 transition-all shadow-lg mx-auto">
          Discuss Your Project →
        </a>
      </section>

      {/* --- FOOTER --- */}
      <footer className="px-8 py-12 border-t border-stone-200 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-stone-500 text-sm">
          <p>&copy; 2026 Sage & Stone. Lucknow, India.</p>
          <div className="flex items-center gap-6">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors font-medium">LinkedIn</a>
            <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors font-medium">Twitter</a>
            <Link href="#top" className="flex items-center gap-2 hover:text-stone-900 transition-colors font-bold group">
              Back to top <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}