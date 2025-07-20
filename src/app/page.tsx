'use client';

import { useState, useCallback, useMemo } from 'react';
import { questions } from '@/data/philosophyData';
import { calculateDiagnosis, DiagnosisResult } from '@/utils/diagnosisLogic';
import QuestionCard from '@/components/QuestionCard';
import ResultCard from '@/components/ResultCard';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<{ [questionId: number]: number }>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  // パフォーマンス最適化: コールバック関数をメモ化
  const handleAnswer = useCallback((optionIndex: number) => {
    const newAnswers = { ...answers, [currentQuestion]: optionIndex };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const diagnosisResult = calculateDiagnosis(newAnswers);
      setResult(diagnosisResult);
      setShowResult(true);
    }
  }, [currentQuestion, answers]);

  const handleRestart = useCallback(() => {
    setCurrentQuestion(1);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  }, []);

  // パフォーマンス最適化: 現在の質問データをメモ化
  const currentQuestionData = useMemo(() => 
    questions.find(q => q.id === currentQuestion), 
    [currentQuestion]
  );

  return (
    <div className="min-h-screen philosophy-gradient relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {!showResult ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-glow mb-4">
                Know Thyself
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                あなたの心に寄り添う哲学者を見つけましょう
              </p>
              
              {/* プログレスバー */}
              <div className="w-full bg-glass-dark rounded-full h-2 mb-8">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                ></div>
              </div>
              
              <p className="text-sm text-gray-400">
                質問 {currentQuestion} / {questions.length}
              </p>
            </div>

            {currentQuestionData && (
              <QuestionCard 
                question={currentQuestionData}
                onAnswer={handleAnswer}
              />
            )}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {result && (
              <ResultCard 
                result={result}
                onRestart={handleRestart}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
} 