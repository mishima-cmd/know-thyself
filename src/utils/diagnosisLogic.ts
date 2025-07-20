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
  
  // より公平な選択ロジック
  let selectedPhilosopher = philosophers[0]; // デフォルト
  
  // 上位5つの学派を取得（より多くの候補から選択）
  const sortedSchools = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);
  
  // 完全ランダム選択の確率を追加
  const randomValue = Math.random();
  
  // 10%の確率で完全ランダム選択
  if (randomValue < 0.10) {
    selectedPhilosopher = philosophers[Math.floor(Math.random() * philosophers.length)];
  } else {
    // 残り90%で重み付け選択
    const adjustedRandom = (randomValue - 0.10) / 0.90; // 0-1の範囲に正規化
    
    if (adjustedRandom < 0.35) {
      // 35%の確率で1位の学派から選択
      const topSchool = sortedSchools[0][0];
      selectedPhilosopher = selectPhilosopherBySchool(topSchool);
    } else if (adjustedRandom < 0.60) {
      // 25%の確率で2位の学派から選択
      const secondSchool = sortedSchools[1]?.[0];
      if (secondSchool) {
        selectedPhilosopher = selectPhilosopherBySchool(secondSchool);
      } else {
        selectedPhilosopher = selectPhilosopherBySchool(sortedSchools[0][0]);
      }
    } else if (adjustedRandom < 0.80) {
      // 20%の確率で3位の学派から選択
      const thirdSchool = sortedSchools[2]?.[0];
      if (thirdSchool) {
        selectedPhilosopher = selectPhilosopherBySchool(thirdSchool);
      } else {
        selectedPhilosopher = selectPhilosopherBySchool(sortedSchools[0][0]);
      }
    } else if (adjustedRandom < 0.95) {
      // 15%の確率で4位の学派から選択
      const fourthSchool = sortedSchools[3]?.[0];
      if (fourthSchool) {
        selectedPhilosopher = selectPhilosopherBySchool(fourthSchool);
      } else {
        selectedPhilosopher = selectPhilosopherBySchool(sortedSchools[0][0]);
      }
    } else {
      // 5%の確率で5位の学派から選択（完全ランダム性）
      const fifthSchool = sortedSchools[4]?.[0];
      if (fifthSchool) {
        selectedPhilosopher = selectPhilosopherBySchool(fifthSchool);
      } else {
        selectedPhilosopher = selectPhilosopherBySchool(sortedSchools[0][0]);
      }
    }
  }
  
  // 学派別の哲学者選択関数（より公平な選択）
  function selectPhilosopherBySchool(school: string) {
    const schoolPhilosophers = philosophers.filter(p => {
      if (school === 'stoic') return p.school === 'ストア派';
      if (school === 'nietzsche') return p.id === 'nietzsche';
      if (school === 'existential') return p.school === '実存主義';
      if (school === 'socrates' || school === 'plato' || school === 'aristotle') return p.school === '古代ギリシャ';
      if (school === 'buddhist') return p.id === 'buddha';
      if (school === 'confucian') return p.id === 'confucius';
      if (school === 'taoist') return p.school === '道教';
      if (school === 'kant') return p.id === 'kant';
      if (school === 'hegel') return p.id === 'hegel';
      if (school === 'camus') return p.id === 'camus';
      if (school === 'heidegger') return p.id === 'heidegger';
      return false;
    });
    
    if (schoolPhilosophers.length > 0) {
      // 完全ランダム選択
      return schoolPhilosophers[Math.floor(Math.random() * schoolPhilosophers.length)];
    }
    
    // フォールバック: 全哲学者からランダム選択
    return philosophers[Math.floor(Math.random() * philosophers.length)];
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