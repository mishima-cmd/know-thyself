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
  
  // より多様な結果を出すための改善された選択ロジック
  let selectedPhilosopher = philosophers[0]; // デフォルト
  
  // 上位3つの学派を取得
  const sortedSchools = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);
  
  // ランダム性を高めるための重み付け選択
  const randomValue = Math.random();
  
  if (randomValue < 0.6) {
    // 60%の確率で1位の学派から選択
    const topSchool = sortedSchools[0][0];
    selectedPhilosopher = selectPhilosopherBySchool(topSchool);
  } else if (randomValue < 0.85) {
    // 25%の確率で2位の学派から選択
    const secondSchool = sortedSchools[1]?.[0];
    if (secondSchool) {
      selectedPhilosopher = selectPhilosopherBySchool(secondSchool);
    } else {
      selectedPhilosopher = selectPhilosopherBySchool(sortedSchools[0][0]);
    }
  } else {
    // 15%の確率で3位の学派から選択
    const thirdSchool = sortedSchools[2]?.[0];
    if (thirdSchool) {
      selectedPhilosopher = selectPhilosopherBySchool(thirdSchool);
    } else {
      selectedPhilosopher = selectPhilosopherBySchool(sortedSchools[0][0]);
    }
  }
  
  // 学派別の哲学者選択関数
  function selectPhilosopherBySchool(school: string) {
    if (school === 'stoic') {
      const stoicPhilosophers = philosophers.filter(p => p.school === 'ストア派');
      return stoicPhilosophers[Math.floor(Math.random() * stoicPhilosophers.length)] || philosophers[0];
    } else if (school === 'nietzsche') {
      return philosophers.find(p => p.id === 'nietzsche') || philosophers[0];
    } else if (school === 'existential') {
      const existentialPhilosophers = philosophers.filter(p => p.school === '実存主義');
      return existentialPhilosophers[Math.floor(Math.random() * existentialPhilosophers.length)] || philosophers[0];
    } else if (school === 'socrates' || school === 'plato' || school === 'aristotle') {
      const greekPhilosophers = philosophers.filter(p => p.school === '古代ギリシャ');
      return greekPhilosophers[Math.floor(Math.random() * greekPhilosophers.length)] || philosophers[0];
    } else if (school === 'buddhist') {
      return philosophers.find(p => p.id === 'buddha') || philosophers[0];
    } else if (school === 'confucian') {
      return philosophers.find(p => p.id === 'confucius') || philosophers[0];
    } else if (school === 'taoist') {
      const taoistPhilosophers = philosophers.filter(p => p.school === '道教');
      return taoistPhilosophers[Math.floor(Math.random() * taoistPhilosophers.length)] || philosophers[0];
    } else if (school === 'kant') {
      return philosophers.find(p => p.id === 'kant') || philosophers[0];
    } else if (school === 'hegel') {
      return philosophers.find(p => p.id === 'hegel') || philosophers[0];
    } else if (school === 'camus') {
      return philosophers.find(p => p.id === 'camus') || philosophers[0];
    } else if (school === 'heidegger') {
      return philosophers.find(p => p.id === 'heidegger') || philosophers[0];
    }
    return philosophers[0];
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