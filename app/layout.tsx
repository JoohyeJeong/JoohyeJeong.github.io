import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const googleAnalyticsId = 'G-BXN926RN9B';

export const metadata: Metadata = {
  title: 'Joohye Jeong',
  description:
    'Joohye Jeong is a Ph.D. candidate in Political Science and Statistics at MIT.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Joohye Jeong',
    description:
      'Research in causal inference, experimental design, and media effects.',
    images: [
      {
        url: `${basePath}/og.png`,
        width: 1200,
        height: 630,
        alt: 'Joohye Jeong — Political Science and Statistics at MIT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joohye Jeong',
    description:
      'Research in causal inference, experimental design, and media effects.',
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
