import type { Metadata } from 'next'
import CoolingContent from './CoolingContent'

export const metadata: Metadata = {
  title: 'Cooling Services | Atlas Plumbing — New Jersey',
  description:
    'Expert cooling and air conditioning services in New Jersey — AC installation, repair & maintenance, ductless mini-splits, central air systems, indoor air quality, and emergency AC service.',
}

export default function CoolingPage() {
  return <CoolingContent />
}
