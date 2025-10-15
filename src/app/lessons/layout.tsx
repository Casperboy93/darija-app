import type { Metadata } from 'next';
import React from 'react';
import { lessonsPageSEO } from './seolessons';

export const metadata: Metadata = lessonsPageSEO;

export default function LessonsLayout({ children }: { children: React.ReactNode }) {
  return (<>{children}</>);
}