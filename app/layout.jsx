import { Space_Grotesk, Courier_Prime, Sigmar } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-courier',
  display: 'swap',
})

const sigmar = Sigmar({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sigmar',
  display: 'swap',
})

export const metadata = {
  title: 'LOG',
  description: 'discover, share, and experience your city through the eyes of people who actually live it.',
  icons: {
    icon: '/static/favicon.png',
    apple: '/static/favicon.png',
  },
  openGraph: {
    title: 'LOG',
    description: 'discover, share, and experience your city through the eyes of people who actually live it.',
    images: [{ url: '/images/film1.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/film1.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${courierPrime.variable} ${sigmar.variable}`}>
      <body>{children}</body>
      <Script
        src="https://tracker.metricool.com/resources/be.js"
        strategy="afterInteractive"
        onLoad={() => { window.beTracker && window.beTracker.t({ hash: 'b0863b6de25313b3405dc8c559a7e274' }) }}
      />
    </html>
  )
}
