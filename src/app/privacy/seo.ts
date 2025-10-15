import type { Metadata } from 'next';

export const privacyMetadata: Metadata = {
  title: 'Privacy Policy | Darija App',
  description:
    'Darija App is free to use. Learn Moroccan Arabic (Darija) with respect for your privacy. We collect minimal data, avoid unnecessary tracking, and use information only to operate and improve the app.',
  keywords: [
    'Privacy',
    'Darija',
    'Moroccan Arabic',
    'Data protection',
    'Free app',
  ],
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | Darija App',
    description:
      'Darija App is free to use. We collect minimal data and respect your privacy.',
    url: '/privacy',
    siteName: 'Darija App',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Darija App',
    description:
      'Darija App is free to use. We collect minimal data and respect your privacy.',
  },
  robots: { index: true, follow: true },
  category: 'education',
};