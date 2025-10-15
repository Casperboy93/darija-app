import type { Metadata } from 'next';
import LessonsContent from './LessonsContent';
import { lessonsPageSEO } from './seolessons';

export const metadata: Metadata = lessonsPageSEO;

type Level = 'beginner' | 'medium' | 'advanced';

export default async function LessonsPage({
  searchParams,
}: {
  searchParams?: Promise<{ level?: string }>;
}) {
  const params = (await searchParams) || {};
  const level = params.level;
  const isLevel = (v: unknown): v is Level => v === 'beginner' || v === 'medium' || v === 'advanced';
  const initialTab: Level = isLevel(level) ? level : 'beginner';

  return <LessonsContent initialTab={initialTab} />;
}