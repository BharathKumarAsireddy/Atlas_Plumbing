'use client'

import Image from 'next/image'
import { Phone, CheckCircle, Zap, Waves, Flame, Search, GitBranch, Building2, Wrench, Droplets, Thermometer, Settings, Wind } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const iconMap: Record<string, LucideIcon> = {
  Zap, Waves, Flame, Search, GitBranch, Building2, Wrench, Droplets, Thermometer, Settings, Wind,
}

interface ServiceRowProps {
  id: string
  title: string
  description: string
  iconName: string
  img: string
  alt: string
  features: string[]
  badge: string
  imageLeft: boolean
  bg: string
}

export default function ServiceRow({
  id,
  title,
  description,
  iconName,
  img,
  alt,
  features,
  badge,
  imageLeft,
  bg,
}: ServiceRowProps) {
  const Icon = iconMap[iconName] ?? Zap
  const { ref: imgRef,  inView: imgIn  } = useInView(0.1)
  const { ref: infoRef, inView: infoIn } = useInView(0.1)

  return (
    <section id={id} className={`py-0 overflow-hidden ${bg}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[440px]`}>

          {/* ── Image ────────────────────────────────────────────────────── */}
          <div
            ref={imgRef}
            className={`relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[440px] overflow-hidden
              transition-all duration-[900ms] ease-out
              ${imgIn
                ? 'opacity-100 translate-x-0'
                : imageLeft
                  ? 'opacity-0 -translate-x-16'
                  : 'opacity-0 translate-x-16'
              }`}
          >
            <Image
              src={img}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* dark overlay so icon stands out */}
            <div className="absolute inset-0 bg-[#0D1929]/40" />

            {/* Icon badge bottom corner */}
            <div className={`absolute bottom-6 ${imageLeft ? 'left-6' : 'right-6'}`}>
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Icon size={28} className="text-white" />
              </div>
            </div>
          </div>

          {/* ── Info ─────────────────────────────────────────────────────── */}
          <div
            ref={infoRef}
            className={`w-full lg:w-1/2 flex items-center px-8 md:px-12 lg:px-16 py-12 lg:py-16
              transition-all duration-[900ms] ease-out delay-150
              ${infoIn
                ? 'opacity-100 translate-x-0'
                : imageLeft
                  ? 'opacity-0 translate-x-16'
                  : 'opacity-0 -translate-x-16'
              }`}
          >
            <div className="max-w-lg w-full">
              {/* badge */}
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                <Icon size={12} />
                {badge}
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1B2A4A] mb-4 leading-tight">
                {title}
              </h3>

              <p className="text-gray-500 text-base leading-relaxed mb-7">
                {description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={17} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg hover:-translate-y-0.5"
              >
                <Phone size={15} />
                Call for This Service
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
