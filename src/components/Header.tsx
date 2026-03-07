'use client'

import { useState, useRef, useEffect } from 'react'
import {
  Phone, Menu, X, ChevronDown, Wrench, Globe,
  Zap, Waves, Flame, Search, GitBranch, Building2,
  Thermometer, Wind, Droplets, Settings,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Lang } from '@/translations'
import type { LucideIcon } from 'lucide-react'

/* ── Dropdown data ────────────────────────────────────────────────────────── */
type ServiceItem = { label: string; desc: string; href: string; Icon: LucideIcon }

const plumbingServices: ServiceItem[] = [
  { label: 'Emergency Plumbing',    desc: '24/7 rapid response',   href: '/plumbing#emergency',       Icon: Zap       },
  { label: 'Drain Cleaning',        desc: 'Clear blockages fast',   href: '/plumbing#drain',           Icon: Waves     },
  { label: 'Water Heater',          desc: 'Tankless & traditional', href: '/plumbing#water-heater',    Icon: Flame     },
  { label: 'Leak Detection',        desc: 'Advanced technology',    href: '/plumbing#leak-detection',  Icon: Search    },
  { label: 'Sewer Line Repair',     desc: 'Minimal disruption',     href: '/plumbing#sewer',           Icon: GitBranch },
  { label: 'Commercial Plumbing',   desc: 'All facility sizes',     href: '/plumbing#commercial',      Icon: Building2 },
]

const heatingServices: ServiceItem[] = [
  { label: 'Furnace Installation',   desc: 'Efficient & reliable',    href: '/heating#furnace',   Icon: Flame       },
  { label: 'Boiler Services',        desc: 'Repair & replacement',    href: '/heating#boiler',    Icon: Thermometer },
  { label: 'Heat Pump Systems',      desc: 'Year-round comfort',      href: '/heating#heat-pump', Icon: Zap         },
  { label: 'Radiant Heating',        desc: 'Floor & wall heating',    href: '/heating#radiant',   Icon: Waves       },
  { label: 'Heating Repair',         desc: 'Fast & professional',     href: '/heating#repair',    Icon: Wrench      },
  { label: 'Annual Tune-Up',         desc: 'Keep it running smooth',  href: '/heating#tune-up',   Icon: Settings    },
]

const coolingServices: ServiceItem[] = [
  { label: 'AC Installation',        desc: 'Central & ductless',      href: '/cooling#installation', Icon: Wind      },
  { label: 'AC Repair',              desc: 'Same-day service',        href: '/cooling#repair',       Icon: Wrench    },
  { label: 'Ductless Mini-Splits',   desc: 'Flexible cooling',        href: '/cooling#mini-splits',  Icon: Zap       },
  { label: 'Central Air Systems',    desc: 'Whole-home comfort',      href: '/cooling#central-air',  Icon: Waves     },
  { label: 'Indoor Air Quality',     desc: 'Clean & healthy air',     href: '/cooling#air-quality',  Icon: Droplets  },
  { label: 'Emergency AC Service',   desc: '24/7 availability',       href: '/cooling#emergency',    Icon: Flame     },
]

type DropKey = 'plumbing' | 'heating' | 'cooling'

/* ── Desktop Dropdown Panel ───────────────────────────────────────────────── */
function DropPanel({
  services, pageHref, pageLabel, onClose,
}: {
  services: ServiceItem[]
  pageHref: string
  pageLabel: string
  onClose: () => void
}) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-1.5 z-50">
      {/* Arrow */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

      {services.map(({ label, desc, href, Icon }) => (
        <Link
          key={label}
          href={href}
          onClick={onClose}
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 group transition-colors"
        >
          <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
            <Icon size={15} className="text-orange-500 group-hover:text-white transition-colors" />
          </div>
          <div>
            <div className="text-sm font-semibold text-[#0D1929]">{label}</div>
            <div className="text-xs text-gray-400">{desc}</div>
          </div>
        </Link>
      ))}

      <div className="col-span-2 mt-1 pt-3 border-t border-gray-100 flex items-center justify-between px-2">
        <span className="text-xs text-gray-400">Need help choosing?</span>
        <Link
          href={pageHref}
          onClick={onClose}
          className="text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors"
        >
          View All {pageLabel} Services →
        </Link>
      </div>
    </div>
  )
}

