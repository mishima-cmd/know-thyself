'use client';

import { motion } from 'framer-motion';
import { Question } from '@/types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionId: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuestionCard({ question, onAnswer, questionNumber, totalQuestions }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="glass-card max-w-2xl mx-auto text-center"
    >
      {/* プログレスバー */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>質問 {questionNumber} / {totalQuestions}</span>
          <span>{Math.round((questionNumber / totalQuestions) * 100)}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-accent-purple to-accent-blue h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* 質問テキスト */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold mb-8 text-gradient leading-relaxed"
      >
        {question.text}
      </motion.h2>

      {/* 選択肢 */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswer(option.id)}
            className="w-full glass-card text-left p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium group-hover:text-accent-purple transition-colors">
                {option.text}
              </span>
              <div className="w-6 h-6 rounded-full border-2 border-white/30 group-hover:border-accent-purple transition-colors" />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
} 