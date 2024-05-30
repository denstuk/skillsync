export interface QuizSection {
  question: string;
  choices: string[];
  correctAnswer: string;
}

export interface Quiz {
  sections: QuizSection[];
}
