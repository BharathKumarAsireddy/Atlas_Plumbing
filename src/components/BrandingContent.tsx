'use client'

import Link from 'next/link'
import {
  Phone,
  FileText,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin,
  Wrench,
  Clock,
  CheckCircle,
  Truck,
} from 'lucide-react'
import AtlasVan from './AtlasVan'

const vanFeatures = [
  {
    icon: Wrench,
    title: 'Company Name in Bold',
    desc: '"ATLAS PLUMBING" printed in large, high-contrast white lettering — readable from across the street.',
  },
  {
    icon: Phone,
    title: 'Direct Phone Number',
    desc: '(555) 123-4567 displayed prominently so customers can call the moment they spot our van.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured Badge',
    desc: 'Our credentials are on the vehicle itself — instant proof of professionalism before we knock on the door.',
  },
  {
    icon: Star,
    title: '5-Star Rating Display',
    desc: 'Our 5.0-star average and "5.0 Rated" badge reinforces trust at a glance for every homeowner we pass.',
  },
  {
    icon: MapPin,
    title: 'New Jersey Service Area',
    desc: '"Licensed · Insured · New Jersey" on every vehicle so locals know we are their neighborhood plumber.',
  },
  {
    icon: Clock,
    title: '24/7 Availability Signaled',
    desc: 'The orange accent stripe and branding communicate urgency and availability — day or night.',
  },
]

export default function BrandingContent() {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">

        {/* ── LEFT HALF — Van visual ── */}
        <div className="relative bg-[#0D1929] flex flex-col items-center justify-center px-8 py-20 overflow-hidden">

          {/* Decorative grid lines */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Ambient glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-60 bg-orange-500/15 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

          {/* Section eyebrow */}
          <div className="relative z-10 flex items-center gap-2 bg-orange-500/15 border border-orange-400/40 text-orange-300 text-xs font-bold px-4 py-2 rounded-full mb-10 uppercase tracking-widest">
            <Truck size={13} className="text-orange-400" />
            Our Branded Fleet
          </div>

          {/* Van illustration */}
          <div className="relative z-10 w-full max-w-lg animate-float">
            <AtlasVan className="w-full drop-shadow-2xl" />
          </div>

          {/* Bottom caption */}
          <p className="relative z-10 text-slate-400 text-sm text-center mt-10 max-w-xs leading-relaxed">
            Every Atlas Plumbing vehicle carries full branding — company name, phone number,
            credentials, and our 5-star rating.
          </p>

          {/* Trust badges row */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3 mt-8">
            {[
              { icon: ShieldCheck, text: 'Licensed & Insured' },
              { icon: Star,        text: '5.0 Rated'          },
              { icon: Clock,       text: '24/7 Available'     },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 bg-white/8 border border-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full"
              >
                <Icon size={12} className="text-orange-400" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT HALF — Content ── */}
        <div className="bg-white flex flex-col justify-center px-8 md:px-16 py-20">
          <div className="max-w-xl">

            {/* Eyebrow */}
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              Fleet Branding
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2A4A] mt-3 mb-5 leading-tight">
              Instantly Recognized.<br />
              <span className="text-orange-500">Always Professional.</span>
            </h1>

            {/* Intro */}
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Every Atlas Plumbing service vehicle is professionally wrapped with everything a customer
              needs to identify us, trust us, and contact us — before we even knock on the door.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {vanFeatures.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B2A4A] text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-orange-500 pl-5 mb-10">
              <p className="text-[#1B2A4A] font-semibold text-base italic leading-relaxed">
                &ldquo;When our van pulls up, customers already know who we are, what we do,
                and how to reach us. That trust starts before the first handshake.&rdquo;
              </p>
              <footer className="text-gray-400 text-sm mt-2">— Atlas Plumbing Operations</footer>
            </blockquote>

            {/* Checklist highlights */}
            <ul className="space-y-2 mb-10">
              {[
                'Full-wrap vinyl branding on all service vehicles',
                'High-visibility orange accent stripe and logo placement',
                'Contact information readable from 30+ feet away',
                'Consistent branding builds community recognition',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-2 bg-[#1B2A4A] hover:bg-orange-500 text-white font-bold px-7 py-4 rounded-xl text-sm transition-all shadow-lg hover:-translate-y-0.5"
                aria-label="Call Atlas Plumbing"
              >
                <Phone size={16} />
                Call Now — (555) 123-4567
              </a>
              <Link
                href="/#contact"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-4 rounded-xl text-sm transition-all shadow-lg hover:-translate-y-0.5"
              >
                <FileText size={16} />
                Get Free Estimate
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
