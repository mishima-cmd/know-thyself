'use client';

import { motion } from 'framer-motion';
import { DiagnosisResult } from '@/types';
import { getCategoryName } from '@/utils/diagnosis';

interface DetailedAnalysisProps {
  result: DiagnosisResult;
}

export default function DetailedAnalysis({ result }: DetailedAnalysisProps) {
  const { categoryScores, category } = result;
  const sortedCategories = Object.entries(categoryScores)
    .sort(([, a], [, b]) => b - a)
    .filter(([cat]) => cat !== category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="glass-card"
    >
      <h3 className="text-xl font-bold mb-6 text-gradient">詳細分析</h3>
      
      {/* メインカテゴリ */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-accent-purple">
          あなたの主要な思想傾向
        </h4>
        <div className="bg-accent-purple/20 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{getCategoryName(category)}</span>
            <span className="text-accent-purple font-bold">
              {categoryScores[category]}pt
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div
              className="bg-accent-purple h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(categoryScores[category] / Math.max(...Object.values(categoryScores))) * 100}%` }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
      </div>

      {/* その他のカテゴリ */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-gray-300">
          その他の思想傾向
        </h4>
        <div className="space-y-3">
          {sortedCategories.map(([cat, score], index) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              className="bg-white/5 rounded-lg p-3"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{getCategoryName(cat as any)}</span>
                <span className="text-sm text-gray-400">{score}pt</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1">
                <motion.div
                  className="bg-gray-400 h-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / Math.max(...Object.values(categoryScores))) * 100}%` }}
                  transition={{ duration: 1, delay: 2.0 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 分析コメント */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="mt-6 p-4 bg-white/5 rounded-lg"
      >
        <p className="text-sm text-gray-300 leading-relaxed">
          あなたの回答パターンから、{getCategoryName(category)}の思想が最も強く表れています。
          これは、あなたが{getCategoryName(category)}の価値観や考え方に共感していることを示しています。
          他の思想傾向もバランスよく持っているため、柔軟で多角的な思考ができる方だと考えられます。
        </p>
      </motion.div>
    </motion.div>
  );
} 