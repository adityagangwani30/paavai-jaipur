import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Paavai Jaipur | Ladies Kurtis, Sarees & Ethnic Wear Store in Bapu Bazar',
  description: 'Paavai is a Jaipur boutique in Bapu Bazar offering kurtis, sarees, suits, artificial jewellery, and bedsheets. Visit our store for premium ethnic wear in the Pink City.',
  keywords: ['Jaipur boutique', 'Bapu Bazar', 'ethnic wear', 'kurtis', 'sarees', 'ladies suits', 'artificial jewellery', 'Jaipuri fashion', 'Pink City clothing store'],
  authors: [{ name: 'Paavai' }],
  openGraph: {
    title: 'Paavai Jaipur | Ladies Kurtis, Sarees & Ethnic Wear Store',
    description: 'Paavai boutique in Bapu Bazar, Jaipur. Premium ethnic wear including kurtis, sarees, suits, jewellery, and bedsheets.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  themeColor: '#d96d8a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="overflow-x-hidden font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
