'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const fo = t.footer
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0D1929] text-white relative overflow-hidden" aria-label="Site footer">

      {/* Decorative background images */}
      <div className="absolute -right-10 -bottom-10 w-72 h-72 opacity-[0.07] pointer-events-none select-none">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
          alt=""
          fill
          className="object-cover object-left rounded-3xl"
          aria-hidden="true"
          sizes="288px"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#0D1929]/40 to-[#0D1929] rounded-3xl" />
      </div>

      <div className="absolute -left-10 top-0 w-56 h-56 opacity-[0.06] pointer-events-none select-none">
        <Image
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
          alt=""
          fill
          className="object-cover object-right rounded-3xl"
          aria-hidden="true"
          sizes="224px"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#0D1929]/40 to-[#0D1929] rounded-3xl" />
      </div>

      {/* Orange accent line at top */}
      <div className="h-1 bg-orange-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.jpeg"
                alt="Atlas Plumbing"
                width={160}
                height={54}
                className="object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {fo.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/atlasplumbing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/atlasplumbing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">{fo.quickLinks}</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home',      href: '/'        },
                { label: 'Plumbing',  href: '/plumbing'},
                { label: 'Heating',   href: '/heating' },
                { label: 'Cooling',   href: '/cooling'   },
                { label: 'Branding',  href: '/branding'  },
                { label: 'About Us',  href: '#about'     },
                { label: 'Contact',   href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">{fo.ourServices}</h3>
            <ul className="space-y-3">
              {[
                'Emergency Plumbing',
                'Drain Cleaning',
                'Water Heater Installation',
                'Furnace Installation',
                'AC Installation',
                'Leak Detection',
              ].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">{fo.contactUs}</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+15551234567" className="flex items-start gap-3 text-slate-400 hover:text-white text-sm transition-colors">
                  <Phone size={16} className="flex-shrink-0 mt-0.5 text-orange-400" />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@atlasplumbing.com" className="flex items-start gap-3 text-slate-400 hover:text-white text-sm transition-colors">
                  <Mail size={16} className="flex-shrink-0 mt-0.5 text-orange-400" />
                  info@atlasplumbing.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-orange-400" />
                <span>
                  125 Patriots Ridge Drive<br />
                  Deptford, New Jersey 08096
                </span>
              </li>
            </ul>

            <a
              href="tel:+15551234567"
              className="mt-6 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              <Phone size={14} />
              {fo.emergencyLine}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
            <p>&copy; {year} Atlas Plumbing Group LLC. {fo.allRightsReserved}</p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <p>Owner: Michael G. Bonaventure</p>
          </div>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white transition-colors">{fo.privacyPolicy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{fo.termsOfService}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
