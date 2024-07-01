import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

import LocalFont from 'next/font/local'

export const metadata: Metadata = {
  title: {
    default: 'mundovirtual.xyz',
    template: '%s | mundovirtual.xyz',
  },
  description:
    'MundoVirtual ayuda a convertir ideas en realidades a través de asesorías, prototipos y desarrollo de MVP.',
  openGraph: {
    title: 'mundovirtual.xyz',
    description:
      'MundoVirtual ayuda a convertir ideas en realidades a través de asesorías, prototipos y desarrollo de MVP.',
    url: 'https://mundovirtual.xyz',
    siteName: 'mundovirtual.xyz',
    images: [
      {
        url: 'https://mundovirtual.xyz/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'mundovirtual',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
}

const inter = Nunito({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  )
}
