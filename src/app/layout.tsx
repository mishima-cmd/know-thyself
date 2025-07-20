import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Know Thyself - 哲学診断アプリ',
  description: 'あなたの心に寄り添う哲学者を見つけましょう',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen bg-philosophy-dark text-white">
          {children}
        </div>
      </body>
    </html>
  )
} 