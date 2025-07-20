'use client';

import { motion } from 'framer-motion';
import { DiagnosisResult } from '@/utils/diagnosisLogic';
import Image from 'next/image';

interface ResultCardProps {
  result: DiagnosisResult;
  onRestart: () => void;
}

export default function ResultCard({ result, onRestart }: ResultCardProps) {
  const { philosopher } = result;
  const defaultImage = '/default-philosopher.png'; // public配下にデフォルト画像を用意
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="glass-card p-8 max-w-xl mx-auto text-center animate-fade-in"
    >
      {/* 肖像画 */}
      <div className="flex justify-center mb-4">
        <Image
          src={philosopher.imageUrl || defaultImage}
          alt={`${philosopher.name}の肖像画`}
          width={120}
          height={120}
          className="rounded-full border-4 border-white shadow-lg bg-white object-cover"
          priority
          onError={(e) => { (e.target as HTMLImageElement).src = defaultImage; }}
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-glow">{philosopher.name}</h2>
      <div className="text-sm text-gray-400 mb-2">{philosopher.school}</div>
      <blockquote className="italic text-lg mb-4">“{philosopher.quote}”</blockquote>
      <p className="mb-4">{philosopher.description}</p>
      {/* 著書リンクUX強化 */}
      {philosopher.book && (
        <div className="mb-4">
          <div className="font-bold">代表的な著書：</div>
          <div className="text-base mb-1">{philosopher.book.title}</div>
          <div className="text-xs text-gray-500 mb-1">{philosopher.book.description}</div>
          <div className="flex flex-col items-center gap-2">
            {philosopher.book.url && (
              <a
                href={philosopher.book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                原典（英語）をProject Gutenbergで読む
              </a>
            )}
            {philosopher.book.amazonUrl && (
              <a
                href={philosopher.book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
              >
                日本語訳をAmazonで探す
              </a>
            )}
          </div>
        </div>
      )}
      {/* 結果共有セクション */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="glass-effect p-6 rounded-lg"
      >
        <h3 className="text-xl font-bold mb-4 text-center">結果を共有</h3>
        
        {/* URL共有 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            このページのURL
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={window.location.href}
              readOnly
              className="flex-1 bg-glass-dark border border-white/20 rounded-lg px-3 py-2 text-sm text-gray-300"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('URLをコピーしました！');
              }}
              className="glass-effect px-4 py-2 rounded-lg hover:bg-glass/20 transition-all duration-300 text-sm"
            >
              コピー
            </button>
          </div>
        </div>
        
        {/* SNSシェアボタン */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => {
              const text = `私の哲学者は${philosopher.name}でした！\n\n"${philosopher.quote}"\n\n#KnowThyself #哲学診断`;
              const url = encodeURIComponent(window.location.href);
              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
            }}
            className="glass-effect px-4 py-2 rounded-lg hover:bg-glass/20 transition-all duration-300 text-sm"
          >
            Twitterでシェア
          </button>
          
          <button
            onClick={() => {
              const text = `私の哲学者は${philosopher.name}でした！\n\n"${philosopher.quote}"\n\n#KnowThyself #哲学診断`;
              const url = encodeURIComponent(window.location.href);
              window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
            }}
            className="glass-effect px-4 py-2 rounded-lg hover:bg-glass/20 transition-all duration-300 text-sm"
          >
            Facebookでシェア
          </button>
          
          <button
            onClick={() => {
              const text = `私の哲学者は${philosopher.name}でした！\n\n"${philosopher.quote}"\n\n#KnowThyself #哲学診断`;
              const url = encodeURIComponent(window.location.href);
              window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text + '\n\n' + window.location.href)}`, '_blank');
            }}
            className="glass-effect px-4 py-2 rounded-lg hover:bg-glass/20 transition-all duration-300 text-sm"
          >
            LINEでシェア
          </button>
        </div>
      </motion.div>

      {/* アクションボタン */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex justify-center"
      >
        <button
          onClick={onRestart}
          className="glass-effect px-8 py-3 rounded-lg hover:bg-glass/20 transition-all duration-300 font-medium"
        >
          もう一度診断する
        </button>
      </motion.div>
    </motion.div>
  );
} 