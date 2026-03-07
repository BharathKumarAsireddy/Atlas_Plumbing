'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',  alt: 'Emergency pipe repair' },
  { src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80', alt: 'Water heater installation' },
  { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', alt: 'Leak detection work' },
  { src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80', alt: 'Professional plumber' },
]

export default function Testimonials() {
  const { t } = useLanguage()
  const ts = t.testimonials
  const { ref: gallRef, inView: gallIn } = useInView()
  const { ref: headRef, inView: headIn } = useInView()

  // Duplicate reviews for seamless infinite loop
  const allReviews = [...ts.reviews, ...ts.reviews]

  return (
    <section className="relative py-24 overflow-hidden" aria-label="Customer testimonials">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute ken-burns" style={{ inset: '-8%' }}>
          <Image
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&q=80"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#0D1929]/90" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Photo gallery strip */}
        <div
          ref={gallRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 transition-all duration-700 ${
            gallIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="relative rounded-xl overflow-hidden aspect-video shadow-lg group cursor-default"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#0D1929]/50 group-hover:bg-[#0D1929]/25 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Section header */}
        <div
          ref={headRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">
            {ts.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            {ts.heading}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {ts.subheading}
          </p>
        </div>

      </div>

      {/* Marquee — full-width so cards scroll edge-to-edge */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D1929] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D1929] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-6 w-max px-6">
          {allReviews.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="w-80 flex-shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-1.5 bg-orange-500 group-hover:bg-[#1B2A4A] transition-colors duration-300" />

              <div className="p-7 relative">
                <Quote
                  size={44}
                  className="text-[#1B2A4A]/[0.07] absolute top-4 right-4"
                  aria-hidden="true"
                />

                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic text-sm">
                  &ldquo;{review.review}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#1B2A4A] text-sm">{review.name}</div>
                    <div className="text-gray-400 text-xs">{review.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overall rating */}
      <div className="relative z-10 mt-12 text-center">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm rounded-full px-6 py-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="font-bold text-white">5.0 out of 5</span>
          <span className="text-gray-400 text-sm hidden sm:inline">{ts.ratingLabel}</span>
        </div>
      </div>
    </section>
  )
}
