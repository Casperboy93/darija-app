import type { Metadata } from 'next';
import React from 'react';
import { translatorPageSEO } from './seotranslator';

export const metadata: Metadata = translatorPageSEO;

export default function TranslatorLayout({ children }: { children: React.ReactNode }) {
  return (<>{children}</>);
}