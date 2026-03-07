import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BrandingContent from '@/components/BrandingContent'

export const metadata: Metadata = {
  title: 'Our Branded Fleet | Atlas Plumbing',
  description:
    'See how Atlas Plumbing represents itself on the road — fully wrapped service vans that are instantly recognizable across New Jersey.',
}

export default function BrandingPage() {
  return (
    <>
      <Header />
      <BrandingContent />
      <Footer />
    </>
  )
}
