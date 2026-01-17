"use client";

import Link from "next/link";

export default function HealthcareCaseStudy() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-20">
      {/* Navigation */}
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Sage <span className="text-emerald-600">&</span> Stone
        </Link>
        <Link href="/#work" className="text-sm font-medium hover:text-emerald-600 transition-colors">
          ← Back to Portfolio
        </Link>
      </nav>

      {/* Hero Header */}
      <header className="px-6 pt-12 pb-24 max-w-5xl mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-6">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">AI Diagnostics & OCR</span>
          <span className="h-4 w-px bg-stone-300"></span>
          <span className="text-stone-500 font-bold tracking-widest uppercase text-xs">Partnered with 1MG & PharmMedics</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-8 leading-tight">Healthcare Intelligence Ecosystem</h1>
        <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
          Engineering high-stability digital solutions for the pharmaceutical sector, focusing on accuracy, compliance, and seamless data integration.
        </p>
      </header>

      {/* Content Grid */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Project Overview</h2>
            <p className="text-stone-600 leading-relaxed">
              In collaboration with industry leaders like **1MG** and **PharmMedics**, Sage & Stone delivers technical excellence in pharmaceutical data management. We bridge the gap between complex medical datasets and high-performance digital interfaces.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Technical Focus</h2>
            <ul className="space-y-4 text-stone-600">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span> 
                Proprietary OCR layers for high-accuracy pharmaceutical text extraction.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span> 
                Enterprise-grade synchronization with large-scale drug databases.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span> 
                Architecture designed for HIPAA compliance and data security.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col justify-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Current Impact</h3>
          <div className="space-y-8">
            <div>
              <div className="text-5xl font-black text-blue-400">98%</div>
              <p className="text-stone-400 mt-2 uppercase tracking-wide text-sm">Processing Accuracy</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-400">Secure</div>
              <p className="text-stone-400 mt-2 uppercase tracking-wide text-sm">End-to-End Encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-32 px-6 text-center">
        <div className="bg-emerald-600 p-12 md:p-20 rounded-[3rem] max-w-5xl mx-auto text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-6">Partner with Sage & Stone</h2>
          <p className="text-emerald-100 mb-10 text-lg">Join our network of healthcare leaders and build your next secure solution.</p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdG2HoIqUocySV65T7rq2S1bvTwhO2ZKMozDDau5F5YRAiEMg/viewform" className="bg-white text-emerald-700 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:bg-stone-100 transition-all inline-block">
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}