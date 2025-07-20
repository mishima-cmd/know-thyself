'use client';

import { motion } from 'framer-motion';
import { Question } from '@/data/philosophyData';

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionIndex: number) => void;
}

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-glow">
        {question.text}
      </h2>
      
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={`option-${question.id}-${index}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswer(index)}
            className="w-full p-6 text-left glass-effect rounded-lg hover:bg-glass/20 transition-all duration-300 group"
            aria-label={`選択肢 ${index + 1}: ${option.text}`}
          >
            <span className="text-lg font-medium group-hover:text-glow transition-colors">
              {option.text}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
} 