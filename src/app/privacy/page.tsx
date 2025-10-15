import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { privacyMetadata } from './seo';

export async function generateMetadata(): Promise<Metadata> {
  const hdrs = await headers();
  const host = hdrs.get('x-forwarded-host') ?? hdrs.get('host');
  const proto = hdrs.get('x-forwarded-proto') ?? 'http';
  const base = host ? `${proto}://${host}` : 'http://localhost:3000';
  return {
    ...privacyMetadata,
    metadataBase: new URL(base),
  };
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Darija App is free to use. We designed the app to help you learn
          Moroccan Arabic (Darija) with minimal data collection and no paywalls.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What We Collect</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            Basic technical logs (e.g., errors, performance) to keep the app reliable.
          </li>
          <li>
            Non-identifying usage data (e.g., visited pages) to improve lessons and UX.
          </li>
          <li>
            Cookies may be used for essential functionality and preferences.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What We Don’t Collect</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>No account sign-ups or passwords are required.</li>
          <li>No payment information—we don’t charge for using the app.</li>
          <li>No sensitive personal information (unless you choose to contact us).</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How We Use Information</h2>
        <p className="text-gray-700 mb-4">
          We use limited information to operate, secure, and improve Darija App.
          We do not sell your data. Any analytics, if enabled, are used only to
          understand general usage trends.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Third Parties</h2>
        <p className="text-gray-700 mb-4">
          The app runs on modern web infrastructure. If third-party services are
          introduced in the future (e.g., analytics or hosting), they will be
          carefully chosen and documented here.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Your Choices</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>You can block non-essential cookies in your browser settings.</li>
          <li>You can contact us to request deletion of messages or feedback you sent.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Contact</h2>
        <p className="text-gray-700">
          Questions about privacy? Visit our <a href="/about" className="text-blue-600 hover:underline">About</a> page.
        </p>

        <p className="text-gray-500 text-sm mt-8">
          Last updated: {new Date().getFullYear()}.
        </p>
      </div>
    </main>
  );
}