import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { WebsiteJsonLd } from '@/seo/JsonLd'
import { defaultMetadata } from '@/seo/generateMetadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <WebsiteJsonLd />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className='flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}