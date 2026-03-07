'use client'

import Image from 'next/image'
import { ShieldCheck, DollarSign, Clock, ThumbsUp } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'

const featureIcons = [ShieldCheck, DollarSign, Clock, ThumbsUp]

export default function WhyChooseUs() {
  const { t } = useLanguage()
  const w = t.whyChooseUs
  const { ref: imgRef,   inView: imgIn   } = useInView()
  const { ref: rightRef, inView: rightIn } = useInView()
  const { ref: statRef,  inView: statIn  } = useInView()

  return (
    <section id="about" className="py-24 bg-white overflow-hidden" aria-label="Why choose Atlas Plumbing">
      <div className="max-w-7xl mx-auto px-6">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: 3-image collage */}
          <div
            ref={imgRef}
            className={`transition-all duration-700 ease-out ${
              imgIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="grid grid-cols-5 grid-rows-2 gap-3 h-[420px]">

              {/* Main large image — spans 3 cols × 2 rows */}
              <div className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute ken-burns" style={{ inset: '-8%' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&q=80"
                    alt="Professional plumber fixing a pipe"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 60vw, 30vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Orange accent overlay strip */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500" />
              </div>

              {/* Top-right small image */}
              <div className="col-span-2 relative rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
                  alt="Plumber working on pipes"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
                <div className="absolute inset-0 bg-[#1B2A4A]/30 group-hover:bg-[#1B2A4A]/10 transition-colors duration-300" />
              </div>

              {/* Bottom-right small image + Experience badge */}
              <div className="col-span-2 relative rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&q=80"
                  alt="Water heater installation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
                <div className="absolute inset-0 bg-[#1B2A4A]/30 group-hover:bg-[#1B2A4A]/10 transition-colors duration-300" />

                {/* Experience badge */}
                <div className="absolute bottom-3 left-3 bg-orange-500 text-white rounded-xl p-3 shadow-xl animate-float">
                  <div className="text-3xl font-extrabold leading-none">15+</div>
                  <div className="text-xs text-orange-100 mt-0.5 whitespace-nowrap">{w.yearsLabel}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 ease-out delay-200 ${
              rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              {w.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2A4A] mt-2 mb-6">
              {w.heading}
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              {w.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {w.features.map((feature, i) => {
                const Icon = featureIcons[i]
                return (
                  <div
                    key={feature.title}
                    style={{ transitionDelay: `${i * 100 + 300}ms` }}
                    className={`flex gap-4 transition-all duration-500 ${
                      rightIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-md hover:bg-orange-400 transition-colors">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1B2A4A] mb-1">{feature.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          ref={statRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {w.stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`text-center py-8 px-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group cursor-default ${
                statIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-4xl font-extrabold text-[#1B2A4A] group-hover:text-orange-500 mb-2 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
