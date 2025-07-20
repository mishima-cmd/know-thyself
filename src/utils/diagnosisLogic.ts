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
  
  let selectedPhilosopher = philosophers[0]; // デフォルト
  const sortedSchools = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  // --- 追加: 上位3学派のスコア差が2点以内なら均等ランダム ---
  if (sortedSchools.length >= 2) {
    const topScore = sortedSchools[0][1];
    const thirdScore = sortedSchools[2]?.[1] ?? sortedSchools[sortedSchools.length-1][1];
    if (topScore - thirdScore <= 2) {
      // 上位3学派からランダム
      const candidateSchools = sortedSchools.slice(0, 3).map(([school]) => school);
      const randomSchool = candidateSchools[Math.floor(Math.random() * candidateSchools.length)];
      selectedPhilosopher = selectPhilosopherBySchool(randomSchool);
      const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
      return {
        philosopher: selectedPhilosopher,
        scores,
        totalScore
      };
    }
  }

  // 完全ランダム選択の確率を15%に増やす
  const randomValue = Math.random();
  if (randomValue < 0.15) {
    selectedPhilosopher = philosophers[Math.floor(Math.random() * philosophers.length)];
  } else {
    // 残り85%で重み付け選択
    const adjustedRandom = (randomValue - 0.15) / 0.85;
    if (adjustedRandom < 0.35) {
      const topSchool = sortedSchools[0][0];
      selectedPhilosopher = selectPhilosopherBySchool(topSchool);
    } else if (adjustedRandom < 0.60) {
      const secondSchool = sortedSchools[1]?.[0];
      if (secondSchool) {
        selectedPhilosopher = selectPhilosopherBySchool(secondSchool);
      } else {
        selectedPhilosopher = selectPhilosopherBySchool(sortedSchools[0][0]);
      }
    } else if (adjustedRandom < 0.80) {
      const thirdSchool = sortedSchools[2]?.[0];
      if (thirdSchool) {
        selectedPhilosopher = selectPhilosopherBySchool(thirdSchool);
      } else {
        selectedPhilosopher = selectPhilosopherBySchool(sortedSchools[0][0]);
      }
    } else if (adjustedRandom < 0.95) {
      const fourthSchool = sortedSchools[3]?.[0];
      if (fourthSchool) {
        selectedPhilosopher = selectPhilosopherBySchool(fourthSchool);
      } else {
        selectedPhilosopher = selectPhilosopherBySchool(sortedSchools[0][0]);
      }
    } else {
      const fifthSchool = sortedSchools[4]?.[0];
      if (fifthSchool) {
        selectedPhilosopher = selectPhilosopherBySchool(fifthSchool);
      } else {
        selectedPhilosopher = selectPhilosopherBySchool(sortedSchools[0][0]);
      }
    }
  }

  function selectPhilosopherBySchool(school: string) {
    const schoolPhilosophers = philosophers.filter(p => {
      if (school === 'stoic') return p.school === 'ストア派';
      if (school === 'nietzsche') return p.id === 'nietzsche';
      if (school === 'existential') return p.school === '実存主義';
      if (school === 'socrates' || school === 'plato' || school === 'aristotle') return p.school === '古代ギリシャ';
      if (school === 'confucian') return p.id === 'confucius';
      if (school === 'kant') return p.id === 'kant';
      if (school === 'hegel') return p.id === 'hegel';
      if (school === 'camus') return p.id === 'camus';
      if (school === 'heidegger') return p.id === 'heidegger';
      return false;
    });
    if (schoolPhilosophers.length > 0) {
      return schoolPhilosophers[Math.floor(Math.random() * schoolPhilosophers.length)];
    }
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