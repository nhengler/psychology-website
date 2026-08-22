import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '@/styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Ana Oliveira | Psicóloga Clínica',
  description: 'Psicoterapia humanizada e acolhedora. Atendimento presencial e online.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/ana-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ana-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      
    ],
    apple: '/ana-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
