import type { Metadata } from 'next'
import PlumbingContent from './PlumbingContent'

export const metadata: Metadata = {
  title: 'Plumbing Services | Atlas Plumbing — New Jersey',
  description:
    'Professional plumbing services in New Jersey. Emergency plumbing, drain cleaning, water heater installation, leak detection, sewer repair. Licensed & insured, available 24/7.',
}

export default function PlumbingPage() {
  return <PlumbingContent />
}
