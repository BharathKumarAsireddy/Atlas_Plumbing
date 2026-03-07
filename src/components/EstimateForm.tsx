'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import { CheckCircle, Send, Loader2 } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const initialForm: FormState = { name: '', phone: '', email: '', service: '', message: '' }

function validate(form: FormState, errors: Record<string, string>) {
  const e: Record<string, string> = {}
  if (!form.name.trim())  e.name    = errors.nameRequired
  if (!form.phone.trim()) e.phone   = errors.phoneRequired
  else if (!/^[\d\s\-+().]{7,}$/.test(form.phone)) e.phone = errors.phoneInvalid
  if (!form.email.trim()) e.email   = errors.emailRequired
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = errors.emailInvalid
  if (!form.service)      e.service = errors.serviceRequired
  return e
}

export default function EstimateForm() {
  const { t } = useLanguage()
  const f = t.estimateForm
  const { ref, inView } = useInView()

  const [form,       setForm]       = useState<FormState>(initialForm)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [status,     setStatus]     = useState<'idle' | 'sending' | 'success'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) setFieldErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(form, f.errors)
    if (Object.keys(errs).length) { setFieldErrors(errs); return }

    setStatus('sending')
    try {
      // Submit to GoHighLevel webhook — replace URL with your actual GHL webhook if needed
      await fetch('https://api.leadconnectorhq.com/hooks/hOxxRb1745wfKExtJoaZ/webhook-trigger/form-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      })
    } catch {
      // silently continue — show success regardless to avoid blocking UX
    }
    setStatus('success')
  }

  const inputBase =
    'w-full px-4 py-3 rounded-xl border text-[#0D1929] text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all'
  const inputNormal = `${inputBase} border-gray-200 bg-white`
  const inputError  = `${inputBase} border-red-400 bg-red-50`

  return (
    <section
      id="contact"
      className="py-20 bg-[#1B2A4A] relative overflow-hidden"
      aria-label="Request an estimate"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute ken-burns" style={{ inset: '-8%' }}>
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#1B2A4A]/90" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#1B2A4A]/20 via-[#1B2A4A]/60 to-[#1B2A4A]/95" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/15 blur-3xl rounded-full" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Info */}
          <div className="text-white lg:sticky lg:top-24">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
              {f.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">
              {f.heading}
            </h2>
            <p className="text-orange-100 text-lg leading-relaxed mb-8">
              {f.description}
            </p>
            <ul className="space-y-3">
              {f.perks.map((item) => (
                <li key={item} className="flex items-center gap-3 text-orange-100">
                  <CheckCircle size={18} className="text-orange-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Custom Form */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={36} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0D1929]">{f.successTitle}</h3>
                <p className="text-gray-500 max-w-xs">{f.successMessage}</p>
                <button
                  onClick={() => { setForm(initialForm); setStatus('idle') }}
                  className="mt-4 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                >
                  {f.submitAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="text-xl font-extrabold text-[#0D1929] mb-1">{f.formTitle}</h3>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    {f.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className={fieldErrors.name ? inputError : inputNormal}
                  />
                  {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      {f.phone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      required
                      className={fieldErrors.phone ? inputError : inputNormal}
                    />
                    {fieldErrors.phone && <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      {f.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                      className={fieldErrors.email ? inputError : inputNormal}
                    />
                    {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                  </div>
                </div>

                {/* Service Needed — grouped dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    {f.serviceNeeded} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className={`${fieldErrors.service ? inputError : inputNormal} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>{f.selectService}</option>
                    {f.serviceGroups.map((group) => (
                      <optgroup key={group.group} label={group.group}>
                        {group.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  {fieldErrors.service && <p className="text-red-500 text-xs mt-1">{fieldErrors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    {f.message}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={f.messagePlaceholder}
                    className={`${inputNormal} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md"
                >
                  {status === 'sending' ? (
                    <><Loader2 size={16} className="animate-spin" />{f.sending}</>
                  ) : (
                    <><Send size={16} />{f.sendRequest}</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
