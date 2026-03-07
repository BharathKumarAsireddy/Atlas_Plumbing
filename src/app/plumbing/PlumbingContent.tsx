'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, ShieldCheck, DollarSign, Clock, ThumbsUp, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EstimateForm from '@/components/EstimateForm'
import ServiceRow from '@/components/ServiceRow'
import { useLanguage } from '@/context/LanguageContext'

const serviceIcons  = ['Zap', 'Waves', 'GitBranch', 'Search', 'Flame']
const serviceImgs   = [
  '/plumbing/residential-repair.jpg',
  '/plumbing/commercial-pipes.jpg',
  '/plumbing/pipe-installation.jpg',
  '/plumbing/faucet-install.jpg',
  '/plumbing/pump-systems.jpg',
]
const serviceAlts   = [
  'Certified plumber repairing kitchen sink plumbing',
  'Industrial commercial plumbing pipe network installation',
  'Professional pipe installation and repair work',
  'Modern kitchen faucet fixture installation',
  'Industrial water pump and pressure system installation',
]

const whyIcons = [ShieldCheck, DollarSign, Clock, ThumbsUp]

export default function PlumbingContent() {
  const { t } = useLanguage()
  const pp = t.plumbingPage

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute ken-burns" style={{ inset: '-8%' }}>
              <Image
                src="/plumbing/residential-repair.jpg"
                alt="Professional plumber at work"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1929]/93 via-[#0D1929]/75 to-[#0D1929]/40" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[30vh] bg-orange-500/10 blur-3xl rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-400/40 text-orange-300 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                <ShieldCheck size={14} />
                {pp.hero.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                {pp.hero.headline1}<br />
                <span className="text-orange-400">{pp.hero.headline2}</span><br />
                {pp.hero.headline3}
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
                {pp.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+15551234567"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#0D1929] font-bold px-7 py-4 rounded-xl text-base transition-all shadow-lg hover:-translate-y-0.5"
                >
                  <Phone size={18} />
                  {pp.hero.callNow}
                </a>
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-4 rounded-xl text-base transition-all shadow-lg hover:-translate-y-0.5"
                >
                  {pp.hero.freeEstimate}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section Intro ─────────────────────────────────────────────────── */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              {pp.intro.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2A4A] mt-2 mb-4">
              {pp.intro.heading}
            </h2>
            <p className="text-gray-500 text-lg">{pp.intro.subheading}</p>
          </div>
        </section>

        {/* ── Services — Animated Alternating Split Layout ──────────────────── */}
        {pp.services.map((svc, i) => (
          <ServiceRow
            key={svc.title}
            id={['residential-repairs','commercial-plumbing','pipe-installation','fixture-installation','pump-systems'][i]}
            title={svc.title}
            description={svc.description}
            iconName={serviceIcons[i]}
            img={serviceImgs[i]}
            alt={serviceAlts[i]}
            features={[...svc.features]}
            badge={svc.badge}
            imageLeft={i % 2 === 0}
            bg={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
          />
        ))}

        {/* ── Why Choose Us ─────────────────────────────────────────────────── */}
        <section className="py-20 bg-[#0D1929]" aria-label="Why choose Atlas Plumbing">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
                  {pp.whyUs.eyebrow}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6">
                  {pp.whyUs.heading}
                </h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  {pp.whyUs.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {pp.whyUs.items.map(({ title, desc }, i) => {
                    const Icon = whyIcons[i]
                    return (
                      <div key={title} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-md">
                          <Icon size={22} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">{title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <div className="absolute ken-burns" style={{ inset: '-8%' }}>
                  <Image
                    src="/plumbing/commercial-pipes.jpg"
                    alt="Professional Atlas Plumbing commercial pipe systems"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-xl">
                  {pp.whyUs.certBadge}
                </div>
              </div>
            </div>
          </div>
        </section>

        <EstimateForm />
      </main>
      <Footer />
    </>
  )
}
