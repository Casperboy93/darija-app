import { Metadata } from 'next';

export function makeLessonSEO({
  titleFull,
  shortTitle,
  description,
  slug,
  keywords,
}: {
  titleFull: string;
  shortTitle: string;
  description: string;
  slug: string;
  keywords: string[];
}): Metadata {
  return {
    title: titleFull,
    description,
    keywords,
    alternates: { canonical: `/lessons/${slug}` },
    openGraph: {
      title: shortTitle,
      description,
      type: 'article',
      url: `/lessons/${slug}`,
      siteName: 'Darija App',
    },
    twitter: {
      card: 'summary_large_image',
      title: shortTitle,
      description,
    },
    robots: { index: true, follow: true },
    category: 'Education',
  } satisfies Metadata;
}