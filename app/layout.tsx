import type { Metadata } from "next";
import "@fontsource/marcellus/400.css";
import "@fontsource-variable/mulish";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Registered charity ${site.charityNumber}`, template: `%s | ${site.name}` },
  description: site.description,
  // Hide the vercel.app test deployment from Google. Local builds for Webfort stay indexable.
  robots: process.env.VERCEL ? { index: false, follow: false } : undefined,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ["/images/logo-full.jpg"],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
