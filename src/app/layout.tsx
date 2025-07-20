import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Know Thyself - 哲学診断アプリ | あなたの心に寄り添う哲学者を見つけよう',
  description: '15問の質問で、あなたに最適な哲学者をマッチング。エピクテトス、ニーチェ、孔子、ブッダなど15人の哲学者から、あなたの心に響く哲学者を見つけましょう。美しいUI/UXで没入感のある診断体験を提供。',
  keywords: '哲学診断,哲学者,エピクテトス,ニーチェ,孔子,ブッダ,ストア派,実存主義,東洋思想,自己分析,人生相談',
  openGraph: {
    title: 'Know Thyself - 哲学診断アプリ',
    description: 'あなたの心に寄り添う哲学者を見つけましょう',
    type: 'website',
    url: 'https://know-thyself-nine.vercel.app',
    siteName: 'Know Thyself',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Know Thyself - 哲学診断アプリ',
    description: 'あなたの心に寄り添う哲学者を見つけましょう',
  },
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