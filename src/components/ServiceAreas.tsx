'use client'

import { MapPin, Phone } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'

const areas = [
  { city: 'Newark',      state: 'NJ' },
  { city: 'Jersey City', state: 'NJ' },
  { city: 'Paterson',    state: 'NJ' },
  { city: 'Elizabeth',   state: 'NJ' },
  { city: 'Edison',      state: 'NJ' },
  { city: 'Trenton',     state: 'NJ' },
]

export default function ServiceAreas() {
  const { t } = useLanguage()
  const sa = t.serviceAreas
  const { ref: cardRef,  inView: cardIn  } = useInView()
  const { ref: rightRef, inView: rightIn } = useInView()

  return (
    <section className="py-24 bg-white" aria-label="Service areas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Google Map */}
          <div
            ref={cardRef}
            className={`transition-all duration-700 ease-out ${
              cardIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[440px]">
              <iframe
                title="Atlas Plumbing location"
                src="https://maps.google.com/maps?q=125+Patriots+Ridge+Drive,+Deptford,+NJ+08096&output=embed"
                width="100%"
                height="440"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Address overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#1B2A4A]/90 backdrop-blur-sm px-5 py-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">125 Patriots Ridge Drive</p>
                  <p className="text-orange-200 text-xs">Deptford, New Jersey 08096</p>
                </div>
                {/* Live indicator */}
                <div className="ml-auto inline-flex items-center gap-1.5 bg-green-500/15 border border-green-400/30 text-green-300 text-xs font-medium px-3 py-1.5 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  {sa.availableNow}
                </div>
              </div>
            </div>
          </div>

          {/* Right: cities list */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 ease-out delay-200 ${
              rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              {sa.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2A4A] mt-2 mb-4">
              {sa.heading}
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              {sa.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {areas.map((area, i) => (
                <div
                  key={area.city}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className={`flex items-center gap-3 bg-gray-50 hover:bg-[#1B2A4A] border border-gray-100 hover:border-[#1B2A4A] rounded-xl px-4 py-3.5 transition-all duration-300 group cursor-default ${
                    rightIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <MapPin size={16} className="text-orange-500 group-hover:text-orange-300 flex-shrink-0 transition-colors" />
                  <div>
                    <span className="font-semibold text-[#1B2A4A] group-hover:text-white text-sm block transition-colors leading-tight">
                      {area.city}
                    </span>
                    <span className="text-gray-400 group-hover:text-orange-300 text-xs transition-colors">
                      {area.state}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-orange-50 border border-orange-200 rounded-xl flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-[#1B2A4A] text-sm font-semibold mb-0.5">{sa.notListed}</p>
                <p className="text-orange-700 text-sm">{sa.callUs}</p>
              </div>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-orange-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap flex-shrink-0"
              >
                <Phone size={14} />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