/* ── Mobile Accordion ─────────────────────────────────────────────────────── */
function MobileAccordion({
  label, isOpen, onToggle, services, onClose,
}: {
  label: string
  isOpen: boolean
  onToggle: () => void
  services: ServiceItem[]
  onClose: () => void
}) {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between text-gray-200 font-medium py-3 hover:text-white transition-colors text-sm"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-orange-400' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="pb-3 grid grid-cols-1 gap-1">
          {services.map(({ label: sLabel, desc, href, Icon }) => (
            <Link
              key={sLabel}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 group transition-colors"
            >
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon size={14} className="text-orange-300" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{sLabel}</div>
                <div className="text-xs text-gray-400">{desc}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Main Header ──────────────────────────────────────────────────────────── */
export default function Header() {
  const { lang, setLang } = useLanguage()

  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeDrop,  setActiveDrop]  = useState<DropKey | null>(null)
  const [mobilePlumb, setMobilePlumb] = useState(false)
  const [mobileHeat,  setMobileHeat]  = useState(false)
  const [mobileCool,  setMobileCool]  = useState(false)
  const [langOpen,    setLangOpen]    = useState(false)

  const navRef  = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current  && !navRef.current.contains(e.target  as Node)) setActiveDrop(null)
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const toggle = (key: DropKey) =>
    setActiveDrop((prev) => (prev === key ? null : key))

  const closeDrop = () => setActiveDrop(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1929] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.jpeg"
            alt="Atlas Plumbing"
            width={130}
            height={44}
            className="object-contain"
            priority
          />
          <span className="text-orange-300 text-[10px] font-semibold uppercase tracking-widest hidden sm:block">
            Licensed & Insured
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          className="hidden lg:flex items-center gap-6"
          aria-label="Main navigation"
        >
          <Link href="/" className="text-gray-300 text-sm font-medium hover:text-white transition-colors">
            Home
          </Link>

          {/* Plumbing */}
          <div className="relative">
            <button
              onClick={() => toggle('plumbing')}
              aria-expanded={activeDrop === 'plumbing'}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                activeDrop === 'plumbing' ? 'text-orange-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Plumbing
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeDrop === 'plumbing' ? 'rotate-180' : ''}`}
              />
            </button>
            {activeDrop === 'plumbing' && (
              <DropPanel services={plumbingServices} pageHref="/plumbing" pageLabel="Plumbing" onClose={closeDrop} />
            )}
          </div>

          {/* Heating */}
          <div className="relative">
            <button
              onClick={() => toggle('heating')}
              aria-expanded={activeDrop === 'heating'}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                activeDrop === 'heating' ? 'text-orange-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Heating
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeDrop === 'heating' ? 'rotate-180' : ''}`}
              />
            </button>
            {activeDrop === 'heating' && (
              <DropPanel services={heatingServices} pageHref="/heating" pageLabel="Heating" onClose={closeDrop} />
            )}
          </div>

          {/* Cooling */}
          <div className="relative">
            <button
              onClick={() => toggle('cooling')}
              aria-expanded={activeDrop === 'cooling'}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                activeDrop === 'cooling' ? 'text-orange-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Cooling
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeDrop === 'cooling' ? 'rotate-180' : ''}`}
              />
            </button>
            {activeDrop === 'cooling' && (
              <DropPanel services={coolingServices} pageHref="/cooling" pageLabel="Cooling" onClose={closeDrop} />
            )}
          </div>

          <Link href="#about" className="text-gray-300 text-sm font-medium hover:text-white transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-gray-300 text-sm font-medium hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTAs + Language */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm font-semibold px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Select language"
              aria-expanded={langOpen}
            >
              <Globe size={15} />
              <span className="uppercase">{lang}</span>
              <ChevronDown size={13} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 w-28 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                {(['en', 'es'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false) }}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-colors ${
                      lang === l ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{l === 'en' ? '🇺🇸' : '🇲🇽'}</span>
                    <span className="uppercase">{l}</span>
                    {lang === l && <span className="ml-auto text-orange-500 text-xs">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0D1929] font-semibold px-4 py-2 rounded-lg text-sm transition-colors shadow-md"
            aria-label="Call us now"
          >
            <Phone size={15} />
            (555) 123-4567
          </a>
          <Link
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-lg text-sm transition-all shadow-md animate-pulse-glow"
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0D1929] border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-200 font-medium hover:text-white transition-colors py-3 border-b border-white/10 text-sm"
          >
            Home
          </Link>

          <MobileAccordion
            label="Plumbing"
            isOpen={mobilePlumb}
            onToggle={() => setMobilePlumb(!mobilePlumb)}
            services={plumbingServices}
            onClose={() => setMenuOpen(false)}
          />
          <MobileAccordion
            label="Heating"
            isOpen={mobileHeat}
            onToggle={() => setMobileHeat(!mobileHeat)}
            services={heatingServices}
            onClose={() => setMenuOpen(false)}
          />
          <MobileAccordion
            label="Cooling"
            isOpen={mobileCool}
            onToggle={() => setMobileCool(!mobileCool)}
            services={coolingServices}
            onClose={() => setMenuOpen(false)}
          />

          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-200 font-medium hover:text-white transition-colors py-3 border-b border-white/10 text-sm"
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-200 font-medium hover:text-white transition-colors py-3 border-b border-white/10 text-sm"
          >
            Contact
          </Link>

          {/* Language */}
          <div className="py-3 border-b border-white/10 flex items-center gap-3">
            <Globe size={15} className="text-gray-400" />
            <span className="text-gray-400 text-sm">Language:</span>
            {(['en', 'es'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${
                  lang === l ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{l === 'en' ? '🇺🇸' : '🇲🇽'}</span>
                <span className="uppercase">{l}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-2 bg-white text-[#0D1929] font-semibold px-4 py-3 rounded-lg text-sm"
            >
              <Phone size={15} />
              (555) 123-4567
            </a>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-center bg-orange-500 text-white font-bold px-5 py-3 rounded-lg text-sm"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
