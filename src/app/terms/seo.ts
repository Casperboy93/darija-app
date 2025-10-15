import type { Metadata } from 'next';

export const termsMetadata: Metadata = {
  title: 'Terms of Service | Darija App',
  description:
    'Darija App is free to use. These terms explain acceptable use, content, disclaimers, and your rights when using the app to learn Moroccan Arabic (Darija).',
  keywords: [
    'Terms',
    'Darija',
    'Moroccan Arabic',
    'Acceptable use',
    'Free app',
  ],
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | Darija App',
    description:
      'Darija App is free to use. Read our terms for acceptable use and disclaimers.',
    url: '/terms',
    siteName: 'Darija App',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Darija App',
    description:
      'Darija App is free to use. Read our terms for acceptable use and disclaimers.',
  },
  robots: { index: true, follow: true },
  category: 'education',
};