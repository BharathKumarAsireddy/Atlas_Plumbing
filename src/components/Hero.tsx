'use client'

import Image from 'next/image'
import { Phone, FileText, Star, ShieldCheck, Clock, CheckCircle, ArrowRight, Truck } from 'lucide-react'
import Link from 'next/link'
import AtlasVan from './AtlasVan'
import { useLanguage } from '@/context/LanguageContext'

const trustIcons = [Clock, ShieldCheck, CheckCircle]

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Full-bleed background: copper plumbing pipes ── */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute ken-burns" style={{ inset: '-8%' }}>
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85"
            alt="Close-up of copper plumbing pipes and fittings"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1929]/92 via-[#0D1929]/75 to-[#0D1929]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1929]/70 via-transparent to-[#0D1929]/40" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 pt-44 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <div>
            <div className="hero-animate-1 inline-flex items-center gap-2 bg-orange-500/15 border border-orange-400/40 text-orange-300 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
              <ShieldCheck size={14} className="text-orange-400" />
              {h.badge}
            </div>

            <h1 className="hero-animate-2 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
              {h.headline1}<br />
              <span className="text-orange-400">{h.headline2}</span><br />
              {h.headline3}
            </h1>

            <p className="hero-animate-3 text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              {h.subheadline}
            </p>

            <div className="hero-animate-4 flex items-center gap-3 mb-10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-orange-400 fill-orange-400" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">5.0</span>
              <span className="text-gray-400 text-sm">{h.ratingLabel}</span>
            </div>

            <div className="hero-animate-5 flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#0D1929] font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="Call Atlas Plumbing now"
              >
                <Phone size={18} />
                {h.callNow}
              </a>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-pulse-glow"
              >
                <FileText size={18} />
                {h.getFreeEstimate}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hero-animate-6 flex flex-wrap gap-x-8 gap-y-3">
              {h.trustItems.map((text, i) => {
                const Icon = trustIcons[i]
                return (
                  <div key={text} className="flex items-center gap-2 text-gray-300">
                    <Icon size={15} className="text-orange-400" />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right column — branded service van */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="relative w-full animate-float">
              {/* Ambient glow behind the van */}
              <div className="absolute inset-0 scale-90 translate-y-4 bg-orange-500/15 blur-3xl rounded-full pointer-events-none" />

              {/* The van illustration */}
              <AtlasVan className="relative w-full drop-shadow-2xl" />

              {/* Fleet-ready badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-5 py-2 rounded-full flex items-center gap-2 shadow-lg whitespace-nowrap">
                <Truck size={13} />
                Our Fleet Is Ready — New Jersey
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="hidden lg:flex absolute bottom-10 right-10 z-20 gap-4">
        {h.stats.map((s, i) => (
          <div
            key={s.label}
            className={`stat-animate-${i + 1} bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-center shadow-xl hover:bg-white/15 transition-colors`}
          >
            <div className="text-2xl font-extrabold text-orange-400 leading-none">{s.value}</div>
            <div className="text-gray-300 text-xs mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
