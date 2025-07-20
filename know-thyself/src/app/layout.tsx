import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Know Thyself - 哲学診断アプリ',
  description: 'あなたの心に寄り添う哲学者を見つける診断アプリ',
  keywords: '哲学, 診断, 自己分析, 哲学者, 名言',
  authors: [{ name: 'Know Thyself Team' }],
  openGraph: {
    title: 'Know Thyself - 哲学診断アプリ',
    description: 'あなたの心に寄り添う哲学者を見つける診断アプリ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Know Thyself - 哲学診断アプリ',
    description: 'あなたの心に寄り添う哲学者を見つける診断アプリ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 