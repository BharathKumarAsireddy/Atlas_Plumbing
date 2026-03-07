import type { Metadata } from 'next'
import HeatingContent from './HeatingContent'

export const metadata: Metadata = {
  title: 'Heating Services | Atlas Plumbing — New Jersey',
  description:
    'Expert heating services in New Jersey — furnace installation, boiler repair, heat pump systems, radiant heating, and annual tune-ups. Licensed & insured HVAC technicians available 24/7.',
}

export default function HeatingPage() {
  return <HeatingContent />
}
