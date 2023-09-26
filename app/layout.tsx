import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import { AOSInit } from './aos'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Braxit',
  description: 'A construction company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>
        <div className='box-border'>
          <Header />
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
