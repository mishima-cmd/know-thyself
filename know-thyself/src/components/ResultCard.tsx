'use client';

import { motion } from 'framer-motion';
import { DiagnosisResult } from '@/types';
import { getCategoryName, getCategoryDescription } from '@/utils/diagnosis';
import { Share2, BookOpen, ExternalLink, BarChart3 } from 'lucide-react';
import DetailedAnalysis from './DetailedAnalysis';

interface ResultCardProps {
  result: DiagnosisResult;
  onRestart: () => void;
}

export default function ResultCard({ result, onRestart }: ResultCardProps) {
  const { philosopher, category } = result;

  const shareResult = () => {
    const text = `哲学診断『Know Thyself』の結果：あなたの哲学者は${philosopher.name}です！${philosopher.quote}`;
    const url = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: 'Know Thyself - 哲学診断結果',
        text,
        url,
      });
    } else {
      // フォールバック: Twitter/Xでシェア
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      window.open(twitterUrl, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-card max-w-4xl mx-auto"
    >
      {/* ヘッダー */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
          あなたの哲学者は
        </h1>
        <div className="text-5xl md:text-6xl font-bold text-white mb-4">
          {philosopher.name}
        </div>
        <div className="text-lg text-gray-300">
          {getCategoryName(category)} - {getCategoryDescription(category)}
        </div>
      </motion.div>

      {/* 名言 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card mb-8 text-center"
      >
        <div className="text-2xl md:text-3xl font-medium italic text-accent-purple mb-4">
          "{philosopher.quote}"
        </div>
        <div className="text-gray-400">
          — {philosopher.name}
        </div>
      </motion.div>

      {/* 哲学者の説明 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card mb-8"
      >
        <h3 className="text-xl font-bold mb-4 text-gradient">哲学者の紹介</h3>
        <p className="text-gray-300 leading-relaxed">
          {philosopher.description}
        </p>
      </motion.div>

      {/* 推薦図書 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card mb-8"
      >
        <h3 className="text-xl font-bold mb-4 text-gradient flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          あなたへの処方箋
        </h3>
        <div className="bg-white/5 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-2">{philosopher.book.title}</h4>
          <p className="text-gray-300 mb-4">{philosopher.book.description}</p>
          {philosopher.book.amazonUrl && (
            <a
              href={philosopher.book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-accent-purple hover:bg-accent-purple/80 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Amazonで購入
            </a>
          )}
        </div>
      </motion.div>

      {/* 詳細分析 */}
      <DetailedAnalysis result={result} />

      {/* アクションボタン */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
      >
        <button
          onClick={shareResult}
          className="flex items-center justify-center px-6 py-3 glass-card hover:bg-white/20 transition-all duration-300"
        >
          <Share2 className="w-5 h-5 mr-2" />
          結果をシェア
        </button>
        <button
          onClick={onRestart}
          className="flex items-center justify-center px-6 py-3 bg-accent-purple hover:bg-accent-purple/80 rounded-lg transition-colors"
        >
          もう一度診断する
        </button>
      </motion.div>
    </motion.div>
  );
} 