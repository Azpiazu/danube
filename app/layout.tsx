import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Danube Waterfront View at Chain Bridge | Budapest Boutique Apartment',
  description: 'A stylish 2-bedroom apartment on the Buda riverfront, with panoramic views of the Danube, Chain Bridge, Parliament and St. Stephen\'s Basilica.',
  keywords: ['Budapest apartment', 'Chain Bridge', 'Danube view', 'short-term rental', 'boutique accommodation', 'Buda'],
  openGraph: {
    title: 'Danube Waterfront View at Chain Bridge',
    description: 'A boutique Danube-view apartment by Chain Bridge in Budapest',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
