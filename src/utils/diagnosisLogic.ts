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
    // ストア派の中からランダムに選択
    const stoicPhilosophers = philosophers.filter(p => p.school === 'ストア派');
    selectedPhilosopher = stoicPhilosophers[Math.floor(Math.random() * stoicPhilosophers.length)] || philosophers[0];
  } else if (topSchool === 'nietzsche') {
    selectedPhilosopher = philosophers.find(p => p.id === 'nietzsche') || philosophers[0];
  } else if (topSchool === 'existential') {
    // 実存主義の中からランダムに選択
    const existentialPhilosophers = philosophers.filter(p => p.school === '実存主義');
    selectedPhilosopher = existentialPhilosophers[Math.floor(Math.random() * existentialPhilosophers.length)] || philosophers[0];
  } else if (topSchool === 'socrates' || topSchool === 'plato' || topSchool === 'aristotle') {
    // 古代ギリシャの中からランダムに選択
    const greekPhilosophers = philosophers.filter(p => p.school === '古代ギリシャ');
    selectedPhilosopher = greekPhilosophers[Math.floor(Math.random() * greekPhilosophers.length)] || philosophers[0];
  } else if (topSchool === 'buddhist') {
    selectedPhilosopher = philosophers.find(p => p.id === 'buddha') || philosophers[0];
  } else if (topSchool === 'confucian') {
    selectedPhilosopher = philosophers.find(p => p.id === 'confucius') || philosophers[0];
  } else if (topSchool === 'taoist') {
    // 道教の中からランダムに選択
    const taoistPhilosophers = philosophers.filter(p => p.school === '道教');
    selectedPhilosopher = taoistPhilosophers[Math.floor(Math.random() * taoistPhilosophers.length)] || philosophers[0];
  } else if (topSchool === 'kant') {
    selectedPhilosopher = philosophers.find(p => p.id === 'kant') || philosophers[0];
  } else if (topSchool === 'hegel') {
    selectedPhilosopher = philosophers.find(p => p.id === 'hegel') || philosophers[0];
  } else if (topSchool === 'camus') {
    selectedPhilosopher = philosophers.find(p => p.id === 'camus') || philosophers[0];
  } else if (topSchool === 'heidegger') {
    selectedPhilosopher = philosophers.find(p => p.id === 'heidegger') || philosophers[0];
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