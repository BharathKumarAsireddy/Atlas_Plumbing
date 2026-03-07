import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atlas Plumbing | Residential & Commercial Plumbing Services',
  description:
    'Atlas Plumbing provides fast, reliable residential and commercial plumbing services. Available 24/7 for emergencies. Licensed, insured, and upfront pricing guaranteed.',
  keywords:
    'plumbing, plumber, emergency plumbing, drain cleaning, water heater, leak detection, sewer repair, commercial plumbing',
  openGraph: {
    title: 'Atlas Plumbing | Residential & Commercial Plumbing Services',
    description:
      'Fast, reliable plumbing services for homes and businesses. Call us 24/7 for emergency plumbing.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
