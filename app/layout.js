import './globals.css'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import { Providers } from './providers'
import { I18nProvider } from '@/components/site/i18n'
import { Toaster } from '@/components/ui/sonner'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: 'VERTEX Congo SARL — Ingénierie logicielle & informatique de santé',
  description: "VERTEX Congo (Vertex Développement) conçoit et déploie des systèmes d'information de santé pour les hôpitaux, laboratoires et programmes de santé publique en RDC et en Afrique centrale.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://vertex-congo.cd'),
  openGraph: {
    title: 'VERTEX Congo — Ingénierie de qualité internationale, ancrage congolais',
    description: "Systèmes d'information de santé pour hôpitaux, laboratoires et programmes de santé publique.",
    type: 'website',
    locale: 'fr_FR',
    siteName: 'VERTEX Congo SARL',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { languages: { fr: '/', en: '/?lang=en' } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VERTEX Congo SARL',
  alternateName: 'Vertex Développement',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://vertex-congo.cd',
  logo: 'https://customer-assets.emergentagent.com/job_vertex-congo/artifacts/snvh1pjr_vertex-logo.jpeg',
  description: "Société congolaise d'ingénierie logicielle et d'informatique de santé.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kinshasa',
    addressCountry: 'CD',
  },
  email: 'contact@vertex-congo.cd',
  foundingLocation: 'Kinshasa, République Démocratique du Congo',
  founder: { '@type': 'Person', name: 'Dr. Barclay Kadiebwe' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <I18nProvider>
            {children}
            <Toaster position="top-right" />
          </I18nProvider>
        </Providers>
      </body>
    </html>
  )
}
