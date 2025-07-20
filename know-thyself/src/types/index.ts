export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  id: string;
  text: string;
  scores: Score[];
}

export interface Score {
  category: PhilosophyCategory;
  points: number;
}

export type PhilosophyCategory = 
  | 'stoicism'
  | 'existentialism'
  | 'nihilism'
  | 'eastern'
  | 'individualism'
  | 'ancient_greek';

export interface Philosopher {
  id: string;
  name: string;
  category: PhilosophyCategory;
  quote: string;
  description: string;
  book: {
    title: string;
    description: string;
    amazonUrl?: string;
  };
  imageUrl?: string;
}

export interface DiagnosisResult {
  philosopher: Philosopher;
  category: PhilosophyCategory;
  totalScore: number;
  categoryScores: Record<PhilosophyCategory, number>;
}

export interface DiagnosisState {
  currentQuestionIndex: number;
  answers: Record<number, string>;
  isComplete: boolean;
  result?: DiagnosisResult;
} 