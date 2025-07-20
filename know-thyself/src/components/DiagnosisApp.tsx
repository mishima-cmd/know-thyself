'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { questions } from '@/data/questions';
import { calculateDiagnosis } from '@/utils/diagnosis';
import { DiagnosisState, DiagnosisResult } from '@/types';
import StartScreen from './StartScreen';
import QuestionCard from './QuestionCard';
import ResultCard from './ResultCard';
import StarryBackground from './StarryBackground';

export default function DiagnosisApp() {
  const [hasStarted, setHasStarted] = useState(false);
  const [state, setState] = useState<DiagnosisState>({
    currentQuestionIndex: 0,
    answers: {},
    isComplete: false,
  });

  const handleAnswer = (optionId: string) => {
    const newAnswers = { ...state.answers, [questions[state.currentQuestionIndex].id]: optionId };
    const nextIndex = state.currentQuestionIndex + 1;

    if (nextIndex >= questions.length) {
      // 診断完了
      const result = calculateDiagnosis(newAnswers);
      setState({
        ...state,
        answers: newAnswers,
        isComplete: true,
        result,
      });
    } else {
      // 次の質問へ
      setState({
        ...state,
        answers: newAnswers,
        currentQuestionIndex: nextIndex,
      });
    }
  };

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleRestart = () => {
    setState({
      currentQuestionIndex: 0,
      answers: {},
      isComplete: false,
    });
    setHasStarted(false);
  };

  return (
    <div className="min-h-screen bg-gradient relative overflow-hidden">
      <StarryBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {!hasStarted ? (
            <StartScreen key="start" onStart={handleStart} />
          ) : !state.isComplete ? (
            <QuestionCard
              key={state.currentQuestionIndex}
              question={questions[state.currentQuestionIndex]}
              onAnswer={handleAnswer}
              questionNumber={state.currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />
          ) : (
            <ResultCard
              key="result"
              result={state.result!}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 