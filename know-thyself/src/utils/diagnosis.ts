import { DiagnosisResult, DiagnosisState, PhilosophyCategory, Question, QuestionOption } from '@/types';
import { philosophers } from '@/data/philosophers';
import { questions } from '@/data/questions';

export function calculateDiagnosis(answers: Record<number, string>): DiagnosisResult {
  const categoryScores: Record<PhilosophyCategory, number> = {
    stoicism: 0,
    existentialism: 0,
    nihilism: 0,
    eastern: 0,
    individualism: 0,
    ancient_greek: 0,
  };

  // 各回答のスコアを計算
  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (!question) return;

    const option = question.options.find(opt => opt.id === answerId);
    if (!option) return;

    // 各カテゴリにポイントを加算
    option.scores.forEach(score => {
      categoryScores[score.category] += score.points;
    });
  });

  // 最も高いスコアのカテゴリを特定
  const topCategory = Object.entries(categoryScores).reduce((a, b) => 
    categoryScores[a[0] as PhilosophyCategory] > categoryScores[b[0] as PhilosophyCategory] ? a : b
  )[0] as PhilosophyCategory;

  // そのカテゴリの哲学者をランダムに選択
  const categoryPhilosophers = philosophers.filter(p => p.category === topCategory);
  const selectedPhilosopher = categoryPhilosophers[Math.floor(Math.random() * categoryPhilosophers.length)];

  const totalScore = Object.values(categoryScores).reduce((sum, score) => sum + score, 0);

  return {
    philosopher: selectedPhilosopher,
    category: topCategory,
    totalScore,
    categoryScores,
  };
}

export function getCategoryName(category: PhilosophyCategory): string {
  const categoryNames: Record<PhilosophyCategory, string> = {
    stoicism: 'ストア派',
    existentialism: '実存主義',
    nihilism: 'ニヒリズム',
    eastern: '東洋思想',
    individualism: '個人主義',
    ancient_greek: '古代ギリシャ',
  };
  return categoryNames[category];
}

export function getCategoryDescription(category: PhilosophyCategory): string {
  const descriptions: Record<PhilosophyCategory, string> = {
    stoicism: '内面の平静と理性を重視し、変えられないことを受け入れる知恵を説く思想',
    existentialism: '人間の自由と責任を強調し、人生の意味は自分で作るものだと考える思想',
    nihilism: '既存の価値観や意味を疑い、新しい価値の創造を求める思想',
    eastern: '自然との調和を重視し、無為自然や執着を捨てることを説く思想',
    individualism: '個人の意志と創造性を重視し、既存の価値観を超えることを求める思想',
    ancient_greek: '知恵の追求と社会の調和を重視し、真理を探求することを説く思想',
  };
  return descriptions[category];
} 