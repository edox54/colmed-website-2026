import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import '@/styles/globals.css';
import PremiumHeader from '@/components/Layout/PremiumHeader';
import Footer from '@/components/Layout/Footer';
import FloatingButtons from '@/components/Layout/FloatingButtons';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.description}`,
  description: SITE_CONFIG.description,
  keywords: 'colmed, centro médico quito, clínica médica quito, planes preventivos salud ecuador, laboratorio clínico quito, odontología quito, especialidades médicas quito',
  authors: [{ name: SITE_CONFIG.name }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0891b2" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js" />
      </head>
      <body className="bg-white text-slate-900" suppressHydrationWarning>
        <PremiumHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
