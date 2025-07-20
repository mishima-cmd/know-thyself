import { questions, philosophers, schoolNames } from '@/data/philosophyData';

export interface DiagnosisResult {
  philosopher: typeof philosophers[0];
  scores: { [key: string]: number };
  totalScore: number;
}

export function calculateDiagnosis(answers: { [questionId: number]: number }): DiagnosisResult {
  const scores: { [key: string]: number } = {};
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
  // 上位スコアの哲学者を抽出
  const maxScore = Math.max(...Object.values(scores));
  const topPhilosophers = Object.entries(scores)
    .filter(([, score]) => score === maxScore)
    .map(([id]) => id);
  // 完全ランダム選択（同点時）
  const selectedId = topPhilosophers[Math.floor(Math.random() * topPhilosophers.length)];
  const selectedPhilosopher = philosophers.find(p => p.id === selectedId) || philosophers[0];
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