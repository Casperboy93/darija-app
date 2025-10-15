import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const hdrs = await headers();
  const host = hdrs.get("x-forwarded-host") ?? hdrs.get("host");
  const proto = hdrs.get("x-forwarded-proto") ?? "http";
  const base = host ? `${proto}://${host}` : "http://localhost:3000";

  return {
    title: {
      default: "Darija App – Learn Moroccan Arabic (Darija)",
      template: "%s | Darija App",
    },
    description:
      "Learn Moroccan Arabic (Darija) through structured lessons, real conversations, cultural insights, and a built-in translator. Start speaking confidently from day one.",
    keywords: [
      "Darija",
      "Moroccan Arabic",
      "Learn Darija",
      "Interactive lessons",
      "Translator",
      "Vocabulary",
      "Grammar",
      "Culture",
      "Beginner",
      "Intermediate",
      "Advanced",
      "Course",
      "Education",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Darija App – Learn Moroccan Arabic (Darija)",
      description:
        "Structured lessons, real conversations, and cultural insights to master Moroccan Arabic.",
      url: "/",
      siteName: "Darija App",
      type: "website",
      images: [
        {
          url: "/favicon.ico",
          alt: "Darija App",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Darija App – Learn Moroccan Arabic (Darija)",
      description:
        "Structured lessons, real conversations, and cultural insights to master Moroccan Arabic.",
      images: ["/favicon.ico"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
    category: "education",
    applicationName: "Darija App",
    metadataBase: new URL(base),
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
