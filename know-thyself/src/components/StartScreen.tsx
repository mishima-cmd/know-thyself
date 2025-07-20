'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles, BookOpen, Users } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="glass-card max-w-2xl mx-auto text-center">
        {/* タイトル */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            Know Thyself
          </h1>
          <p className="text-xl text-gray-300">
            あなたの心に寄り添う哲学者を見つける
          </p>
        </motion.div>

        {/* 特徴 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <div className="glass-card p-4">
            <Brain className="w-8 h-8 text-accent-purple mx-auto mb-3" />
            <h3 className="font-semibold mb-2">16問の深い質問</h3>
            <p className="text-sm text-gray-400">
              人生観、価値観、思考パターンを多角的に分析
            </p>
          </div>
          
          <div className="glass-card p-4">
            <Sparkles className="w-8 h-8 text-accent-blue mx-auto mb-3" />
            <h3 className="font-semibold mb-2">6つの思想カテゴリ</h3>
            <p className="text-sm text-gray-400">
              ストア派、実存主義、ニヒリズムなど多彩な思想
            </p>
          </div>
          
          <div className="glass-card p-4">
            <BookOpen className="w-8 h-8 text-accent-green mx-auto mb-3" />
            <h3 className="font-semibold mb-2">推薦図書</h3>
            <p className="text-sm text-gray-400">
              あなたに最適な哲学書を紹介
            </p>
          </div>
          
          <div className="glass-card p-4">
            <Users className="w-8 h-8 text-accent-purple mx-auto mb-3" />
            <h3 className="font-semibold mb-2">SNSシェア</h3>
            <p className="text-sm text-gray-400">
              結果を友達とシェアして議論を深めよう
            </p>
          </div>
        </motion.div>

        {/* 開始ボタン */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
        >
          診断を始める
        </motion.button>

        {/* 注意書き */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-sm text-gray-500 mt-6"
        >
          この診断は約5分で完了します。心を落ち着けて、じっくりとお答えください。
        </motion.p>
      </div>
    </motion.div>
  );
} 