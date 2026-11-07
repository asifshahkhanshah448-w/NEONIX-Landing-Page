import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NEONIX | Innovation Starts Here — Digital Technology Agency',
  description:
    'Futuristic, premium modern digital technology agency landing page for NEONIX. Innovation Starts Here. Web Development, UI/UX Design, and Responsive Web Architecture.',
  openGraph: {
    title: 'NEONIX | Innovation Starts Here — Digital Technology Agency',
    description:
      'Futuristic, premium modern digital technology agency landing page for NEONIX. Innovation Starts Here. Web Development, UI/UX Design, and Responsive Web Architecture.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEONIX | Innovation Starts Here — Digital Technology Agency',
    description:
      'Futuristic, premium modern digital technology agency landing page for NEONIX. Innovation Starts Here. Web Development, UI/UX Design, and Responsive Web Architecture.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
