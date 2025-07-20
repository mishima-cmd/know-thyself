import { questions, philosophers, schoolNames } from '@/data/philosophyData';

export interface DiagnosisResult {
  philosopher: typeof philosophers[0];
  scores: { [key: string]: number };
  totalScore: number;
}

export function calculateDiagnosis(answers: { [questionId: number]: number }): DiagnosisResult {
  const scores: { [key: string]: number } = {};
  
  // 各回答のスコアを集計
  Object.entries(answers).forEach(([questionIdStr, optionIndex]) => {
    const questionId = parseInt(questionIdStr);
    const question = questions.find(q => q.id === questionId);
    
    if (question && question.options[optionIndex]) {
      const selectedOption = question.options[optionIndex];
      
      Object.entries(selectedOption.scores).forEach(([school, score]) => {
        scores[school] = (scores[school] || 0) + score;
      });
    }
  });
  
  // 最もスコアが高い学派を特定
  const topSchool = Object.entries(scores).reduce((a, b) => 
    scores[a[0]] > scores[b[0]] ? a : b
  )[0];
  
  // 該当する哲学者を選択
  let selectedPhilosopher = philosophers[0]; // デフォルト
  
  if (topSchool === 'stoic') {
    selectedPhilosopher = philosophers.find(p => p.id === 'epictetus') || philosophers[0];
  } else if (topSchool === 'nietzsche') {
    selectedPhilosopher = philosophers.find(p => p.id === 'nietzsche') || philosophers[0];
  } else if (topSchool === 'existential') {
    selectedPhilosopher = philosophers.find(p => p.id === 'sartre') || philosophers[0];
  } else if (topSchool === 'socrates') {
    selectedPhilosopher = philosophers.find(p => p.id === 'socrates') || philosophers[0];
  } else if (topSchool === 'buddhist' || topSchool === 'taoist') {
    selectedPhilosopher = philosophers.find(p => p.id === 'laozi') || philosophers[0];
  }
  
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  
  return {
    philosopher: selectedPhilosopher,
    scores,
    totalScore
  };
}

export function getProgressPercentage(currentQuestion: number): number {
  return (currentQuestion / questions.length) * 100;
} 