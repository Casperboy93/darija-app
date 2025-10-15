import { Metadata } from 'next';

export const translatorPageSEO: Metadata = {
  title: 'Moroccan Arabic Translator | English ↔ Darija | Darija App',
  description:
    'Translate between English and Moroccan Arabic (Darija) instantly. Explore common words, phrases, and cultural context to improve accuracy.',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Translator',
    'English to Darija',
    'Darija to English',
    'Phrases',
    'Vocabulary',
    'Learn Arabic',
    'Dialect',
    'Language tool',
  ],
  alternates: {
    canonical: '/translator',
  },
  openGraph: {
    title: 'Darija Translator (English ↔ Darija)',
    description:
      'Instant translation between English and Moroccan Arabic with examples and cultural notes.',
    url: '/translator',
    siteName: 'Darija App',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darija Translator (English ↔ Darija)',
    description:
      'Instant translation between English and Moroccan Arabic with examples and cultural notes.',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'education',
};