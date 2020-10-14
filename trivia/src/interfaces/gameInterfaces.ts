export interface Question {
    question: string;
    options: string[];
    answer: string;
    worth: number;
}

export interface QuestionList {
    category: string;
    questions: Question[];
}

export interface RootInput {
    questionsList: QuestionList[];
}

export interface Player{
    name: string;
    score: number;
}