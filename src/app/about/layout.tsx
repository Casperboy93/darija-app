import type { Metadata } from 'next';
import React from 'react';
import { aboutPageSEO } from './seoabout';

export const metadata: Metadata = aboutPageSEO;

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (<>{children}</>);
}