import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { termsMetadata } from './seo';

export async function generateMetadata(): Promise<Metadata> {
  const hdrs = await headers();
  const host = hdrs.get('x-forwarded-host') ?? hdrs.get('host');
  const proto = hdrs.get('x-forwarded-proto') ?? 'http';
  const base = host ? `${proto}://${host}` : 'http://localhost:3000';
  return {
    ...termsMetadata,
    metadataBase: new URL(base),
  };
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-700 mb-4">
          Welcome to Darija App. By using the app, you agree to these Terms of
          Service. Darija App is free to use and aims to help you learn Moroccan
          Arabic (Darija) through lessons, examples, and cultural context.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Free Use</h2>
        <p className="text-gray-700 mb-4">
          You may use the app free of charge. We do not require payment or
          subscriptions to access lessons and resources. If paid features are
          introduced later, they will be optional and clearly labeled.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Acceptable Use</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Use the app for learning and personal, non-commercial purposes.</li>
          <li>Do not misuse the app, disrupt services, or attempt to break security.</li>
          <li>Respect intellectual property and cultural materials provided.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Content and Accuracy</h2>
        <p className="text-gray-700 mb-4">
          Lesson content is provided in good faith to aid learning. Language
          usage varies by region and context; we make reasonable efforts to keep
          content accurate, but we cannot guarantee perfection.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">No Warranty</h2>
        <p className="text-gray-700 mb-4">
          The app is provided “as is” without warranties of any kind, express or
          implied. We do not warrant uninterrupted or error-free operation.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          To the fullest extent permitted by law, we are not liable for any
          indirect, incidental, or consequential damages arising from your use of
          the app.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Privacy</h2>
        <p className="text-gray-700 mb-4">
          Your use of Darija App is also governed by our{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Changes to These Terms</h2>
        <p className="text-gray-700 mb-4">
          We may update these Terms to reflect improvements or legal changes.
          Significant updates will be posted on this page with a revised date.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Contact</h2>
        <p className="text-gray-700">
          Questions? Visit our <a href="/about" className="text-blue-600 hover:underline">About</a> page.
        </p>

        <p className="text-gray-500 text-sm mt-8">
          Last updated: {new Date().getFullYear()}.
        </p>
      </div>
    </main>
  );
}