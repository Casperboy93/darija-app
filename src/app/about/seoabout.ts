import { Metadata } from 'next';

export const aboutPageSEO: Metadata = {
  title: 'About Darija App | Learn Moroccan Arabic (Darija)',
  description:
    'Discover our mission to make Moroccan Arabic (Darija) accessible for everyone. Learn about our approach, cultural insights, and community-driven learning experience.',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'About',
    'Learn Arabic',
    'Dialect',
    'Language learning',
    'Education',
    'Culture',
    'Mission',
    'Community',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Darija App',
    description:
      'Learn how Darija App helps you master Moroccan Arabic with authentic content and community support.',
    url: '/about',
    siteName: 'Darija App',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Darija App',
    description:
      'Learn how Darija App helps you master Moroccan Arabic with authentic content and community support.',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'education',
};